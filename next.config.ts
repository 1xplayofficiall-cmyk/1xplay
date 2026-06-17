import type { NextConfig } from "next";

// Set STATIC_EXPORT=true to produce a fully static site in `out/` for shared
// hosting (e.g. Hostinger File Manager). The live API routes are pre-rendered
// to their simulated data, images are served unoptimized, and routes are
// emitted as folders (trailingSlash) so Apache serves them without rewrites.
const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export",
        trailingSlash: true,
        images: { unoptimized: true },
        experimental: {
          workerThreads: false,
          cpus: 1,
        },
      }
    : {
        async redirects() {
          return [
            {
              // Old misspelled affiliate URL, kept in case it was already indexed/linked
              source: "/affilate",
              destination: "/affiliate",
              permanent: true,
            },
          ];
        },
        images: {
          remotePatterns: [
            { protocol: "https", hostname: "lh3.googleusercontent.com" },
            { protocol: "https", hostname: "contribution.usercontent.google.com" },
            { protocol: "https", hostname: "img.youtube.com" },
            { protocol: "https", hostname: "i.ytimg.com" },
          ],
        },
      }),
};

export default nextConfig;
