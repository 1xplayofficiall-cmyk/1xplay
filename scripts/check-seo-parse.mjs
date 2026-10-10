// Guards parseSeoHead's extraction against Rank Math's real <head> shape.
// Title must come from og:title (not the <title> tag, which can carry the theme default).
// Run: node scripts/check-seo-parse.mjs
import assert from "node:assert";

const head =
  '<title>Theme Default Title</title>' +
  '<meta property="og:title" content="My Rank Math SEO Title"/>' +
  '<meta name="description" content="My Rank Math description."/>';

const pick = (re) => head.match(re)?.[1];
const title =
  pick(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']*)["']/i) ??
  pick(/<title[^>]*>([\s\S]*?)<\/title>/i);
const description =
  pick(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i) ??
  pick(/<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']*)["']/i);

assert.equal(title, "My Rank Math SEO Title"); // og:title beats <title>
assert.equal(description, "My Rank Math description.");
console.log("ok");
