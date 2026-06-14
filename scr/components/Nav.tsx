import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { List, X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import crawioLogo from "@/assets/crawio-logo-white.png";

const links = [
  { label: "Services", to: "/#services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "How It Works", to: "/#how" },
  { label: "Testimonials", to: "/#testimonials" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-black/40 border-b border-white/[0.06]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center group" aria-label="Crawio — Home">
            <img
              src={crawioLogo}
              alt="Crawio Digital Studio"
              className="h-9 lg:h-10 w-auto drop-shadow-[0_0_24px_rgba(255,69,0,0.25)] transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.slice(0, 6).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-[13px] text-white/60 hover:text-white transition-colors duration-300 tracking-tight"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href="https://calendly.com/sumirawat40/30min" target="_blank" rel="noreferrer" className="neu-btn neu-btn-primary text-[13px] px-5 py-2.5">
              Book Free Call
            </a>
          </div>

          <button
            aria-label="Open menu"
            className="lg:hidden h-10 w-10 grid place-items-center rounded-full glass"
            onClick={() => setOpen(true)}
          >
            <List size={20} weight="light" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[88%] max-w-sm lg:hidden glass-strong border-l border-white/10 flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-white/[0.06]">
                <span className="text-sm tracking-tight">Menu</span>
                <button
                  aria-label="Close menu"
                  className="h-10 w-10 grid place-items-center rounded-full glass"
                  onClick={() => setOpen(false)}
                >
                  <X size={20} weight="light" />
                </button>
              </div>
              <nav className="flex-1 flex flex-col px-6 py-8 gap-1">
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      to={l.to}
                      className="block py-3 text-xl font-light tracking-tight text-white/80 hover:text-[#FF4500] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="p-6 border-t border-white/[0.06]">
                <a href="https://calendly.com/sumirawat40/30min" target="_blank" rel="noreferrer" className="neu-btn neu-btn-primary w-full">
                  Book Free Call
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
