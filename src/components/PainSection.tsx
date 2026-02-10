"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, X } from "lucide-react";

const painPoints = [
  {
    title: "Flickering Lights?",
    description:
      "That flicker isn't just annoying. It could be a loose connection waiting to spark a fire in your walls.",
  },
  {
    title: "Outdated Wiring?",
    description:
      "Homes built before the 90s often have wiring that can't handle modern electrical loads. One overloaded circuit away from disaster.",
  },
  {
    title: "DIY Gone Wrong?",
    description:
      "That quick fix from YouTube could void your insurance, fail inspection, or worse — put your family at risk.",
  },
  {
    title: "Unreliable Contractor?",
    description:
      "Tired of electricians who don't show up, pad the bill, or leave the job half-finished?",
  },
];

export default function PainSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32 bg-brand-charcoal overflow-hidden">
      {/* Aggressive diagonal accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-brand-red" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 transform rotate-45 translate-x-16 -translate-y-16" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-brand-red" />
            <span className="text-xs font-mono uppercase tracking-widest text-brand-red">
              Don&apos;t Ignore The Warning Signs
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
            Electrical Problems
            <br />
            <span className="text-brand-red">Don&apos;t Fix</span> Themselves.
          </h2>
        </motion.div>

        {/* Pain cards */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {painPoints.map((pain, i) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="relative group border border-brand-gray p-8 md:p-10 hover:bg-brand-red/5 transition-colors"
            >
              {/* Corner index */}
              <span className="absolute top-4 right-4 text-6xl font-black text-brand-white/[0.03]">
                0{i + 1}
              </span>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-brand-red/20 flex items-center justify-center shrink-0 mt-1">
                  <X className="w-4 h-4 text-brand-red" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-3 text-brand-white">
                    {pain.title}
                  </h3>
                  <p className="text-brand-white/60 leading-relaxed">
                    {pain.description}
                  </p>
                </div>
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-brand-red group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-brand-white/50 font-mono">
            Every day you wait is another day at risk.{" "}
            <a
              href="tel:7274848618"
              className="text-brand-red font-bold hover:underline"
            >
              Call now &rarr;
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
