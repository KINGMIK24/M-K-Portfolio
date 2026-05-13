import React from "react";

export function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5 px-6 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div
          className="cursor-pointer flex items-center"
          onClick={() => scrollTo("home")}
        >
          <img
            src="/lion-logo.png"
            alt="Logo"
            className="h-10 w-10 object-contain"
            style={{ filter: "brightness(0) invert(1)", opacity: 0.9 }}
          />
        </div>
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
