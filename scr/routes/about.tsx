import { createFileRoute } from "@tanstack/react-router";
import { Sparkle, Lightning, Trophy } from "@phosphor-icons/react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Crawio" },
      { name: "description", content: "Crawio is a tight studio of designers and engineers building premium websites for ambitious founders worldwide." },
      { property: "og:title", content: "About — Crawio" },
      { property: "og:description", content: "Our story, our values, our team." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Trophy, title: "Quality", body: "We obsess over detail — kerning, motion curves, microcopy. Premium is in the millimetres." },
  { icon: Lightning, title: "Speed", body: "Most sites ship in 3–5 weeks. We respect momentum because your business depends on it." },
  { icon: Sparkle, title: "Results", body: "Beauty without conversion is wallpaper. Every decision is judged by what it moves." },
];

const stats = [
  { v: "50+", l: "Projects shipped" },
  { v: "30+", l: "Happy clients" },
  { v: "3+", l: "Years in the studio" },
  { v: "10+", l: "Countries served" },
];


function AboutPage() {
  return (
    <Layout>
      <section className="pt-36 lg:pt-48 pb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-[11px] tracking-[0.25em] uppercase text-white/40">Our Story</p>
            <h1 className="mt-4 text-5xl lg:text-7xl tracking-tight leading-[1] text-balance">
              A small studio with a <span className="italic font-extralight text-[#FF4500]">large</span> point of view.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 grid lg:grid-cols-2 gap-10 text-white/65 text-lg leading-relaxed font-light">
              <p>
                Crawio started in 2022 with a simple frustration: small businesses with extraordinary products were stuck with ordinary websites. Templates, agencies that overpromised, freelancers who disappeared.
              </p>
              <p>
                We built Crawio as the studio we wished existed — a tight team of designers and engineers who treat every project like a flagship launch. No bloat, no posturing, no fluff. Just websites that look the part and earn their keep.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-[11px] tracking-[0.25em] uppercase text-white/40">Values</p>
            <h2 className="mt-4 text-4xl lg:text-5xl tracking-tight">Three things we never compromise.</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="glass p-8 h-full">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl glass text-[#FF4500]">
                    <v.icon size={22} weight="light" />
                  </span>
                  <h3 className="mt-6 text-2xl tracking-tight">{v.title}</h3>
                  <p className="mt-3 text-white/55 leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] glass-strong rounded-2xl overflow-hidden">
              {stats.map((s) => (
                <div key={s.l} className="bg-[#0A0A0A] p-8 lg:p-12 text-center">
                  <p className="text-5xl lg:text-6xl tracking-tight text-[#FF4500] font-light">{s.v}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/50">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

    </Layout>
  );
}
