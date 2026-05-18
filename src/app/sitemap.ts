import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://taxgainscalc.com'
  const now = new Date()

  const contentPages = [
    { url: `${baseUrl}/capital-gains-tax-rates`, priority: 0.95, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/long-term-capital-gains-tax-calculator`, priority: 0.95, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/short-term-capital-gains-tax-calculator`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/real-estate-capital-gains-tax-calculator`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/stock-capital-gains-tax-calculator`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/how-to-calculate-capital-gains-tax`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/capital-gains-tax-by-state`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/home-sale-capital-gains-tax-calculator`, priority: 0.85, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/day-trading-tax-calculator`, priority: 0.85, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/about`, priority: 0.5, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/contact`, priority: 0.5, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/privacy-policy`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/disclaimer`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/terms-of-service`, priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...contentPages.map(page => ({
      url: page.url,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
  ]
}
