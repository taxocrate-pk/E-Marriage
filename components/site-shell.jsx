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
  { label: 'International', href: '/international-marriage', children: [['Cross-border marriage','/cross-border-marriage'],['Foreign national marriage','/foreign-national-marriage'],['Marriage recognition','/marriage-recognition']] },
  { label: 'Online Marriage', href: '/online-marriage', children: [['Remote marriage','/remote-marriage'],['Proxy marriage','/proxy-marriage'],['Online Nikah','/online-nikah'],['Video conference marriage','/marriage-by-video-conference']] },
  { label: 'Court Marriage', href: '/court-marriage', children: [['Court marriage in Pakistan','/court-marriage-in-pakistan'],['For overseas Pakistanis','/court-marriage-for-overseas-pakistanis']] },
  { label: 'Documents', href: '/marriage-documentation', children: [['Marriage registration','/marriage-registration'],['Marriage certificate','/marriage-certificate'],['Certified translation','/certified-translation'],['Apostille & attestation','/apostille-attestation']] },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="absolute inset-x-0 top-0 z-50">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
      <Logo />
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
        {navigation.map(item => <div key={item.href} className="group relative py-2"><Link href={item.href} className="text-sm text-white/70 transition hover:text-champagne">{item.label}</Link><div className="invisible absolute left-0 top-full w-64 translate-y-2 rounded-xl border border-white/10 bg-navy p-2 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">{item.children.map(([label,href])=><Link key={href} href={href} className="block rounded-lg px-4 py-3 text-xs text-white/65 hover:bg-white/10 hover:text-champagne">{label}</Link>)}</div></div>)}
      </nav>
      <Link href="/contact" className="hidden items-center gap-2 rounded-full border border-champagne/70 px-5 py-2.5 text-sm text-champagne transition hover:bg-champagne hover:text-navy lg:flex">Discuss Your Case <ArrowUpRight className="size-4" /></Link>
      <button onClick={() => setOpen(!open)} className="text-white lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <div className="border-t border-white/10 bg-navy px-6 py-6 lg:hidden"><nav className="flex max-h-[70vh] flex-col gap-4 overflow-y-auto" aria-label="Mobile navigation">{navigation.map(item => <div key={item.href}><Link href={item.href} onClick={() => setOpen(false)} className="text-sm text-white">{item.label}</Link><div className="mt-2 flex flex-col gap-2 border-l border-white/10 pl-4">{item.children.map(([label,href])=><Link key={href} href={href} onClick={() => setOpen(false)} className="text-xs text-white/55">{label}</Link>)}</div></div>)}<Link href="/contact" onClick={() => setOpen(false)} className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-champagne px-5 py-3 text-sm text-navy">Discuss Your Case <ArrowUpRight className="size-4" /></Link></nav></div>}
  </header>
}

export function SiteFooter() {
  return <footer className="bg-navy px-6 pb-8 pt-16 text-white lg:px-10"><div className="mx-auto max-w-7xl"><div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]"><div><Logo /><p className="mt-6 max-w-xs text-sm leading-6 text-white/55">Thoughtful guidance for couples building a life across borders.</p><div className="mt-6 flex gap-4 text-xs text-white/50"><Link href="/about">About</Link><Link href="/contact">Contact</Link></div></div><div><p className="mb-5 text-xs uppercase tracking-[0.2em] text-champagne">International</p><div className="flex flex-col gap-3 text-sm text-white/60"><Link href="/international-marriage">International marriage</Link><Link href="/cross-border-marriage">Cross-border marriage</Link><Link href="/marriage-recognition">Marriage recognition</Link><Link href="/countries/united-kingdom">Country guides</Link></div></div><div><p className="mb-5 text-xs uppercase tracking-[0.2em] text-champagne">Online & Court</p><div className="flex flex-col gap-3 text-sm text-white/60"><Link href="/online-marriage">Online marriage</Link><Link href="/remote-marriage">Remote marriage</Link><Link href="/online-nikah">Online Nikah</Link><Link href="/court-marriage">Court marriage</Link></div></div><div><p className="mb-5 text-xs uppercase tracking-[0.2em] text-champagne">Documents & Legal</p><div className="flex flex-col gap-3 text-sm text-white/60"><Link href="/marriage-documentation">Marriage documents</Link><Link href="/marriage-certificate">Marriage certificate</Link><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms">Terms of use</Link><Link href="/legal-disclaimer">Legal disclaimer</Link></div></div></div><div className="flex flex-col gap-4 pt-7 text-xs leading-5 text-white/40 md:flex-row md:items-start md:justify-between"><p>© {new Date().getFullYear()} e-Marriages.com. All rights reserved.</p><p className="max-w-xl md:text-right">Information on this website is for general guidance only and is not legal advice. Requirements vary by country and individual circumstances.</p></div></div></footer>
}
