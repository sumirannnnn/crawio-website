import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock } from "@phosphor-icons/react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { posts } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — Crawio` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:image", content: loaderData.post.cover },
        ]
      : [{ title: "Article — Crawio" }],
  }),
  notFoundComponent: () => (
    <Layout>
      <div className="pt-48 pb-32 text-center">
        <h1 className="text-3xl">Article not found</h1>
        <Link to="/blog" className="neu-btn mt-8 inline-flex">Back to blog</Link>
      </div>
    </Layout>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { post } = Route.useLoaderData();
  return (
    <Layout>
      <article className="pt-36 lg:pt-44 pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-white transition">
            <ArrowLeft size={14} weight="light" /> All articles
          </Link>
          <Reveal>
            <div className="mt-8 flex items-center gap-4 text-xs text-white/45">
              <span>{post.date}</span>
              <span className="inline-flex items-center gap-1.5"><Clock size={12} weight="light" />{post.readTime}</span>
            </div>
            <h1 className="mt-5 text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              {post.title}
            </h1>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">{post.excerpt}</p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 max-w-5xl mx-auto px-6 lg:px-10">
            <div className="rounded-2xl overflow-hidden glass-strong">
              <img src={post.cover} alt={post.title} width={1200} height={800} className="w-full h-auto" />
            </div>
          </div>
        </Reveal>

        <div className="mt-14 max-w-3xl mx-auto px-6 lg:px-10 space-y-6 text-lg leading-[1.75] text-white/75 font-light">
          {post.content.map((para: string, i: number) => (
            <Reveal key={i} delay={i * 0.04}>
              <p>{para}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto px-6 lg:px-10">
          <div className="glass-strong rounded-2xl p-8 lg:p-10 text-center">
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#FF4500]">Ready to start?</p>
            <h3 className="mt-4 text-3xl tracking-tight">Book your free strategy call.</h3>
            <a href="https://calendly.com/sumirawat40/30min" target="_blank" rel="noreferrer" className="neu-btn neu-btn-primary mt-6">Book Free Call</a>
          </div>
        </div>
      </article>
    </Layout>
  );
}
