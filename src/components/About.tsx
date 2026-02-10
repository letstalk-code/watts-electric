"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, MapPin, Users } from "lucide-react";
import Image from "next/image";

const credentials = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    detail: "FL License #ER13015809",
    description: "Fully registered electrical contractor. Licensed, bonded, and insured for your complete protection.",
  },
  {
    icon: Award,
    title: "Experienced Pros",
    detail: "15+ Years",
    description: "Over a decade of hands-on electrical experience across residential, commercial, and emergency work.",
  },
  {
    icon: MapPin,
    title: "Local to You",
    detail: "Pasco & Pinellas",
    description: "We live and work in your community. Fast response times and a reputation we stake our name on.",
  },
  {
    icon: Users,
    title: "Word of Mouth",
    detail: "500+ Customers",
    description: "We don't rely on ads. Our customers do the talking. That's how seriously we take every single job.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-brand-charcoal overflow-hidden"
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-red" />

      {/* Large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-brand-white/[0.02] uppercase tracking-tighter whitespace-nowrap pointer-events-none select-none">
        WATTS ELECTRIC
      </div>

      <div ref={ref} className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-brand-red block mb-4">
              About Watts Electric
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              Built On
              <br />
              <span className="text-brand-red">Honest Work.</span>
            </h2>

            <div className="space-y-6 text-brand-white/60 leading-relaxed">
              <p>
                Watts Electric was built on a simple idea: do excellent work,
                charge a fair price, and let the results speak for themselves.
                We&apos;re not the biggest electrical company in the Tampa Bay
                area — and we don&apos;t want to be.
              </p>
              <p>
                We&apos;re the one that shows up on time, explains exactly
                what needs to be done, does the work right the first time, and
                cleans up before we leave. Every customer gets treated like a
                neighbor — because most of them are.
              </p>
              <p>
                From a simple outlet repair to a full commercial buildout, we
                bring the same attention to detail and the same commitment to
                getting it right. That&apos;s why most of our work comes from
                referrals. When you call Watts Electric, you&apos;ll see why.
              </p>
            </div>

            {/* Email */}
            <div className="mt-8 pt-8 border-t border-brand-gray">
              <span className="text-xs font-mono uppercase tracking-wider text-brand-white/40 block mb-2">
                Email
              </span>
              <a
                href="mailto:mywattselectricllc@gmail.com"
                className="text-brand-red font-bold hover:underline text-lg"
              >
                mywattselectricllc@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Right - Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Professional image */}
            <div className="relative h-64 mb-6 overflow-hidden border-l-4 border-brand-red">
              <Image
                src="/images/about-professional.jpg"
                alt="Professional electrician"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/50 to-transparent" />
            </div>

            {credentials.map((cred, i) => (
              <motion.div
                key={cred.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="group relative border border-brand-gray/50 p-6 md:p-8 hover:border-brand-red/50 transition-colors"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-brand-red/10 flex items-center justify-center shrink-0 transform -skew-x-3 group-hover:bg-brand-red/20 transition-colors">
                    <cred.icon
                      className="w-7 h-7 text-brand-red"
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-black uppercase tracking-tight">
                        {cred.title}
                      </h3>
                      <span className="text-[10px] font-mono text-brand-red bg-brand-red/10 px-2 py-0.5 tracking-wider">
                        {cred.detail}
                      </span>
                    </div>
                    <p className="text-sm text-brand-white/50 leading-relaxed">
                      {cred.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
