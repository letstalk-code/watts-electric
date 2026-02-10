"use client";

import { motion } from "framer-motion";
import { Phone, ArrowDown, Shield, Clock, Zap } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise-overlay">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-electrician.jpg"
          alt="Professional electrician at work"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay to maintain brutalist aesthetic */}
        <div className="absolute inset-0 bg-brand-black/75" />
      </div>

      {/* Background geometric blocks */}
      <div className="absolute inset-0">
        {/* Large angled red block */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red transform skew-x-[-6deg] translate-x-20 hidden lg:block" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-32 md:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* License badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-brand-charcoal border-l-4 border-brand-red px-4 py-2 mb-6"
            >
              <Shield className="w-4 h-4 text-brand-red" />
              <span className="text-xs font-mono uppercase tracking-widest text-brand-white/70">
                FL License #ER13015809
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-6"
            >
              <span className="text-brand-white">Your Home</span>
              <br />
              <span className="text-brand-white">Deserves</span>
              <br />
              <span className="text-brand-red inline-block transform -skew-x-3">
                Better.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-brand-white/70 max-w-lg mb-8 leading-relaxed"
            >
              Licensed, bonded & insured electrical contractor serving Pasco &
              Pinellas. Detailed work. Honest estimates. Results that speak for
              themselves.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="tel:7274848618"
                className="group flex items-center justify-center gap-3 bg-brand-red text-white px-8 py-5 font-black text-lg uppercase tracking-wider transform -skew-x-3 hover:skew-x-0 hover:bg-brand-red-dark transition-all"
              >
                <Phone className="w-5 h-5" strokeWidth={3} />
                <span>Get Free Estimate</span>
              </a>
              <a
                href="#services"
                className="group flex items-center justify-center gap-3 border-3 border-brand-white text-brand-white px-8 py-5 font-black text-lg uppercase tracking-wider transform skew-x-3 hover:skew-x-0 hover:bg-brand-white hover:text-brand-black transition-all"
                style={{ borderWidth: "3px" }}
              >
                <span>Our Services</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>

            {/* Trust signals row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-brand-gray"
            >
              {[
                { icon: Shield, text: "Licensed & Insured" },
                { icon: Clock, text: "Emergency Service" },
                { icon: Zap, text: "Free Estimates" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 text-brand-white/60"
                >
                  <item.icon className="w-4 h-4 text-brand-red" />
                  <span className="text-xs font-mono uppercase tracking-wider">
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Large visual block (visible on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col items-center justify-center relative"
          >
            {/* Brutalist stat blocks */}
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="bg-brand-black/90 border-l-4 border-brand-white p-6">
                <span className="block text-5xl font-black text-brand-white">
                  15+
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-white/60 mt-1 block">
                  Years Experience
                </span>
              </div>
              <div className="bg-brand-black/90 border-l-4 border-brand-yellow p-6 transform translate-y-4">
                <span className="block text-5xl font-black text-brand-yellow">
                  500+
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-white/60 mt-1 block">
                  Happy Customers
                </span>
              </div>
              <div className="bg-brand-black/90 border-l-4 border-brand-red p-6 transform -translate-y-2">
                <span className="block text-5xl font-black text-brand-red">
                  24/7
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-white/60 mt-1 block">
                  Emergency Service
                </span>
              </div>
              <div className="bg-brand-black/90 border-l-4 border-brand-white p-6 transform translate-y-2">
                <span className="block text-5xl font-black text-brand-white">
                  100%
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-white/60 mt-1 block">
                  Satisfaction
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-brand-white/40">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 text-brand-red" />
        </motion.div>
      </motion.div>
    </section>
  );
}
