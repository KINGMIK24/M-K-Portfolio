import React from "react";
import { motion } from "framer-motion";

export function Skills() {
  const skills = [
    { name: "HTML / CSS / JavaScript", progress: 75, status: "Proficient" },
    { name: "Python", progress: 30, status: "Currently Learning" },
    { name: "Godot / GDScript", progress: 40, status: "Currently Learning" },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-24 px-6 relative">
      <div className="max-w-5xl mx-auto w-full z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold gradient-text mb-16 text-center text-glow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My Arsenal
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-panel p-8 rounded-2xl flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="relative w-32 h-32 mb-6">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    className="stroke-white/5 fill-none"
                    strokeWidth="8"
                  />
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="56"
                    className="stroke-primary fill-none drop-shadow-[0_0_8px_rgba(145,140,169,0.5)]"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="351.86"
                    initial={{ strokeDashoffset: 351.86 }}
                    whileInView={{ strokeDashoffset: 351.86 - (351.86 * skill.progress) / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.2, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-foreground">{skill.progress}%</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{skill.name}</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">{skill.status}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
