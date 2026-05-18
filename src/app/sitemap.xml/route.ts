import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export async function GET() {
  const baseUrl = 'https://taxgainscalc.com'
  const lastModified = '2026-05-18T12:00:00.000Z'

  const urls = [
    { url: baseUrl, priority: '1.0', changefreq: 'weekly' },
    { url: `${baseUrl}/capital-gains-tax-rates`, priority: '0.95', changefreq: 'monthly' },
    { url: `${baseUrl}/long-term-capital-gains-tax-calculator`, priority: '0.95', changefreq: 'monthly' },
    { url: `${baseUrl}/short-term-capital-gains-tax-calculator`, priority: '0.9', changefreq: 'monthly' },
    { url: `${baseUrl}/real-estate-capital-gains-tax-calculator`, priority: '0.9', changefreq: 'monthly' },
    { url: `${baseUrl}/stock-capital-gains-tax-calculator`, priority: '0.9', changefreq: 'monthly' },
    { url: `${baseUrl}/how-to-calculate-capital-gains-tax`, priority: '0.9', changefreq: 'monthly' },
    { url: `${baseUrl}/capital-gains-tax-by-state`, priority: '0.9', changefreq: 'monthly' },
    { url: `${baseUrl}/home-sale-capital-gains-tax-calculator`, priority: '0.85', changefreq: 'monthly' },
    { url: `${baseUrl}/day-trading-tax-calculator`, priority: '0.85', changefreq: 'monthly' },
    { url: `${baseUrl}/about`, priority: '0.5', changefreq: 'monthly' },
    { url: `${baseUrl}/contact`, priority: '0.5', changefreq: 'monthly' },
    { url: `${baseUrl}/privacy-policy`, priority: '0.3', changefreq: 'yearly' },
    { url: `${baseUrl}/disclaimer`, priority: '0.3', changefreq: 'yearly' },
    { url: `${baseUrl}/terms-of-service`, priority: '0.3', changefreq: 'yearly' },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.url}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
