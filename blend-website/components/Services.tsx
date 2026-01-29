"use client";

import { Instagram, Monitor, Plus } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { servicesContent } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="bg-white pb-16 pt-4">
      <div className="container-max relative">
        <div className="absolute -left-24 top-10 h-40 w-40 rounded-full bg-gradient-to-br from-green-200/70 to-blue-200/40 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-44 w-44 rounded-full bg-gradient-to-br from-pink-200/70 to-purple-200/50 blur-3xl" />
        <Reveal>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-gradient-to-r from-green-300 to-pink-400" />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9aa0ac]">
              Services
            </p>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-[#0e0e10]">{servicesContent.title}</h2>
            <p className="text-base text-[#3c3f46]">{servicesContent.description}</p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Reveal delay={0.05}>
            <motion.div
              className="flex flex-col gap-3 rounded-3xl bg-[#0f0f12] p-6 text-white shadow-pill"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold">{servicesContent.digitalLabel}</h3>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-pink-500">
                <Monitor className="h-4 w-4 text-white" aria-hidden="true" />
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {servicesContent.digital.map((item) => (
                <motion.div
                  key={item}
                  className="flex items-center justify-between rounded-full bg-[#15151b] px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white/90"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{item}</span>
                  <Plus className="h-4 w-4 text-white/80" aria-hidden="true" />
                </motion.div>
              ))}
            </div>
            </motion.div>
          </Reveal>
          <Reveal delay={0.1}>
            <motion.div
              className="flex flex-col gap-3 rounded-3xl bg-[#0f0f12] p-6 text-white shadow-pill"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold">{servicesContent.experientialLabel}</h3>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-pink-500 to-indigo-500">
                <Instagram className="h-4 w-4 text-white" aria-hidden="true" />
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {servicesContent.experiential.map((item) => (
                <motion.div
                  key={item}
                  className="flex items-center justify-between rounded-full bg-[#15151b] px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white/90"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{item}</span>
                  <Plus className="h-4 w-4 text-white/80" aria-hidden="true" />
                </motion.div>
              ))}
            </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
