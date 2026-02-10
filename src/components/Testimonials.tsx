"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mike R.",
    location: "Trinity, FL",
    text: "Had a whole-house rewire done and couldn't be more impressed. The crew was professional, clean, and finished ahead of schedule. Honest pricing too — the estimate matched the final bill exactly.",
    service: "Whole-House Rewire",
  },
  {
    name: "Sarah T.",
    location: "Palm Harbor, FL",
    text: "Our generator install was seamless. They explained everything, handled the permits, and now we're ready for hurricane season. Best money we've ever spent on our home.",
    service: "Generator Install",
  },
  {
    name: "James & Linda K.",
    location: "New Port Richey, FL",
    text: "Called for an emergency at 10pm on a Saturday — they actually answered and came out within the hour. Fixed the issue fast and the price was fair. You can't beat that kind of service.",
    service: "Emergency Service",
  },
  {
    name: "David P.",
    location: "Clearwater, FL",
    text: "Used Watts Electric for our office buildout. Every outlet, every light, every data run was exactly where we needed it. Detail-oriented doesn't even begin to describe these guys.",
    service: "Commercial Buildout",
  },
  {
    name: "Rachel M.",
    location: "Tarpon Springs, FL",
    text: "Had security cameras installed throughout our property. Clean wiring, everything hidden — you'd never know it was there. They even helped us set up the app on our phones.",
    service: "Security Cameras",
  },
  {
    name: "Tom H.",
    location: "Holiday, FL",
    text: "Third electrician we called for a tricky kitchen remodel. The first two said it couldn't be done the way we wanted. Watts Electric figured it out and nailed it. Highly recommend.",
    service: "Kitchen Remodel",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 bg-brand-black overflow-hidden"
    >
      {/* Geometric accents */}
      <div className="absolute top-20 right-0 w-40 h-40 border-r-4 border-t-4 border-brand-red/10" />
      <div className="absolute bottom-20 left-0 w-40 h-40 border-l-4 border-b-4 border-brand-red/10" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-brand-red block mb-4">
            What Our Customers Say
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] max-w-4xl">
            The Results Speak
            <br />
            <span className="text-brand-red">For Themselves.</span>
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group relative border border-brand-gray/50 p-8 hover:border-brand-red/50 transition-colors"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-brand-red/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-brand-yellow text-brand-yellow"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-brand-white/70 leading-relaxed mb-6 text-sm">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-brand-gray/50 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-sm font-bold text-brand-white">
                      {testimonial.name}
                    </span>
                    <span className="text-xs text-brand-white/40 font-mono">
                      {testimonial.location}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-brand-red bg-brand-red/10 px-2 py-1">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
