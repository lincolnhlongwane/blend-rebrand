"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { MotionLink } from "@/components/MotionLink";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type WorkItem = {
  title: string;
  project: string;
  image: string;
  tags: string[];
  slug: string;
};

const workItems: WorkItem[] = [
  {
    title: "Google",
    project: "Project Name",
    image: "/placeholders/work-google.svg",
    tags: ["Event Management", "Photography", "Videography"],
    slug: "google",
  },
  {
    title: "Deloitte",
    project: "Project Name",
    image: "/placeholders/work-deloitte.svg",
    tags: ["Social Media", "Staffing", "Web Development"],
    slug: "deloitte",
  },
  {
    title: "Geberit",
    project: "Project Name",
    image: "/placeholders/work-geberit.svg",
    tags: ["Videography", "Photography", "Animation"],
    slug: "geberit",
  },
  {
    title: "Shoprite",
    project: "Project Name",
    image: "/placeholders/work-deloitte.svg",
    tags: ["Swag and Gifting", "Email Marketing", "Social Media"],
    slug: "shoprite",
  },
];

const filters = ["Experiences", "Digital", "Digital Marketing"];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0f] text-white">
      <Navbar />
      <div className="container-max pb-16 pt-12">
        <div className="grid gap-12 md:grid-cols-[1.1fr,1fr]">
          <Reveal className="flex flex-col gap-4">
            <h1 className="text-4xl font-semibold leading-tight sm:text-[2.6rem]">Case Studies</h1>
            <p className="max-w-xl text-base leading-relaxed text-white/80">
              Our success stories showcase innovative solutions brought to life with precision and creativity.
            </p>
          </Reveal>
          <Reveal delay={0.05} className="flex flex-col gap-3">
            <span className="text-sm font-semibold uppercase tracking-wide text-white/70">Filter By Type</span>
            <div className="flex flex-wrap items-center gap-2">
              {filters.map((filter) => (
                <motion.span
                  key={filter}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-1 text-sm text-white/90"
                  whileHover={{ y: -2 }}
                >
                  {filter} <span className="text-xs">✕</span>
                </motion.span>
              ))}
              <motion.button
                className="rounded-full border border-white/30 px-3 py-1 text-sm text-white/80"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Clear All
              </motion.button>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {workItems.map((item, index) => (
            <Reveal key={item.title} delay={0.05 * index}>
              <MotionLink
              key={item.title}
              href={`/work/${item.slug}`}
              className="relative overflow-hidden rounded-[24px] bg-white/5 shadow-[0_18px_48px_rgba(0,0,0,0.4)]"
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={1200}
                height={800}
                className="h-[320px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/20 to-black/55" />
              <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-4 py-3">
                <div className="text-2xl font-semibold">{item.title}</div>
                <div className="text-sm font-semibold text-white/85">{item.project}</div>
              </div>
              <div className="absolute bottom-3 left-0 right-0 flex flex-wrap gap-2 px-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-black/70 px-3 py-2 text-xs font-semibold text-white shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              </MotionLink>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {[1, 2, 3].map((page) => (
            <motion.button
              key={page}
              className={`flex h-6 w-6 items-center justify-center rounded-full border border-black/10 text-xs font-semibold ${
                page === 1 ? "bg-[#35cd82] text-black" : "bg-white text-black"
              }`}
              aria-label={`Page ${page}`}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              {page}
            </motion.button>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
