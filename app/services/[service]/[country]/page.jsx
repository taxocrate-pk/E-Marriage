import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Globe2,
  MessageCircle,
} from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-shell";
import {
  getServiceCountryPage,
  serviceSlugs,
  serviceCountrySlugs,
} from "@/lib/service-country-data";
import LongFormGuide from "@/components/long-form-guide";

export function generateStaticParams() {
  return serviceSlugs.flatMap((service) =>
    serviceCountrySlugs.map((country) => ({ service, country })),
  );
}

export async function generateMetadata({ params }) {
  const { service, country } = await params;
  const page = getServiceCountryPage(service, country);
  if (!page) return {};
  const url = `https://e-marriages.com/services/${service}/${country}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: "website",
    },
  };
}

export default async function ServiceCountryPage({ params }) {
  const { service, country } = await params;
  const page = getServiceCountryPage(service, country);
  if (!page) notFound();
  const faqs = [
    [
      `Is ${page.service.name.toLowerCase()} recognised in ${page.country.name}?`,
      `Recognition depends on the legal procedure used, both parties’ capacity and consent, registration, official evidence and the particular ${page.country.adjective} purpose for which recognition is requested.`,
    ],
    [
      `Can the documents be used for immigration in ${page.country.name}?`,
      `Potentially, but immigration authorities apply their own definitions and evidence rules. A marriage record does not itself guarantee approval.`,
    ],
    [
      "Must both parties attend in person?",
      "Attendance requirements depend on the jurisdiction and chosen procedure. Remote participation and proxy authority are not treated uniformly.",
    ],
    [
      "What documents should we prepare?",
      "Identity, nationality, address and marital-status evidence are commonly reviewed, followed by the marriage record, translation and authentication documents applicable to the case.",
    ],
    [
      "Is an apostille or attestation required?",
      "That depends on the issuing country, destination authority and document type. Authentication confirms origin, not substantive validity.",
    ],
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: page.title,
        areaServed: page.country.name,
        provider: { "@type": "Organization", name: "E-Marriages" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };
  return (
    <div className="bg-ivory text-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-navy px-6 pb-24 pt-36 lg:px-10 lg:pb-32 lg:pt-44">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_25%,rgba(201,171,112,0.17),transparent_30%)]" />
          <div className="relative mx-auto max-w-7xl">
            <nav className="mb-10 flex flex-wrap gap-2 text-xs text-white/45">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/our-services">Our Services</Link>
              <span>/</span>
              <span>{page.service.name}</span>
              <span>/</span>
              <span>{page.country.name}</span>
            </nav>
            <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-champagne">
                  <span className="h-px w-10 bg-champagne" />
                  {page.service.name} by country
                </p>
                <h1 className="max-w-4xl font-serif text-5xl leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-[5rem]">
                  {page.heading}
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
                  {page.intro}
                </p>
                <a
                  href="#enquire"
                  className="mt-10 inline-flex items-center gap-3 rounded-full bg-champagne px-6 py-3.5 text-sm font-medium text-navy hover:bg-white"
                >
                  Discuss Your Case <ArrowUpRight className="size-4" />
                </a>
              </div>
              <aside className="rounded-2xl border border-white/15 bg-white/[0.06] p-7">
                <Globe2 className="size-7 text-champagne" />
                <p className="mt-6 text-xs uppercase tracking-[0.2em] text-champagne">
                  Jurisdiction matters
                </p>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  The marriage procedure and the rules governing its later use
                  may belong to different legal systems. Both require attention.
                </p>
              </aside>
            </div>
          </div>
        </section>
        <section className="px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="mb-5 text-xs uppercase tracking-[0.24em] text-champagne">
                Key considerations
              </p>
              <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-[1.08] md:text-5xl">
                A route shaped around the service and country involved.
              </h2>
            </div>
            <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-navy/10 md:grid-cols-2">
              {page.issues.map(([title, text], i) => (
                <article key={title} className="bg-ivory p-8 lg:p-10">
                  <span className="font-serif text-3xl text-champagne">
                    0{i + 1}
                  </span>
                  <h3 className="mt-7 font-serif text-2xl">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-navy/55">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-navy px-6 py-24 text-white lg:px-10">
          <div className="mx-auto max-w-7xl">
            <h2 className="max-w-3xl font-serif text-4xl md:text-5xl">
              Information normally reviewed before proceeding.
            </h2>
            <div className="mt-12 grid gap-px border border-white/15 bg-white/15 md:grid-cols-3">
              {[
                "Both parties’ identity, nationality and current country",
                "Age, marital status and evidence of free consent",
                "Proposed ceremony, witnesses and attendance method",
                "Registration authority and official marriage record",
                "Destination use, including immigration or civil registration",
                "Translation, apostille or attestation where applicable",
              ].map((x) => (
                <div
                  key={x}
                  className="flex gap-3 bg-navy p-6 text-sm leading-6 text-white/70"
                >
                  <Check className="mt-1 size-4 shrink-0 text-champagne" />
                  {x}
                </div>
              ))}
            </div>
          </div>
        </section>
        <LongFormGuide
          subject={`${page.service.name} for ${page.country.name}`}
          country={page.country.name}
          service={page.service.name}
        />
        <section className="bg-white px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-serif text-4xl md:text-5xl">
              Frequently asked questions
            </h2>
            <div className="mt-14 divide-y divide-navy/15 border-y border-navy/15">
              {faqs.map(([q, a]) => (
                <details key={q} className="group">
                  <summary className="flex cursor-pointer list-none justify-between gap-6 py-6 font-serif text-xl">
                    <span>{q}</span>
                    <ChevronDown className="size-5 shrink-0 text-champagne transition group-open:rotate-180" />
                  </summary>
                  <p className="max-w-3xl pb-7 pr-10 text-sm leading-7 text-navy/60">
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section id="enquire" className="bg-navy px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-6 text-xs uppercase tracking-[0.24em] text-champagne">
              Discuss the exact route
            </p>
            <h2 className="font-serif text-5xl leading-[1.04] text-white md:text-7xl">
              Start with the countries involved.
            </h2>
            <a
              href="mailto:hello@e-marriages.com"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-champagne px-7 py-4 text-sm font-medium text-navy hover:bg-white"
            >
              Discuss Your Case <MessageCircle className="size-4" />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
