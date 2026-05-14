import React from "react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="min-h-[80vh] flex items-center justify-center py-24 px-6 relative">
      <div className="max-w-5xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50"></div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-shrink-0 flex flex-col items-center gap-4"
            >
              <div className="relative w-44 h-44 md:w-52 md:h-52">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 blur-xl animate-pulse"></div>
                <img
                  src="/mukesh-photo.jpg"
                  alt="M Mukesh Karthik"
                  className="relative w-full h-full object-cover object-top rounded-full border-2 border-primary/30 shadow-[0_0_30px_rgba(145,140,169,0.25)]"
                />
              </div>
              <p className="text-primary/80 text-sm font-medium tracking-wide text-center">M Mukesh Karthik</p>
            </motion.div>

            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-8 text-glow">
                About Me
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
                <p>
                  I am driven by an obsessive curiosity for the digital frontier. As a Web and Game Developer, I find my purpose in creating interactive experiences that are not only functional but deeply engaging. My mind is always racing, always questioning, and always learning.
                </p>
                <p>
                  Technology is more than a tool for me; it is a canvas. I thrive in the space between logic and creativity, building solutions that feel alive. Whether I'm architecting a robust web application or scripting mechanics for a new game world, I approach every project with relentless dedication.
                </p>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h3 className="text-xl text-primary font-medium mb-4">Currently Exploring</h3>
                  <ul className="flex flex-col gap-3">
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary/70 shadow-[0_0_8px_rgba(145,140,169,0.8)]"></span>
                      <span>Python</span>
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary/70 shadow-[0_0_8px_rgba(145,140,169,0.8)]"></span>
                      <span>Godot Engine & GDScript</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
