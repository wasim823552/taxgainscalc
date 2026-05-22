import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

const relatedPages = [
  { href: '/long-term-capital-gains-tax-calculator', label: 'Long-Term Capital Gains Calculator' },
  { href: '/short-term-capital-gains-tax-calculator', label: 'Short-Term Capital Gains Calculator' },
  { href: '/stock-capital-gains-tax-calculator', label: 'Stock Capital Gains Calculator' },
  { href: '/real-estate-capital-gains-tax-calculator', label: 'Real Estate Capital Gains Calculator' },
  { href: '/home-sale-capital-gains-tax-calculator', label: 'Home Sale Capital Gains Calculator' },
  { href: '/day-trading-tax-calculator', label: 'Day Trading Tax Calculator' },
  { href: '/capital-gains-tax-rates', label: 'Capital Gains Tax Rates 2025-2026' },
  { href: '/capital-gains-tax-by-state', label: 'Capital Gains Tax by State' },
  { href: '/how-to-calculate-capital-gains-tax', label: 'How to Calculate Capital Gains Tax' },
  { href: '/capital-gains-on-crypto', label: 'Cryptocurrency Capital Gains Tax' },
];

export default function RelatedCalculators() {
  return (
    <section className="py-12 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
          Related Calculators and Tax Guides
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Explore our full suite of free capital gains tax calculators and in-depth guides for every asset type and filing scenario.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedPages.map(page => (
            <Link key={page.href} href={page.href}>
              <Card className="h-full hover:border-emerald-300 hover:shadow-md transition-all duration-200">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-emerald-800 text-sm mb-1 hover:text-emerald-600 transition">
                    {page.label}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
