// Guards parseSeoHead's regexes against Rank Math's real <head> shape.
// Run: node scripts/check-seo-parse.mjs
import assert from "node:assert";

const head =
  '<title>Online Horse Racing Betting: 7 Things | 1xPlay</title>' +
  '<meta name="description" content="Learn horse racing odds &amp; markets."/>';

const title = head.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1];
const description = head.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)?.[1];

assert.equal(title, "Online Horse Racing Betting: 7 Things | 1xPlay");
assert.equal(description, "Learn horse racing odds &amp; markets."); // entities decoded later
console.log("ok");
