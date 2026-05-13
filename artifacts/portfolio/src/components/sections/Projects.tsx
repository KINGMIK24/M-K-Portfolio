import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

type Category = "All" | "Web Dev" | "Game Dev";

interface Project {
  id: string;
  name: string;
  displayName: string;
  accent: string;
  description: string;
  tags: Category[];
  link?: string;
  comingSoon?: boolean;
}

const projects: Project[] = [
  {
    id: "quantx",
    name: "QuantX",
    displayName: "Quant",
    accent: "X",
    description:
      "A next-generation news discovery and learning web app — built to help people stay informed about what's happening in the world. Engineered with modern web technologies for a seamless, immersive reading experience.",
    tags: ["Web Dev"],
    link: "https://kingmik24.github.io/QuantX/landing.html",
  },
  {
    id: "godot-game",
    name: "Unnamed Godot Project",
    displayName: "Project",
    accent: "G",
    description:
      "An in-progress game being built with the Godot Engine using GDScript. Exploring 2D game mechanics, physics, and interactive level design as part of my game development learning journey.",
    tags: ["Game Dev"],
    comingSoon: true,
  },
];

const categories: Category[] = ["All", "Web Dev", "Game Dev"];

export function Projects() {
  const [active, setActive] = useState<Category>("All");

  const filtered = projects.filter(p => active === "All" || p.tags.includes(active));

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-24 px-6 relative">
      <div className="max-w-5xl mx-auto w-full z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold gradient-text mb-10 text-center text-glow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Selected Works
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              data-testid={`filter-${cat.toLowerCase().replace(" ", "-")}`}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                active === cat
                  ? "border-primary/70 text-primary bg-primary/15 shadow-[0_0_12px_rgba(145,140,169,0.25)]"
                  : "border-white/10 text-muted-foreground hover:border-primary/40 hover:text-primary bg-white/5"
              }`}
            >
              {active === cat && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-primary/10"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </motion.div>

        {/* Project Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="flex flex-col gap-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel rounded-3xl overflow-hidden flex flex-col md:flex-row group project-card"
                data-testid={`card-project-${project.id}`}
              >
                {/* Visual panel */}
                <div className="md:w-5/12 bg-black/40 p-12 flex items-center justify-center relative overflow-hidden min-h-[180px]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(145,140,169,0.10)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <h3 className="text-5xl font-black text-foreground/90 tracking-tighter z-10 group-hover:scale-105 transition-transform duration-500">
                    {project.displayName}<span className="text-primary">{project.accent}</span>
                  </h3>
                  {project.comingSoon && (
                    <span className="absolute top-4 right-4 text-xs font-medium px-3 py-1 rounded-full border border-primary/30 text-primary/70 bg-primary/10">
                      Coming Soon
                    </span>
                  )}
                </div>

                {/* Info panel */}
                <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary/80 border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-2xl font-bold gradient-text mt-3 mb-3">{project.name}</h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed font-light text-sm md:text-base">
                    {project.description}
                  </p>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      data-testid={`link-${project.id}`}
                    >
                      <Button className="flex items-center gap-2 bg-primary/20 text-primary hover:bg-primary/30 border border-primary/50 shadow-[0_0_15px_rgba(145,140,169,0.2)] hover:shadow-[0_0_25px_rgba(145,140,169,0.4)] transition-all duration-300">
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </Button>
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground/60 italic">In development — stay tuned</span>
                  )}
                </div>
              </motion.div>
            ))}

            {filtered.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 text-muted-foreground/60"
              >
                No projects in this category yet.
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
