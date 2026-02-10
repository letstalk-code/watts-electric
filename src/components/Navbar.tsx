"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Zap } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#testimonials" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-black/95 backdrop-blur-sm border-b-2 border-brand-red"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-brand-red flex items-center justify-center transform -skew-x-3 group-hover:skew-x-0 transition-transform">
              <Zap className="w-6 h-6 text-white" strokeWidth={3} />
            </div>
            <div className="leading-none">
              <span className="text-lg md:text-xl font-black tracking-tighter text-brand-white uppercase">
                WATTS
              </span>
              <span className="block text-[10px] md:text-xs font-mono text-brand-red tracking-widest">
                ELECTRIC
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="brutal-underline text-sm font-bold uppercase tracking-wider text-brand-white/80 hover:text-brand-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:7274848618"
              className="flex items-center gap-2 bg-brand-red text-white px-5 py-2.5 font-black text-sm uppercase tracking-wider transform -skew-x-3 hover:skew-x-0 hover:bg-brand-red-dark transition-all"
            >
              <Phone className="w-4 h-4" strokeWidth={3} />
              727-484-8618
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 bg-brand-red flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-brand-black border-t-2 border-brand-red overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-lg font-black uppercase tracking-wider text-brand-white/80 hover:text-brand-red transition-colors border-b border-brand-gray pb-3"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="tel:7274848618"
                className="flex items-center justify-center gap-2 bg-brand-red text-white px-5 py-4 font-black text-lg uppercase tracking-wider mt-2"
              >
                <Phone className="w-5 h-5" strokeWidth={3} />
                727-484-8618
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
