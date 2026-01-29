"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { latestWork } from "@/lib/data";

export default function LatestWork() {
  return (
    <section id="work" className="relative overflow-hidden py-16 text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/latest-work/gradients.png"
          alt="Decorative gradients"
          fill
          priority
          className="object-cover opacity-100"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 -z-5 bg-[#0d0f15]/85" />
      <div className="container-max relative z-10 flex items-center gap-6 py-6">
        <Reveal className="relative w-full max-w-[320px]">
          <h2 className="text-5xl font-bold leading-[1.1] text-white">{latestWork.title}</h2>
          <motion.button
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#43d1c2] to-[#f06fa9] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_26px_rgba(0,0,0,0.25)]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View Case Studies</span>
            <span className="text-lg">⚡</span>
          </motion.button>
        </Reveal>

        <div className="grid flex-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {latestWork.items.map((item, index) => (
            <Reveal key={item.client} delay={0.05 * index}>
              <motion.div
                className="group relative overflow-hidden rounded-[28px] bg-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                <Image
                  src={item.image}
                  alt={item.client}
                  width={900}
                  height={1400}
                  className="h-[520px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black/60" />
                <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-4 pt-4">
                  <div className="text-3xl font-semibold text-white drop-shadow-lg">{item.client}</div>
                  <motion.div
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-[#0c0c0f] shadow"
                    whileHover={{ scale: 1.1 }}
                  >
                    ▶
                  </motion.div>
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex flex-col items-start gap-2 px-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#35373b]/90 px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_16px_rgba(0,0,0,0.2)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
