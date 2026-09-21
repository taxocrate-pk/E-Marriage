'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, HeartHandshake, Menu, X } from 'lucide-react'

export function Logo() {
  return <Link href="/" className="flex items-center gap-3" aria-label="e-Marriages.com home">
    <span className="flex size-10 items-center justify-center rounded-full border border-champagne/50 text-champagne"><HeartHandshake className="size-5" strokeWidth={1.5} /></span>
    <span className="font-serif text-[1.2rem] tracking-[-0.02em] text-white">e-Marriages<span className="text-champagne">.com</span></span>
  </Link>
}

const navigation = [
  ['International Marriage', '/international-marriage'],
  ['Online Marriage', '/online-marriage'],
  ['Court Marriage', '/court-marriage'],
  ['Documents', '/marriage-documentation'],
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="absolute inset-x-0 top-0 z-50">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
      <Logo />
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
        {navigation.map(([label, href]) => <Link key={href} href={href} className="text-sm text-white/70 transition hover:text-champagne">{label}</Link>)}
      </nav>
      <a href="#enquire" className="hidden items-center gap-2 rounded-full border border-champagne/70 px-5 py-2.5 text-sm text-champagne transition hover:bg-champagne hover:text-navy lg:flex">Discuss Your Case <ArrowUpRight className="size-4" /></a>
      <button onClick={() => setOpen(!open)} className="text-white lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <div className="border-t border-white/10 bg-navy px-6 py-6 lg:hidden"><nav className="flex flex-col gap-5" aria-label="Mobile navigation">{navigation.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="text-sm text-white/80">{label}</Link>)}<a href="#enquire" onClick={() => setOpen(false)} className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-champagne px-5 py-3 text-sm text-navy">Discuss Your Case <ArrowUpRight className="size-4" /></a></nav></div>}
  </header>
}

export function SiteFooter() {
  return <footer className="bg-navy px-6 pb-8 pt-16 text-white lg:px-10"><div className="mx-auto max-w-7xl"><div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]"><div><Logo /><p className="mt-6 max-w-xs text-sm leading-6 text-white/55">Thoughtful guidance for couples building a life across borders.</p></div><div><p className="mb-5 text-xs uppercase tracking-[0.2em] text-champagne">International</p><div className="flex flex-col gap-3 text-sm text-white/60"><Link href="/international-marriage">International marriage</Link><Link href="/cross-border-marriage">Cross-border marriage</Link><Link href="/marriage-recognition">Marriage recognition</Link><Link href="/foreign-national-marriage">Foreign national marriage</Link></div></div><div><p className="mb-5 text-xs uppercase tracking-[0.2em] text-champagne">Online & Court</p><div className="flex flex-col gap-3 text-sm text-white/60"><Link href="/online-marriage">Online marriage</Link><Link href="/remote-marriage">Remote marriage</Link><Link href="/online-nikah">Online Nikah</Link><Link href="/court-marriage">Court marriage</Link></div></div><div><p className="mb-5 text-xs uppercase tracking-[0.2em] text-champagne">Documents</p><div className="flex flex-col gap-3 text-sm text-white/60"><Link href="/marriage-documentation">Marriage documents</Link><Link href="/marriage-certificate">Marriage certificate</Link><Link href="/apostille-attestation">Apostille & attestation</Link><a href="#enquire">Discuss your case</a></div></div></div><div className="flex flex-col gap-4 pt-7 text-xs leading-5 text-white/40 md:flex-row md:items-start md:justify-between"><p>© {new Date().getFullYear()} e-Marriages.com. All rights reserved.</p><p className="max-w-xl md:text-right">Information on this website is for general guidance only and is not legal advice. Requirements vary by country and individual circumstances.</p></div></div></footer>
}
