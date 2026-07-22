import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/soulmeet/Nav";
import { Hero } from "@/components/soulmeet/Hero";
import { ConfidentialityBar, Agenda, WhyNow, Snapshot, Problem, Philosophy, Moat, AILayer, Journey, Pricing } from "@/components/soulmeet/Sections";
import { Financials, UnitEconomics, Market, Seed, Risks, Thesis, Footer } from "@/components/soulmeet/Financials";
import { RequestModal, BackToTop, ChatWidget } from "@/components/soulmeet/Interactive";

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  const [modal, setModal] = useState(false);
  const open = () => setModal(true);
  return (
    <div>
      <Nav onRequest={open} />
      <Hero onRequest={open} />
      <ConfidentialityBar />
      <Agenda />
      <WhyNow />
      <Snapshot />
      <Problem />
      <Philosophy />
      <Moat />
      <AILayer />
      <Journey />
      <Pricing />
      <Financials />
      <UnitEconomics />
      <Market />
      <Seed />
      <Risks />
      <Thesis onRequest={open} />
      <Footer />
      <RequestModal open={modal} onClose={() => setModal(false)} />
      <BackToTop />
      <ChatWidget />
    </div>
  );
}
