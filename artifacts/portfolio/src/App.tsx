import React, { useState } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Download } from "lucide-react";

import { ThemeProvider } from "./contexts/ThemeContext";
import { CustomCursor } from "./components/ui/CustomCursor";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

const queryClient = new QueryClient();

function FloatingDownload() {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="/portfolio_download.zip"
      download="MukeshKarthik_Portfolio.zip"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed",
        right: "20px",
        bottom: "32px",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: hovered ? "10px 18px" : "10px 14px",
        borderRadius: "40px",
        background: "rgba(33,31,47,0.85)",
        border: "1px solid rgba(145,140,169,0.35)",
        color: "#c8c5d8",
        textDecoration: "none",
        fontSize: "13px",
        fontWeight: 500,
        backdropFilter: "blur(12px)",
        boxShadow: hovered
          ? "0 0 24px rgba(145,140,169,0.4)"
          : "0 4px 20px rgba(0,0,0,0.3)",
        transition: "all 0.25s ease",
        whiteSpace: "nowrap",
        overflow: "hidden",
        maxWidth: hovered ? "220px" : "44px",
      }}
      title="Download Portfolio"
    >
      <Download style={{ width: "16px", height: "16px", flexShrink: 0 }} />
      {hovered && <span>Download Portfolio</span>}
    </a>
  );
}

function Portfolio() {
  return (
    <div className="relative w-full overflow-hidden">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <FloatingDownload />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
