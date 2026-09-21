import { notFound } from 'next/navigation'
import ServicePage from '@/components/service-page'
import { pages, slugs } from '@/lib/page-data'

export function generateStaticParams() {
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const page = pages[slug]
  if (!page) return {}
  return {
    title: page.title,
    description: page.description,
    keywords: [page.shortTitle, `${page.shortTitle} services`, `${page.shortTitle} international`, 'e-Marriages.com'],
    alternates: { canonical: `https://e-marriages.com/${slug}` },
    openGraph: { title: page.title, description: page.description, url: `https://e-marriages.com/${slug}`, type: 'website' },
  }
}

export default async function Page({ params }) {
  const { slug } = await params
  const page = pages[slug]
  if (!page) notFound()
  return <ServicePage page={page} />
}
