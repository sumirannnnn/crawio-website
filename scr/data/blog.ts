import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";
import b4 from "@/assets/blog-4.jpg";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  cover: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "5-reasons-your-business-needs-a-website-in-2026",
    title: "5 Reasons Your Business Needs a Website in 2026",
    excerpt: "In an AI-first world, your website is no longer optional — it's your most important salesperson, working 24/7.",
    date: "Jun 02, 2026",
    readTime: "6 min read",
    cover: b1,
    content: [
      "In 2026, a business without a website is invisible. Social profiles change algorithms, marketplaces take a cut of every sale, and AI search assistants quote real websites — not Instagram bios.",
      "1. Trust. 81% of buyers research a business online before contacting them. No site, no trust.",
      "2. Owned audience. Your website is the only marketing asset you actually own. Algorithms can't bury it.",
      "3. AI discoverability. ChatGPT, Perplexity and Gemini cite indexed websites. If you aren't there, you're invisible to the next generation of search.",
      "4. Conversion. A landing page tailored to one outcome outperforms any social post — sometimes 10×.",
      "5. Leverage. While you sleep, a great website books calls, takes orders, and qualifies leads. It pays for itself in weeks.",
      "Bottom line: in 2026 your website isn't a brochure — it's infrastructure. Treat it like the most important hire you'll ever make.",
    ],
  },
  {
    slug: "how-a-good-website-can-double-your-revenue",
    title: "How a Good Website Can Double Your Revenue",
    excerpt: "Most websites leak money. A handful of design decisions can take you from 1% to 4% conversion — that's a doubling without a single new visitor.",
    date: "May 18, 2026",
    readTime: "8 min read",
    cover: b2,
    content: [
      "We've audited over 200 small-business websites in the last three years. The same five mistakes show up almost every time, and fixing them often doubles revenue without spending a dollar more on ads.",
      "Mistake 1 — Unclear value proposition above the fold. You have 3 seconds to tell visitors what you do and who it's for. Most sites take 30.",
      "Mistake 2 — No single primary CTA. When everything is important, nothing is. Pick one action per page.",
      "Mistake 3 — Slow load times. Every extra second of load time cuts conversions by ~7%.",
      "Mistake 4 — No social proof at the decision points. Testimonials at the bottom don't help. Place them next to the buy button.",
      "Mistake 5 — Friction in the form. Every field you remove lifts submissions 5–10%. Ask only what you truly need.",
      "Fix these five and you'll convert more of the traffic you already have. That's the closest thing to free money in business.",
    ],
  },
  {
    slug: "web-design-trends-that-actually-convert-clients",
    title: "Web Design Trends That Actually Convert Clients",
    excerpt: "Every year brings new visual fads. Here are the trends in 2026 that aren't just pretty — they actually move the needle.",
    date: "Apr 29, 2026",
    readTime: "5 min read",
    cover: b3,
    content: [
      "Trend ≠ gimmick. The trends below have one thing in common: real, measurable lift in conversion or engagement.",
      "Editorial typography. Big, confident headlines with tight letter-spacing communicate authority. Premium brands lean into it. Cheap brands run away from it.",
      "Glass + dark mode. Glassmorphic UI on deep black backgrounds reads as high-end software. It signals 'serious tool' instantly.",
      "Bento grids. They let you communicate five things in one screen without the user scrolling. Apple uses them for a reason.",
      "Micro-interactions on CTAs. A subtle glow on hover lifts click-through by up to 22% in our tests.",
      "Real product photography. Stock photos kill credibility. Spend on one good shoot — it'll outlast three website redesigns.",
    ],
  },
  {
    slug: "why-indian-businesses-are-going-global-with-better-websites",
    title: "Why Indian Businesses Are Going Global With Better Websites",
    excerpt: "Founders from Bangalore to Mumbai are landing US, UK and EU clients — not because they're cheaper, but because their websites finally look the part.",
    date: "Apr 11, 2026",
    readTime: "7 min read",
    cover: b4,
    content: [
      "For a decade, Indian agencies and product companies competed on price. In 2026, the winners compete on perception — and the website is exhibit A.",
      "A polished, premium website removes the last objection a Western buyer has: 'is this team operating at our level?' When the answer is visually obvious, deals close faster.",
      "Three founders we worked with last year reported the same pattern: same outbound, same offer, new website — and US/UK reply rates jumped 3–6×.",
      "What changed? Confident typography. Dark, restrained palettes. Case studies framed around results, not deliverables. Founder bios that lead with credibility.",
      "Geography is no longer an excuse. A great website is the cheapest passport an Indian business can buy.",
    ],
  },
];
