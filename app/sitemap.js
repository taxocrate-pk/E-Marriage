import { slugs } from '@/lib/page-data'
import { countrySlugs } from '@/lib/country-data'
import { serviceSlugs, serviceCountrySlugs } from '@/lib/service-country-data'

export default function sitemap() {
  const now = new Date()
  return [
    { url: 'https://e-marriages.com', lastModified: now, changeFrequency: 'weekly', priority: 1 },
    ...slugs.map(slug => ({ url: `https://e-marriages.com/${slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 })),
    ...countrySlugs.map(slug => ({ url: `https://e-marriages.com/countries/${slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 })),
    ...serviceSlugs.flatMap(service => serviceCountrySlugs.map(country => ({ url: `https://e-marriages.com/services/${service}/${country}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 }))),
    ...['our-services','blog','about','contact','privacy-policy','terms','legal-disclaimer'].map(slug => ({ url: `https://e-marriages.com/${slug}`, lastModified: now, changeFrequency: slug === 'blog' ? 'weekly' : 'yearly', priority: slug === 'our-services' ? 0.9 : 0.5 }))
  ]
}
