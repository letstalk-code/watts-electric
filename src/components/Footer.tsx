"use client";

import { Zap, Phone, Mail, MapPin } from "lucide-react";

const serviceLinks = [
  "New Construction",
  "Remodels",
  "Generators",
  "Security Cameras",
  "Home Inspections",
  "Network Cabling",
  "Commercial",
  "Emergency Service",
];

const serviceAreas = [
  "Trinity",
  "Palm Harbor",
  "New Port Richey",
  "Clearwater",
  "Tarpon Springs",
  "Holiday",
  "Dunedin",
  "Port Richey",
];

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t-2 border-brand-gray">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-red flex items-center justify-center transform -skew-x-3">
                <Zap className="w-6 h-6 text-white" strokeWidth={3} />
              </div>
              <div className="leading-none">
                <span className="text-lg font-black tracking-tighter text-brand-white uppercase">
                  WATTS
                </span>
                <span className="block text-[10px] font-mono text-brand-red tracking-widest">
                  ELECTRIC, LLC
                </span>
              </div>
            </div>
            <p className="text-sm text-brand-white/50 leading-relaxed mb-6">
              Licensed, bonded & insured electrical contractor serving Pasco &
              Pinellas counties. Detailed work. Honest estimates.
            </p>
            <div className="space-y-3">
              <a
                href="tel:7274848618"
                className="flex items-center gap-2 text-brand-white/70 hover:text-brand-red transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-brand-red" />
                727-484-8618
              </a>
              <a
                href="mailto:mywattselectricllc@gmail.com"
                className="flex items-center gap-2 text-brand-white/70 hover:text-brand-red transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-brand-red" />
                mywattselectricllc@gmail.com
              </a>
              <div className="flex items-center gap-2 text-brand-white/70 text-sm">
                <MapPin className="w-4 h-4 text-brand-red" />
                Pasco & Pinellas County, FL
              </div>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-brand-white mb-6 border-b border-brand-gray pb-3">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-brand-white/50 hover:text-brand-red transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas column */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-brand-white mb-6 border-b border-brand-gray pb-3">
              Service Areas
            </h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <span className="text-sm text-brand-white/50">
                    {area}, FL
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Info column */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-brand-white mb-6 border-b border-brand-gray pb-3">
              Credentials
            </h4>
            <div className="space-y-4">
              <div className="bg-brand-charcoal p-4 border-l-3 border-brand-red"
                style={{ borderLeftWidth: "3px", borderLeftColor: "var(--color-brand-red)" }}
              >
                <span className="text-xs font-mono uppercase tracking-wider text-brand-white/40 block mb-1">
                  License Number
                </span>
                <span className="text-sm font-bold text-brand-white">
                  #ER13015809
                </span>
              </div>
              <div className="bg-brand-charcoal p-4 border-l-3 border-brand-red"
                style={{ borderLeftWidth: "3px", borderLeftColor: "var(--color-brand-red)" }}
              >
                <span className="text-xs font-mono uppercase tracking-wider text-brand-white/40 block mb-1">
                  Status
                </span>
                <span className="text-sm font-bold text-brand-white">
                  Licensed, Bonded & Insured
                </span>
              </div>
              <div className="bg-brand-charcoal p-4 border-l-3 border-brand-red"
                style={{ borderLeftWidth: "3px", borderLeftColor: "var(--color-brand-red)" }}
              >
                <span className="text-xs font-mono uppercase tracking-wider text-brand-white/40 block mb-1">
                  Type
                </span>
                <span className="text-sm font-bold text-brand-white">
                  Registered Electrical Contractor
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-gray">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-white/30 font-mono">
            &copy; {new Date().getFullYear()} Watts Electric, LLC. All rights
            reserved.
          </p>
          <p className="text-xs text-brand-white/30 font-mono">
            Residential &bull; Commercial &bull; Emergency Service
          </p>
        </div>
      </div>
    </footer>
  );
}
