import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="min-h-[80vh] flex flex-col items-center justify-center py-24 px-6 relative">
      <div className="max-w-3xl mx-auto w-full z-10 text-center flex-1 flex flex-col justify-center">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-white mb-8 text-glow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Let's Build Something
        </motion.h2>

        <motion.p
          className="text-xl text-foreground/70 font-light mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="mailto:Kingmukesh677@gmail.com" className="flex items-center gap-3 px-6 py-4 glass-panel rounded-full text-white hover:text-primary hover:scale-105 transition-all duration-300 group">
            <Mail className="w-5 h-5 group-hover:animate-pulse" />
            <span className="font-medium">Kingmukesh677@gmail.com</span>
          </a>
        </motion.div>

        <motion.div 
          className="mt-16 flex items-center justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="https://github.com/KINGMIK24" target="_blank" rel="noreferrer" className="text-foreground/50 hover:text-primary transition-colors">
            <FaGithub className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/mukesh-karthik-m-54b892364" target="_blank" rel="noreferrer" className="text-foreground/50 hover:text-primary transition-colors">
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/mk_king_2410?igsh=MXFxZXEyODlqMnNiNg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="text-foreground/50 hover:text-primary transition-colors">
            <FaInstagram className="w-8 h-8" />
          </a>
        </motion.div>
      </div>

      <footer className="w-full text-center mt-auto pt-12 pb-6 z-10 text-foreground/40 text-sm tracking-widest uppercase">
        Built by M Mukesh Karthik
      </footer>
    </section>
  );
}
