import { motion, AnimatePresence } from "framer-motion";
import { useState, type ReactNode } from "react";
import { Reveal, Stagger, StaggerItem, CountUp, GoldButton } from "./motion";
import { Shield, TrendingUp, Network, Award, FileStack, Check, X, ChevronDown } from "lucide-react";

// ============ Confidentiality Bar ============
export function ConfidentialityBar() {
  return (
    <div className="section-dark hairline-gold py-4">
      <p className="max-w-5xl mx-auto px-6 text-[11px] md:text-xs text-offwhite/60 text-center tracking-wide leading-relaxed">
        This document is issued on a strictly private and confidential basis to a limited number of prospective investors. It may not be reproduced, distributed or disclosed to any third party without prior written consent of SoulMeet. This is not a public offering document.
      </p>
    </div>
  );
}

// ============ Section wrapper ============
export function Section({ id, dark = false, children, className = "" }: { id?: string; dark?: boolean; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`${dark ? "section-dark" : ""} relative py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, intro, dark = false }: { eyebrow?: string; title: string; intro?: string; dark?: boolean }) {
  return (
    <Reveal>
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-4xl ${dark ? "text-offwhite" : "text-charcoal"}`}>{title}</h2>
      {intro && <p className={`mt-8 max-w-3xl text-base md:text-lg leading-relaxed font-light ${dark ? "text-offwhite/70" : "text-muted-foreground"}`}>{intro}</p>}
    </Reveal>
  );
}

// ============ Agenda ============
const agendaItems = [
  "Why Now", "Investment Snapshot", "The Problem", "The Philosophy", "The Moat",
  "The AI Layer", "Client Journey & Deliverables", "Global Pricing Architecture",
  "Global Financial Projections FY2027–FY2029", "Unit Economics",
  "Market Context & Competitive Positioning", "Seed Investment Structure & Use of Funds",
  "Risk Matrix & Mitigation", "The Closing Investment Thesis",
];
const agendaAnchors = ["why-now","snapshot","problem","philosophy","moat","ai-layer","journey","pricing","financials","unit-econ","market","seed","risk","thesis"];

