import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from "recharts";
import { Reveal, Stagger, StaggerItem, CountUp, GoldButton } from "./motion";
import { Section, SectionHeader } from "./Sections";
import { Check, X } from "lucide-react";

const memberData = [
  { region: "India", y1: 18, y2: 40, y3: 75 },
  { region: "UAE", y1: 10, y2: 25, y3: 50 },
  { region: "UK", y1: 7, y2: 18, y3: 35 },
  { region: "Europe", y1: 5, y2: 15, y3: 30 },
  { region: "APAC", y1: 5, y2: 12, y3: 25 },
  { region: "USA", y1: 5, y2: 12, y3: 20 },
];

const revenueLines = [
  ["Core Memberships (new)", "2.10", "5.18", "10.23"],
  ["Onboarding Fees (new)", "0.27", "0.65", "1.28"],
  ["Renewals (25/35/45%)", "—", "0.94", "3.42"],
  ["Top-Ups (10%)", "0.21", "0.52", "1.02"],
  ["Add-On Services", "0.42", "1.82", "4.10"],
  ["Salon & Community Events", "0.05", "0.18", "0.45"],
];
const revTotal = ["3.05", "9.29", "20.50"];

const costLines = [
  ["Relationship Advisors (3→5→8 FTE)", "0.84", "1.40", "2.24", "Rs 28L avg CTC; seniors Rs 40–50L"],
  ["Psychometric & Clinical Staff", "0.18", "0.36", "0.60", "2 contracted → 2 FT ICF coaches"],
  ["Technology (platform, AI, dashboard)", "0.60", "0.72", "0.90", "Includes ongoing AI audit infrastructure"],
  ["Legal, Compliance & Verification", "0.25", "0.35", "0.50", "4-geography legal retainers"],
  ["Travel, Events & Venue Curation", "0.35", "0.55", "0.85", "Founding events + annual salon series"],
  ["Marketing & PR (earned only)", "0.15", "0.22", "0.30", "No paid advertising"],
  ["G&A (Finance, Admin, Insurance)", "0.18", "0.28", "0.42", "Cyber insurance included"],
];

const scenarios = [
  { name: "Conservative", members: 140, rev: "12.50", ebitda: "3.80", note: "Slower Europe/APAC ramp; 35% add-on attach", featured: false },
  { name: "Base Case", members: 235, rev: "20.50", ebitda: "7.52", note: "All 6 regions; 45% add-on; 45% renewal rate", featured: true },
  { name: "Optimistic", members: 350, rev: "31.00", ebitda: "13.00", note: "Institutional referral; UHNI scales; franchise initiated", featured: false },
];

