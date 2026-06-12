import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type CricApiScore = { r: number; w: number; o: number; inning?: string };
type CricApiTeamInfo = { name?: string; shortname?: string; img?: string };
type CricApiMatch = {
  id: string;
  name: string;
  matchType?: string;
  status?: string;
  venue?: string;
  date?: string;
  matchEnded?: boolean;
  teams?: string[];
  teamInfo?: CricApiTeamInfo[];
  score?: CricApiScore[];
};
type MappedMatch = ReturnType<typeof mapCricApiMatch>;

let cachedData: MappedMatch[] | null = null;
let lastFetched = 0;
const CACHE_DURATION_MS = 90000;

function mapCricApiMatch(match: CricApiMatch) {
  const teams = match.teamInfo || [
    { name: match.teams?.[0] || "Team A", shortname: (match.teams?.[0] || "TMA").substring(0, 3).toUpperCase(), img: "" },
    { name: match.teams?.[1] || "Team B", shortname: (match.teams?.[1] || "TMB").substring(0, 3).toUpperCase(), img: "" }
  ];
  

  
  const score1 = match.score?.[0];
  const score2 = match.score?.[1];

  return {
    id: match.id,
    name: match.name,
    matchType: match.matchType?.toUpperCase() || "T20",
    status: match.status || "Match in Progress",
    venue: match.venue || "Stadium",
    date: match.date || "",
    live: !match.matchEnded,
    teams: [
      {
        name: teams[0]?.name || "Team 1",
        short: teams[0]?.shortname || "T1",
        logo: teams[0]?.img || "",
        score: score1 ? `${score1.r}/${score1.w}` : "",
        overs: score1 ? score1.o : 0,
      },
      {
        name: teams[1]?.name || "Team 2",
        short: teams[1]?.shortname || "T2",
        logo: teams[1]?.img || "",
        score: score2 ? `${score2.r}/${score2.w}` : "",
        overs: score2 ? score2.o : 0,
      }
    ],
    // Dynamic odds representation for interactive bets
    odds: {
      team1: 1.95,
      team2: 1.85,
    }
  };
}

// Initial mock data to return when no API key is set or as a robust fallback

const MOCK_MATCHES = [
  {
    id: "mock-match-1",
    name: "Mumbai Indians vs Chennai Super Kings",
    matchType: "IPL 2026",
    status: "MI needs 32 runs in 18 balls",
    venue: "Wankhede Stadium, Mumbai",
    date: "2026-06-12",
    live: true,
    teams: [
      {
        name: "Mumbai Indians",
        short: "MI",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/150px-Mumbai_Indians_Logo.svg.png",
        score: "145/6",
        overs: 17.0,
      },
      {
        name: "Chennai Super Kings",
        short: "CSK",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/150px-Chennai_Super_Kings_Logo.svg.png",
        score: "176/4",
        overs: 20.0,
      }
    ],
    odds: {
      team1: 2.34,
      team2: 1.58,
    }
  },
  {
    id: "mock-match-2",
    name: "India vs Australia",
    matchType: "T20 INTERNATIONAL",
    status: "Australia chose to bat first",
    venue: "Melbourne Cricket Ground, Melbourne",
    date: "2026-06-12",
    live: true,
    teams: [
      {
        name: "India",
        short: "IND",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/BCCI_logo.svg/150px-BCCI_logo.svg.png",
        score: "0/0",
        overs: 0.0,
      },
      {
        name: "Australia",
        short: "AUS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Cricket_Australia_logo.svg/150px-Cricket_Australia_logo.svg.png",
        score: "48/1",
        overs: 5.2,
      }
    ],
    odds: {
      team1: 1.72,
      team2: 2.10,
    }
  },
  {
    id: "mock-match-3",
    name: "England vs Pakistan",
    matchType: "ODI SERIES",
    status: "England won by 5 wickets",
    venue: "Lord's, London",
    date: "2026-06-11",
    live: false,
    teams: [
      {
        name: "England",
        short: "ENG",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/England_Cricket_team_logo.svg/150px-England_Cricket_team_logo.svg.png",
        score: "246/5",
        overs: 44.2,
      },
      {
        name: "Pakistan",
        short: "PAK",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Pakistan_Cricket_Board_Logo.svg/150px-Pakistan_Cricket_Board_Logo.svg.png",
        score: "242/10",
        overs: 48.5,
      }
    ],
    odds: {
      team1: 1.0,
      team2: 12.0,
    }
  }
];

export async function GET() {
  const apiKey = process.env.CRICKET_API_KEY;

  // If api key is not set, return simulated match data
  if (!apiKey || apiKey === "YOUR_API_KEY" || apiKey.trim() === "") {
    return NextResponse.json({
      success: true,
      simulated: true,
      matches: MOCK_MATCHES,
      message: "Showing simulated data. Set CRICKET_API_KEY in environment variables to fetch live API data."
    });
  }

  // Handle in-memory caching to save daily quota
  const now = Date.now();
  if (cachedData && (now - lastFetched < CACHE_DURATION_MS)) {
    return NextResponse.json({
      success: true,
      simulated: false,
      cached: true,
      matches: cachedData
    });
  }

  try {
    const res = await fetch(`https://api.cricapi.com/v1/currentMatches?apikey=${apiKey}&offset=0`, {
      next: { revalidate: 60 } // Next.js cache layer too
    });

    if (!res.ok) {
      throw new Error(`Cricket API returned status: ${res.status}`);
    }

    const json = await res.json();

    if (json.status !== "success" || !json.data) {
      throw new Error(json.reason || "Invalid status returned by CricAPI");
    }

    // Process matches
    const rawMatches = json.data || [];
    
    // Take up to 5 current matches to not overwhelm the widget
    const processedMatches = rawMatches.slice(0, 5).map((match: CricApiMatch) => {
      const mapped = mapCricApiMatch(match);
      
      // Calculate realistic betting odds based on scores
      if (mapped.live) {
        // Simple heuristic odds calculation
        const team1Runs = parseInt(mapped.teams[0].score.split("/")[0]) || 0;
        const team2Runs = parseInt(mapped.teams[1].score.split("/")[0]) || 0;
        const diff = team1Runs - team2Runs;
        if (diff > 20) {
          mapped.odds.team1 = 1.45;
          mapped.odds.team2 = 2.65;
        } else if (diff < -20) {
          mapped.odds.team1 = 2.65;
          mapped.odds.team2 = 1.45;
        } else {
          mapped.odds.team1 = 1.88;
          mapped.odds.team2 = 1.92;
        }
      }
      return mapped;
    });

    cachedData = processedMatches.length > 0 ? processedMatches : MOCK_MATCHES;
    lastFetched = now;

    return NextResponse.json({
      success: true,
      simulated: processedMatches.length === 0,
      matches: cachedData
    });
  } catch (error: unknown) {
    console.error("Error fetching live cricket matches:", error);

    // Fallback to mock matches in case of API failure, indicating error status
    return NextResponse.json({
      success: true,
      simulated: true,
      error: error instanceof Error ? error.message : "Failed to fetch live scores",
      matches: MOCK_MATCHES,
      message: "Failed to fetch real-time data; fell back to simulated matches."
    });
  }
}
