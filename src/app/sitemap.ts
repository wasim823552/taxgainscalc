import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://taxgainscalc.com'
  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/capital-gains-tax-calculator', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/capital-gains-tax-rates', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/long-term-capital-gains-tax-calculator', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/short-term-capital-gains-tax-calculator', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/stock-capital-gains-tax-calculator', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/real-estate-capital-gains-tax-calculator', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/home-sale-capital-gains-tax-calculator', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/day-trading-tax-calculator', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/capital-gains-tax-by-state', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/how-to-calculate-capital-gains-tax', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/capital-gains-on-crypto', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/disclaimer', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  return pages.map(page => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
