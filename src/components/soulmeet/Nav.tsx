import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { GoldButton } from "./motion";
import { Menu, X } from "lucide-react";

const links = [
  ["Why Now", "why-now"],
  ["Snapshot", "snapshot"],
  ["Problem", "problem"],
  ["Philosophy", "philosophy"],
  ["Moat", "moat"],
  ["AI Layer", "ai-layer"],
  ["Journey", "journey"],
  ["Pricing", "pricing"],
  ["Financials", "financials"],
  ["Thesis", "thesis"],
];

export function Nav({ onRequest }: { onRequest: () => void }) {
  const { scrollY } = useScroll();
  const h = useTransform(scrollY, [0, 200], [88, 64]);
  const bg = useTransform(scrollY, [0, 150], ["oklch(0.16 0.008 260 / 0)", "oklch(0.16 0.008 260 / 0.85)"]);
  const blur = useTransform(scrollY, [0, 150], ["blur(0px)", "blur(14px)"]);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      style={{ height: h, backgroundColor: bg, backdropFilter: blur, WebkitBackdropFilter: blur }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
    >
      <div className="mx-auto max-w-7xl h-full px-6 flex items-center justify-between gap-6">
        <a href="#top" className="flex flex-col leading-tight">
          <span className="font-display text-xl text-offwhite tracking-tight">SoulMeet</span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-gold/80">Safe Space Companion™</span>
        </a>
        <nav className="hidden lg:flex items-center gap-6 text-xs text-offwhite/70">
          {links.map(([l, id]) => (
            <a key={id} href={`#${id}`} className="relative py-1 group hover:text-offwhite transition-colors">
              {l}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <GoldButton onClick={onRequest} className="hidden md:inline-flex">Request Deck</GoldButton>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-offwhite" aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-charcoal/95 backdrop-blur-lg border-b border-white/10 py-6 px-6 grid grid-cols-2 gap-4 text-sm text-offwhite/80"
        >
          {links.map(([l, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{l}</a>
          ))}
          <button onClick={() => { onRequest(); setOpen(false); }} className="col-span-2 mt-2 btn-curved btn-gold">Request Deck</button>
        </motion.div>
      )}
    </motion.header>
  );
}
