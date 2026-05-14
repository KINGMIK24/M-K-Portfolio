import React, { useState } from "react";
import { motion } from "framer-motion";

export function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="min-h-[80vh] flex items-center justify-center py-24 px-6 relative">
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-8 md:p-12 rounded-2xl relative"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50 rounded-t-2xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center">

            {/* Photo — no nested whileInView, inherits parent visibility */}
            <div className="flex-shrink-0 flex flex-col items-center gap-3">
              <div
                className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-primary/40 bg-primary/10"
                style={{ boxShadow: "0 0 36px rgba(145,140,169,0.35)" }}
              >
                {imgError ? (
                  <div className="w-full h-full flex items-center justify-center text-primary/60 text-4xl font-bold select-none">
                    MK
                  </div>
                ) : (
                  <img
                    src="/mukesh-photo.jpg"
                    alt="M Mukesh Karthik"
                    onError={() => setImgError(true)}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
                  />
                )}
              </div>
              <span className="text-primary/80 text-sm font-medium tracking-wide">M Mukesh Karthik</span>
            </div>

            {/* Text content */}
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
                      <span className="w-2 h-2 rounded-full bg-primary/70 flex-shrink-0" style={{ boxShadow: "0 0 8px rgba(145,140,169,0.8)" }}></span>
                      <span>Python</span>
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary/70 flex-shrink-0" style={{ boxShadow: "0 0 8px rgba(145,140,169,0.8)" }}></span>
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
