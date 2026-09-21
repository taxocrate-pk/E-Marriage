import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/site-shell'

export const metadata = { title:'International Marriage Guides & Blog | E-Marriages', description:'Practical guides on online marriage, Online Nikah, court marriage, documentation and recognition across borders.', alternates:{ canonical:'https://e-marriages.com/blog' } }

const guides = [
  ['Online marriage: what international couples should check','A practical starting point for validity, registration and recognition questions.','/online-marriage'],
  ['Court marriage across borders','Why the phrase court marriage means different things in different jurisdictions.','/court-marriage'],
  ['Online Nikah and civil documentation','How religious procedure and official registration should be planned together.','/online-nikah'],
  ['Marriage certificates for use abroad','Understand official records, certified copies, translations and verification.','/marriage-certificate'],
  ['Apostille, legalisation and attestation','A clear explanation of document authentication and its limits.','/apostille-attestation'],
  ['Will another country recognise the marriage?','The difference between validity, evidence, registration and purpose-specific recognition.','/marriage-recognition'],
]

export default function BlogPage(){return <div className="bg-ivory text-navy"><SiteHeader/><main><section className="relative overflow-hidden bg-navy px-6 pb-24 pt-36 lg:px-10 lg:pb-32 lg:pt-44"><div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_25%,rgba(201,171,112,0.17),transparent_30%)]"/><div className="relative mx-auto max-w-7xl"><p className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-champagne"><span className="h-px w-10 bg-champagne"/>Guides and insights</p><h1 className="max-w-4xl font-serif text-5xl leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-[5rem]">Clear reading for couples navigating marriage across borders.</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">Explore practical introductions to online marriage, court marriage, Online Nikah, documentation and international recognition.</p></div></section><section className="px-6 py-24 lg:px-10 lg:py-32"><div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-2xl bg-navy/10 md:grid-cols-2 lg:grid-cols-3">{guides.map(([title,text,href],i)=><article key={title} className="group bg-ivory p-8 transition hover:bg-white lg:p-10"><span className="font-serif text-3xl text-champagne">0{i+1}</span><h2 className="mt-8 font-serif text-3xl leading-tight">{title}</h2><p className="mt-5 text-sm leading-7 text-navy/55">{text}</p><Link href={href} className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em]">Read guide <ArrowUpRight className="size-4 text-champagne"/></Link></article>)}</div></section></main><SiteFooter/></div>}
