import { Metadata } from 'next';
import Link from 'next/link';
import SiteLayout from '@/components/SiteLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Calculator,
  TrendingUp,
  Clock,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Info,
  BarChart3,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Capital Gains Tax Rates 2025 & 2026 | Federal Brackets',
  description: 'Complete guide to capital gains tax rates for 2025 and 2026. Includes long-term and short-term federal brackets, NIIT thresholds, and state tax overview.',
  alternates: {
    canonical: 'https://taxgainscalc.com/capital-gains-tax-rates',
  },
  openGraph: {
    title: 'Capital Gains Tax Rates 2025 & 2026 | Federal Brackets',
    description: 'Complete guide to capital gains tax rates for 2025 and 2026. Includes long-term and short-term federal brackets, NIIT thresholds, and state tax overview.',
    url: 'https://taxgainscalc.com/capital-gains-tax-rates',
    siteName: 'TaxGainsCalc',
    type: 'website',
    locale: 'en_US',
  },
};

export default function CapitalGainsTaxRatesPage() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Updated for 2025 & 2026 Tax Years</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Capital Gains Tax Rates 2025 & 2026
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            Your complete reference for federal capital gains tax brackets, short-term and long-term rates, the Net Investment Income Tax, and state-level capital gains taxes.
          </p>
          <Link href="/#calculator">
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold">
              <Calculator className="mr-2 h-5 w-5" />
              Calculate Your Tax Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="text-sm text-gray-500">
          <Link href="/" className="hover:text-emerald-600 transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Capital Gains Tax Rates</span>
        </nav>
      </div>

      {/* Introduction */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg leading-relaxed">
              Understanding capital gains tax rates is one of the most important steps in managing your investment portfolio efficiently. The United States taxes capital gains—the profit you earn when you sell an asset for more than you paid—at different rates depending on two primary factors: how long you held the asset and your total taxable income for the year. For the 2025 and 2026 tax years, long-term capital gains rates remain at the same preferential 0%, 15%, and 20% tiers, while short-term capital gains continue to be taxed as ordinary income at rates ranging from 10% up to 37%. This page provides a comprehensive overview of all applicable federal rates, additional surtaxes like the Net Investment Income Tax, and a state-by-state overview to help you plan your tax strategy effectively.
            </p>
          </div>
        </div>
      </section>

      {/* 2025 Long-Term Capital Gains Tax Rates */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Long-Term Capital Gains Tax Rates 2025
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Assets held for more than one year qualify for preferential long-term capital gains rates. The rate you pay depends on your taxable income and filing status.
          </p>
          <Card>
            <CardHeader className="bg-emerald-600 text-white rounded-t-xl">
              <CardTitle className="text-xl flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                2025 Long-Term Capital Gains Tax Brackets
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Tax Rate</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Single</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Married Filing Jointly</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Married Filing Separately</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Head of Household</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-bold text-green-600">0%</td>
                      <td className="px-4 py-3">Up to $48,350</td>
                      <td className="px-4 py-3">Up to $96,700</td>
                      <td className="px-4 py-3">Up to $48,350</td>
                      <td className="px-4 py-3">Up to $64,750</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3 font-bold text-amber-600">15%</td>
                      <td className="px-4 py-3">$48,351 – $533,400</td>
                      <td className="px-4 py-3">$96,701 – $600,050</td>
                      <td className="px-4 py-3">$48,351 – $300,025</td>
                      <td className="px-4 py-3">$64,751 – $566,700</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-bold text-red-600">20%</td>
                      <td className="px-4 py-3">Over $533,400</td>
                      <td className="px-4 py-3">Over $600,050</td>
                      <td className="px-4 py-3">Over $300,025</td>
                      <td className="px-4 py-3">Over $566,700</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          <div className="mt-6 prose prose-lg max-w-none text-gray-700">
            <p>
              These thresholds are adjusted annually for inflation by the IRS. The 0% bracket is particularly valuable: taxpayers whose total taxable income falls below the threshold can realize long-term capital gains entirely tax-free. This makes strategic gain harvesting in low-income years a powerful tax planning tool, especially for retirees managing withdrawals from taxable accounts.
            </p>
          </div>
        </div>
      </section>

      {/* 2026 Long-Term Capital Gains Tax Rates (Projected) */}
      <section className="py-8 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Long-Term Capital Gains Tax Rates 2026 (Projected)
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            The 2026 brackets below are projected based on IRS inflation-adjustment trends. Final official numbers will be released by the IRS in late 2025.
          </p>
          <Card>
            <CardHeader className="bg-teal-600 text-white rounded-t-xl">
              <CardTitle className="text-xl flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                2026 Projected Long-Term Capital Gains Tax Brackets
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Tax Rate</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Single</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Married Filing Jointly</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Married Filing Separately</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Head of Household</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-bold text-green-600">0%</td>
                      <td className="px-4 py-3">Up to $49,300</td>
                      <td className="px-4 py-3">Up to $98,600</td>
                      <td className="px-4 py-3">Up to $49,300</td>
                      <td className="px-4 py-3">Up to $65,900</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3 font-bold text-amber-600">15%</td>
                      <td className="px-4 py-3">$49,301 – $545,900</td>
                      <td className="px-4 py-3">$98,601 – $614,350</td>
                      <td className="px-4 py-3">$49,301 – $307,175</td>
                      <td className="px-4 py-3">$65,901 – $580,100</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-bold text-red-600">20%</td>
                      <td className="px-4 py-3">Over $545,900</td>
                      <td className="px-4 py-3">Over $614,350</td>
                      <td className="px-4 py-3">Over $307,175</td>
                      <td className="px-4 py-3">Over $580,100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          <div className="mt-6 prose prose-lg max-w-none text-gray-700">
            <p>
              The three preferential rate tiers—0%, 15%, and 20%—have remained unchanged since 2003 when the Jobs and Growth Tax Relief Reconciliation Act (JGTRRA) lowered them from the prior 8%, 15%, and 28% schedule. While legislative changes could alter these rates in the future, no major reform proposals affecting the long-term capital gains structure are currently expected to take effect before 2026. The brackets themselves, however, shift each year to account for inflation, meaning more of your gains may fall into the 0% bracket over time.
            </p>
          </div>
        </div>
      </section>

      {/* Short-Term Capital Gains Tax Rates */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Short-Term Capital Gains Tax Rates (Ordinary Income)
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Assets held for one year or less are taxed at your ordinary income tax rate. These rates apply to wages, salaries, and short-term investment gains alike.
          </p>
          <Card>
            <CardHeader className="bg-red-600 text-white rounded-t-xl">
              <CardTitle className="text-xl flex items-center gap-2">
                <Clock className="h-5 w-5" />
                2025 Ordinary Income Tax Rates (Short-Term Capital Gains)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Tax Rate</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Single</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Married Filing Jointly</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Head of Household</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-bold text-green-600">10%</td>
                      <td className="px-4 py-3">Up to $11,925</td>
                      <td className="px-4 py-3">Up to $23,850</td>
                      <td className="px-4 py-3">Up to $17,000</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3 font-bold text-green-600">12%</td>
                      <td className="px-4 py-3">$11,926 – $48,475</td>
                      <td className="px-4 py-3">$23,851 – $96,950</td>
                      <td className="px-4 py-3">$17,001 – $64,850</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-bold text-amber-600">22%</td>
                      <td className="px-4 py-3">$48,476 – $103,350</td>
                      <td className="px-4 py-3">$96,951 – $206,700</td>
                      <td className="px-4 py-3">$64,851 – $103,350</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3 font-bold text-amber-600">24%</td>
                      <td className="px-4 py-3">$103,351 – $197,300</td>
                      <td className="px-4 py-3">$206,701 – $394,600</td>
                      <td className="px-4 py-3">$103,351 – $197,300</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-bold text-orange-600">32%</td>
                      <td className="px-4 py-3">$197,301 – $250,525</td>
                      <td className="px-4 py-3">$394,601 – $501,050</td>
                      <td className="px-4 py-3">$197,301 – $250,500</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3 font-bold text-red-600">35%</td>
                      <td className="px-4 py-3">$250,526 – $626,350</td>
                      <td className="px-4 py-3">$501,051 – $751,600</td>
                      <td className="px-4 py-3">$250,501 – $626,350</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-bold text-red-700">37%</td>
                      <td className="px-4 py-3">Over $626,350</td>
                      <td className="px-4 py-3">Over $751,600</td>
                      <td className="px-4 py-3">Over $626,350</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          <div className="mt-6 prose prose-lg max-w-none text-gray-700">
            <p>
              Short-term capital gains do not receive any preferential tax treatment. If you sell an asset within 365 days of purchase, your profit is simply added to your other ordinary income—wages, salary, interest—and taxed at your marginal rate. This means a high earner in the 37% bracket could pay more than three times the tax on a short-term gain compared to a long-term gain of the same size. The difference highlights the importance of tracking holding periods carefully. For a detailed breakdown of short-term gains and strategies to minimize them, visit our <Link href="/short-term-capital-gains-tax-calculator" className="text-emerald-600 hover:underline font-medium">short-term capital gains tax calculator guide</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* NIIT Section */}
      <section className="py-8 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2 text-amber-800">
                <AlertTriangle className="h-5 w-5" />
                Net Investment Income Tax (NIIT) — Additional 3.8%
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Enacted as part of the Affordable Care Act, the Net Investment Income Tax (NIIT) adds a flat 3.8% surtax on top of your regular capital gains tax. It applies when your modified adjusted gross income (MAGI) exceeds the following thresholds:
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm bg-white rounded-lg overflow-hidden">
                  <thead className="bg-amber-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-amber-900">Filing Status</th>
                      <th className="px-4 py-3 text-left font-semibold text-amber-900">MAGI Threshold</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-amber-100">
                      <td className="px-4 py-3">Single</td>
                      <td className="px-4 py-3 font-semibold">$200,000</td>
                    </tr>
                    <tr className="border-b border-amber-100">
                      <td className="px-4 py-3">Married Filing Jointly</td>
                      <td className="px-4 py-3 font-semibold">$250,000</td>
                    </tr>
                    <tr className="border-b border-amber-100">
                      <td className="px-4 py-3">Married Filing Separately</td>
                      <td className="px-4 py-3 font-semibold">$125,000</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Head of Household</td>
                      <td className="px-4 py-3 font-semibold">$200,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 mb-3">
                The NIIT applies to the lesser of your net investment income or the amount by which your MAGI exceeds the threshold. For example, a single filer with $220,000 in MAGI and $50,000 in net investment income would owe the 3.8% tax on $20,000 (the excess over the $200,000 threshold), resulting in a $760 surtax.
              </p>
              <div className="flex items-start gap-2 bg-white p-4 rounded-lg border border-amber-200">
                <Info className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">
                  <strong>Combined maximum rate:</strong> When the 20% top capital gains rate and the 3.8% NIIT both apply, the effective maximum federal rate on long-term capital gains is <strong>23.8%</strong>. For short-term gains at the top bracket, the maximum effective rate reaches <strong>40.8%</strong>.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Historical Rate Comparison */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Historical Long-Term Capital Gains Tax Rates
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Capital gains tax rates have changed significantly over the decades. The table below shows the top marginal long-term rate for each period.
          </p>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-gray-900">Top Long-Term Capital Gains Rate by Year</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Period</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Top Rate</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Key Legislation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3">2003 – Present</td>
                      <td className="px-4 py-3 font-bold text-green-600">15% / 20%</td>
                      <td className="px-4 py-3">JGTRRA (2003), ACA raised to 20% for high earners (2013)</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3">1998 – 2002</td>
                      <td className="px-4 py-3 font-bold text-amber-600">20%</td>
                      <td className="px-4 py-3">Taxpayer Relief Act (1997)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">1991 – 1997</td>
                      <td className="px-4 py-3 font-bold text-amber-600">28%</td>
                      <td className="px-4 py-3">OBRA (1993)</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3">1988 – 1990</td>
                      <td className="px-4 py-3 font-bold text-red-600">28%</td>
                      <td className="px-4 py-3">Tax Reform Act (1986)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">1987</td>
                      <td className="px-4 py-3 font-bold text-red-600">28%</td>
                      <td className="px-4 py-3">Transitional year (TRRA 1986)</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3">1979 – 1986</td>
                      <td className="px-4 py-3 font-bold text-red-600">20% – 28%</td>
                      <td className="px-4 py-3">Economic Recovery Tax Act (1981)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">1976 – 1978</td>
                      <td className="px-4 py-3 font-bold text-red-700">35%</td>
                      <td className="px-4 py-3">Tax Reform Act (1976)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          <div className="mt-6 prose prose-lg max-w-none text-gray-700">
            <p>
              Today&apos;s top rate of 20% (plus NIIT) is relatively low by historical standards. During the 1970s, the top capital gains rate reached 35% or more. Understanding this history helps contextualize current policy debates and underscores the value of the preferential rates available to long-term investors. The possibility of future rate increases—particularly if Congress seeks new revenue—is one reason some investors choose to realize gains under current law.
            </p>
          </div>
        </div>
      </section>

      {/* State Capital Gains Tax Overview */}
      <section className="py-8 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            State Capital Gains Tax Overview
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Most states tax capital gains as ordinary income. A few states offer special treatment or have no income tax at all.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-lg text-green-800">No Income Tax</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-3">These states do not tax capital gains at the state level:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Alaska</li>
                  <li>• Florida</li>
                  <li>• Nevada</li>
                  <li>• New Hampshire (interest & dividends only)</li>
                  <li>• South Dakota</li>
                  <li>• Tennessee</li>
                  <li>• Texas</li>
                  <li>• Washington</li>
                  <li>• Wyoming</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle className="text-lg text-amber-800">Low / Flat Rates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-3">States with lower or flat income tax rates:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Colorado — 4.40% flat</li>
                  <li>• Illinois — 4.95% flat</li>
                  <li>• Indiana — 3.05% flat</li>
                  <li>• Massachusetts — 5% flat (some gains exempt)</li>
                  <li>• North Carolina — 4.50% flat</li>
                  <li>• Pennsylvania — 3.07% flat</li>
                  <li>• Utah — 4.65% flat</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-lg text-red-800">High Tax States</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-3">States with the highest income tax rates on capital gains:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• California — up to 13.3%</li>
                  <li>• New York — up to 10.9% (plus NYC surcharge)</li>
                  <li>• Hawaii — up to 11.0%</li>
                  <li>• New Jersey — up to 10.75%</li>
                  <li>• Oregon — up to 9.9%</li>
                  <li>• Minnesota — up to 9.85%</li>
                  <li>• Vermont — up to 8.75%</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              State taxes can significantly increase your total capital gains tax burden. A California resident in the top federal bracket paying 20% plus 3.8% NIIT could owe an additional 13.3% in state tax, bringing the combined marginal rate to over 37%. In contrast, a Florida resident with the same income pays only the 23.8% federal rate. When evaluating investment decisions—especially regarding real estate or business exits—factoring in state tax differences is critical for accurate planning.
            </p>
          </div>
        </div>
      </section>

      {/* Special Rate: Collectibles */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Special Capital Gains Tax Rates
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Certain asset types are subject to different capital gains rates than the standard 0%/15%/20% schedule.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg text-purple-800">Collectibles — Max 28%</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-2">Art, coins, stamps, precious metals, antiques, and other collectibles are taxed at a maximum rate of 28%, regardless of your income bracket. The 0% and 15% rates do not apply to these assets.</p>
              </CardContent>
            </Card>
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg text-orange-800">Qualified Small Business Stock — Max 28%</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-2">Gains on Section 1202 qualified small business stock held for more than five years may exclude up to 50%, 75%, or 100% of the gain, depending on the acquisition date. The non-excluded portion is taxed at a maximum rate of 28%.</p>
              </CardContent>
            </Card>
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-lg text-red-800">Depreciation Recapture — Max 25%</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-2">When you sell a depreciable real estate property, the amount of depreciation you previously claimed is &quot;recaptured&quot; and taxed at a flat 25% rate. Any remaining gain is taxed at the standard 0%, 15%, or 20% long-term rate.</p>
              </CardContent>
            </Card>
            <Card className="border-emerald-200">
              <CardHeader>
                <CardTitle className="text-lg text-emerald-800">Primary Residence Exclusion</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-2">Under Section 121, you can exclude up to $250,000 ($500,000 if married filing jointly) of gain on the sale of your primary residence, provided you owned and lived in it for at least two of the five years before the sale.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison: Long-Term vs Short-Term */}
      <section className="py-8 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Long-Term vs. Short-Term: Why the Holding Period Matters
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800">
                  <Clock className="h-5 w-5" />
                  Short-Term (&le; 1 Year)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" /> Taxed at ordinary income rates (10%&ndash;37%)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" /> No preferential treatment</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" /> Plus 3.8% NIIT for high earners</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" /> Effective max: 40.8%</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-emerald-200 bg-emerald-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-800">
                  <TrendingUp className="h-5 w-5" />
                  Long-Term (&gt; 1 Year)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-emerald-500 mt-1 flex-shrink-0" /> Preferential rates (0%, 15%, 20%)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-emerald-500 mt-1 flex-shrink-0" /> 0% bracket for lower incomes</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-emerald-500 mt-1 flex-shrink-0" /> Plus 3.8% NIIT for high earners</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-emerald-500 mt-1 flex-shrink-0" /> Effective max: 23.8%</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              The difference between short-term and long-term rates can be dramatic. A single filer earning $100,000 who realizes a $50,000 short-term gain would pay approximately $11,000 in federal tax on that gain alone at the 22% ordinary rate. The same gain held long-term would be taxed at 15%, costing just $7,500—a savings of $3,500. For high-income taxpayers, the gap widens further: a short-term gain at 37% versus a long-term gain at 23.8% represents a potential savings of over 13 percentage points. Always check your holding period before selling.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Calculate Your Capital Gains Tax?
          </h2>
          <p className="text-emerald-100 text-lg mb-8">
            Use our free calculator to get an instant estimate based on your specific income, filing status, and holding period.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#calculator">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold">
                <Calculator className="mr-2 h-5 w-5" />
                Free Tax Calculator
              </Button>
            </Link>
            <Link href="/long-term-capital-gains-tax-calculator">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold">
                Long-Term Gains Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}