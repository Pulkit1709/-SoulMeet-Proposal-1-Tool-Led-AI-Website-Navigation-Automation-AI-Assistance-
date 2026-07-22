import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, ArrowUp, Send } from "lucide-react";
import { GoldButton } from "./motion";

// ---------- Request Deck Modal ----------
export function RequestModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [focus, setFocus] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (open) { setStep(0); setDone(false); setName(""); setEmail(""); setType(""); setFocus(""); }
  }, [open]);

  const types = ["Family Office", "UHNI Individual", "Institutional Investor", "Advisor / Introducer", "Just Exploring"];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-charcoal/80 backdrop-blur-md grid place-items-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 240 }}
            onClick={(e) => e.stopPropagation()}
            className="section-dark relative w-full max-w-lg p-8 md:p-10 rounded-[2rem] border border-gold/25 shadow-[0_40px_100px_-20px_oklch(0_0_0/0.5)]"
          >
            <button onClick={onClose} className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 grid place-items-center text-offwhite/60"><X size={16} /></button>

            {done ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <p className="eyebrow mb-3">Received</p>
                <h3 className="font-display text-3xl text-offwhite">Thank you, {name.split(" ")[0] || "there"}.</h3>
                <p className="mt-4 text-offwhite/70 font-light leading-relaxed">
                  {focus
                    ? <>We'll prioritise <span className="text-gold italic">{focus}</span> in the deck we send to you.</>
                    : "We'll be in touch with the full deck shortly."}
                </p>
                <button onClick={onClose} className="mt-8 btn-curved btn-gold">Close</button>
              </motion.div>
            ) : (
              <>
                <div className="flex gap-2 mb-6">
                  {[0, 1, 2].map(i => (
                    <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i <= step ? "bg-gold" : "bg-white/10"}`} />
                  ))}
                </div>
                <p className="eyebrow mb-3">Request Investor Deck</p>

                {step === 0 && (
                  <motion.div key="s0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="font-display text-2xl text-offwhite">Let's start with who we're sending it to.</h3>
                    <div className="mt-6 space-y-4">
                      <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-offwhite placeholder:text-offwhite/40 focus:outline-none focus:border-gold transition-colors" />
                      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-offwhite placeholder:text-offwhite/40 focus:outline-none focus:border-gold transition-colors" />
                    </div>
                    <div className="mt-8 flex justify-end">
                      <GoldButton onClick={() => name && email && setStep(1)}>Continue →</GoldButton>
                    </div>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="font-display text-2xl text-offwhite">Which best describes you?</h3>
                    <div className="mt-6 space-y-2">
                      {types.map(t => (
                        <button key={t} onClick={() => setType(t)} className={`w-full text-left px-5 py-3.5 rounded-2xl border transition-all ${type === t ? "border-gold bg-gold/10 text-offwhite" : "border-white/10 bg-white/[0.02] text-offwhite/70 hover:border-white/30"}`}>
                          {t}
                        </button>
                      ))}
                    </div>
                    <div className="mt-8 flex justify-between">
                      <button onClick={() => setStep(0)} className="text-sm text-offwhite/50 hover:text-offwhite">← Back</button>
                      <GoldButton onClick={() => type && setStep(2)}>Continue →</GoldButton>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="font-display text-2xl text-offwhite">Anywhere you'd like the full deck to go deeper?</h3>
                    <p className="mt-3 text-sm text-offwhite/50">Optional — helps us tailor what we send.</p>
                    <textarea value={focus} onChange={e => setFocus(e.target.value)} rows={4}
                      placeholder="e.g. Year 3 financials, UAE regional detail, AI bias architecture…"
                      className="mt-4 w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-offwhite placeholder:text-offwhite/40 focus:outline-none focus:border-gold transition-colors resize-none" />
                    <div className="mt-8 flex justify-between">
                      <button onClick={() => setStep(1)} className="text-sm text-offwhite/50 hover:text-offwhite">← Back</button>
                      <GoldButton onClick={() => setDone(true)}>Send Request →</GoldButton>
                    </div>
                  </motion.div>
                )}
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ---------- Back to top ----------
export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full btn-gold grid place-items-center shadow-lg"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// ---------- Ask SoulMeet chat (UI stub) ----------
export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "assistant" | "user"; text: string }[]>([
    { role: "assistant", text: "I can walk you through the plan, the numbers, or the model — what would you like to understand first?" }
  ]);
  const [input, setInput] = useState("");

  const chips = [
    "Explain the AI bias-removal layer",
    "What's the seed ask and equity offered?",
    "Walk me through Year 3 financials",
    "How does pricing work by region?",
  ];

  const answers: Record<string, string> = {
    "AI bias": "See Section 6 — a 3-stage architecture (pre-processing, in-processing, post-processing) removes six biases (appearance, cultural, age-skew, economic, RA familiarity, intersectional) using MIT (2024) and EDPB (2025) frameworks. A human RA always makes the final call.",
    "seed": "Section 12 — Seed ask is Rs 3.5–5 Cr (USD 420K–600K) for 12–18% equity via CCPS or SAFE Note. Pre-money valuation Rs 19–29 Cr.",
    "Year 3": "Section 9 (base case) — 235 members, Rs 20.5 Cr revenue, Rs 7.52 Cr EBITDA (37% margin). LTV:CAC of ~12.8:1.",
    "pricing": "Section 8 — Regionally calibrated pricing: India Rs 4L, UAE AED 22K, UK GBP 4,200, EU EUR 5,000, APAC AUD 8,500/SGD 6,500, USA USD 6,500. Each with an onboarding fee.",
  };

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg = { role: "user" as const, text };
    setMessages(m => [...m, userMsg]);
    setInput("");
    setTimeout(() => {
      const key = Object.keys(answers).find(k => text.toLowerCase().includes(k.toLowerCase().split(" ")[0]));
      const reply = key ? answers[key] : "That's not covered directly in this briefing — I'd recommend requesting the full deck via the button in the header, and the SoulMeet team will follow up.";
      setMessages(m => [...m, { role: "assistant", text: reply }]);
    }, 600);
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.08, y: -2 }} whileTap={{ scale: 0.95 }}
        className={`fixed bottom-6 left-6 z-40 h-14 pl-5 pr-6 rounded-full btn-gold flex items-center gap-3 shadow-xl ${open ? "opacity-0 pointer-events-none" : ""}`}
        aria-label="Ask SoulMeet"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-charcoal animate-pulse" />
        <span className="text-sm font-medium">Ask SoulMeet</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 240 }}
            className="section-dark fixed bottom-6 left-6 right-6 md:right-auto md:w-[420px] z-40 rounded-[2rem] border border-gold/25 shadow-2xl overflow-hidden flex flex-col max-h-[70vh]"
          >
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <div>
                <p className="eyebrow">Ask SoulMeet</p>
                <p className="text-xs text-offwhite/50 mt-1">Grounded in this briefing</p>
              </div>
              <button onClick={() => setOpen(false)} className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 grid place-items-center text-offwhite/60"><X size={16} /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-5 space-y-3">
              {messages.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${m.role === "assistant" ? "bg-white/[0.05] text-offwhite/85" : "bg-gold text-charcoal ml-auto"}`}>
                  {m.text}
                </motion.div>
              ))}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {chips.map(c => (
                    <button key={c} onClick={() => send(c)} className="text-[11px] px-3 py-1.5 rounded-full border border-white/15 text-offwhite/70 hover:border-gold hover:text-gold transition-colors">
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="p-4 border-t border-white/10 flex gap-2">
              <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about the plan…" className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-offwhite placeholder:text-offwhite/40 focus:outline-none focus:border-gold transition-colors" />
              <button type="submit" className="w-11 h-11 rounded-full btn-gold grid place-items-center"><Send size={16} /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
