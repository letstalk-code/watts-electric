"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, ClipboardList, Wrench, ThumbsUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Call Us",
    description:
      "Give us a call or fill out the form. Tell us what's going on — we'll ask the right questions to understand your situation.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Free Estimate",
    description:
      "We come to you, inspect the work needed, and give you an honest, detailed estimate. No surprises. No hidden fees.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "We Do The Work",
    description:
      "Our licensed electricians handle everything with precision. Clean work areas. Code-compliant installations. Done right the first time.",
  },
  {
    number: "04",
    icon: ThumbsUp,
    title: "You're Covered",
    description:
      "We stand behind every job. Your satisfaction is guaranteed and our work is backed by our license and insurance.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="process"
      className="relative py-24 md:py-32 bg-brand-charcoal overflow-hidden"
    >
      {/* Top brutal line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-red" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-brand-red block mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
            Dead Simple.
            <br />
            <span className="text-brand-red">No Hassle.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[12%] right-[12%] h-[3px] bg-brand-gray">
            <motion.div
              initial={{ width: "0%" }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-brand-red"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
              className="relative text-center px-4 md:px-6 py-8"
            >
              {/* Step number circle */}
              <div className="relative z-10 w-16 h-16 mx-auto bg-brand-black border-3 border-brand-red flex items-center justify-center mb-6 transform -skew-x-3"
                style={{ borderWidth: "3px", borderColor: "var(--color-brand-red)" }}
              >
                <step.icon className="w-7 h-7 text-brand-red" strokeWidth={2.5} />
              </div>

              {/* Step number */}
              <span className="text-xs font-mono text-brand-red tracking-widest block mb-2">
                STEP {step.number}
              </span>

              <h3 className="text-xl font-black uppercase tracking-tight mb-3">
                {step.title}
              </h3>

              <p className="text-sm text-brand-white/50 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA after process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-center mt-16"
        >
          <a
            href="tel:7274848618"
            className="inline-flex items-center gap-3 bg-brand-red text-white px-10 py-5 font-black text-lg uppercase tracking-wider transform -skew-x-3 hover:skew-x-0 hover:bg-brand-red-dark transition-all"
          >
            <Phone className="w-5 h-5" strokeWidth={3} />
            Start With Step One
          </a>
        </motion.div>
      </div>
    </section>
  );
}
