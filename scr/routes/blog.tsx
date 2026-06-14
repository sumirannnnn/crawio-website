import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "@phosphor-icons/react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { posts } from "@/data/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Crawio" },
      { name: "description", content: "Essays on premium web design, conversion, and helping ambitious businesses grow online." },
      { property: "og:title", content: "Blog — Crawio" },
      { property: "og:description", content: "Essays on web design, conversion and growth." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <Layout>
      <section className="pt-36 lg:pt-48 pb-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-[11px] tracking-[0.25em] uppercase text-white/40">Journal</p>
            <h1 className="mt-4 text-5xl lg:text-7xl tracking-tight leading-[1] text-balance max-w-3xl">
              Notes on design, growth, <span className="italic font-extralight text-[#FF4500]">and craft.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-6 lg:gap-8">
          {posts.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 2) * 0.08, duration: 0.8 }}
              className="group glass overflow-hidden hover:border-[#FF4500]/30 transition"
            >
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="block">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.cover} alt={p.title} loading="lazy" width={1200} height={800} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                </div>
                <div className="p-7 lg:p-9">
                  <div className="flex items-center gap-4 text-xs text-white/45">
                    <span>{p.date}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock size={12} weight="light" />{p.readTime}</span>
                  </div>
                  <h2 className="mt-4 text-2xl lg:text-3xl tracking-tight leading-tight">{p.title}</h2>
                  <p className="mt-3 text-sm text-white/55 leading-relaxed line-clamp-2">{p.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm text-[#FF4500]">
                    Read article <ArrowUpRight size={14} weight="light" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
