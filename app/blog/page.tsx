"use client";


interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tagColor: string;
}

export default function Blog() {
  const featuredPost = {
    title: "Unlocking CSS-First Config in Tailwind CSS v4",
    excerpt: "Explore the details of Tailwind v4's direct CSS configurations. We break down the removal of tailwind.config.js, custom @theme directives, and how to optimize your builds in Next.js 16.",
    date: "June 08, 2026",
    readTime: "6 min read",
    category: "Development",
    tagColor: "text-accent-cyan bg-accent-cyan/10",
  };

  const posts: BlogPost[] = [
    {
      id: "react-19-canaries",
      title: "React 19 Actions and Client-Side State Hooks",
      excerpt: "Deep dive into using compiler-friendly transitions and the useActionState hooks to manage background task workflows asynchronously.",
      date: "May 29, 2026",
      readTime: "4 min read",
      category: "React Framework",
      tagColor: "text-accent-indigo bg-accent-indigo/10",
    },
    {
      id: "browser-gaming-performance",
      title: "Optimizing 2D Canvas Games for Ultra-Low Latency",
      excerpt: "Technical patterns and game-loop standards using requestAnimationFrame, sound buffer caching, and offscreen canvas renderings.",
      date: "May 18, 2026",
      readTime: "8 min read",
      category: "Gaming Tech",
      tagColor: "text-accent-purple bg-accent-purple/10",
    },
    {
      id: "glassmorphic-design-trends",
      title: "Sleek Glassmorphic Interfaces for SaaS Dashboards",
      excerpt: "Design systems workflow demonstrating backdrop filters, color blending modes, and dynamic border lighting for web modules.",
      date: "May 04, 2026",
      readTime: "5 min read",
      category: "Design System",
      tagColor: "text-accent-cyan bg-accent-cyan/10",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          1xPlay <span className="bg-gradient-to-r from-accent-cyan to-accent-indigo bg-clip-text text-transparent">Chronicles</span>
        </h1>
        <p className="mt-4 text-base text-white/50">
          Stay updated with deep engineering articles, game mechanics blueprints, and front-end layout strategies.
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-16">
        <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-[#041220]/40 p-8 lg:p-12 hover:border-white/10 transition-all group">
          {/* Neon Glow element */}
          <div className="absolute right-0 top-0 -z-10 h-72 w-72 bg-accent-cyan/5 blur-[100px] pointer-events-none" />

          <div className="flex flex-wrap items-center gap-4 text-xs mb-6">
            <span className={`font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${featuredPost.tagColor}`}>
              {featuredPost.category}
            </span>
            <span className="text-white/40">{featuredPost.date}</span>
            <span className="text-white/25">â€¢</span>
            <span className="text-white/40">{featuredPost.readTime}</span>
          </div>

          <h2 className="text-2xl font-extrabold text-white sm:text-4xl group-hover:text-accent-cyan transition-colors max-w-3xl">
            {featuredPost.title}
          </h2>
          <p className="mt-4 text-base text-white/50 leading-relaxed max-w-4xl">
            {featuredPost.excerpt}
          </p>

          <div className="mt-8">
            <button
              onClick={() => alert(`Opening article: "${featuredPost.title}"`)}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-indigo px-5 py-3 text-sm font-bold text-black shadow-md transition-all hover:scale-105"
            >
              Read Article
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Grid List */}
      <div>
        <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="h-1.5 w-6 rounded-full bg-accent-indigo" />
          Recent Articles
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="glass-panel-interactive rounded-2xl p-6 flex flex-col justify-between border border-white/5"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
                  <span className={`font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${post.tagColor}`}>
                    {post.category}
                  </span>
                  <span className="text-white/40">{post.date}</span>
                </div>

                <h4 className="text-lg font-bold text-white mb-3 hover:text-accent-cyan transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-sm text-white/50 leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span className="text-xs text-white/40">{post.readTime}</span>
                <button
                  onClick={() => alert(`Opening article: "${post.title}"`)}
                  className="text-xs font-bold text-accent-cyan hover:underline"
                >
                  Read &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
