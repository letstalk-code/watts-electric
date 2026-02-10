"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Home,
  Building2,
  Siren,
  Cpu,
  Camera,
  Network,
  HardHat,
  Search,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "New Construction",
    description:
      "Complete electrical systems for new builds. Code-compliant wiring designed to handle your home's needs for decades.",
  },
  {
    icon: HardHat,
    title: "Remodels",
    description:
      "Upgrading your kitchen, bathroom, or addition? We handle all the electrical so your remodel is done right.",
  },
  {
    icon: Cpu,
    title: "Generators",
    description:
      "Florida storms don't wait. Keep your home powered when the grid goes down with a professionally installed generator.",
  },
  {
    icon: Camera,
    title: "Security Cameras",
    description:
      "Protect what matters. Professional security camera installation with clean, concealed wiring throughout.",
  },
  {
    icon: Search,
    title: "Home Inspections",
    description:
      "Buying a home? Get a thorough electrical inspection so you know exactly what you're walking into.",
  },
  {
    icon: Network,
    title: "Network Cabling",
    description:
      "Structured data and network cabling for your home or business. Fast, reliable connectivity throughout.",
  },
  {
    icon: Building2,
    title: "Commercial",
    description:
      "Tenant buildout, office wiring, commercial lighting — we handle projects of any scale with precision.",
  },
  {
    icon: Siren,
    title: "Emergency Service",
    description:
      "Electrical emergency? We respond fast. Available when you need us most, day or night.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-brand-black overflow-hidden"
    >
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/services-work.jpg"
          alt="Electrical services"
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
      </div>

      {/* Geometric background accent */}
      <div className="absolute top-0 left-0 w-64 h-64 border-2 border-brand-red/10 transform -rotate-12 -translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 right-0 w-96 h-96 border-2 border-brand-red/10 transform rotate-12 translate-x-48 translate-y-48" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-brand-red block mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] max-w-3xl">
            Complete Electrical
            <br />
            <span className="text-brand-red">Solutions.</span>
          </h2>
          <p className="mt-6 text-lg text-brand-white/60 max-w-2xl">
            From a single outlet to a full commercial buildout — we bring the
            same level of detail and professionalism to every job.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group relative border border-brand-gray/50 p-6 md:p-8 hover:bg-brand-red transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-brand-red/10 group-hover:bg-white/20 flex items-center justify-center mb-5 transform -skew-x-3 transition-colors">
                <service.icon
                  className="w-6 h-6 text-brand-red group-hover:text-white transition-colors"
                  strokeWidth={2}
                />
              </div>

              <h3 className="text-lg font-black uppercase tracking-tight mb-3 group-hover:text-white transition-colors">
                {service.title}
              </h3>

              <p className="text-sm text-brand-white/50 group-hover:text-white/80 leading-relaxed transition-colors">
                {service.description}
              </p>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-t-brand-red/0 border-l-[30px] border-l-transparent group-hover:border-t-white/20 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
