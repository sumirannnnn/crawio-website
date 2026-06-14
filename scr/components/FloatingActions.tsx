import { WhatsappLogo, InstagramLogo } from "@phosphor-icons/react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 lg:bottom-7 lg:right-7 z-[80] flex flex-col items-end gap-3">
      <a
        href="https://instagram.com/crawiostudio"
        target="_blank"
        rel="noreferrer"
        aria-label="Follow Crawio on Instagram"
        className="group relative h-12 w-12 lg:h-14 lg:w-14 grid place-items-center rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(225,48,108,0.6)]"
        style={{
          background:
            "linear-gradient(135deg, #515BD4 0%, #8134AF 25%, #DD2A7B 50%, #FEDA77 100%)",
        }}
      >
        <InstagramLogo size={22} weight="light" />
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-black/80 backdrop-blur px-3 py-1.5 text-xs text-white opacity-0 group-hover:opacity-100 transition">
          Follow us on Instagram
        </span>
      </a>

      <a
        href="https://wa.me/6281217384134"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Crawio on WhatsApp"
        className="group relative h-14 w-14 lg:h-16 lg:w-16 grid place-items-center rounded-full text-white shadow-lg bg-[#25D366] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.7)] animate-[wabounce_2.4s_ease-in-out_infinite]"
      >
        <WhatsappLogo size={28} weight="fill" />
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-black/80 backdrop-blur px-3 py-1.5 text-xs text-white opacity-0 group-hover:opacity-100 transition">
          Chat with us!
        </span>
      </a>

      <style>{`
        @keyframes wabounce {
          0%, 100% { transform: translateY(0); }
          20% { transform: translateY(-6px); }
          40% { transform: translateY(0); }
          60% { transform: translateY(-3px); }
          80% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
