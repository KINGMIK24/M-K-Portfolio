import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Mail } from "lucide-react";

export function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative pt-20 px-6"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white title-glow tracking-tighter mb-4">
            M Mukesh Karthik
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-12"
        >
          <h2 className="text-xl md:text-3xl font-light text-primary/90 tracking-wide">
            Web & Game Developer
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl font-light">
            Tech Enthusiast. Curious. Intellectually Voracious.
          </p>
        </motion.div>

        <motion.div 
          className="mt-12 flex items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <a href="https://github.com/KINGMIK24" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-primary transition-colors p-3 glass-panel rounded-full hover:scale-110 transform duration-300">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/mukesh-karthik-m-54b892364" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-primary transition-colors p-3 glass-panel rounded-full hover:scale-110 transform duration-300">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/mk_king_2410?igsh=MXFxZXEyODlqMnNiNg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-primary transition-colors p-3 glass-panel rounded-full hover:scale-110 transform duration-300">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="mailto:Kingmukesh677@gmail.com" className="text-foreground/70 hover:text-primary transition-colors p-3 glass-panel rounded-full hover:scale-110 transform duration-300">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
