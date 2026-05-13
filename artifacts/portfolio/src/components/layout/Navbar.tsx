import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5 px-6 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="cursor-pointer flex items-center" onClick={() => scrollTo("home")}>
          <img
            src="/lion-logo.png"
            alt="Logo"
            className="h-10 w-10 object-contain"
            style={{ filter: "brightness(0) invert(1)", opacity: 0.9 }}
          />
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
                data-testid={`nav-${item.toLowerCase()}`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            data-testid="button-theme-toggle"
            aria-label="Toggle light/dark mode"
            className="p-2 rounded-full glass-panel text-foreground/70 hover:text-primary transition-colors duration-300"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: "block" }}
                >
                  <Sun className="w-4 h-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: "block" }}
                >
                  <Moon className="w-4 h-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <button
            className="md:hidden text-foreground/80 hover:text-primary transition-colors duration-300 p-1"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            data-testid="button-hamburger"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-1 py-4 border-t border-white/5 mt-3">
              {navItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="w-full"
                >
                  <button
                    onClick={() => scrollTo(item.toLowerCase())}
                    className="w-full text-center py-3 text-base font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
                    data-testid={`mobile-nav-${item.toLowerCase()}`}
                  >
                    {item}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
