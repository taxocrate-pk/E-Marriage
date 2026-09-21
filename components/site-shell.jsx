'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, ChevronRight, HeartHandshake, Menu, X } from 'lucide-react'

export function Logo() {
  return <Link href="/" className="flex items-center gap-3" aria-label="e-Marriages.com home">
    <span className="flex size-10 items-center justify-center rounded-full border border-champagne/50 text-champagne"><HeartHandshake className="size-5" strokeWidth={1.5} /></span>
    <span className="font-serif text-[1.2rem] tracking-[-0.02em] text-white">e-Marriages<span className="text-champagne">.com</span></span>
  </Link>
}

const countries = [['United Kingdom','united-kingdom'],['United States','united-states'],['Canada','canada'],['Europe','europe'],['Australia','australia'],['UAE & Middle East','uae-middle-east'],['Pakistan','pakistan']]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="absolute inset-x-0 top-0 z-50">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
      <Logo />
      <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
        <Link href="/" className="text-sm text-white/70 transition hover:text-champagne">Home</Link>
        <div className="group/services relative py-2"><Link href="/our-services" className="text-sm text-white/70 transition hover:text-champagne">Our Services</Link><div className="invisible absolute left-0 top-full w-72 translate-y-2 rounded-xl border border-white/10 bg-navy p-2 opacity-0 shadow-2xl transition group-hover/services:visible group-hover/services:translate-y-0 group-hover/services:opacity-100">
          {[['Court Marriage','court-marriage'],['Online Nikah','online-nikah']].map(([label,slug])=><div key={slug} className="group/item relative"><Link href={`/${slug}`} className="flex items-center justify-between rounded-lg px-4 py-3 text-sm text-white/75 hover:bg-white/10 hover:text-champagne"><span>{label}</span><ChevronRight className="size-4"/></Link><div className="invisible absolute left-full top-0 ml-2 w-64 rounded-xl border border-white/10 bg-navy p-2 opacity-0 shadow-2xl transition group-hover/item:visible group-hover/item:opacity-100">{countries.map(([country,countrySlug])=><Link key={countrySlug} href={`/services/${slug}/${countrySlug}`} className="block rounded-lg px-4 py-3 text-xs text-white/65 hover:bg-white/10 hover:text-champagne">{country}</Link>)}</div></div>)}
          <div className="my-2 border-t border-white/10"/><Link href="/international-marriage" className="block rounded-lg px-4 py-3 text-sm text-white/75 hover:bg-white/10 hover:text-champagne">International Marriage</Link><Link href="/marriage-documentation" className="block rounded-lg px-4 py-3 text-sm text-white/75 hover:bg-white/10 hover:text-champagne">Marriage Documentation</Link>
        </div></div>
        <Link href="/blog" className="text-sm text-white/70 transition hover:text-champagne">Blog</Link>
        <Link href="/about" className="text-sm text-white/70 transition hover:text-champagne">About</Link>
        <Link href="/contact" className="text-sm text-white/70 transition hover:text-champagne">Contact Us</Link>
      </nav>
      <Link href="/contact" className="hidden items-center gap-2 rounded-full border border-champagne/70 px-5 py-2.5 text-sm text-champagne transition hover:bg-champagne hover:text-navy lg:flex">Discuss Your Case <ArrowUpRight className="size-4" /></Link>
      <button onClick={() => setOpen(!open)} className="text-white lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <div className="border-t border-white/10 bg-navy px-6 py-6 lg:hidden"><nav className="flex max-h-[75vh] flex-col gap-5 overflow-y-auto" aria-label="Mobile navigation"><Link href="/" onClick={()=>setOpen(false)} className="text-sm text-white">Home</Link><details><summary className="cursor-pointer list-none text-sm text-white">Our Services</summary><div className="mt-4 space-y-4 border-l border-white/10 pl-4">{[['Court Marriage','court-marriage'],['Online Nikah','online-nikah']].map(([label,slug])=><details key={slug}><summary className="cursor-pointer list-none text-sm text-white/75">{label}</summary><div className="mt-3 flex flex-col gap-3 border-l border-white/10 pl-4">{countries.map(([country,countrySlug])=><Link key={countrySlug} href={`/services/${slug}/${countrySlug}`} onClick={()=>setOpen(false)} className="text-xs text-white/55">{country}</Link>)}</div></details>)}<Link href="/international-marriage" onClick={()=>setOpen(false)} className="block text-sm text-white/75">International Marriage</Link><Link href="/marriage-documentation" onClick={()=>setOpen(false)} className="block text-sm text-white/75">Marriage Documentation</Link></div></details><Link href="/blog" onClick={()=>setOpen(false)} className="text-sm text-white">Blog</Link><Link href="/about" onClick={()=>setOpen(false)} className="text-sm text-white">About</Link><Link href="/contact" onClick={()=>setOpen(false)} className="text-sm text-white">Contact Us</Link><Link href="/contact" onClick={()=>setOpen(false)} className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-champagne px-5 py-3 text-sm text-navy">Discuss Your Case <ArrowUpRight className="size-4" /></Link></nav></div>}
  </header>
}

export function SiteFooter() {
  return <footer className="bg-navy px-6 pb-8 pt-16 text-white lg:px-10"><div className="mx-auto max-w-7xl"><div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]"><div><Logo /><p className="mt-6 max-w-xs text-sm leading-6 text-white/55">Thoughtful guidance for couples building a life across borders.</p><div className="mt-6 flex gap-4 text-xs text-white/50"><Link href="/about">About</Link><Link href="/contact">Contact</Link></div></div><div><p className="mb-5 text-xs uppercase tracking-[0.2em] text-champagne">International</p><div className="flex flex-col gap-3 text-sm text-white/60"><Link href="/international-marriage">International marriage</Link><Link href="/cross-border-marriage">Cross-border marriage</Link><Link href="/marriage-recognition">Marriage recognition</Link><Link href="/countries/united-kingdom">Country guides</Link></div></div><div><p className="mb-5 text-xs uppercase tracking-[0.2em] text-champagne">Online & Court</p><div className="flex flex-col gap-3 text-sm text-white/60"><Link href="/online-marriage">Online marriage</Link><Link href="/remote-marriage">Remote marriage</Link><Link href="/online-nikah">Online Nikah</Link><Link href="/court-marriage">Court marriage</Link></div></div><div><p className="mb-5 text-xs uppercase tracking-[0.2em] text-champagne">Documents & Legal</p><div className="flex flex-col gap-3 text-sm text-white/60"><Link href="/marriage-documentation">Marriage documents</Link><Link href="/marriage-certificate">Marriage certificate</Link><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms">Terms of use</Link><Link href="/legal-disclaimer">Legal disclaimer</Link></div></div></div><div className="flex flex-col gap-4 pt-7 text-xs leading-5 text-white/40 md:flex-row md:items-start md:justify-between"><p>© {new Date().getFullYear()} e-Marriages.com. All rights reserved.</p><p className="max-w-xl md:text-right">Information on this website is for general guidance only and is not legal advice. Requirements vary by country and individual circumstances.</p></div></div></footer>
}
