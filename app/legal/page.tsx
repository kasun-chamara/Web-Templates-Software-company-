import Link from "next/link";
import LegalNav from "@/components/LegalNav";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Legal — Kapingar" };

const LAST_UPDATED = "24 September 2026";
const EMAIL = "info@kapingar.com";

interface LegalSection {
  id: string;
  title: string;
  intro: string;
  blocks: { heading: string; body: string[] }[];
}

const sections: LegalSection[] = [
  {
    id: "privacy",
    title: "Privacy Policy",
    intro:
      "This policy explains what personal information Kapingar collects when you use our website or work with us, how we use it, and the choices you have.",
    blocks: [
      {
        heading: "Information we collect",
        body: [
          "Details you give us — such as your name, email address, phone number, company name and project details when you fill in a contact form, request access or message us on WhatsApp.",
          "Technical data — such as your browser type, device, IP address and pages visited, collected automatically to keep the site secure and working well.",
          "Project data — files, content and credentials you share with us so we can design, build, host or support your software.",
        ],
      },
      {
        heading: "How we use your information",
        body: [
          "To reply to enquiries, prepare proposals and deliver the services you request.",
          "To build, host, maintain and secure the websites, apps and platforms we create for you.",
          "To improve our website and services, and to send updates only where you have agreed to receive them.",
          "To meet legal, accounting and security obligations.",
        ],
      },
      {
        heading: "Sharing your information",
        body: [
          "We never sell your personal information. We share it only with trusted providers that help us run our services — for example hosting, cloud, email and analytics providers — and only as much as they need to do their job.",
          "We may disclose information where required by law or to protect the rights and safety of our clients, users or company.",
        ],
      },
      {
        heading: "Data security and retention",
        body: [
          "We use industry-standard safeguards including SSL encryption, access controls and regular updates to protect your data.",
          "We keep personal information only for as long as needed for the purposes above, or as required by law, and then delete or anonymise it.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          `You can ask to access, correct, delete or export your personal information, or object to how we use it, at any time by emailing ${EMAIL}. We will respond within 30 days.`,
        ],
      },
    ],
  },
  {
    id: "terms",
    title: "Terms of Service",
    intro:
      "These terms apply to your use of the Kapingar website and to the software development, design, hosting and support services we provide.",
    blocks: [
      {
        heading: "Our services",
        body: [
          "The scope, timeline, price and deliverables of each project are set out in a written proposal or agreement. If those documents differ from these terms, the project agreement takes priority.",
        ],
      },
      {
        heading: "Your responsibilities",
        body: [
          "Provide accurate information, content and timely feedback so we can deliver on schedule.",
          "Make sure you have the rights to any content, logos, images or data you give us to use.",
          "Keep account passwords and access credentials we provide secure.",
        ],
      },
      {
        heading: "Payments",
        body: [
          "Invoices are payable within the period stated on the invoice. We may pause work, hosting or support on overdue accounts after giving notice.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "Once a project is paid in full, you own the final deliverables created specifically for you. Kapingar keeps ownership of its pre-existing tools, code libraries and know-how, and grants you a licence to use them as part of your project.",
          "Unless you ask us not to, we may mention your project in our portfolio.",
        ],
      },
      {
        heading: "Warranties and liability",
        body: [
          "We build with care and fix defects reported within the warranty period agreed for your project. We cannot guarantee that software will be completely error-free or uninterrupted.",
          "To the extent permitted by law, our total liability for any claim is limited to the fees you paid for the service concerned, and we are not liable for indirect or consequential losses.",
        ],
      },
      {
        heading: "Termination",
        body: [
          "Either party may end an agreement with written notice as set out in the project agreement. You pay for work completed up to the date of termination.",
        ],
      },
      {
        heading: "Governing law",
        body: [
          "These terms are governed by the laws of England and Wales, and any disputes will be handled by its courts.",
        ],
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookie Policy",
    intro:
      "Cookies are small text files stored on your device when you visit a website. This policy explains which cookies we use and how you can control them.",
    blocks: [
      {
        heading: "Cookies we use",
        body: [
          "Essential cookies — needed for the site to work, such as remembering your light or dark theme preference and keeping forms secure.",
          "Analytics cookies — help us understand how visitors use the site so we can improve it. The data is aggregated and does not identify you personally.",
          "Third-party cookies — some features, such as embedded maps, videos or WhatsApp chat links, may set their own cookies under those providers' policies.",
        ],
      },
      {
        heading: "Managing cookies",
        body: [
          "You can block or delete cookies at any time in your browser settings. Blocking essential cookies may stop some parts of the site from working correctly.",
        ],
      },
    ],
  },
];

export default function LegalPage() {
  return (
    <>
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 text-center bg-white dark:bg-zinc-950">
        <div className="max-w-3xl mx-auto px-6">
          <span className="section-tag mb-6">Legal</span>
          <h1 className="text-[38px] sm:text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mt-4 leading-[1.08]">
            Policies &amp;<span className="gradient-text block">Terms</span>
          </h1>
          <p className="text-slate-500 dark:text-zinc-400 text-base sm:text-lg mt-6 leading-relaxed">
            How we handle your data, the terms of working with us, and how we use cookies.
          </p>
          <p className="mt-3 text-xs uppercase tracking-widest text-slate-400 dark:text-zinc-500">
            Last updated {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="pb-20 sm:pb-24 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-16">
          {/* In-page navigation — highlights the section in view */}
          <LegalNav items={sections.map(({ id, title }) => ({ id, title }))} />

          <div className="space-y-16">
            {sections.map((s) => (
              <article key={s.id} id={s.id} className="scroll-mt-32">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{s.title}</h2>
                <p className="mt-3 text-slate-500 dark:text-zinc-400 leading-relaxed">{s.intro}</p>

                <div className="mt-8 space-y-8">
                  {s.blocks.map((b) => (
                    <div key={b.heading}>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{b.heading}</h3>
                      <ul className="mt-3 space-y-2">
                        {b.body.map((line) => (
                          <li
                            key={line}
                            className="relative pl-5 text-[15px] leading-relaxed text-slate-600 dark:text-zinc-400 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#FF2B00]"
                          >
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            ))}

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Questions?</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600 dark:text-zinc-400">
                Email us at{" "}
                <a href={`mailto:${EMAIL}`} className="font-medium text-[#FF2B00] hover:underline">
                  {EMAIL}
                </a>{" "}
                or{" "}
                <Link href="/contact" className="font-medium text-[#FF2B00] hover:underline">
                  contact us
                </Link>{" "}
                and we&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
