import { Link } from "@tanstack/react-router";
import { WhatsappLogo, InstagramLogo, LinkedinLogo, TwitterLogo, DribbbleLogo } from "@phosphor-icons/react";
import crawioLogo from "@/assets/crawio-logo-white.png";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#070707]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2 max-w-md">
            <div className="flex items-center">
              <img src={crawioLogo} alt="Crawio Digital Studio" className="h-11 w-auto" />
            </div>
            <p className="mt-5 text-sm text-white/55 leading-relaxed max-w-sm">
              A premium web design agency building high-converting websites for ambitious brands in the US, UK, Canada and beyond.
            </p>
            <a
              href="https://wa.me/6281217384134"
              className="neu-btn mt-7 text-[13px] text-[#25D366] hover:shadow-[0_0_24px_rgba(37,211,102,0.45)] transition-shadow"
              target="_blank" rel="noreferrer"
            >
              <WhatsappLogo size={18} weight="fill" />
              💬 Chat on WhatsApp
            </a>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40">Studio</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40">Connect</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>Mon–Fri · 9am–7pm GMT</li>
              <li><Link to="/contact" className="hover:text-white transition">Get in touch</Link></li>
              <li>
                <a href="https://instagram.com/crawiostudio" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white transition">
                  <InstagramLogo size={16} weight="light" /> @crawiostudio
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: InstagramLogo, href: "https://instagram.com/crawiostudio" },
                { Icon: LinkedinLogo, href: "#" },
                { Icon: TwitterLogo, href: "#" },
                { Icon: DribbbleLogo, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer" className="h-10 w-10 grid place-items-center rounded-full glass hover:border-[#FF4500]/40 hover:text-[#FF4500] transition">
                  <Icon size={16} weight="light" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Crawio Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
