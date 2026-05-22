import { Metadata } from 'next';
import Link from 'next/link';
import SiteLayout from '@/components/SiteLayout';
import RelatedCalculators from '@/components/RelatedCalculators';
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
  HelpCircle,
  Shield,
  BarChart3,
  Lightbulb,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Short-Term Capital Gains Tax Calculator 2025 & 2026',
  description: 'Calculate short-term capital gains tax on assets held one year or less. See ordinary income tax rates, examples, and strategies to reduce your tax bill.',
  alternates: {
    canonical: 'https://taxgainscalc.com/short-term-capital-gains-tax-calculator',
  },
  openGraph: {
    title: 'Short-Term Capital Gains Tax Calculator 2025 & 2026',
    description: 'Calculate short-term capital gains tax on assets held one year or less. See ordinary income tax rates, examples, and strategies to reduce your tax bill.',
    url: 'https://taxgainscalc.com/short-term-capital-gains-tax-calculator',
    siteName: 'TaxGainsCalc',
    type: 'website',
    locale: 'en_US',
  },
};

export default function ShortTermCapitalGainsCalculatorPage() {
  const faqs = [
    {
      question: 'What is considered a short-term capital gain?',
      answer: 'A short-term capital gain is the profit you earn when you sell a capital asset that you have owned for one year or less. The IRS counts the holding period from the day after purchase to the day of sale. If you buy a stock on February 1 and sell it on January 31 of the following year, you have held it for 364 days—this is still a short-term holding. You need to hold the asset for more than 365 days to qualify for the lower long-term capital gains rates.',
    },
    {
      question: 'How are short-term capital gains taxed?',
      answer: 'Short-term capital gains are taxed at your ordinary income tax rate—the same rate that applies to your wages, salary, and other earned income. For 2025, these rates range from 10% to 37% depending on your taxable income and filing status. There is no preferential treatment for short-term gains. Additionally, high-income earners may be subject to the 3.8% Net Investment Income Tax on top of their ordinary rate.',
    },
    {
      question: 'What is the highest short-term capital gains tax rate?',
      answer: 'The top federal marginal tax rate for short-term capital gains is 37%, which applies to single filers with taxable income over $626,350 and married couples filing jointly with income over $751,600 (2025 thresholds). When combined with the 3.8% Net Investment Income Tax, the effective maximum rate can reach 40.8%. This is nearly double the 20% top rate for long-term capital gains, making the holding period one of the most impactful variables in investment tax planning.',
    },
    {
      question: 'Can I offset short-term capital gains with losses?',
      answer: 'Yes. Capital losses—both short-term and long-term—can offset capital gains of any type. First, net your short-term gains against short-term losses, and long-term gains against long-term losses. Then, if one category has a net loss, you can use it to offset gains from the other category. If your total losses exceed your total gains, you can deduct up to $3,000 ($1,500 if married filing separately) against ordinary income per year, carrying any unused losses forward indefinitely.',
    },
    {
      question: 'What is the wash sale rule and how does it affect short-term gains?',
      answer: 'The wash sale rule disallows a tax loss if you purchase a substantially identical security within 30 days before or after selling it at a loss. This rule commonly trips up investors who harvest short-term losses only to immediately buy back the same stock. To avoid a wash sale, you can wait at least 31 days before repurchasing, buy a similar but not substantially identical security (such as an ETF tracking the same sector), or purchase additional shares before selling the loss position.',
    },
    {
      question: 'Are day traders subject to special short-term capital gains rules?',
      answer: 'Full-time day traders who meet the IRS criteria for &quot;trader tax status&quot; (TTS) can elect Section 475(f) mark-to-market accounting, which treats all gains and losses as ordinary income regardless of holding period. While this eliminates the distinction between short-term and long-term gains, it also allows traders to deduct trading-related business expenses and avoid wash sale rules. However, TTS requires a documented pattern of frequent, substantial trading activity and is not available to casual investors.',
    },
  ];

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxgainscalc.com' },
              { '@type': 'ListItem', position: 2, name: 'Short-Term Capital Gains Tax Calculator', item: 'https://taxgainscalc.com/short-term-capital-gains-tax-calculator' },
            ],
          }),
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Short-Term Gains — 2025 & 2026 Rates</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Short-Term Capital Gains Tax Calculator
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            Assets held for one year or less are taxed at ordinary income rates up to 37%. Learn how short-term gains are calculated, see the rate tables, and discover strategies to minimize your tax bill.
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
          <span className="text-gray-900 font-medium">Short-Term Capital Gains Tax Calculator</span>
        </nav>
      </div>

      {/* What Are Short-Term Capital Gains */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            What Are Short-Term Capital Gains?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              A short-term capital gain is the profit you realize when you sell a capital asset that you have held for one year or less. Unlike long-term capital gains, which benefit from preferential tax rates of 0%, 15%, or 20%, short-term gains receive no special tax treatment. They are simply added to your ordinary income—wages, salaries, tips, interest, and other earnings—and taxed at your marginal income tax rate, which for the 2025 tax year ranges from 10% to 37%.
            </p>
            <p className="mb-4">
              The holding period is defined strictly by the IRS. It begins the day after you acquire the asset and ends on the date of the sale. This means if you buy a stock on January 1 and sell it on January 1 of the following year, you have held it for exactly 364 days, which is still classified as short-term. To qualify for the preferential long-term rate, you must hold the asset for more than 365 days. This precise day-counting matters enormously: a $50,000 short-term gain for someone in the 32% bracket incurs $16,000 in tax, while the same gain held a few days longer and taxed at 15% would cost just $7,500—a difference of $8,500.
            </p>
            <p>
              Short-term capital gains are most common among active traders, swing traders, and investors who frequently rotate their portfolios. Day traders, in particular, generate almost exclusively short-term gains, which is one reason why tax efficiency is a critical consideration in active trading strategies. Understanding how these gains are taxed—and what you can do to manage the impact—is essential for anyone who buys and sells assets within a one-year timeframe.
            </p>
          </div>
        </div>
      </section>

      {/* Short-Term Tax Rate Table */}
      <section className="py-8 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Short-Term Capital Gains Tax Rates (2025)
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Short-term capital gains are taxed at the same rates as your ordinary income. The table below shows the seven federal income tax brackets for 2025.
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
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Married Filing Separately</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Head of Household</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-bold text-green-600 text-lg">10%</td>
                      <td className="px-4 py-3">Up to $11,925</td>
                      <td className="px-4 py-3">Up to $23,850</td>
                      <td className="px-4 py-3">Up to $11,925</td>
                      <td className="px-4 py-3">Up to $17,000</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3 font-bold text-green-600 text-lg">12%</td>
                      <td className="px-4 py-3">$11,926 – $48,475</td>
                      <td className="px-4 py-3">$23,851 – $96,950</td>
                      <td className="px-4 py-3">$11,926 – $48,475</td>
                      <td className="px-4 py-3">$17,001 – $64,850</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-bold text-amber-600 text-lg">22%</td>
                      <td className="px-4 py-3">$48,476 – $103,350</td>
                      <td className="px-4 py-3">$96,951 – $206,700</td>
                      <td className="px-4 py-3">$48,476 – $103,350</td>
                      <td className="px-4 py-3">$64,851 – $103,350</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3 font-bold text-amber-600 text-lg">24%</td>
                      <td className="px-4 py-3">$103,351 – $197,300</td>
                      <td className="px-4 py-3">$206,701 – $394,600</td>
                      <td className="px-4 py-3">$103,351 – $197,300</td>
                      <td className="px-4 py-3">$103,351 – $197,300</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-bold text-orange-600 text-lg">32%</td>
                      <td className="px-4 py-3">$197,301 – $250,525</td>
                      <td className="px-4 py-3">$394,601 – $501,050</td>
                      <td className="px-4 py-3">$197,301 – $250,525</td>
                      <td className="px-4 py-3">$197,301 – $250,500</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3 font-bold text-red-600 text-lg">35%</td>
                      <td className="px-4 py-3">$250,526 – $626,350</td>
                      <td className="px-4 py-3">$501,051 – $751,600</td>
                      <td className="px-4 py-3">$250,526 – $375,800</td>
                      <td className="px-4 py-3">$250,501 – $626,350</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-bold text-red-700 text-lg">37%</td>
                      <td className="px-4 py-3">Over $626,350</td>
                      <td className="px-4 py-3">Over $751,600</td>
                      <td className="px-4 py-3">Over $375,800</td>
                      <td className="px-4 py-3">Over $626,350</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          <div className="mt-6 prose prose-lg max-w-none text-gray-700">
            <p>
              Because short-term capital gains are treated as ordinary income, they can push you into a higher tax bracket, increasing the rate applied not only to your gains but also to your other income. For example, a single filer earning $80,000 in salary who realizes $30,000 in short-term gains would have a total taxable income of $110,000, moving part of their income from the 22% bracket into the 24% bracket. This &quot;bracket creep&quot; effect is one of the hidden costs of short-term trading that many investors overlook.
            </p>
          </div>
        </div>
      </section>

      {/* Why Short-Term Is More Expensive */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Why Short-Term Capital Gains Are More Expensive
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800">
                  <Clock className="h-5 w-5" />
                  Short-Term Gain
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-2"><strong>Scenario:</strong> Single filer, $80,000 salary, $40,000 gain on stock held 8 months.</p>
                <p className="mb-2">Total taxable income: $120,000</p>
                <p className="mb-2">Marginal rate: 22% (partially 24%)</p>
                <p className="text-red-700 font-bold text-lg">Estimated tax: ~$8,900</p>
              </CardContent>
            </Card>
            <Card className="border-emerald-200 bg-emerald-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-800">
                  <TrendingUp className="h-5 w-5" />
                  Long-Term Gain (same $40,000)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-2"><strong>Scenario:</strong> Same income, but stock held 14 months.</p>
                <p className="mb-2">Long-term rate: 15% (most gains in this bracket)</p>
                <p className="mb-2">0% bracket partially utilized</p>
                <p className="text-emerald-700 font-bold text-lg">Estimated tax: ~$4,475</p>
              </CardContent>
            </Card>
          </div>
          <Card className="border-emerald-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <DollarSign className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Savings from Holding Just 6 Months Longer: $4,425</h3>
                  <p className="text-gray-700">
                    In this example, simply waiting a few extra months to sell turns a short-term gain into a long-term gain, cutting the tax bill roughly in half. Over a multi-decade investing career, the cumulative savings from holding assets long-term can amount to tens or even hundreds of thousands of dollars. This is why most financial advisors consistently recommend a buy-and-hold approach over active trading for the vast majority of individual investors.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Strategies to Avoid or Reduce Short-Term Gains */}
      <section className="py-8 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Strategies to Reduce Short-Term Capital Gains Tax
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            While you cannot always control when you need to sell an asset, these strategies can significantly reduce your short-term capital gains tax burden.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">1. Extend Your Holding Period Past One Year</h3>
                    <p className="text-gray-700">
                      The simplest strategy is to delay the sale until you have held the asset for more than one year. Before selling, check the exact purchase date on your brokerage statement and calculate the number of days. Even waiting an extra few weeks can convert a short-term gain taxed at up to 37% into a long-term gain taxed at 15% or less. This single action often provides the biggest tax savings with zero additional cost or complexity.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">2. Harvest Short-Term Losses to Offset Gains</h3>
                    <p className="text-gray-700">
                      Tax-loss harvesting works especially well for short-term gains because you can use short-term losses to offset short-term gains dollar for dollar. Review your portfolio for positions currently trading below your cost basis. Selling these at a loss and using the proceeds to buy a similar (but not substantially identical) investment allows you to capture the tax deduction while maintaining your market exposure. Be mindful of the 31-day wash sale rule.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">3. Use Tax-Advantaged Accounts</h3>
                    <p className="text-gray-700">
                      The most effective way to avoid short-term capital gains tax entirely is to trade within tax-advantaged accounts. Traditional and Roth IRAs, 401(k) plans, and similar accounts shield all investment gains from current taxation regardless of holding period. Active traders should prioritize using these accounts for frequent trading activity. While Roth accounts require after-tax contributions, qualified withdrawals—including all gains—are completely tax-free.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">4. Spread Sales Across Tax Years</h3>
                    <p className="text-gray-700">
                      If you have a large short-term gain, consider whether you can split the sale across two tax years to avoid pushing yourself into a higher bracket. Selling part of your position in December and the remainder in January, for example, divides the taxable income between two years and may keep each year&apos;s income within a lower bracket. This timing strategy is especially useful at year-end and can be combined with other income management techniques.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">5. Increase Deductions or Contributions to Lower AGI</h3>
                    <p className="text-gray-700">
                      Since short-term gains are taxed as ordinary income, reducing your adjusted gross income (AGI) can lower the rate applied to those gains. Maximize contributions to tax-deferred retirement accounts (401(k), traditional IRA, HSA), contribute to health savings accounts, and itemize deductions when beneficial. Charitable contributions of appreciated assets are also effective—you avoid recognizing the gain entirely while still deducting the fair market value.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">6. Be Aware of the NIIT Surcharge</h3>
                    <p className="text-gray-700">
                      If your modified AGI exceeds $200,000 (single) or $250,000 (married filing jointly), the 3.8% Net Investment Income Tax applies to your short-term gains and other investment income. Strategies to manage this include maximizing above-the-line deductions, timing the realization of gains to stay below the threshold, or increasing retirement contributions to reduce MAGI. For investment property, passive income rules may also affect the NIIT calculation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Short-Term vs Long-Term Comparison Table */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Side-by-Side: Short-Term vs. Long-Term Rates
          </h2>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-emerald-600 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Feature</th>
                      <th className="px-4 py-3 text-left font-semibold">Short-Term</th>
                      <th className="px-4 py-3 text-left font-semibold">Long-Term</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium text-gray-900">Holding Period</td>
                      <td className="px-4 py-3 text-gray-700">&le; 1 year</td>
                      <td className="px-4 py-3 text-gray-700">&gt; 1 year</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">Tax Rate Range</td>
                      <td className="px-4 py-3 text-red-700 font-semibold">10% – 37%</td>
                      <td className="px-4 py-3 text-green-700 font-semibold">0% – 20%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium text-gray-900">Tax Treatment</td>
                      <td className="px-4 py-3 text-gray-700">Ordinary income</td>
                      <td className="px-4 py-3 text-gray-700">Preferential rates</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">Bracket Impact</td>
                      <td className="px-4 py-3 text-gray-700">Yes — can push into higher bracket</td>
                      <td className="px-4 py-3 text-gray-700">Separate bracket schedule</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium text-gray-900">NIIT (3.8%)</td>
                      <td className="px-4 py-3 text-gray-700">May apply</td>
                      <td className="px-4 py-3 text-gray-700">May apply</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">Maximum Effective Rate</td>
                      <td className="px-4 py-3 text-red-700 font-semibold">40.8%</td>
                      <td className="px-4 py-3 text-green-700 font-semibold">23.8%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-900">Common For</td>
                      <td className="px-4 py-3 text-gray-700">Day traders, active investors</td>
                      <td className="px-4 py-3 text-gray-700">Buy-and-hold investors</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          <div className="mt-6 prose prose-lg max-w-none text-gray-700">
            <p>
              The side-by-side comparison makes the tax advantage of long-term holding clear. A taxpayer in the 32% ordinary bracket pays 32% on short-term gains but only 15% on long-term gains—a difference of 17 percentage points. On a $100,000 gain, that is $17,000 in additional tax for selling too soon. For a detailed breakdown of long-term rates, see our <Link href="/long-term-capital-gains-tax-calculator" className="text-emerald-600 hover:underline font-medium">long-term capital gains tax calculator guide</Link>, or explore the complete rate tables on our <Link href="/capital-gains-tax-rates" className="text-emerald-600 hover:underline font-medium">capital gains tax rates page</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Common questions about short-term capital gains tax rates, calculation methods, and reduction strategies.
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

      {/* 2026 Projected Brackets */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Short-Term Capital Gains Tax Brackets 2026 (Projected)
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            The 2026 brackets below are projected based on IRS inflation-adjustment trends. Final official numbers will be released by the IRS in late 2025.
          </p>
          <Card>
            <CardHeader className="bg-red-600 text-white rounded-t-xl">
              <CardTitle className="text-xl flex items-center gap-2">
                <Clock className="h-5 w-5" />
                2026 Projected Ordinary Income Tax Rates (Short-Term Gains)
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
                    <tr className="border-b"><td className="px-4 py-3 font-bold text-green-600 text-lg">10%</td><td className="px-4 py-3">Up to $12,200</td><td className="px-4 py-3">Up to $24,400</td><td className="px-4 py-3">Up to $12,200</td><td className="px-4 py-3">Up to $17,400</td></tr>
                    <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-bold text-green-600 text-lg">12%</td><td className="px-4 py-3">$12,201 – $49,500</td><td className="px-4 py-3">$24,401 – $99,000</td><td className="px-4 py-3">$12,201 – $49,500</td><td className="px-4 py-3">$17,401 – $66,500</td></tr>
                    <tr className="border-b"><td className="px-4 py-3 font-bold text-amber-600 text-lg">22%</td><td className="px-4 py-3">$49,501 – $105,450</td><td className="px-4 py-3">$99,001 – $210,900</td><td className="px-4 py-3">$49,501 – $105,450</td><td className="px-4 py-3">$66,501 – $105,450</td></tr>
                    <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-bold text-amber-600 text-lg">24%</td><td className="px-4 py-3">$105,451 – $201,050</td><td className="px-4 py-3">$210,901 – $402,100</td><td className="px-4 py-3">$105,451 – $201,050</td><td className="px-4 py-3">$105,451 – $201,050</td></tr>
                    <tr className="border-b"><td className="px-4 py-3 font-bold text-orange-600 text-lg">32%</td><td className="px-4 py-3">$201,051 – $255,550</td><td className="px-4 py-3">$402,101 – $511,150</td><td className="px-4 py-3">$201,051 – $255,550</td><td className="px-4 py-3">$201,051 – $255,500</td></tr>
                    <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-bold text-red-600 text-lg">35%</td><td className="px-4 py-3">$255,551 – $638,900</td><td className="px-4 py-3">$511,151 – $767,800</td><td className="px-4 py-3">$255,551 – $383,900</td><td className="px-4 py-3">$255,551 – $638,900</td></tr>
                    <tr><td className="px-4 py-3 font-bold text-red-700 text-lg">37%</td><td className="px-4 py-3">Over $638,900</td><td className="px-4 py-3">Over $767,800</td><td className="px-4 py-3">Over $383,900</td><td className="px-4 py-3">Over $638,900</td></tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          <div className="mt-6 prose prose-lg max-w-none text-gray-700">
            <p>The IRS adjusts these brackets annually for inflation, meaning the thresholds increase slightly each year. While the seven tax rates (10%, 12%, 22%, 24%, 32%, 35%, 37%) are set by legislation and do not change with inflation, the income thresholds that determine which bracket you fall into shift upward. This bracket creep means that over time, more of your income may be taxed at lower rates even if your real income remains constant.</p>
          </div>
        </div>
      </section>

      {/* Complete Examples */}
      <section className="py-8 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            How Short-Term Gains Are Taxed: Complete Examples
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            The following three examples demonstrate how short-term capital gains tax is calculated for different income levels and filing statuses.
          </p>
          <div className="space-y-6">
            <Card>
              <CardHeader><CardTitle className="text-lg text-emerald-800">Example 1: Mid-Income Salaried Worker with Stock Bonus</CardTitle></CardHeader>
              <CardContent className="text-gray-700 text-sm">
                <p className="mb-2"><strong>Profile:</strong> Single filer, $70,000 annual salary, exercised stock options with a $25,000 short-term gain after 10 months.</p>
                <p className="mb-2"><strong>Ordinary income:</strong> $70,000 (after standard deduction of $15,700, taxable income is approximately $54,300)</p>
                <p className="mb-2"><strong>Total with gain:</strong> $79,300 taxable income (pushes into 22% bracket partially)</p>
                <p className="mb-2"><strong>Calculation:</strong> First $11,925 at 10% = $1,193; $11,926-$48,475 at 12% = $4,386; remaining $19,825 at 22% = $4,362. Tax on gain portion: approximately $4,362 (marginal 22%) + portion of lower brackets.</p>
                <p><strong>Estimated total federal tax on gain:</strong> ~$4,400 (effective rate of ~18%)</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg text-emerald-800">Example 2: High-Income Earner with Large Short-Term Gain</CardTitle></CardHeader>
              <CardContent className="text-gray-700 text-sm">
                <p className="mb-2"><strong>Profile:</strong> Married filing jointly, $350,000 combined salary, sold rental property after 8 months with $100,000 short-term gain.</p>
                <p className="mb-2"><strong>Ordinary income:</strong> $350,000 (after standard deduction of $31,200, taxable income is ~$318,800)</p>
                <p className="mb-2"><strong>Total with gain:</strong> $418,800 (pushes significantly into 32% and 35% brackets)</p>
                <p className="mb-2"><strong>Calculation:</strong> Using marginal rates: first portion at 22%, middle at 24%, then 32% on the gain. The $100,000 gain spans multiple brackets. Estimated marginal rate on gain: approximately 32%.</p>
                <p className="mb-2"><strong>Tax on gain:</strong> ~$32,000 at 32% marginal rate. Plus 3.8% NIIT on amount exceeding $250,000 threshold: $168,800 x 3.8% = ~$6,414.</p>
                <p><strong>Estimated total on gain:</strong> ~$38,414 (effective rate of ~38.4%)</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-lg text-emerald-800">Example 3: Retiree with Low Income and Small Gain</CardTitle></CardHeader>
              <CardContent className="text-gray-700 text-sm">
                <p className="mb-2"><strong>Profile:</strong> Single filer, $25,000 Social Security (partially taxable = ~$2,500), $15,000 short-term gain on stock held 11 months.</p>
                <p className="mb-2"><strong>Ordinary income:</strong> $2,500 (taxable Social Security)</p>
                <p className="mb-2"><strong>Total with gain:</strong> $17,500 (entirely within 12% bracket)</p>
                <p className="mb-2"><strong>Calculation:</strong> First $11,925 at 10% = $1,193; remaining $5,575 at 12% = $669.</p>
                <p><strong>Estimated total federal tax on gain:</strong> ~$1,862 (effective rate of ~12.4%)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <RelatedCalculators />

      {/* CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Calculate Your Short-Term Capital Gains Tax
          </h2>
          <p className="text-emerald-100 text-lg mb-8">
            Use our free calculator to see exactly how much you owe on short-term gains—or how much you could save by holding a little longer.
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