export function Agenda() {
  return (
    <Section id="agenda">
      <SectionHeader eyebrow="Agenda" title="Fourteen chapters. One thesis." />
      <Stagger className="mt-16 grid md:grid-cols-2 gap-x-12 gap-y-1">
        {agendaItems.map((item, i) => (
          <StaggerItem key={i}>
            <a href={`#${agendaAnchors[i]}`} className="group flex items-baseline gap-6 py-4 border-b border-border hover:border-gold transition-colors">
              <span className="num text-gold text-sm tracking-widest w-8">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-base md:text-lg font-light relative">
                {item}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </span>
            </a>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

// ============ Why Now ============
const forces = [
  { title: "WHO Resolution (May 2025)", status: "Binding global policy mandate", impl: "Social health is a fundable, measurable category for the first time",
    body: "In May 2025, the World Health Assembly passed its first-ever resolution on social connection as a global health priority. The WHO Commission confirmed 1 in 6 people globally experience loneliness — causing 871,000 deaths annually (100 per hour). All 194 member states are mandated to create national social connection policies. Social health is now a formal policy category. SoulMeet is infrastructure for that category." },
  { title: "Dating App Collapse", status: "Bumble −90%; Match user declines", impl: "Premium vacuum — no credible alternative exists",
    body: "Bumble fell 90%+ from its IPO peak. Match Group reported consecutive user declines. A 2025 systematic review showed 85% of studies link dating apps to negative body image; 50% link them to depression and anxiety. The cultural narrative has turned against swipe culture — proven demand and a proven market gap for quality over quantity." },
  { title: "HNI Loneliness Rising", status: "300+ Indian family offices; AARP 2026", impl: "Proven willingness to pay; no product for this cohort",
    body: "UHNI wealth in India reaches USD 6 trillion by 2025. Indian family offices grew from 45 in 2018 to 300+ in 2024. The UAE hosts the largest Indian HNI diaspora. AARP (2026) confirms nearly half of lonely adults over 45 have limited social resources. A paying cohort with no suitable product." },
  { title: "AI Bias Maturity", status: "MIT 2024; EU AI Act 2024", impl: "Technical feasibility confirmed; regulatory framework established",
    body: "MIT (2024) demonstrated AI techniques that remove problematic training data, improving minority-subgroup accuracy without reducing overall performance. The EU AI Act (2024) and EDPB (2025) now require algorithmic fairness assessment. SoulMeet deploys AI to audit human curation — a first in the industry and a regulatory moat." },
  { title: "Family Office Impact Shift", status: "PwC; EY-Julius Baer; GCC health-tech", impl: "Capital aligned to social health thesis — pull, not push",
    body: "PwC, EY-Julius Baer, and GCC health-tech reports confirm a generational shift in family offices toward impact investing in health and social outcomes. GCC family offices are accelerating health-tech investment, driven by UAE Centennial 2071 and Saudi Vision 2030. SoulMeet offers clinically verifiable outcomes." },
];

export function WhyNow() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="why-now" dark>
      <SectionHeader dark eyebrow="Why Now" title="Five irresistible convergences."
        intro="Every transformative investment opportunity is born from forces that individually create pressure but together create inevitability. SoulMeet arrives at the precise inflection point where five simultaneous forces have opened a market that is both urgent and unserved."
      />
      <div className="mt-16 space-y-3">
        {forces.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={i} delay={i * 0.05}>
              <motion.div
                layout
                className="border border-white/10 rounded-3xl overflow-hidden bg-white/[0.02] card-lift"
              >
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full text-left p-6 md:p-8 flex items-center gap-6">
                  <span className="num text-gold text-sm tracking-widest">0{i + 1}</span>
                  <div className="flex-1 grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center">
                    <h3 className="font-display text-xl md:text-2xl text-offwhite">{f.title}</h3>
                    <span className="text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full bg-gold/10 text-gold border border-gold/30 justify-self-start">{f.status}</span>
                    <p className="text-sm text-offwhite/60 italic">{f.impl}</p>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="text-gold shrink-0">
                    <ChevronDown size={18} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 md:px-8 pb-8 pl-16 md:pl-20 text-offwhite/70 leading-relaxed max-w-4xl font-light">{f.body}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

// ============ Investment Snapshot ============
export function Snapshot() {
  const stats = [
    ["Platform", "SoulMeet Safe Space Companion™ — global social health companion for HNI/UHNI adults"],
    ["Stage", "Pre-revenue seed. Pilot-ready. Founding prospect network of 30+ identified."],
    ["Seed Ask", "Rs 3.5–5 Cr (USD 420K–600K equivalent)"],
    ["Equity Offered", "12–18% via CCPS or SAFE Note — terms open to lead investor"],
    ["Core Product Unit", "Safe Space Moment (SSM): 5 curated connections in 12 months"],
    ["Connection Definition", "A curated introduction leading to at least one meeting or substantive conversation"],
    ["Top-Up Mechanism", "Members completing 5 SSMs early may top up at the same rate for a further 5"],
    ["Primary KPI", "Clinical outcomes: UCLA Loneliness Scale, WHO-5, PSS-4, MES — not weddings"],
    ["AI Layer", "3-stage bias-free curation audit: appearance, cultural, age, economic"],
    ["Year 1 Target", "50 paying members across 6 regions — quality validation before scale"],
    ["Year 3 Revenue", "Rs 20.5 Cr (base case, global model)"],
    ["Year 3 EBITDA", "Rs 7.5 Cr · 37% margin"],
    ["LTV : CAC", "~12.8:1 — more than 4× above standard SaaS benchmark"],
    ["Break-even", "~90–110 members (mid-Year 2)"],
    ["Seed Milestone", "50 members + first T1 health data → Series A readiness"],
  ];
  const hero = [
    { label: "Seed Ask", value: 5, prefix: "Rs ", suffix: " Cr", decimals: 1 },
    { label: "Year 3 Revenue", value: 20.5, prefix: "Rs ", suffix: " Cr", decimals: 1 },
    { label: "Year 3 EBITDA Margin", value: 37, suffix: "%" },
    { label: "LTV : CAC", value: 12.8, suffix: ":1", decimals: 1 },
  ];
  return (
    <Section id="snapshot" dark>
      <SectionHeader dark eyebrow="Section 02" title="Investment snapshot." />
      <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {hero.map((s, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="p-6 md:p-8 rounded-[2rem] border border-gold/25 bg-gradient-to-br from-white/[0.04] to-transparent card-lift">
              <p className="text-[10px] tracking-[0.25em] uppercase text-offwhite/50">{s.label}</p>
              <p className="mt-4 font-display text-4xl md:text-5xl text-gold">
                <CountUp end={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <Stagger className="mt-16 grid md:grid-cols-2 gap-x-10">
        {stats.map(([k, v], i) => (
          <StaggerItem key={i}>
            <div className="py-5 border-b border-white/10 grid grid-cols-[140px_1fr] md:grid-cols-[200px_1fr] gap-4">
              <span className="text-[11px] tracking-widest uppercase text-gold/70">{k}</span>
              <span className="text-sm text-offwhite/85 font-light">{v}</span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

// ============ Problem ============
export function Problem() {
  const scaleStats = [
    { big: "871,000", suffix: "", label: "deaths per year globally from loneliness and social isolation — ~100 every hour (WHO, June 2025)" },
    { big: "1 in 6", suffix: "", label: "people globally experience loneliness (WHO Commission on Social Connection, 2025)" },
    { big: "50%", suffix: "", label: "increased mortality risk from social isolation — comparable to smoking 15 cigarettes/day (Holt-Lunstad)" },
    { big: "85 yr", suffix: "", label: "Harvard Study of Adult Development: quality of relationships is the strongest predictor of longevity" },
    { big: "≈ 50%", suffix: "", label: "of lonely adults over 45 have limited social resources and wish for stronger connections (AARP 2026)" },
  ];
  const fails = [
    "Mass-market dating apps optimise for engagement, not wellbeing — and now show documented clinical harm at scale.",
    "Matrimonial platforms measure only one outcome: marriage — rejecting impermanency, companionship, and late-life reconnection.",
    "Premium matchmaking services operate without clinical measurement — they cannot tell a member whether they are less lonely than when they started.",
    "Mental health apps address loneliness through individual therapy — not through the creation of real human connection.",
  ];
  return (
    <Section id="problem">
      <SectionHeader eyebrow="The Problem" title="A global health crisis."
        intro="Loneliness is not a lifestyle complaint. It is a clinically measurable, physiologically harmful condition that kills — and it is growing faster than any communicable disease response has been mobilised to address it."
      />
      <Reveal className="mt-16">
        <p className="eyebrow mb-8">The scale of the crisis</p>
      </Reveal>
      <Stagger className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
        {scaleStats.map((s, i) => (
          <StaggerItem key={i}>
            <div className="p-7 rounded-[2rem] bg-card border border-border card-lift h-full">
              <p className="font-display text-4xl md:text-5xl text-teal">{s.big}</p>
              <p className="mt-4 text-xs md:text-sm text-muted-foreground leading-relaxed">{s.label}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal className="mt-24">
        <p className="eyebrow mb-8">Why existing solutions fail</p>
      </Reveal>
      <Stagger className="grid md:grid-cols-2 gap-5">
        {fails.map((f, i) => (
          <StaggerItem key={i}>
            <div className="p-7 rounded-3xl border border-border bg-card card-lift">
              <p className="text-base leading-relaxed font-light">{f}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

// ============ Philosophy ============
export function Philosophy() {
  const phases = [
    { title: "The Labour of Loneliness", label: "Phase 1",
      body: "This is where most members begin. Loneliness is not the absence of people — it is the absence of felt connection. It can be present in a marriage, a boardroom, a family. The member is accomplished, often successful, and acutely aware that something essential is missing. This phase is characterised by isolation, hypervigilance about rejection, and a sense that connection happened in an earlier chapter of life." },
    { title: "The Safe Space Moment", label: "Phase 2",
      body: "The SSM is not a date. It is not a pitch. It is a carefully curated encounter between two human beings who have both been prepared for the possibility of something real. Designed to be low-stakes by architecture: no photographs were exchanged, no romantic framing was imposed, no outcome is required. A good SSM is a conversation where both people feel seen, heard, respected, and safe." },
    { title: "The Solace of Solitude", label: "Phase 3",
      body: "The destination is not marriage — it is solitude by choice rather than by default. The member who has completed the SoulMeet journey has rediscovered their capacity for connection. What they carry forward is the knowledge that they are not fundamentally alone — and the ability to be alone without suffering. This is the clinical definition of successful social health intervention." },
  ];
  return (
    <Section id="philosophy" dark>
      <SectionHeader dark eyebrow="The Philosophy" title="From loneliness to solitude."
        intro="SoulMeet is built on a clinical and philosophical distinction no other platform has ever acted upon: the difference between loneliness and solitude."
      />
      <div className="mt-20 relative">
        <motion.div
          initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/40 to-transparent origin-top"
        />
        <div className="space-y-16 md:space-y-24">
          {phases.map((p, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <div className={`relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-16 ${i % 2 ? "md:direction-rtl" : ""}`}>
                <motion.div
                  initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="absolute left-6 md:left-1/2 top-2 w-4 h-4 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_24px_oklch(0.78_0.09_82_/_0.6)]"
                />
                <div className={i % 2 ? "md:col-start-2" : ""}>
                  <p className="eyebrow mb-4">{p.label}</p>
                  <h3 className="font-display text-3xl md:text-4xl text-offwhite">{p.title}</h3>
                </div>
                <div className={i % 2 ? "md:col-start-1 md:row-start-1 md:text-right" : ""}>
                  <p className="text-offwhite/70 leading-relaxed font-light">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <Reveal className="mt-24">
        <div className="p-8 md:p-12 rounded-[2.5rem] border border-gold/30 bg-gradient-to-br from-gold/5 to-transparent">
          <p className="eyebrow mb-4">Why impermanency is a valid outcome</p>
          <p className="text-lg md:text-xl leading-relaxed text-offwhite/85 font-light italic">
            Conventional matchmaking treats impermanency as failure. SoulMeet treats it as data. If a member completes five Safe Space Moments and forms three meaningful friendships, one memorable evening, and one connection that didn't work — that is a <span className="text-gold not-italic">100% success rate</span> by SoulMeet's standard. Their UCLA, WHO-5 and MES scores will reflect it. This shift — from measuring outcomes we want to measuring health we generate — is the foundational innovation.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

// ============ Moat ============
const moats = [
  { icon: Shield, title: "Clinical Evidence Base", tag: "Data Moat",
    body: "SoulMeet measures UCLA, WHO-5, PSS-4 and its proprietary MES at T0, T1 and T2 for every member. By Year 2, SoulMeet holds a social health outcomes dataset no competitor possesses — creating regulatory, pricing and partnership moats. A competitor entering in Year 3 faces a 2–3 year clinical evidence gap." },
  { icon: TrendingUp, title: "Bias-Free Curation", tag: "Technology Moat",
    body: "A proprietary AI curation audit layer using MIT (2024) and EDPB (2025) debiasing frameworks — pre-processing, in-processing, and post-processing. No incumbent does this. A quality differentiator and a regulatory compliance asset under EU AI Act and DPDP 2023." },
  { icon: Network, title: "The Trust Network", tag: "Network Effects Moat",
    body: "Referral-only model creates a closed, verified trust graph — no public access, impossible to reverse-engineer. Once established across India, UAE, Europe and APAC, the trust graph creates switching costs, referral density advantages and cross-border network optionality." },
  { icon: Award, title: "Category Ownership", tag: "Brand Moat",
    body: "No platform positions itself as a social health service with clinical measurement as primary KPI. SoulMeet will publish the world's first Social Health Impact Report — the only brand that can say ‘our members get measurably less lonely.' Category ownership in premium services is extraordinarily durable." },
  { icon: FileStack, title: "Transformation Arc IP", tag: "Methodology Moat",
    body: "The Labour of Loneliness → Solace of Solitude arc, the SoulHealth Dashboard, the MES scoring tool, and the Inner Work curriculum form a protectable, franchiseable body of IP — a royalty revenue stream not requiring proportional headcount growth." },
];

export function Moat() {
  return (
    <Section id="moat">
      <SectionHeader eyebrow="The Moat" title="Five compounding competitive advantages."
        intro="A sustainable moat in a premium, trust-intensive service business derives from assets that accumulate slowly, replicate with difficulty, and compound in value over time."
      />
      <Stagger className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {moats.map((m, i) => {
          const Icon = m.icon;
          return (
            <StaggerItem key={i}>
              <div className={`p-8 rounded-[2rem] border border-border bg-card card-lift h-full ${i === 2 ? "lg:col-start-1" : ""}`}>
                <div className="w-14 h-14 rounded-2xl bg-teal/10 text-teal grid place-items-center">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <p className="mt-5 eyebrow text-teal">{m.tag}</p>
                <h3 className="mt-2 font-display text-2xl">{m.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed font-light">{m.body}</p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}

// ============ AI Layer ============
const biases = [
  ["Appearance", "No photographs in the curation decision. Members matched on psychometrics, life-stage, values and conversational compatibility only."],
  ["Cultural homogamy", "Caste, community and regional data excluded as curation variables by default. Members may flag explicit preferences."],
  ["Age-skew", "Life-stage alignment — not birth year — is the age variable. A 58- and a 52-year-old may share identical profiles."],
  ["Economic desirability", "Wealth signals excluded as scoring variables. The membership fee creates the economic gate; income is not a ranking factor."],
  ["RA familiarity", "AI audit reviews every proposed pairing before presentation — a second opinion that keeps RA intuition honest."],
  ["Intersectional", "Following MIT (2024) worst-group error minimisation — tested across every intersectional subgroup. No group is under-matched."],
];
const stages = [
  ["Pre-processing", "Dataset curation & reweighting", "Appearance, caste, economic data excluded as training variables. Life-stage, values, psychometrics weighted equally.", "EU AI Act Art.10 · DPDP 2023"],
  ["In-processing", "Fairness-constrained model", "Penalises pairings that under-serve minority subgroups. Minimises worst-group error rate (MIT 2024).", "EU AI Act Art.13 · EDPB 2025"],
  ["Post-processing", "MES feedback loop", "Post-SSM MES disaggregated by demographics. Subgroups below threshold trigger recalibration. Quarterly bias audit.", "EU AI Act Art.9 · ISO/IEC 42001"],
];

export function AILayer() {
  return (
    <Section id="ai-layer" dark>
      <SectionHeader dark eyebrow="The AI Layer" title="Bias-free curation architecture."
        intro="The central failure of every existing matchmaking platform is not lack of technology — it is the encoding of human bias at scale. SoulMeet's AI layer audits and corrects this — not by replacing human judgement, but by governing it."
      />
      <Reveal className="mt-16">
        <p className="eyebrow mb-8">Six biases removed</p>
      </Reveal>
      <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {biases.map(([t, d], i) => (
          <StaggerItem key={i}>
            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 card-lift h-full">
              <p className="num text-gold text-sm">0{i + 1}</p>
              <h4 className="mt-3 font-display text-xl text-offwhite">{t} bias</h4>
              <p className="mt-3 text-sm text-offwhite/60 leading-relaxed font-light">{d}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-24">
        <p className="eyebrow mb-8">Three-stage technical architecture</p>
      </Reveal>
      <div className="grid lg:grid-cols-3 gap-4 relative">
        {stages.map(([stage, title, body, reg], i) => (
          <Reveal key={i} delay={i * 0.15}>
            <div className="p-7 rounded-[2rem] bg-gradient-to-br from-teal/10 to-transparent border border-teal/20 h-full relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="num text-4xl font-display text-gold">→ {i + 1}</span>
                <span className="text-[10px] tracking-widest uppercase text-teal-soft">{stage}</span>
              </div>
              <h4 className="mt-6 font-display text-xl text-offwhite">{title}</h4>
              <p className="mt-3 text-sm text-offwhite/60 leading-relaxed font-light">{body}</p>
              <p className="mt-6 text-[10px] tracking-widest uppercase text-gold/70 border-t border-white/10 pt-4">{reg}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <div className="p-8 md:p-10 rounded-[2rem] border border-gold/30 bg-gold/[0.03]">
          <p className="eyebrow mb-3">What AI does not do at SoulMeet</p>
          <p className="text-base md:text-lg text-offwhite/80 leading-relaxed font-light italic">
            The AI does not make the final curation decision. A human Relationship Advisor always reviews and approves every proposed SSM. The AI provides three outputs: a compatibility score, a bias-audit flag, and a MES feedback signal. The qualitative judgement — timing, emotional readiness, the ineffable sense of fit — remains human. The Safe Space is a human experience. AI is its fairness guardian, not its architect.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

// ============ Client Journey ============
const journey = [
  { stage: "Stage 0", title: "Discovery & Application", when: "Pre-membership",
    items: ["Referral entry — nominated by an existing member or approved partner", "Private enquiry call — 30-min confidential readiness assessment", "Application pack — life stage, intentions, personal definition of ‘safe space'", "Initial 15-item psychometric screen — values, attachment, solitude comfort"],
    deliverable: "Acceptance decision within 5 working days. Personalised Welcome Note from the founder." },
  { stage: "Stage 1", title: "Onboarding & Baseline", when: "Weeks 1–3 · Onboarding Fee",
    items: ["4-step legal single-status verification", "Full psychometric intake — Big Five, UCLA (T0), WHO-5 (T0), PSS-4 (T0), ONS", "Dedicated Relationship Advisor introduced", "60-minute intention-setting session"],
    deliverable: "SoulHealth Baseline Report — current loneliness and wellbeing scores, narrative Starting Point framing." },
  { stage: "Stage 2", title: "The Five Safe Space Moments", when: "Months 1–12 · Core Membership",
    items: ["Pre-introduction briefing — no photo, explicit consent required", "Curated introduction as conversation, not a date", "In-person at curated venues or virtual purpose-built environment", "24-hour MES · 48-hour RA debrief"],
    deliverable: "MES score added to SoulHealth Dashboard per SSM. Algorithm feedback loop updated." },
  { stage: "Stage 3", title: "90-Day Check-In", when: "Month 3 · T1 Measurement",
    items: ["T1 psychometric reassessment — UCLA, WHO-5, PSS-4 re-administered", "30-min RA wellbeing conversation", "Welfare-first protocol for members showing no improvement — coaching offered, not sold"],
    deliverable: "SoulHealth Progress Report — T0→T1 loneliness delta, wellbeing delta, SSM quality summary." },
  { stage: "Stage 4", title: "Completion or Top-Up", when: "On completion or Month 12",
    items: ["1:1 completion conversation with RA", "T2 full 12-month reassessment", "Top-up offer at same regional rate if 5 SSMs used early", "Renewal at standard regional rate — no auto-renewal, no onboarding fee"],
    deliverable: "SoulHealth Annual Impact Report — 12-month longitudinal data, narrative transformation arc." },
  { stage: "Stage 5", title: "The SoulMeet Society", when: "Post-engagement · Light touch",
    items: ["Alumni community — one curated annual gathering per city", "Private digital forum", "Referral recognition — charitable donation in the referring member's name"],
    deliverable: "Annual Society Event invitation. Continued SoulHealth Dashboard access. Priority access to new city launches." },
];

export function Journey() {
  return (
    <Section id="journey">
      <SectionHeader eyebrow="Client Journey" title="Every touchpoint reinforces safety, respect, intentionality."
        intro="There are no dark patterns, no urgency manufacturing, no gamification. The journey is slow, deliberate, and deeply human — and at every stage the member receives a specific, named deliverable."
      />
      <div className="mt-20 relative">
        <motion.div
          initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 2 }}
          className="absolute left-6 md:left-10 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-teal/50 to-transparent origin-top"
        />
        <div className="space-y-10">
          {journey.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="relative pl-16 md:pl-28">
                <motion.div
                  initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="absolute left-6 md:left-10 top-2 w-4 h-4 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_24px_oklch(0.78_0.09_82_/_0.6)]"
                />
                <div className="p-7 md:p-9 rounded-[2rem] border border-border bg-card card-lift">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="eyebrow text-teal">{s.stage}</span>
                    <span className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-full bg-secondary text-muted-foreground">{s.when}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl md:text-3xl">{s.title}</h3>
                  <ul className="mt-6 space-y-2">
                    {s.items.map((it, j) => (
                      <li key={j} className="flex gap-3 text-sm text-muted-foreground font-light">
                        <Check size={16} className="text-teal shrink-0 mt-0.5" strokeWidth={2} />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-5 border-t border-border">
                    <p className="text-[10px] tracking-widest uppercase text-gold mb-2">Deliverable</p>
                    <p className="text-sm italic">{s.deliverable}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ============ Pricing ============
const regions = [
  { key: "India", cities: "Mumbai, Delhi, Bangalore, Pune", core: "Rs 4,00,000", onboard: "Rs 50,000", usd: "~USD 4,800", bench: "Indulge Global Rs 4L; top domestic matchmaking Rs 2–10L" },
  { key: "UAE", cities: "Dubai, Abu Dhabi", core: "AED 22,000", onboard: "AED 2,750", usd: "~USD 6,000", bench: "UAE premium concierge: AED 15,000–50,000/yr" },
  { key: "UK", cities: "London, Edinburgh", core: "GBP 4,200", onboard: "GBP 500", usd: "~USD 5,300", bench: "Quintessentially UK: GBP 2K–25K+; matchmaking GBP 5–20K" },
  { key: "Europe", cities: "Zurich, Frankfurt, Paris, Amsterdam", core: "EUR 5,000", onboard: "EUR 600", usd: "~USD 5,500", bench: "Elite European matchmaking: EUR 1,500–15,000+" },
  { key: "APAC", cities: "Singapore, Sydney, Melbourne, Hong Kong, Tokyo", core: "AUD 8,500 / SGD 6,500", onboard: "AUD 1,000", usd: "~USD 5,500", bench: "APAC premium concierge USD 3–10K; 8.65% CAGR" },
  { key: "USA", cities: "New York, Bay Area", core: "USD 6,500", onboard: "USD 800", usd: "~USD 6,500", bench: "US premium matchmaking USD 25K–150K+; accessible-premium" },
];
const addons = [
  ["Safe Space Coaching (6 sessions)", "1,20,000–1,80,000", "6,600–9,900", "1,250–1,900", "1,500–2,200", "2,500–3,500", "1,800–2,600"],
  ["Life-Transition Mentoring (6 mo)", "1,40,000", "7,700", "1,450", "1,750", "3,000", "2,000"],
  ["Inner Work Immersive (full day)", "50,000–60,000", "2,750–3,300", "530–640", "640–760", "1,100–1,300", "760–900"],
  ["Wellbeing Assessment + Debrief", "30,000", "1,650", "320", "375", "650", "450"],
  ["Premium Bundle", "5,00,000", "27,500", "5,250", "6,250", "10,500", "8,000"],
  ["UHNI Bespoke (annual retainer)", "8–12,00,000", "44,000–66,000", "8,400–12,600", "10,000–15,000", "17,000–25,500", "12,000–18,000"],
];

export function Pricing() {
  const [tab, setTab] = useState(0);
  const r = regions[tab];
  return (
    <Section id="pricing" dark>
      <SectionHeader dark eyebrow="Pricing Architecture" title="One philosophy. Local price points."
        intro="SoulMeet is a single unified platform with regionally calibrated pricing. Quintessentially charges GBP 2,000–25,000+ per year. The global luxury concierge market reached USD 2.46 Bn in 2025, growing 9% CAGR. SoulMeet sits at accessible-premium in every region."
      />
      <div className="mt-16">
        <div className="flex flex-wrap gap-2 mb-6">
          {regions.map((rg, i) => (
            <button key={rg.key} onClick={() => setTab(i)}
              className={`btn-curved text-xs px-5 py-2.5 transition-all ${tab === i ? "btn-gold" : "btn-ghost-light"}`}>
              {rg.key}
            </button>
          ))}
        </div>
        <motion.div key={tab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="p-8 md:p-12 rounded-[2.5rem] border border-gold/25 bg-gradient-to-br from-white/[0.04] to-transparent">
          <p className="eyebrow text-gold">{r.key} · Flagship Cities</p>
          <p className="mt-2 text-offwhite/70 font-light">{r.cities}</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-offwhite/50">Core Membership</p>
              <p className="mt-2 font-display text-3xl text-offwhite">{r.core}</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-offwhite/50">Onboarding Fee</p>
              <p className="mt-2 font-display text-3xl text-offwhite">{r.onboard}</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-offwhite/50">USD Equivalent</p>
              <p className="mt-2 font-display text-3xl text-gold">{r.usd}</p>
            </div>
          </div>
          <p className="mt-8 text-sm text-offwhite/60 italic">Benchmark: {r.bench}</p>
        </motion.div>
      </div>

      <Reveal className="mt-20">
        <p className="eyebrow mb-6">Add-On Services · Global Pricing</p>
        <div className="overflow-x-auto rounded-3xl border border-white/10">
          <table className="w-full text-sm min-w-[900px]">
            <thead className="bg-white/[0.04] text-[10px] tracking-widest uppercase text-offwhite/60">
              <tr>
                <th className="text-left p-4">Service</th>
                <th className="p-4">India (₹)</th><th className="p-4">UAE (AED)</th><th className="p-4">UK (£)</th>
                <th className="p-4">EU (€)</th><th className="p-4">APAC (AUD/SGD)</th><th className="p-4">USA ($)</th>
              </tr>
            </thead>
            <tbody>
              {addons.map((row, i) => (
                <tr key={i} className="border-t border-white/10 hover:bg-white/[0.03] transition-colors">
                  {row.map((c, j) => (
                    <td key={j} className={`p-4 ${j === 0 ? "text-offwhite font-light" : "num text-center text-offwhite/70"}`}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal className="mt-12">
        <div className="p-7 md:p-9 rounded-[2rem] bg-gold/[0.05] border border-gold/25">
          <p className="eyebrow mb-3">Top-up & Renewal Mechanics</p>
          <p className="text-offwhite/80 font-light leading-relaxed">
            A connection is a curated introduction leading to at least one meeting or substantive conversation. If a member uses all 5 connections before the 12-month anniversary, a top-up is offered at the same regional rate for a further 5 connections. No onboarding fee applies to top-ups or renewals. Renewal CAC is estimated below 5% of original CAC — making renewed and top-up members the highest-margin cohort in the portfolio.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
