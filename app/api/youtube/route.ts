import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export type YouTubeVideo = {
  id: string;
  title: string;
  thumbnail: string;
  channelTitle: string;
  publishedAt: string;
  live: boolean;
};

const MOCK_VIDEOS: YouTubeVideo[] = [
  {
    id: "INDAUSLiveT20",
    title: "IND vs AUS T20 – Live Match Centre & Ball-by-Ball",
    thumbnail: "https://img.youtube.com/vi/8kZg_ALxFx0/hqdefault.jpg",
    channelTitle: "Cricket Live Stream",
    publishedAt: new Date().toISOString(),
    live: true,
  },
  {
    id: "MIvCSK2026",
    title: "IPL 2026: MI vs CSK – Full Match Highlights",
    thumbnail: "https://img.youtube.com/vi/JGwWNGJdvx8/hqdefault.jpg",
    channelTitle: "IPL Official",
    publishedAt: new Date(Date.now() - 86400000).toISOString(),
    live: false,
  },
  {
    id: "ENGPAKHighlights",
    title: "ENG vs PAK – 2nd ODI Best Moments & Highlights",
    thumbnail: "https://img.youtube.com/vi/fLexgOxsZu0/hqdefault.jpg",
    channelTitle: "Cricket Highlights HD",
    publishedAt: new Date(Date.now() - 172800000).toISOString(),
    live: false,
  },
  {
    id: "cricket_best_catches",
    title: "Top 10 Cricket Catches of the Season",
    thumbnail: "https://img.youtube.com/vi/OPf0YbXqDm0/hqdefault.jpg",
    channelTitle: "Cricket Vault",
    publishedAt: new Date(Date.now() - 259200000).toISOString(),
    live: false,
  },
  {
    id: "mock-t20-world-cup",
    title: "T20 World Cup – Super Over Thriller Highlights",
    thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/hqdefault.jpg",
    channelTitle: "ICC Cricket",
    publishedAt: new Date(Date.now() - 345600000).toISOString(),
    live: false,
  },
  {
    id: "mock-ipl-final",
    title: "IPL Final – Last Over Finish | Extended Highlights",
    thumbnail: "https://img.youtube.com/vi/60ItHLz5WEA/hqdefault.jpg",
    channelTitle: "Star Sports",
    publishedAt: new Date(Date.now() - 432000000).toISOString(),
    live: false,
  },
];

// Global cache variables
let cachedVideos: YouTubeVideo[] | null = null;
let lastFetched = 0;
const CACHE_DURATION_MS = 3600000; // 1 hour caching to protect Youtube API quota (10,000 units/day)

// Always fetch the maximum so the cached list can satisfy any `limit`,
// regardless of which request happened to populate the cache.
const MAX_RESULTS = 25;

type YouTubeSearchItem = {
  id: { videoId: string };
  snippet: {
    title?: string;
    thumbnails?: { medium?: { url?: string }; high?: { url?: string } };
    channelTitle?: string;
    publishedAt?: string;
    liveBroadcastContent?: string;
  };
};

function parseLimit(raw: string | null) {
  const parsed = Number.parseInt(raw || "12", 10);
  if (Number.isNaN(parsed)) return 12;
  return Math.min(Math.max(parsed, 1), MAX_RESULTS);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = parseLimit(searchParams.get("limit"));
  const apiKey = process.env.YOUTUBE_API_KEY;

  // If no API key configured, return mock data
  if (!apiKey || apiKey === "YOUR_YOUTUBE_API_KEY" || apiKey.trim() === "") {
    return NextResponse.json({
      success: true,
      simulated: true,
      videos: MOCK_VIDEOS.slice(0, limit),
      message: "Showing fallback data. Set YOUTUBE_API_KEY in environment variables to fetch live YouTube feeds.",
    });
  }

  // Handle caching
  const now = Date.now();
  if (cachedVideos && now - lastFetched < CACHE_DURATION_MS) {
    return NextResponse.json({
      success: true,
      simulated: false,
      cached: true,
      videos: cachedVideos.slice(0, limit),
    });
  }

  try {
    // Search query optimized to find live matches and recent highlights
    const searchQuery = encodeURIComponent("cricket match highlights live");
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&type=video&key=${apiKey}&maxResults=${MAX_RESULTS}&order=date`;

    const res = await fetch(url, {
      next: { revalidate: 1800 } // Next.js level fetch cache (30 minutes)
    });

    if (!res.ok) {
      throw new Error(`YouTube API returned status ${res.status}`);
    }

    const data = await res.json();

    if (!data.items || data.items.length === 0) {
      throw new Error("No video items returned by YouTube API");
    }

    const processedVideos: YouTubeVideo[] = data.items.map((item: YouTubeSearchItem) => {
      // Decode HTML entities commonly returned in YouTube titles
      let title = item.snippet.title || "Cricket Video";
      title = title
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");

      return {
        id: item.id.videoId,
        title,
        thumbnail: item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.high?.url || "",
        channelTitle: item.snippet.channelTitle || "YouTube Creator",
        publishedAt: item.snippet.publishedAt || "",
        live: item.snippet.liveBroadcastContent === "live"
      };
    });

    cachedVideos = processedVideos;
    lastFetched = now;

    return NextResponse.json({
      success: true,
      simulated: false,
      videos: processedVideos.slice(0, limit),
    });
  } catch (error: unknown) {
    console.error("Error fetching YouTube videos:", error);
    const message = error instanceof Error ? error.message : "Failed to fetch YouTube feeds";

    // Serve mock matches as a robust fallback
    return NextResponse.json({
      success: true,
      simulated: true,
      error: message,
      videos: MOCK_VIDEOS.slice(0, limit),
      message: "Fell back to mock cricket videos due to API connection error.",
    });
  }
}
