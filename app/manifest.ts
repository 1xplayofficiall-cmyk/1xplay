import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "1xPlay — Online Casino & Cricket Betting in India",
    short_name: "1xPlay",
    description:
      "Play online casino games, cricket betting, live sports, and mobile gaming at 1xPlay.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#080A0E",
    theme_color: "#0078E5",
    orientation: "portrait-primary",
    categories: ["games", "entertainment", "sports"],
    icons: [
      { src: "/1xplay.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/1xplay.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/1xplay.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: "/1xplay.webp", sizes: "any", type: "image/webp" },
    ],
  };
}