export function Financials() {
  return (
    <Section id="financials">
      <SectionHeader eyebrow="Financial Projections" title="FY2027 – FY2029."
        intro="All figures in INR. Year 1 is a quality pilot; Year 2 is referral-led scale; Year 3 is a profitable operating business."
      />

      <Reveal className="mt-16">
        <p className="eyebrow mb-6">Member volume by region</p>
        <div className="p-6 rounded-[2rem] border border-border bg-card">
          <div style={{ width: "100%", height: 380 }}>
            <ResponsiveContainer>
              <BarChart data={memberData} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="2 6" stroke="oklch(0 0 0 / 0.08)" />
                <XAxis dataKey="region" stroke="oklch(0.42 0.01 260)" fontSize={12} />
                <YAxis stroke="oklch(0.42 0.01 260)" fontSize={12} />
                <Tooltip
                  contentStyle={{ background: "oklch(0.16 0.008 260)", border: "1px solid oklch(0.78 0.09 82 / 0.4)", borderRadius: 16, color: "oklch(0.968 0.008 85)" }}
                  cursor={{ fill: "oklch(0.78 0.09 82 / 0.06)" }}
                />
                <Bar dataKey="y1" fill="oklch(0.55 0.05 175)" radius={[6, 6, 0, 0]} name="Year 1" />
                <Bar dataKey="y2" fill="oklch(0.4 0.06 175)" radius={[6, 6, 0, 0]} name="Year 2" />
                <Bar dataKey="y3" fill="oklch(0.78 0.09 82)" radius={[6, 6, 0, 0]} name="Year 3" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead className="text-[10px] uppercase tracking-widest text-muted-foreground">
                <tr><th className="text-left p-3">Region</th><th className="p-3">Y1</th><th className="p-3">Y2</th><th className="p-3">Y3</th><th className="p-3 text-right">Avg Rev/Member Y3</th></tr>
              </thead>
              <tbody>
                {[
                  ["India", 18, 40, 75, "Rs 4,70,000"],
                  ["UAE", 10, 25, 50, "Rs 5,06,000"],
                  ["UK", 7, 18, 35, "Rs 4,50,000"],
                  ["Europe", 5, 15, 30, "Rs 4,55,000"],
                  ["APAC", 5, 12, 25, "Rs 4,70,000"],
                  ["USA", 5, 12, 20, "Rs 5,46,000"],
                ].map((r, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="p-3 font-light">{r[0]}</td>
                    <td className="p-3 num text-center">{r[1]}</td>
                    <td className="p-3 num text-center">{r[2]}</td>
                    <td className="p-3 num text-center">{r[3]}</td>
                    <td className="p-3 num text-right">{r[4]}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-gold/50 bg-gold/5">
                  <td className="p-3 font-medium">TOTAL</td>
                  <td className="p-3 num text-center font-medium">50</td>
                  <td className="p-3 num text-center font-medium">122</td>
                  <td className="p-3 num text-center font-medium text-gold">235</td>
                  <td className="p-3 num text-right font-medium">~Rs 4,75,000 blended</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-16">
        <p className="eyebrow mb-6">Revenue waterfall (Rs Crore)</p>
        <div className="p-6 rounded-[2rem] border border-border bg-card overflow-x-auto">
          <table className="w-full text-sm min-w-[600px]">
            <thead className="text-[10px] uppercase tracking-widest text-muted-foreground">
              <tr><th className="text-left p-3">Revenue Line</th><th className="p-3">Year 1</th><th className="p-3">Year 2</th><th className="p-3">Year 3</th></tr>
            </thead>
            <tbody>
              {revenueLines.map((r, i) => (
                <tr key={i} className="border-t border-border hover:bg-secondary/30 transition-colors">
                  <td className="p-3 font-light">{r[0]}</td>
                  {r.slice(1).map((c, j) => <td key={j} className="p-3 num text-center">{c === "—" ? c : `Rs ${c} Cr`}</td>)}
                </tr>
              ))}
              <tr className="border-t-2 border-gold/50 bg-gold/5">
                <td className="p-3 font-medium">TOTAL REVENUE</td>
                {revTotal.map((c, j) => <td key={j} className="p-3 num text-center font-medium text-gold">Rs {c} Cr</td>)}
              </tr>
              <tr className="border-t border-border"><td className="p-3 font-light">Gross Margin</td><td className="p-3 num text-center">Rs 1.68 Cr</td><td className="p-3 num text-center">Rs 5.58 Cr</td><td className="p-3 num text-center">Rs 13.33 Cr</td></tr>
              <tr className="border-t border-border"><td className="p-3 font-light">Gross Margin %</td><td className="p-3 num text-center">55%</td><td className="p-3 num text-center">60%</td><td className="p-3 num text-center text-teal font-medium">65%</td></tr>
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal className="mt-16">
        <p className="eyebrow mb-6">Operating cost model (Rs Crore)</p>
        <div className="p-6 rounded-[2rem] border border-border bg-card overflow-x-auto">
          <table className="w-full text-sm min-w-[800px]">
            <thead className="text-[10px] uppercase tracking-widest text-muted-foreground">
              <tr><th className="text-left p-3">Cost Line</th><th className="p-3">Y1</th><th className="p-3">Y2</th><th className="p-3">Y3</th><th className="text-left p-3">Notes</th></tr>
            </thead>
            <tbody>
              {costLines.map((r, i) => (
                <tr key={i} className="border-t border-border">
                  <td className="p-3 font-light">{r[0]}</td>
                  <td className="p-3 num text-center">Rs {r[1]} Cr</td>
                  <td className="p-3 num text-center">Rs {r[2]} Cr</td>
                  <td className="p-3 num text-center">Rs {r[3]} Cr</td>
                  <td className="p-3 text-xs text-muted-foreground">{r[4]}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-charcoal/30 bg-secondary">
                <td className="p-3 font-medium">TOTAL OPEX</td>
                <td className="p-3 num text-center font-medium">Rs 2.55 Cr</td>
                <td className="p-3 num text-center font-medium">Rs 3.88 Cr</td>
                <td className="p-3 num text-center font-medium">Rs 5.81 Cr</td>
                <td className="p-3"></td>
              </tr>
              <tr className="border-t border-border bg-gold/5">
                <td className="p-3 font-medium">EBITDA</td>
                <td className="p-3 num text-center text-destructive">-Rs 0.87 Cr</td>
                <td className="p-3 num text-center text-teal">Rs 1.70 Cr</td>
                <td className="p-3 num text-center text-teal font-medium">Rs 7.52 Cr</td>
                <td className="p-3"></td>
              </tr>
              <tr className="border-t border-border bg-gold/5">
                <td className="p-3 font-medium">EBITDA Margin</td>
                <td className="p-3 num text-center text-destructive">-28%</td>
                <td className="p-3 num text-center">18%</td>
                <td className="p-3 num text-center text-gold font-medium">37%</td>
                <td className="p-3"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal className="mt-16">
        <p className="eyebrow mb-6">Scenario analysis</p>
      </Reveal>
      <Stagger className="grid md:grid-cols-3 gap-5">
        {scenarios.map((s, i) => (
          <StaggerItem key={i}>
            <div className={`p-8 rounded-[2rem] card-lift h-full ${s.featured
              ? "border-2 border-gold bg-gradient-to-br from-gold/10 to-transparent md:scale-105 shadow-[0_20px_60px_-20px_oklch(0.78_0.09_82/0.4)]"
              : "border border-border bg-card"}`}>
              {s.featured && <p className="eyebrow text-gold mb-3">← Base Case</p>}
              <h3 className="font-display text-2xl md:text-3xl">{s.name}</h3>
              <div className="mt-6 space-y-4">
                <div><p className="text-[10px] uppercase tracking-widest text-muted-foreground">Y3 Members</p><p className="font-display text-3xl num"><CountUp end={s.members} /></p></div>
                <div><p className="text-[10px] uppercase tracking-widest text-muted-foreground">Y3 Revenue</p><p className="font-display text-3xl num">Rs {s.rev} Cr</p></div>
                <div><p className="text-[10px] uppercase tracking-widest text-muted-foreground">Y3 EBITDA</p><p className={`font-display text-3xl num ${s.featured ? "text-gold" : "text-teal"}`}>Rs {s.ebitda} Cr</p></div>
              </div>
              <p className="mt-6 pt-5 border-t border-border text-xs text-muted-foreground italic">{s.note}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

// ============ Unit Economics ============
const unitData = [
  ["Core Membership", "Rs 4,00,000", "Rs 5,06,000", "Rs 4,49,400", "Rs 4,55,000", "Rs 4,59,000", "Rs 5,46,000", "~Rs 4,69,000"],
  ["Onboarding Fee", "Rs 50,000", "Rs 63,250", "Rs 53,500", "Rs 54,600", "Rs 54,000", "Rs 67,200", "~Rs 57,000"],
  ["Add-On (blended)", "Rs 42,000", "Rs 52,500", "Rs 48,000", "Rs 49,000", "Rs 50,000", "Rs 57,000", "~Rs 50,000"],
  ["Total Rev / New Member", "Rs 5,12,000", "Rs 6,36,500", "Rs 5,83,500", "Rs 5,90,000", "Rs 5,98,000", "Rs 6,87,000", "~Rs 5,92,000"],
  ["Direct Cost / Member", "Rs 1,80,000", "Rs 2,20,000", "Rs 2,10,000", "Rs 2,10,000", "Rs 2,15,000", "Rs 2,40,000", "~Rs 2,10,000"],
  ["Gross Margin / Member", "Rs 3,32,000 (65%)", "Rs 4,16,500 (65%)", "Rs 3,73,500 (64%)", "Rs 3,80,000 (64%)", "Rs 3,83,000 (64%)", "Rs 4,47,000 (65%)", "~Rs 3,82,000 (64%)"],
  ["CAC (new, referral)", "Rs 50,000", "Rs 60,000", "Rs 55,000", "Rs 55,000", "Rs 58,000", "Rs 67,000", "~Rs 57,000"],
  ["CAC (renewal)", "Rs 8,000", "Rs 9,000", "Rs 8,500", "Rs 8,500", "Rs 9,000", "Rs 10,000", "~Rs 8,800"],
  ["LTV (40% renewal, Y3)", "Rs 6,24,000", "Rs 7,77,000", "Rs 7,12,000", "Rs 7,20,000", "Rs 7,29,000", "Rs 8,38,000", "~Rs 7,23,000"],
  ["LTV : CAC Ratio", "12.5:1", "12.9:1", "12.9:1", "13.1:1", "12.6:1", "12.5:1", "~12.8:1"],
];

export function UnitEconomics() {
  return (
    <Section id="unit-econ" dark>
      <SectionHeader dark eyebrow="Unit Economics" title="Global blended model."
        intro="LTV:CAC of ~12.8:1 across all regions substantially exceeds the standard institutional benchmark of 3:1 and the growth-stage benchmark of 5:1."
      />
      <Reveal className="mt-16">
        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.02]">
          <table className="w-full text-xs md:text-sm min-w-[1000px]">
            <thead className="bg-white/[0.04] text-[10px] tracking-widest uppercase text-offwhite/60">
              <tr>
                <th className="text-left p-4 sticky left-0 bg-charcoal">Metric</th>
                {["India", "UAE", "UK", "Europe", "APAC", "USA", "Blended"].map(r => (
                  <th key={r} className={`p-4 ${r === "Blended" ? "text-gold" : ""}`}>{r}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {unitData.map((row, i) => {
                const highlight = row[0] === "LTV : CAC Ratio";
                return (
                  <tr key={i} className={`border-t border-white/10 ${highlight ? "bg-gold/5" : ""}`}>
                    <td className={`p-4 sticky left-0 bg-charcoal font-light ${highlight ? "text-gold font-medium" : ""}`}>{row[0]}</td>
                    {row.slice(1).map((c, j) => (
                      <td key={j} className={`p-4 num text-center ${j === 6 ? "text-gold font-medium" : "text-offwhite/70"} ${highlight ? "text-gold font-medium" : ""}`}>{c}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  );
}

// ============ Market ============
const marketRows = [
  ["Global Matchmaking Service", "USD 4.71 Bn", "USD 10.0 Bn by 2035", "7.8%", "Premium sub-segment disruption"],
  ["Elite Matchmaking (HNI)", "USD 0.9 Bn", "USD 1.68 Bn by 2034", "7.2%", "SoulMeet's direct category"],
  ["Premium Matchmaking", "USD 1.2 Bn", "USD 3.0 Bn by 2033", "9.5%", "Core pricing tier benchmark"],
  ["Luxury Concierge", "USD 2.46 Bn", "USD 3.8 Bn by 2030", "9.0%", "Delivery model benchmark"],
  ["Lifestyle Concierge (broader)", "USD 16.4 Bn", "USD 36.4 Bn by 2035", "8.3%", "Long-term category context"],
  ["APAC Online Dating", "Fast growth", "—", "8.65%", "APAC expansion opportunity"],
  ["Social Prescribing", "Policy-endorsed", "WHA May 2025", "Policy-driven", "Institutional partnership channel"],
];
const compRows = [
  ["Tinder / Bumble / Hinge", "Mass dating", false, false, false, false, false],
  ["Raya", "Exclusive dating", false, false, false, false, "partial"],
  ["Shaadi / BharatMatrimony", "Matrimonial India", false, false, false, false, false],
  ["Sirf Coffee", "No-pressure dates", false, "partial", "partial", false, "partial"],
  ["Selective Search (USA)", "Premium matching", false, false, false, false, true],
  ["Berkeley International (UK)", "Elite UK", false, false, false, false, true],
  ["Quintessentially", "Luxury concierge", false, "partial", "n/a", false, true],
];

function Cell({ v }: { v: any }) {
  if (v === true) return <Check size={16} className="text-teal mx-auto" strokeWidth={2.5} />;
  if (v === false) return <X size={16} className="text-destructive/60 mx-auto" strokeWidth={2} />;
  return <span className="text-xs text-muted-foreground">{v}</span>;
}

export function Market() {
  return (
    <Section id="market">
      <SectionHeader eyebrow="Market Context" title="Competitive positioning." />

      <Reveal className="mt-16">
        <p className="eyebrow mb-6">Market size</p>
        <div className="overflow-x-auto rounded-3xl border border-border bg-card">
          <table className="w-full text-sm min-w-[800px]">
            <thead className="text-[10px] uppercase tracking-widest text-muted-foreground bg-secondary">
              <tr><th className="text-left p-4">Market</th><th className="p-4">2025</th><th className="p-4">Projection</th><th className="p-4">CAGR</th><th className="text-left p-4">SoulMeet Relevance</th></tr>
            </thead>
            <tbody>
              {marketRows.map((r, i) => (
                <tr key={i} className="border-t border-border hover:bg-secondary/40 transition-colors">
                  <td className="p-4 font-light">{r[0]}</td>
                  <td className="p-4 num text-center">{r[1]}</td>
                  <td className="p-4 num text-center">{r[2]}</td>
                  <td className="p-4 num text-center text-teal font-medium">{r[3]}</td>
                  <td className="p-4 text-muted-foreground text-xs">{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal className="mt-16">
        <p className="eyebrow mb-6">Competitive position matrix</p>
        <div className="overflow-x-auto rounded-3xl border border-border bg-card">
          <table className="w-full text-sm min-w-[900px]">
            <thead className="text-[10px] uppercase tracking-widest text-muted-foreground bg-secondary">
              <tr>
                <th className="text-left p-4">Platform</th><th className="text-left p-4">Category</th>
                <th className="p-4">Health KPI</th><th className="p-4">Bias-Free AI</th>
                <th className="p-4">Impermanency Valid</th><th className="p-4">Evidence-Based</th><th className="p-4">UHNI Tier</th>
              </tr>
            </thead>
            <tbody>
              {compRows.map((r, i) => (
                <tr key={i} className="border-t border-border">
                  <td className="p-4 font-light">{r[0]}</td>
                  <td className="p-4 text-muted-foreground">{r[1]}</td>
                  <td className="p-4 text-center"><Cell v={r[2]} /></td>
                  <td className="p-4 text-center"><Cell v={r[3]} /></td>
                  <td className="p-4 text-center"><Cell v={r[4]} /></td>
                  <td className="p-4 text-center"><Cell v={r[5]} /></td>
                  <td className="p-4 text-center"><Cell v={r[6]} /></td>
                </tr>
              ))}
              <tr className="border-t-2 border-gold bg-gold/10">
                <td className="p-4 font-display text-lg text-gold">SoulMeet</td>
                <td className="p-4 text-xs font-medium">Social health companion</td>
                <td className="p-4 text-center"><Check size={18} className="text-gold mx-auto" strokeWidth={2.5} /></td>
                <td className="p-4 text-center"><Check size={18} className="text-gold mx-auto" strokeWidth={2.5} /></td>
                <td className="p-4 text-center"><Check size={18} className="text-gold mx-auto" strokeWidth={2.5} /></td>
                <td className="p-4 text-center"><Check size={18} className="text-gold mx-auto" strokeWidth={2.5} /></td>
                <td className="p-4 text-center"><Check size={18} className="text-gold mx-auto" strokeWidth={2.5} /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  );
}

// ============ Seed ============
const uses = [
  { name: "Technology platform", alloc: "Rs 1.20–1.60 Cr", pct: 34, note: "Member portal, AI bias-audit, SoulHealth Dashboard, virtual SSM environment" },
  { name: "Relationship Advisors", alloc: "Rs 0.84–1.00 Cr", pct: 24, note: "3 senior hires across India, UAE, UK/Europe" },
  { name: "Legal & Verification", alloc: "Rs 0.35–0.45 Cr", pct: 10, note: "DPDP 2023, GDPR, UAE and APAC equivalents" },
  { name: "Founding Events", alloc: "Rs 0.30–0.40 Cr", pct: 9, note: "5 cities: Mumbai, Delhi, Dubai, London, Singapore" },
  { name: "Clinical Infrastructure", alloc: "Rs 0.30–0.40 Cr", pct: 9, note: "Psychometric licensing, ICF coach network, T0/T1/T2" },
  { name: "Operations & Working Capital", alloc: "Rs 0.51–0.65 Cr", pct: 14, note: "Lean team; no paid ads; earned-media PR only" },
];

export function Seed() {
  return (
    <Section id="seed" dark>
      <SectionHeader dark eyebrow="Seed Investment" title="Structure & use of funds."
        intro="SoulMeet is seeking Rs 3.5–5 Cr (approximately USD 420,000–600,000) in seed capital to fund the global pilot phase and build the technology infrastructure required to deliver on the clinical measurement promise."
      />
      <Reveal className="mt-16">
        <p className="eyebrow mb-6">Use of funds</p>
        <div className="p-6 rounded-[2rem] border border-white/10 bg-white/[0.02]">
          {/* Animated stacked bar */}
          <div className="w-full h-4 rounded-full overflow-hidden flex bg-white/5">
            {uses.map((u, i) => (
              <motion.div
                key={i}
                initial={{ width: 0 }} whileInView={{ width: `${u.pct}%` }} viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                style={{ background: `oklch(${0.4 + i * 0.08} 0.08 ${80 + i * 15})` }}
              />
            ))}
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {uses.map((u, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 card-lift">
                  <div className="flex items-baseline justify-between gap-3">
                    <h4 className="font-display text-lg text-offwhite">{u.name}</h4>
                    <span className="num text-gold font-display text-2xl">{u.pct}%</span>
                  </div>
                  <p className="mt-2 num text-sm text-offwhite/70">{u.alloc}</p>
                  <p className="mt-3 text-xs text-offwhite/50 leading-relaxed">{u.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-12">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-8 rounded-[2rem] border border-gold/30 bg-gold/[0.03]">
            <p className="eyebrow mb-4">Instrument & Governance</p>
            <ul className="space-y-3 text-sm text-offwhite/80 font-light">
              {[
                "Instrument: CCPS or SAFE Note — open to lead investor preference",
                "Equity offered: 12–18% at seed; pre-money valuation Rs 19–29 Cr",
                "Lead investor rights: Board observer, quarterly KPI report, anti-dilution, information rights",
                "Use of proceeds: Ring-fenced; quarterly reporting to all investors",
                "Series A trigger: 100+ paying members + first Social Health Impact Report",
                "Exit pathways: Strategic M&A · Series A/B to IPO · Franchise licensing royalty",
              ].map((t, i) => <li key={i} className="flex gap-3"><span className="text-gold">→</span><span>{t}</span></li>)}
            </ul>
          </div>
          <div className="p-8 rounded-[2rem] border border-teal/30 bg-teal/[0.06]">
            <p className="eyebrow mb-4">Why this is an impact investment</p>
            <p className="text-sm md:text-base text-offwhite/85 font-light leading-relaxed italic">
              SoulMeet sits at the intersection of financial return and measurable social impact — the exact category family offices, impact funds, and UHNI principals are most actively seeking. The return is financial: <span className="text-gold not-italic">37% EBITDA margin at Year 3, 12.8:1 LTV:CAC.</span> The Social Return on Investment is clinical: every GBP 1 invested in social prescribing returns GBP 9.50 in health system savings (UK NICE). SoulMeet generates that SROI not as a charity but as a premium, profitable service.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

// ============ Risk Matrix ============
const risks = [
  ["Pilot member acquisition slower than 50 in Y1", "Medium", "High", "Founding network of 30+ warm prospects. Event-first strategy de-risks digital cold-start. Floor of 25 still produces positive cash contribution."],
  ["Quality failure — poorly curated SSM harms a member", "Low", "Very High", "Psychological readiness screening; staged consent; 24-hour MES review; welfare-first RA protocol; incident response playbook."],
  ["AI audit produces false positives — suppresses valid matches", "Low-Med", "Medium", "Human RA always makes final decision. AI is advisory. Recalibrated if false positive rate exceeds 15%."],
  ["Competitor launches similar model with greater capital", "Medium", "Medium", "Trust network and clinical evidence are 2–3 year moats. Publish data, deepen evidence, widen trust graph."],
  ["Multi-jurisdiction regulatory complexity", "Medium", "Medium", "Legal retainers in each jurisdiction. DPDP 2023 and GDPR-by-design architecture. Local counsel review pre-launch."],
  ["Technology build overrun or delay", "Medium", "High", "Phased build: India + AI Months 1–4; UAE/UK M 5–8; APAC M 9–12. Pilot MVP is lighter than full platform."],
  ["RA attrition — key advisor departs", "Medium", "Medium", "Member files platform-held. Min 2 RAs at all times. Transition protocol documented."],
  ["FX volatility affects consolidated revenue", "Low", "Low-Med", "Regional pricing set annually in local currency. Natural INR cost-base hedge. USD reserves for international opex."],
];

function Pill({ level }: { level: string }) {
  const colors: Record<string, string> = {
    "Low": "bg-teal/15 text-teal border-teal/30",
    "Low-Med": "bg-teal/10 text-teal-soft border-teal/25",
    "Medium": "bg-gold/15 text-gold border-gold/30",
    "High": "bg-destructive/15 text-destructive border-destructive/30",
    "Very High": "bg-destructive/25 text-destructive border-destructive/50",
  };
  return <span className={`inline-block px-3 py-1 rounded-full text-[10px] tracking-widest uppercase border font-medium ${colors[level]}`}>{level}</span>;
}

export function Risks() {
  return (
    <Section id="risk">
      <SectionHeader eyebrow="Risk Matrix" title="Considered. Mitigated." />
      <Stagger className="mt-16 space-y-3">
        {risks.map((r, i) => (
          <StaggerItem key={i}>
            <div className="p-6 md:p-7 rounded-3xl border border-border bg-card grid md:grid-cols-[1.4fr_auto_auto_2fr] gap-4 md:gap-6 items-start card-lift">
              <h4 className="font-light text-base">{r[0]}</h4>
              <div><p className="text-[9px] uppercase tracking-widest text-muted-foreground mb-1">Probability</p><Pill level={r[1]} /></div>
              <div><p className="text-[9px] uppercase tracking-widest text-muted-foreground mb-1">Impact</p><Pill level={r[2]} /></div>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">{r[3]}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

// ============ Thesis ============
const thesisQs = [
  { q: "Is the problem real, large, and growing?",
    a: "Loneliness is a global public health emergency. WHO (2025): 871,000 deaths per year. Holt-Lunstad meta-analysis (308,849 participants): 50% increased mortality risk. Harvard Study (85 years): quality of relationships is the strongest predictor of longevity. The premium matchmaking market is growing at 9.5% CAGR toward USD 3 Bn. The mass-market apps are collapsing. The problem is real, enormous, measurably growing, and actively creating a vacuum at the quality tier." },
  { q: "Is the solution genuinely differentiated?",
    a: "No platform in the world uses clinical outcome measurement (UCLA, WHO-5, PSS-4) as its primary success KPI. No platform deploys AI specifically to remove demographic and appearance bias from human curation. No platform frames its journey as a transformation from loneliness to solitude — treating impermanency as a valid outcome. SoulMeet holds first-mover advantage in an entirely unclaimed category." },
  { q: "Is the team credible and the timing right?",
    a: "The founding team combines domain expertise in mental health, social connection, and the luxury service landscape with a pre-existing HNI and UHNI network across India, UAE, and the UK/USA diaspora. The timing is not a bet — it is a fact. The WHO resolution (May 2025), the collapse of dating app valuations, the maturation of AI bias-removal techniques, and the pivot of family offices toward social health impact have all converged simultaneously. The window is open. It will not be open indefinitely." },
];

export function Thesis({ onRequest }: { onRequest: () => void }) {
  return (
    <Section id="thesis" dark>
      <SectionHeader dark eyebrow="Closing Investment Thesis" title="Three questions. Three answers."
        intro="There are three questions every serious investor asks of a seed-stage business. SoulMeet has clear answers to all three."
      />
      <div className="mt-20 space-y-16">
        {thesisQs.map((t, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12">
              <span className="num font-display text-6xl md:text-8xl text-gold/70 leading-none">0{i + 1}</span>
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-offwhite">{t.q}</h3>
                <p className="mt-5 text-offwhite/70 leading-relaxed font-light md:text-lg">{t.a}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-display text-2xl md:text-4xl leading-[1.35] text-offwhite/90 font-light italic">
            SoulMeet is not a bet on whether people are lonely. They are. It is not a bet on whether accomplished adults want better human connection. They do. It is a bet on whether the right platform, built with clinical rigour, philosophical integrity, and the right pricing, can become the world's first profitable social health companion service.
          </p>
          <p className="mt-10 font-display text-3xl md:text-5xl text-gold leading-tight">
            The answer is yes.<br />And the time is now.
          </p>
          <div className="mt-12 flex justify-center">
            <GoldButton onClick={onRequest}>Request Investor Deck →</GoldButton>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

// ============ Footer ============
export function Footer() {
  return (
    <footer className="section-dark border-t border-white/10 py-10 px-6 text-xs text-offwhite/50 flex flex-col md:flex-row justify-between gap-4">
      <p>SoulMeet Safe Space Companion™ · Global Seed Pitch v4.0 · July 2026</p>
      <p className="tracking-wider">Strictly Private & Confidential · Not for Distribution · Issued to Named Recipients Only</p>
    </footer>
  );
}
