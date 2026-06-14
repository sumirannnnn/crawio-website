import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { projects, categories } from "@/data/portfolio";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Crawio" },
      { name: "description", content: "Selected work from Crawio Studio: luxury websites built for restaurants, e-commerce, real estate, healthcare, fashion and local businesses." },
      { property: "og:title", content: "Portfolio — Crawio" },
      { property: "og:description", content: "Selected work from Crawio Studio." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [active, setActive] = useState<typeof categories[number]>("All");
  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <Layout>
      <section className="pt-36 lg:pt-48 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-[11px] tracking-[0.25em] uppercase text-white/40">Portfolio</p>
            <h1 className="mt-4 text-5xl lg:text-7xl tracking-tight leading-[1] max-w-3xl">
              Selected <span className="italic font-extralight">work</span> from the studio.
            </h1>
            <p className="mt-6 max-w-xl text-white/55">
              A curated slice of recent builds — each one engineered for measurable results.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`text-xs px-4 py-2.5 rounded-full border transition-all duration-300 ${
                    active === c
                      ? "bg-[#FF4500] border-[#FF4500] text-white shadow-[0_0_24px_-4px_rgba(255,69,0,0.6)]"
                      : "border-white/10 text-white/60 hover:border-[#FF4500]/40 hover:text-white"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-6 lg:gap-8">
          {filtered.map((p, i) => (
            <motion.article
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 2) * 0.08, duration: 0.7 }}
              className="group glass overflow-hidden hover:border-[#FF4500]/30 transition"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.name} loading="lazy" width={1200} height={800} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
              </div>
              <div className="p-6 lg:p-8">
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#FF4500]">{p.category}</p>
                <h3 className="mt-2 text-2xl tracking-tight truncate">{p.name}</h3>
                <p className="mt-1 text-sm text-white/50">{p.result}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
