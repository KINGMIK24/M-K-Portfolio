import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-24 px-6 relative">
      <div className="max-w-4xl mx-auto w-full z-10">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-white mb-16 text-center text-glow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Selected Works
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-3xl overflow-hidden flex flex-col md:flex-row group"
        >
          <div className="md:w-1/2 bg-black/40 p-12 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,255,220,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h3 className="text-5xl font-black text-white/90 tracking-tighter z-10 group-hover:scale-110 transition-transform duration-700">
              Quant<span className="text-primary">X</span>
            </h3>
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h4 className="text-2xl font-bold text-white mb-4">QuantX</h4>
            <p className="text-foreground/70 mb-8 leading-relaxed font-light">
              A next-generation news discovery and learning web app — built to help people stay informed about what's happening in the world. Engineered with modern web technologies for a seamless, immersive reading experience.
            </p>
            <div>
              <a 
                href="https://kingmik24.github.io/QuantX/landing.html" 
                target="_blank" 
                rel="noreferrer"
              >
                <Button 
                  className="bg-primary/20 text-primary hover:bg-primary/30 border border-primary/50 shadow-[0_0_15px_rgba(120,255,220,0.2)] hover:shadow-[0_0_25px_rgba(120,255,220,0.4)] transition-all duration-300"
                >
                  View Project
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
