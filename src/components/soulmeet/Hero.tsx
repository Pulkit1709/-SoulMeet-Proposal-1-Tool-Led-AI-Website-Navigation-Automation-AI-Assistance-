import { motion } from "framer-motion";
import { GoldButton, GhostButton } from "./motion";

export function Hero({ onRequest }: { onRequest: () => void }) {
  return (
    <section id="top" className="section-dark grain relative min-h-screen flex items-center overflow-hidden">
      {/* Constellation SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="oklch(0.78 0.09 82)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="oklch(0.78 0.09 82)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="800" cy="450" r="500" fill="url(#glow)" />
        {[
          [200, 200], [400, 150], [600, 300], [900, 200], [1200, 250], [1400, 180],
          [300, 500], [700, 600], [1100, 550], [1350, 700], [500, 750], [900, 800],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx} cy={cy} r="2"
            fill="oklch(0.78 0.09 82)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3 + i * 0.2, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
        <motion.path
          d="M 200 200 Q 400 100 600 300 T 1200 250 M 300 500 Q 500 400 700 600 T 1350 700"
          stroke="oklch(0.78 0.09 82)"
          strokeWidth="0.8"
          fill="none"
          strokeOpacity="0.35"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.5, ease: "easeInOut" }}
        />
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-40 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          Strictly Private & Confidential
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl text-offwhite leading-[1.05]"
        >
          <span className="block">SoulMeet</span>
          <span className="block text-gold text-3xl md:text-4xl lg:text-5xl mt-3 font-light italic">Safe Space Companion™</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 max-w-3xl text-lg md:text-xl text-offwhite/70 leading-relaxed font-light"
        >
          A business plan for <span className="text-offwhite">UHNI investors, HNI principals, and family offices.</span>
          <br className="hidden md:block" />
          <span className="italic text-gold/80">From the Labour of Loneliness to the Solace of Solitude.</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-6 text-xs tracking-[0.2em] uppercase text-offwhite/40"
        >
          July 2026 · Seed Stage · India · UAE · Europe · APAC · UK · USA
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <GoldButton onClick={onRequest}>Request Full Investor Deck →</GoldButton>
          <GhostButton href="#agenda">View Agenda</GhostButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-offwhite/40 text-xs tracking-[0.3em]"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>SCROLL</motion.div>
      </motion.div>
    </section>
  );
}
