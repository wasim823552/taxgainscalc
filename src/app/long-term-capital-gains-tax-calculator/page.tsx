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
  HelpCircle,
  Shield,
  BarChart3,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Long-Term Capital Gains Tax Calculator 2025 & 2026',
  description: 'Free long-term capital gains tax calculator. Learn LTCG rates, brackets, and how to calculate your tax on assets held over one year for 2025 and 2026.',
  alternates: {
    canonical: 'https://taxgainscalc.com/long-term-capital-gains-tax-calculator',
  },
  openGraph: {
    title: 'Long-Term Capital Gains Tax Calculator 2025 & 2026',
    description: 'Free long-term capital gains tax calculator. Learn LTCG rates, brackets, and how to calculate your tax on assets held over one year for 2025 and 2026.',
    url: 'https://taxgainscalc.com/long-term-capital-gains-tax-calculator',
    siteName: 'TaxGainsCalc',
    type: 'website',
    locale: 'en_US',
  },
};

export default function LongTermCapitalGainsCalculatorPage() {
  const faqs = [
    {
      question: 'What qualifies as a long-term capital gain?',
      answer: 'A long-term capital gain occurs when you sell a capital asset that you have held for more than one year. The IRS measures the holding period starting the day after you acquire the asset and ending on the day you sell it. For example, if you purchase a stock on January 15, 2024, and sell it on January 16, 2025, you have held it for 367 days, which qualifies as a long-term holding. Assets held for one year or less produce short-term capital gains taxed at ordinary income rates.',
    },
    {
      question: 'What is the long-term capital gains tax rate for 2025?',
      answer: 'For the 2025 tax year, long-term capital gains are taxed at three preferential rates: 0%, 15%, and 20%. The rate you pay depends on your taxable income and filing status. Single filers pay 0% on gains when taxable income is up to $48,350, 15% on income between $48,351 and $533,400, and 20% on income above $533,400. Married couples filing jointly have thresholds of $96,700 and $600,050. An additional 3.8% Net Investment Income Tax applies to high earners.',
    },
    {
      question: 'Can I pay 0% long-term capital gains tax?',
      answer: 'Yes. If your total taxable income (including long-term capital gains) falls below the 0% bracket threshold for your filing status, you owe no federal capital gains tax on those gains. For 2025, a single filer can have up to $48,350 in taxable income and pay 0% on long-term gains. A married couple filing jointly can have up to $96,700. This is especially relevant for retirees or individuals taking a sabbatical year with lower earned income.',
    },
    {
      question: 'How do long-term capital gains affect my tax bracket?',
      answer: 'Long-term capital gains are stacked on top of your ordinary income to determine which capital gains rate bracket applies. For example, if you are a single filer with $40,000 in wages and $20,000 in long-term capital gains, your total taxable income is $60,000. The first $48,350 is taxed at the 0% capital gains rate, and the remaining $11,650 falls into the 15% bracket. Only the portion in each bracket is taxed at that bracket\'s rate, not your entire gain.',
    },
    {
      question: 'Do long-term capital gains count toward the NIIT?',
      answer: 'Yes. Net investment income—including long-term capital gains, dividends, interest, and rental income—is subject to the 3.8% Net Investment Income Tax if your modified adjusted gross income (MAGI) exceeds $200,000 (single), $250,000 (married filing jointly), or $125,000 (married filing separately). The NIIT applies to the lesser of your net investment income or the amount your MAGI exceeds the threshold. This means high earners may pay up to 23.8% on long-term gains.',
    },
    {
      question: 'What is the difference between long-term and short-term capital gains tax?',
      answer: 'The key difference is the holding period and the resulting tax rate. Long-term capital gains (held over one year) are taxed at preferential rates of 0%, 15%, or 20%. Short-term capital gains (held one year or less) are taxed at ordinary income rates ranging from 10% to 37%. For many taxpayers, the difference can be substantial. For example, a $50,000 gain taxed at 15% long-term costs $7,500, while the same gain taxed at 24% short-term costs $12,000—a difference of $4,500.',
    },
    {
      question: 'How do I report long-term capital gains on my tax return?',
      answer: 'Long-term capital gains are reported on IRS Form 8949 (Sales and Other Dispositions of Capital Assets) and then summarized on Schedule D (Capital Gains and Losses) of Form 1040. Your broker will typically send you Form 1099-B with details of each transaction, including the cost basis, sale price, and holding period. If you sold multiple lots of the same stock, you may need to identify which shares were sold to accurately determine your holding period and gain.',
    },
    {
      question: 'Are there strategies to reduce long-term capital gains tax?',
      answer: 'Several strategies can help reduce your long-term capital gains tax. Tax-loss harvesting involves selling losing investments to offset gains. Charitable donations of appreciated assets allow you to avoid capital gains tax while receiving a deduction. Investing in tax-advantaged accounts like IRAs or 401(k)s shelters gains from current taxation. For real estate, 1031 exchanges let you defer gains by reinvesting proceeds. Additionally, timing the realization of gains in years when your income is lower can help you stay within the 0% bracket.',
    },
    {
      question: 'Does the long-term capital gains tax rate change in 2026?',
      answer: 'The three rate tiers (0%, 15%, and 20%) are expected to remain the same for 2026, though the income thresholds for each bracket are adjusted annually for inflation. The projected 2026 brackets are slightly higher than 2025 levels, reflecting inflation adjustments. However, future legislation could change rates, so it is always advisable to check the latest IRS guidance or consult a tax professional for the most current information.',
    },
  ];

  return (
    <SiteLayout>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                "name": "What qualifies as a long-term capital gain?",
                "acceptedAnswer": { "@type": "Answer", text: "A long-term capital gain occurs when you sell a capital asset held for more than one year. The IRS measures the holding period starting the day after acquisition. For example, purchasing a stock on January 15, 2024 and selling on January 16, 2025 qualifies as long-term." }
              },
              {
                "@type": "Question",
                "name": "What is the long-term capital gains tax rate for 2025?",
                "acceptedAnswer": { "@type": "Answer", text: "Long-term capital gains are taxed at preferential rates of 0%, 15%, or 20% based on your taxable income and filing status. For 2025, single filers pay 0% up to $48,350, 15% up to $533,400, and 20% above that. An additional 3.8% NIIT applies for high earners." }
              },
              {
                "@type": "Question",
                "name": "Can I pay 0% long-term capital gains tax?",
                "acceptedAnswer": { "@type": "Answer", text: "Yes. If your total taxable income falls below the 0% bracket threshold, you owe no federal capital gains tax on long-term gains. For 2025, single filers can have up to $48,350 and married couples up to $96,700 in taxable income and qualify for the 0% rate." }
              },
              {
                "@type": "Question",
                "name": "How do long-term capital gains affect my tax bracket?",
                "acceptedAnswer": { "@type": "Answer", text: "Long-term gains are stacked on top of your ordinary income to determine which rate applies. For example, a single filer with $40,000 in wages and $20,000 in long-term gains has $60,000 total income. The first $48,350 falls in the 0% bracket and the remaining $11,650 is taxed at 15%." }
              },
              {
                "@type": "Question",
                "name": "Are there strategies to reduce long-term capital gains tax?",
                "acceptedAnswer": { "@type": "Answer", text: "Yes. Tax-loss harvesting offsets gains with losses. Charitable donations of appreciated assets avoid the gain entirely. Tax-advantaged accounts like IRAs shelter gains. Real estate investors can use 1031 exchanges to defer gains. Timing gain realization in low-income years helps stay within the 0% bracket." }
              }
            ]
          })
        }}
      />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://taxgainscalc.com" },
              { "@type": "ListItem", position: 2, name: "Long-Term Capital Gains Tax Calculator", item: "https://taxgainscalc.com/long-term-capital-gains-tax-calculator" }
            ]
          })
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">LTCG Calculator — 2025 & 2026 Rates</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Long-Term Capital Gains Tax Calculator
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            Understand how long-term capital gains are taxed at preferential rates of 0%, 15%, and 20%. Learn the rules, see real examples, and calculate your liability for assets held over one year.
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
          <span className="text-gray-900 font-medium">Long-Term Capital Gains Tax Calculator</span>
        </nav>
      </div>

      {/* What Are Long-Term Capital Gains */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            What Are Long-Term Capital Gains?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              A long-term capital gain is the profit you earn when you sell a capital asset—such as stocks, bonds, real estate, or mutual funds—that you have owned for more than one year. The Internal Revenue Code provides preferential tax treatment for these gains as an incentive for long-term investment, which supports economic growth and market stability. Instead of being taxed at ordinary income rates that can reach 37%, long-term capital gains are taxed at significantly lower rates of 0%, 15%, or 20%, depending on your taxable income and filing status.
            </p>
            <p className="mb-4">
              The one-year holding period requirement is measured precisely by the IRS. The clock starts the day after you acquire the asset (whether through purchase, gift, or inheritance) and ends on the date of sale. For instance, if you bought shares on March 1, 2024, the one-year mark is March 1, 2025. Selling on March 2, 2025, or any date after qualifies as a long-term disposition. Missing the threshold by even a single day means your gain is treated as short-term and taxed at your ordinary income rate—a potentially costly mistake that underscores the importance of careful holding-period tracking.
            </p>
            <p>
              Long-term capital gains apply to virtually all types of capital assets. Common examples include publicly traded stocks and bonds, shares in mutual funds or ETFs, real estate held as investment property, cryptocurrency, and collectibles such as art or precious metals (though collectibles are subject to a different maximum rate of 28%). The preferential rates are one of the most significant tax advantages available to individual investors in the United States, and understanding how they work can lead to thousands of dollars in tax savings over an investing lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* How the LTCG Tax Brackets Work */}
      <section className="py-8 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            How Long-Term Capital Gains Tax Brackets Work
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            The rate you pay on long-term gains depends on where your total taxable income falls within these brackets. These are marginal brackets, meaning only the portion of gains within each tier is taxed at that rate.
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
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Rate</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Single</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Married Filing Jointly</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Married Filing Separately</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Head of Household</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-bold text-green-600 text-lg">0%</td>
                      <td className="px-4 py-3">Up to $48,350</td>
                      <td className="px-4 py-3">Up to $96,700</td>
                      <td className="px-4 py-3">Up to $48,350</td>
                      <td className="px-4 py-3">Up to $64,750</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3 font-bold text-amber-600 text-lg">15%</td>
                      <td className="px-4 py-3">$48,351 – $533,400</td>
                      <td className="px-4 py-3">$96,701 – $600,050</td>
                      <td className="px-4 py-3">$48,351 – $300,025</td>
                      <td className="px-4 py-3">$64,751 – $566,700</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-bold text-red-600 text-lg">20%</td>
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
              An important point that many investors misunderstand is that your long-term capital gains do not replace your ordinary income in determining which bracket applies. Instead, the IRS stacks your long-term gains on top of your ordinary income. For example, a single filer with $30,000 in wages and $30,000 in long-term capital gains has a total taxable income of $60,000. The first $48,350 (wages plus a portion of gains) falls within the 0% bracket, and the remaining $11,650 of gains is taxed at 15%. This bracket-stacking mechanism is crucial for accurate tax planning.
            </p>
          </div>
        </div>
      </section>

      {/* Income Threshold Examples */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Real-World Income Threshold Examples
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Understanding how the brackets work in practice helps you plan your sales strategy. Below are three common scenarios.
          </p>
          <div className="grid gap-6">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <DollarSign className="h-5 w-5" />
                  Example 1: 0% Bracket — Retiree with Low Income
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-2"><strong>Profile:</strong> Single filer, $25,000 in Social Security benefits (partially taxable), $5,000 in IRA withdrawals, sells $40,000 of stock held for 3 years.</p>
                <p className="mb-2"><strong>Calculation:</strong> Total taxable income = $5,000 (IRA) + ~$12,500 (taxable Social Security) = ~$17,500 ordinary income. Adding $40,000 in long-term gains brings total taxable income to ~$57,500.</p>
                <p><strong>Result:</strong> The first $48,350 is covered by the 0% rate. Only $9,150 of gains falls into the 15% bracket, resulting in a tax of approximately <strong>$1,373</strong> on $40,000 of gains. That is an effective rate of just 3.4%.</p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-800">
                  <DollarSign className="h-5 w-5" />
                  Example 2: 15% Bracket — Mid-Career Professional
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-2"><strong>Profile:</strong> Single filer, $85,000 salary, sells $30,000 of stock held for 2 years.</p>
                <p className="mb-2"><strong>Calculation:</strong> Total taxable income after deductions ≈ $72,000. Adding $30,000 in long-term gains brings total to $102,000.</p>
                <p><strong>Result:</strong> The 0% bracket covers the first $48,350. The remaining $53,650 falls into the 15% bracket, resulting in a tax of approximately <strong>$8,048</strong> on $30,000 of gains. The effective rate on the gains alone is about 26.8%—still far below the 24% ordinary rate that would apply if the gain were short-term.</p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800">
                  <DollarSign className="h-5 w-5" />
                  Example 3: 20% Bracket — High Earner
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-2"><strong>Profile:</strong> Married filing jointly, $400,000 combined salary, sells $250,000 of stock held for 5 years.</p>
                <p className="mb-2"><strong>Calculation:</strong> Total taxable income after deductions ≈ $350,000. Adding $250,000 in gains brings total to $600,000.</p>
                <p><strong>Result:</strong> The first $96,700 is in the 0% bracket, the next $503,350 is in the 15% bracket, and the remaining $0 reaches the 20% threshold at $600,050. The total long-term capital gains tax is approximately <strong>$33,425</strong> on $250,000 of gains. With NIIT, add another 3.8% on applicable income, bringing the total closer to <strong>$43,425</strong>.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Step-by-Step Calculation Guide */}
      <section className="py-8 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Step-by-Step: How to Calculate Your Long-Term Capital Gains Tax
          </h2>
          <div className="grid gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">Identify All Long-Term Sales</h3>
                    <p className="text-gray-700">
                      Review your brokerage statements and Form 1099-B to identify every asset you sold during the tax year that was held for more than one year. Each transaction should show the date acquired, date sold, proceeds, cost basis, and the resulting gain or loss. You will report these on IRS Form 8949 with the appropriate box checked for long-term transactions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">Calculate Your Net Long-Term Capital Gain</h3>
                    <p className="text-gray-700">
                      Add up all your long-term gains and subtract all your long-term losses to arrive at your net long-term capital gain. If your losses exceed your gains, the net long-term loss can first offset short-term gains, and up to $3,000 ($1,500 if married filing separately) of the remaining loss can be deducted against ordinary income. Any unused losses carry forward to future tax years.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">Determine Your Taxable Income Without the Gain</h3>
                    <p className="text-gray-700">
                      Calculate your taxable income from all other sources—wages, salary, interest, dividends, short-term capital gains, rental income, etc.—before adding your long-term capital gains. This ordinary income fills up the tax brackets first, which is why the term &quot;bracket stacking&quot; is used. Knowing where your ordinary income ends helps you determine which long-term capital gains rate bracket your gains fall into.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">Apply the Correct Rate to Each Portion</h3>
                    <p className="text-gray-700">
                      Using the long-term capital gains rate table, apply the 0% rate to the portion of your gains that fits within the 0% bracket, the 15% rate to the portion in the 15% bracket, and 20% to any amount above the 20% threshold. For precise calculations, use our free <Link href="/#calculator" className="text-emerald-600 hover:underline font-medium">capital gains tax calculator</Link>, which handles the bracket stacking automatically.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">Check for the NIIT Surcharge</h3>
                    <p className="text-gray-700">
                      If your modified adjusted gross income exceeds $200,000 (single), $250,000 (married filing jointly), or $125,000 (married filing separately), you may owe an additional 3.8% Net Investment Income Tax on the lesser of your net investment income or the excess over the threshold. This surcharge is calculated on Form 8960 and reported on Schedule 2 of your Form 1040.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Holding Period Rules */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Holding Period Rules You Need to Know
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 mb-6">
            <p>
              The holding period is the single most critical factor in determining your capital gains tax rate. Miscounting days can shift your gain from the 15% long-term bracket to the 24%+ ordinary income bracket. Here are the key rules every investor should understand.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-emerald-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-emerald-800">
                  <Clock className="h-5 w-5" />
                  Standard Holding Period
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>The holding period begins the day after you acquire the asset and ends on the day you sell it. For a stock purchased on June 1, 2024, the long-term threshold is reached on June 2, 2025. Selling on June 1, 2025, results in a short-term gain—364 days is not enough; you need more than 365 days.</p>
              </CardContent>
            </Card>
            <Card className="border-emerald-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-emerald-800">
                  <Shield className="h-5 w-5" />
                  Inherited Property
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>When you inherit property, you automatically receive a long-term holding period regardless of how long the deceased owned the asset. Additionally, your cost basis is &quot;stepped up&quot; to the fair market value as of the date of death, which often significantly reduces the taxable gain on a subsequent sale.</p>
              </CardContent>
            </Card>
            <Card className="border-emerald-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-emerald-800">
                  <BarChart3 className="h-5 w-5" />
                  Gifted Property
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>For gifted property, your holding period includes the donor&apos;s holding period (called &quot;tacking&quot;). If your father held a stock for 3 years before gifting it to you, you inherit his 3-year holding period. This means you can sell the stock immediately and the gain would be long-term, assuming the donor held it for more than one year.</p>
              </CardContent>
            </Card>
            <Card className="border-emerald-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-emerald-800">
                  <Info className="h-5 w-5" />
                  Mutual Fund Distributions
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>Mutual funds and ETFs may distribute capital gains to shareholders from internal trading. These distributions retain the fund&apos;s holding period classification. A long-term capital gains distribution is taxed at the preferential long-term rates, even if you have held fund shares for only a few months.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison with Short-Term */}
      <section className="py-8 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Long-Term vs. Short-Term: The Tax Savings Can Be Massive
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800">
                  <Clock className="h-5 w-5" />
                  Short-Term Capital Gains
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Held for 1 year or less</li>
                  <li>• Taxed at ordinary income rates (10%&ndash;37%)</li>
                  <li>• No preferential tax treatment</li>
                  <li>• Common for day traders and active investors</li>
                  <li>• 3.8% NIIT may also apply</li>
                  <li>• Maximum effective rate: 40.8%</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-emerald-200 bg-emerald-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-800">
                  <TrendingUp className="h-5 w-5" />
                  Long-Term Capital Gains
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Held for more than 1 year</li>
                  <li>• Taxed at 0%, 15%, or 20%</li>
                  <li>• Significant tax savings</li>
                  <li>• Ideal for buy-and-hold investors</li>
                  <li>• 3.8% NIIT may also apply</li>
                  <li>• Maximum effective rate: 23.8%</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Savings Example</h3>
              <p className="text-gray-700 mb-2">
                Consider a single filer earning $90,000 who sells stock with a $60,000 gain. If held short-term (ordinary income), the gain would be taxed at 22%, resulting in $13,200 in taxes. If held long-term, only a portion would be taxed at 15%, with some in the 0% bracket, resulting in approximately $4,850 in taxes—a <strong>savings of $8,350</strong> on a single transaction. Over a lifetime of investing, the compounding effect of these savings can be enormous.
              </p>
              <p className="text-gray-700">
                For more details on how short-term gains are calculated, visit our comprehensive guide: <Link href="/short-term-capital-gains-tax-calculator" className="text-emerald-600 hover:underline font-medium">Short-Term Capital Gains Tax Calculator</Link>.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Frequently Asked Questions About Long-Term Capital Gains
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Answers to the most common questions investors have about long-term capital gains tax rates, rules, and strategies.
          </p>
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Calculate Your Long-Term Capital Gains Tax
          </h2>
          <p className="text-emerald-100 text-lg mb-8">
            Use our free calculator to get an instant, accurate estimate of your long-term capital gains tax liability for 2025 and 2026.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#calculator">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold">
                <Calculator className="mr-2 h-5 w-5" />
                Free Tax Calculator
              </Button>
            </Link>
            <Link href="/capital-gains-tax-rates">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold">
                Full Tax Rates Table
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}