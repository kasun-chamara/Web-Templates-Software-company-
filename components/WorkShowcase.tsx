import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ShowcaseProject {
  title: string;
  category: string;
  desc: string;
  image: string;
  logo?: boolean;
}

const showcase: ShowcaseProject[] = [
  {
    title: "Astrology Booking Platform",
    category: "Astrology · Booking System",
    desc: "A bilingual (English/Sinhala) website where clients book consultations, check horoscopes and contact the astrologer instantly by call or WhatsApp.",
    image: "/images/Work01.png",
  },
  {
    title: "0260 Detailing",
    category: "Automotive · Business Website",
    desc: "A premium site for a vehicle detailing company, with service listings, an interactive before/after slider and easy booking enquiries.",
    image: "/images/work02.png",
  },
  {
    title: "Drive with AAA",
    category: "Education · Driving School",
    desc: "A driving school website for Sheffield and Rotherham — lesson types, packages, pass results and first-lesson booking in one place.",
    image: "/images/work03.png",
  },
  {
    title: "Presto Order Tracking",
    category: "Presto · Web Platform",
    desc: "A web platform where customers follow their orders live, from kitchen to doorstep.",
    image: "/images/nav-logo-light.png",
    logo: true,
  },
  {
    title: "Presto Mobile App",
    category: "Presto · Mobile App",
    desc: "An order-tracking mobile app, so customers can place orders and follow them in real time from their phone.",
    image: "/images/nav-logo-light.png",
    logo: true,
  },
  {
    title: "Presto Restaurant Management",
    category: "Presto · Management & Access",
    desc: "Menus, orders and staff in one system, with role-based access so every team member sees only what they need.",
    image: "/images/nav-logo-light.png",
    logo: true,
  },
  {
    title: "Presto Management Hub",
    category: "Presto · Admin Hub",
    desc: "A central hub where the Presto team manages restaurants, users and reports across the whole platform.",
    image: "/images/nav-logo-light.png",
    logo: true,
  },
];

export default function WorkShowcase() {
  return (
    <section className="bg-white pb-20 dark:bg-zinc-950 sm:pb-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {showcase.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_4px_20px_-8px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-1 hover:border-[#FF2B00]/40 hover:shadow-[0_20px_40px_-16px_rgba(255,43,0,0.25)] dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/30"
          >
            {project.logo ? (
              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 to-white dark:from-zinc-800 dark:to-zinc-900">
                <Image
                  src={project.image}
                  alt={`${project.title} logo`}
                  width={360}
                  height={124}
                  className="h-auto w-1/2 object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            ) : (
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            )}

            <div className="flex flex-1 flex-col p-6">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-zinc-400">
                {project.category}
              </span>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-zinc-400">
                {project.desc}
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-[#FF2B00] px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e02600]"
              >
                Request access
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
