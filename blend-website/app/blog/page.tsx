import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type BlogPost = {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  tags: string[];
  slug: string;
};

const posts: BlogPost[] = [
  {
    title: "How does design even help?",
    date: "Sunday , 1 Jan 2023",
    excerpt: "Discover how thoughtful design transforms user experience and drives business success.",
    image: "/placeholders/blog-1.svg",
    tags: ["Design", "Research", "Presentation"],
    slug: "how-does-design-even-help",
  },
  {
    title: "The thing about events",
    date: "Sunday , 1 Jan 2023",
    excerpt: "Unravel the unique aspects that make events a powerful tool for connection and impact.",
    image: "/placeholders/blog-2.svg",
    tags: ["Design", "Research", "Presentation"],
    slug: "the-thing-about-events",
  },
  {
    title: "How to really measure productivity",
    date: "Sunday , 1 Jan 2023",
    excerpt: "Explore effective techniques to quantify productivity and enhance your team's performance.",
    image: "/placeholders/blog-3.svg",
    tags: ["Design", "Research", "Presentation"],
    slug: "how-to-really-measure-productivity",
  },
  {
    title: "To VR or not to VR",
    date: "Sunday , 1 Jan 2023",
    excerpt: "Delve into the pros and cons of virtual reality and its potential in modern applications.",
    image: "/placeholders/blog-4.svg",
    tags: ["Design", "Research", "Presentation"],
    slug: "to-vr-or-not-to-vr",
  },
];

const filters = ["Category", "Date"];
const tags = ["Web Development", "Social Media", "Digital Marketing"];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-[#0b0b0b]">
      <Navbar />
      <div className="container-max pb-16 pt-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold leading-tight sm:text-[2.6rem]">The world of events and digital</h1>
            <div className="flex flex-wrap items-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className="flex items-center gap-2 rounded-full border border-[#cfd2d8] px-3 py-1 text-sm font-medium text-[#1f1f21]"
                >
                  {filter} <span className="text-xs">▾</span>
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-2 rounded-full border border-[#cfd2d8] px-3 py-1 text-sm text-[#1f1f21]"
              >
                {tag} <span className="text-xs">✕</span>
              </span>
            ))}
            <button className="rounded-full border border-[#cfd2d8] px-3 py-1 text-sm text-[#1f1f21]">Clear All</button>
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.title} href={`/blog/${post.slug}`} className="flex flex-col gap-3">
              <div className="overflow-hidden rounded-[18px] shadow-[0_12px_28px_rgba(0,0,0,0.12)]">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={900}
                  height={620}
                  className="h-[280px] w-full object-cover"
                />
              </div>
              <div className="text-xs font-semibold text-[#16a34a]">{post.date}</div>
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold text-[#0b0b0b]">{post.title}</h3>
                <span className="text-lg">↗</span>
              </div>
              <p className="text-sm leading-6 text-[#3a3c40]">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-[#e5e7eb] px-3 py-1 text-xs font-semibold text-[#1f1f21]">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-1">
          {["«", "‹", 1, 2, 3, "…", 10, "›", "»"].map((label, idx) => (
            <button
              key={`${label}-${idx}`}
              className={`flex h-6 min-w-[24px] items-center justify-center rounded-sm border border-black/10 text-xs font-semibold ${
                label === 1 ? "bg-[#22c55e] text-black" : "bg-white text-black"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
