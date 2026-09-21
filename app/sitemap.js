import { slugs } from '@/lib/page-data'

export default function sitemap() {
  const now = new Date()
  return [
    { url: 'https://e-marriages.com', lastModified: now, changeFrequency: 'weekly', priority: 1 },
    ...slugs.map(slug => ({ url: `https://e-marriages.com/${slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 }))
  ]
}
