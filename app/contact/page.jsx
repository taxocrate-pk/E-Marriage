"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, ShieldCheck } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import EditorialDepth from "@/components/editorial-depth";

export default function ContactPage() {
  const [status, setStatus] = useState("");
  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `International marriage enquiry — ${data.get("country") || "countries to confirm"}`,
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nYour country: ${data.get("country")}\nPartner's country: ${data.get("partnerCountry")}\nService: ${data.get("service")}\n\nSituation:\n${data.get("message")}`,
    );
    setStatus(
      "Your email application is opening with the enquiry details. Please review and send the message from there.",
    );
    window.location.href = `mailto:hello@e-marriages.com?subject=${subject}&body=${body}`;
  }
  return (
    <div className="bg-ivory text-navy">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-navy px-6 pb-20 pt-36 lg:px-10 lg:pb-28 lg:pt-44">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_25%,rgba(201,171,112,0.17),transparent_30%)]" />
          <div className="relative mx-auto max-w-6xl">
            <Link href="/" className="text-xs text-white/45">
              Home / Contact
            </Link>
            <p className="mb-6 mt-10 text-xs uppercase tracking-[0.24em] text-champagne">
              Begin with the facts
            </p>
            <h1 className="max-w-4xl font-serif text-5xl leading-[1.02] tracking-[-0.04em] text-white md:text-7xl">
              Tell us where both parties are located.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
              The countries, nationalities, marital status and intended use of
              the documents help identify the questions that should be reviewed.
            </p>
          </div>
        </section>
        <section className="px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.68fr_1.32fr]">
            <aside>
              <Mail className="size-7 text-champagne" />
              <h2 className="mt-6 font-serif text-3xl">Contact details</h2>
              <a
                href="mailto:hello@e-marriages.com"
                className="mt-4 block text-sm text-navy/60 hover:text-navy"
              >
                hello@e-marriages.com
              </a>
              <div className="mt-10 border-l border-champagne pl-5">
                <p className="flex items-center gap-2 text-sm font-medium">
                  <ShieldCheck className="size-4 text-champagne" />
                  Privacy reminder
                </p>
                <p className="mt-3 text-sm leading-6 text-navy/55">
                  Do not attach original identity documents or sensitive
                  financial records to an initial email.
                </p>
              </div>
            </aside>
            <form
              onSubmit={submit}
              className="grid gap-6 rounded-2xl bg-white p-7 shadow-[0_20px_60px_rgba(24,24,39,0.06)] sm:grid-cols-2 lg:p-10"
            >
              <label className="text-sm">
                Your name
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="mt-2 w-full rounded-lg border border-navy/15 bg-ivory px-4 py-3 outline-none focus:border-champagne"
                />
              </label>
              <label className="text-sm">
                Email address
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="mt-2 w-full rounded-lg border border-navy/15 bg-ivory px-4 py-3 outline-none focus:border-champagne"
                />
              </label>
              <label className="text-sm">
                Your current country
                <input
                  required
                  name="country"
                  className="mt-2 w-full rounded-lg border border-navy/15 bg-ivory px-4 py-3 outline-none focus:border-champagne"
                />
              </label>
              <label className="text-sm">
                Partner’s current country
                <input
                  required
                  name="partnerCountry"
                  className="mt-2 w-full rounded-lg border border-navy/15 bg-ivory px-4 py-3 outline-none focus:border-champagne"
                />
              </label>
              <label className="text-sm sm:col-span-2">
                Type of assistance
                <select
                  name="service"
                  className="mt-2 w-full rounded-lg border border-navy/15 bg-ivory px-4 py-3 outline-none focus:border-champagne"
                >
                  <option>International or cross-border marriage</option>
                  <option>Online or remote marriage</option>
                  <option>Online Nikah</option>
                  <option>Court marriage</option>
                  <option>Marriage documentation</option>
                  <option>Recognition or immigration use</option>
                </select>
              </label>
              <label className="text-sm sm:col-span-2">
                Briefly describe your situation
                <textarea
                  required
                  name="message"
                  rows="6"
                  className="mt-2 w-full resize-y rounded-lg border border-navy/15 bg-ivory px-4 py-3 outline-none focus:border-champagne"
                />
              </label>
              <label className="flex items-start gap-3 text-xs leading-5 text-navy/60 sm:col-span-2">
                <input
                  required
                  type="checkbox"
                  className="mt-1 accent-[#c9ab70]"
                />
                I understand this enquiry does not itself create a lawyer-client
                relationship and agree to the privacy policy.
              </label>
              <div className="sm:col-span-2">
                <button className="inline-flex items-center gap-3 rounded-full bg-navy px-7 py-4 text-sm font-medium text-white hover:bg-champagne hover:text-navy">
                  Prepare email enquiry <ArrowUpRight className="size-4" />
                </button>
                {status && (
                  <p
                    role="status"
                    className="mt-4 text-sm leading-6 text-navy/60"
                  >
                    {status}
                  </p>
                )}
              </div>
            </form>
          </div>
        </section>
        <EditorialDepth type="contact" />
      </main>
      <SiteFooter />
    </div>
  );
}
