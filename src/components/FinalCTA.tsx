"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Zap, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 md:py-40 bg-brand-red overflow-hidden noise-overlay">
      {/* Geometric background elements */}
      <div className="absolute inset-0">
        {/* Large angled blocks */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-brand-red-dark/30 transform -skew-x-12" />
        <div className="absolute top-0 right-0 w-64 h-64 border-4 border-white/10 transform rotate-12 translate-x-20 -translate-y-20" />
        <div className="absolute bottom-0 left-20 w-48 h-48 border-4 border-white/10 transform -rotate-6 translate-y-10" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(white 1px, transparent 1px),
              linear-gradient(90deg, white 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div ref={ref} className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, type: "spring" }}
          className="w-20 h-20 bg-white/10 mx-auto flex items-center justify-center mb-8 transform -skew-x-3"
        >
          <Zap className="w-10 h-10 text-white" strokeWidth={2.5} />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-white mb-6"
        >
          Ready To Get
          <br />
          It Done Right?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Call now for your free estimate. No pressure, no hidden fees — just
          honest answers from a licensed electrician.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="tel:7274848618"
            className="group flex items-center justify-center gap-3 bg-white text-brand-red px-10 py-6 font-black text-xl uppercase tracking-wider transform -skew-x-3 hover:skew-x-0 hover:bg-brand-black hover:text-white transition-all"
          >
            <Phone className="w-6 h-6" strokeWidth={3} />
            <span>727-484-8618</span>
          </a>
          <a
            href="mailto:mywattselectricllc@gmail.com"
            className="group flex items-center justify-center gap-3 bg-transparent border-[3px] border-white text-white px-10 py-6 font-black text-xl uppercase tracking-wider transform skew-x-3 hover:skew-x-0 hover:bg-white hover:text-brand-red transition-all"
          >
            <span>Email Us</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-10 text-sm font-mono uppercase tracking-wider text-white/50"
        >
          Licensed &bull; Bonded &bull; Insured &bull; Serving Pasco & Pinellas
        </motion.p>
      </div>
    </section>
  );
}
