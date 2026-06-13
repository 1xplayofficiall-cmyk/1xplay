"use client";

import { usePathname } from "next/navigation";
import { seoPages, webPageSchema, breadcrumbSchema, type SeoPath } from "../seo";

/**
 * Per-route JSON-LD (WebPage + BreadcrumbList). Reads the current pathname and
 * looks it up in the SEO registry, so a single instance in the root layout
 * covers every known page. SSR'd by Next, so the markup is in the initial HTML.
 */
export default function BreadcrumbJsonLd() {
  const pathname = usePathname() || "/";
  const path = (seoPages as Record<string, unknown>)[pathname] ? (pathname as SeoPath) : null;
  if (!path) return null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(path)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(path)) }}
      />
    </>
  );
}
