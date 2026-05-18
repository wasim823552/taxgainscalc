import { Metadata } from 'next';
import Link from 'next/link';
import SiteLayout from '@/components/SiteLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Calculator,
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  XCircle,
  BarChart3,
  FileText,
  Clock,
  DollarSign,
  Shield,
  Info,
  Users,
  Briefcase,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Day Trading Tax Calculator | Stock Trading Tax Estimator',
  description:
    'Calculate taxes on day trading income. Learn how day traders are taxed, mark-to-market rules, wash sale rules, and trader tax status requirements.',
  alternates: {
    canonical: 'https://taxgainscalc.com/day-trading-tax-calculator',
  },
  openGraph: {
    title: 'Day Trading Tax Calculator | Stock Trading Tax Estimator',
    description:
      'Free guide to day trading taxes. Understand how day trading income is taxed and calculate your estimated tax liability for 2025-2026.',
    url: 'https://taxgainscalc.com/day-trading-tax-calculator',
    type: 'article',
  },
};

const faqs = [
  {
    question: 'How is day trading income taxed?',
    answer:
      'Day trading income is typically taxed as short-term capital gains because most day traders hold positions for less than one year. Short-term capital gains are taxed at your ordinary income tax rate, which ranges from 10% to 37% for the 2025-2026 tax year depending on your total taxable income and filing status. If your trading activity qualifies you for Trader Tax Status (TTS), you may elect mark-to-market accounting under IRS Section 475, which treats all gains as ordinary income but allows unlimited loss deductions and eliminates wash sale rules.',
  },
  {
    question: 'What is mark-to-market accounting for day traders?',
    answer:
      'Mark-to-market (MTM) accounting is an IRS election under Section 475(f) that allows qualifying traders to treat all their trading positions as if they were sold at the end of the year at fair market value. This means all gains and losses are treated as ordinary income or loss, regardless of holding period. The key advantages are: (1) unlimited loss deductions against ordinary income (no $3,000 annual cap), (2) wash sale rules do not apply, and (3) losses can offset other income like wages. The disadvantage is that you cannot use lower long-term capital gains rates. The MTM election must be made by the due date of the prior year\'s tax return.',
  },
  {
    question: 'Do day traders pay self-employment tax?',
    answer:
      'Generally, no. Day trading profits are considered capital gains or investment income, not earned income, so they are not subject to the 15.3% self-employment tax (Social Security and Medicare). However, there is an important distinction: if you have Trader Tax Status (TTS), you can deduct business expenses related to your trading activity, but the trading profits themselves are still not subject to self-employment tax. Some traders establish an S-Corporation or LLC to create a management fee arrangement, which can allow for additional tax deductions through retirement plans and health insurance, but this strategy requires careful planning.',
  },
  {
    question: 'What are wash sale rules and how do they affect day traders?',
    answer:
      'The wash sale rule (IRS Section 1091) disallows a tax loss if you purchase a substantially identical security within 30 days before or after the sale at a loss. The disallowed loss is added to the cost basis of the replacement security, deferring the tax benefit rather than eliminating it. For day traders who frequently trade the same stocks, wash sale violations can accumulate rapidly and significantly increase their tax liability. One solution is to elect mark-to-market accounting, which eliminates wash sale rules entirely. Another approach is to track wash sales carefully using trading journal software and avoid repurchasing the same security within the 30-day window.',
  },
  {
    question: 'How do I qualify for Trader Tax Status (TTS)?',
    answer:
      'The IRS does not provide a clear statutory definition of Trader Tax Status, but court cases have established four key criteria: (1) you must trade substantially, regularly, frequently, and continuously; (2) your trading activity must be aimed at profiting from short-term price swings, not long-term appreciation or dividends; (3) you must spend significant time on trading—the IRS has generally required a minimum of four hours per trading day on average; and (4) your trading volume should be substantial—most tax professionals recommend at least hundreds of trades per year. The IRS distinguishes between a trader (who trades as a business) and an investor (who invests for long-term growth). Meeting TTS requirements allows you to deduct business expenses and elect mark-to-market accounting.',
  },
  {
    question: 'Should I make estimated tax payments as a day trader?',
    answer:
      'Yes, most day traders should make quarterly estimated tax payments because day trading typically generates income that is not subject to withholding. The IRS requires you to pay taxes throughout the year, either through withholding or estimated payments. If you owe more than $1,000 when you file your return and have not made sufficient estimated payments, you may be subject to underpayment penalties. Estimated tax payments are due on April 15, June 15, September 15, and January 15 of the following year. A safe harbor rule allows you to avoid penalties if you pay at least 100% of your prior year\'s tax liability (110% if your adjusted gross income exceeded $150,000) through quarterly estimates and withholding.',
  },
  {
    question: 'Can I deduct trading losses from my regular income?',
    answer:
      'For a typical investor (without Trader Tax Status), net capital losses can offset capital gains dollar for dollar, but only up to $3,000 ($1,500 for married filing separately) of excess losses can be deducted against ordinary income per year. Remaining losses carry forward indefinitely. For traders with mark-to-market accounting, ALL trading losses are deductible as ordinary business losses, with no $3,000 cap. This is one of the most significant advantages of MTM accounting, as a bad year of trading could generate hundreds of thousands of dollars in losses that offset wages, interest, dividends, and other income.',
  },
];

export default function DayTradingTaxCalculatorPage() {
  return (
    <SiteLayout>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
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
              { '@type': 'ListItem', position: 2, name: 'Day Trading Tax Calculator', item: 'https://taxgainscalc.com/day-trading-tax-calculator' },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Updated for 2025-2026 Tax Year</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Day Trading Tax Calculator</h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            Understand how day trading income is taxed. Learn about short-term capital gains, mark-to-market accounting, wash sale rules, and trader tax status.
          </p>
          <Link href="/#calculator">
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold">
              <Calculator className="h-5 w-5 mr-2" />
              Use Free Tax Calculator
            </Button>
          </Link>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            How Day Trading Income Is Taxed
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Day trading is one of the most tax-intensive investment activities in the United States. Because day traders typically hold positions for hours or minutes rather than months or years, virtually all trading profits are classified as short-term capital gains, which are taxed at ordinary income tax rates. This means a day trader in the highest federal bracket (37%) pays a significantly higher tax rate than a long-term investor who qualifies for the 0%, 15%, or 20% long-term capital gains rates.
            </p>
            <p>
              The tax treatment of day trading income depends on several factors: whether you qualify as a trader for tax purposes, whether you elect mark-to-market accounting, your total taxable income, and your state of residence. Understanding these factors is essential for accurate tax planning and can help you make more informed decisions about your trading strategy and business structure.
            </p>
            <p>
              It is important to distinguish between an <strong>investor</strong> and a <strong>trader</strong> in the eyes of the IRS. An investor buys and sells securities for long-term growth and investment purposes, while a trader engages in frequent buying and selling with the primary goal of profiting from short-term price movements. The distinction matters because traders who meet the criteria for Trader Tax Status (TTS) can access valuable tax deductions and accounting elections not available to casual investors.
            </p>
          </div>
        </section>

        {/* Day Trader vs Investor Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Day Trader vs. Investor: Tax Treatment Comparison
          </h2>
          <p className="text-gray-600 mb-6">
            The table below compares the tax treatment of a casual investor versus a day trader who qualifies for Trader Tax Status (TTS) with mark-to-market (MTM) accounting.
          </p>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-emerald-600 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Tax Feature</th>
                      <th className="px-4 py-3 text-left font-semibold">Casual Investor</th>
                      <th className="px-4 py-3 text-left font-semibold">Day Trader (TTS + MTM)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        feature: 'Short-term gains tax rate',
                        investor: 'Ordinary income (10%–37%)',
                        trader: 'Ordinary income (10%–37%)',
                      },
                      {
                        feature: 'Long-term gains rate',
                        investor: '0%, 15%, or 20%',
                        trader: 'All gains are ordinary income',
                        traderNote: 'Loss of preferential rates',
                      },
                      {
                        feature: 'Loss deduction limit',
                        investor: '$3,000/year against ordinary income',
                        trader: 'Unlimited against ordinary income',
                      },
                      {
                        feature: 'Wash sale rules',
                        investor: 'Applies—losses deferred',
                        trader: 'Does not apply',
                      },
                      {
                        feature: 'Business expense deductions',
                        investor: 'Limited (Schedule A)',
                        trader: 'Full business deductions (Schedule C)',
                      },
                      {
                        feature: 'Self-employment tax',
                        investor: 'Not applicable',
                        trader: 'Not applicable (unless via S-Corp)',
                      },
                      {
                        feature: 'Estimated tax payments',
                        investor: 'May be required',
                        trader: 'Required (no withholding)',
                      },
                    ].map((row, i) => (
                      <tr key={row.feature} className={`border-b ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        <td className="px-4 py-3 text-gray-800 font-medium">{row.feature}</td>
                        <td className="px-4 py-3 text-gray-600">{row.investor}</td>
                        <td className="px-4 py-3 text-gray-600">
                          <div className="flex items-center gap-2">
                            {row.trader}
                            {row.traderNote && (
                              <Badge variant="outline" className="text-xs border-amber-300 text-amber-700">
                                {row.traderNote}
                              </Badge>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mark-to-Market Accounting */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Mark-to-Market Accounting (Section 475)
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Mark-to-market (MTM) accounting is one of the most powerful tax tools available to qualifying day traders. Under Internal Revenue Code Section 475(f), traders with Trader Tax Status can elect to treat all open positions as sold at their fair market value on the last business day of the tax year. This election fundamentally changes how trading gains and losses are reported and taxed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <Card className="border-emerald-200 bg-emerald-50">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-800 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Advantages of MTM
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Unlimited loss deductions against all ordinary income (no $3,000 annual cap)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Wash sale rules do not apply—no deferred losses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Losses can offset wages, interest, dividends, and other income</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Simplified year-end reporting on one form (no Form 8949)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>No need to track holding periods for every trade</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-red-200 bg-red-50">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  Disadvantages of MTM
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>All gains are ordinary income—no preferential long-term rates (0%, 15%, 20%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Unrealized gains at year-end become taxable even if you still hold the position</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Higher maximum rate: 37% vs. 20% for long-term gains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>IRS requires revocation of MTM election with permission—difficult to undo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card className="border-amber-200 bg-amber-50 mt-4">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-amber-800 mb-1">MTM Election Deadline</h4>
                  <p className="text-gray-700 text-sm">
                    The mark-to-market election must be made by the due date (including extensions) of the tax return for the <strong>prior</strong> year. For example, to elect MTM for the 2025 tax year, you must make the election by April 15, 2025 (or October 15, 2025, if you filed an extension for your 2024 return). Missing this deadline means you must wait until the following year to make the election.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Trader Tax Status */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Qualifying for Trader Tax Status (TTS)
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4 mb-6">
            <p>
              Trader Tax Status (TTS) is not a formal IRS designation but rather a classification determined by the facts and circumstances of your trading activity. Courts have established several criteria that the IRS uses to distinguish a trader from an investor. Meeting these criteria unlocks significant tax benefits, including the ability to deduct trading-related business expenses and elect mark-to-market accounting.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-800 mb-2 flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  1. Substantial Trading Activity
                </h3>
                <p className="text-gray-600 text-sm">
                  You must trade frequently and in substantial dollar amounts. While there is no minimum number of trades specified in the tax code, most tax professionals recommend at least several hundred trades per year. Trading a single stock occasionally is not sufficient. The IRS looks at the total dollar volume, the number of trades, and the frequency of transactions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-800 mb-2 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  2. Regular and Continuous Trading
                </h3>
                <p className="text-gray-600 text-sm">
                  Your trading must be regular and continuous throughout the year, not sporadic or seasonal. The IRS has generally looked for traders who spend significant time trading on a daily or near-daily basis during market hours. Traders who only trade for a few weeks out of the year may not meet this requirement.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-800 mb-2 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  3. Short-Term Profit Motive
                </h3>
                <p className="text-gray-600 text-sm">
                  Your primary goal must be to profit from short-term price swings, not from long-term appreciation, dividends, or interest income. Day traders who capture intraday and swing trades over days or weeks satisfy this criterion. Buy-and-hold investors seeking long-term growth generally do not.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-800 mb-2 flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  4. Business-Like Approach
                </h3>
                <p className="text-gray-600 text-sm">
                  You must approach trading as a business, maintaining detailed records, having a trading plan, using trading tools and platforms, and dedicating significant time to research and execution. Maintaining a dedicated home office for trading, subscribing to market data services, and having a business entity (LLC or S-Corp) can help demonstrate a business-like approach.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Tax Calculation Examples */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Day Trading Tax Calculation Examples
          </h2>
          <p className="text-gray-600 mb-6">
            The following examples illustrate estimated tax liability for day traders with different income levels. All figures assume single filing status and that all gains are short-term (taxed as ordinary income).
          </p>
          <div className="space-y-6">
            {/* Example 1 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-emerald-800">
                  Example 1: Part-Time Day Trader — $50,000 Net Trading Profit
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b bg-gray-50">
                        <td className="px-4 py-2.5 text-gray-600">Net trading profit (short-term gains)</td>
                        <td className="px-4 py-2.5 text-right text-gray-800">$50,000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2.5 text-gray-600">Other ordinary income (W-2 wages)</td>
                        <td className="px-4 py-2.5 text-right text-gray-800">$60,000</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="px-4 py-2.5 text-gray-600">Total taxable income</td>
                        <td className="px-4 py-2.5 text-right font-medium text-gray-800">$110,000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2.5 text-gray-600">Federal tax (estimated, 2025 brackets)</td>
                        <td className="px-4 py-2.5 text-right text-gray-800">$17,350</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="px-4 py-2.5 text-gray-600">Self-employment tax</td>
                        <td className="px-4 py-2.5 text-right text-emerald-600">$0 (not applicable)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2.5 text-gray-600">NIIT (3.8% on investment income over $200k)</td>
                        <td className="px-4 py-2.5 text-right text-emerald-600">$0 (below threshold)</td>
                      </tr>
                      <tr className="bg-emerald-50">
                        <td className="px-4 py-2.5 font-bold text-emerald-800">Estimated federal tax on trading income</td>
                        <td className="px-4 py-2.5 text-right font-bold text-emerald-800">~$6,700 (marginal 22%)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500 mt-3 px-4 pb-4">
                  Note: The $50,000 in trading gains falls partially in the 22% and 24% brackets when stacked on top of wages. Total federal tax on the $50,000 gain is approximately $6,700–$7,900 depending on deductions. State taxes may add 0%–13.3% depending on your state.
                </p>
              </CardContent>
            </Card>

            {/* Example 2 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-emerald-800">
                  Example 2: Full-Time Day Trader — $200,000 Net Trading Profit
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b bg-gray-50">
                        <td className="px-4 py-2.5 text-gray-600">Net trading profit (short-term gains)</td>
                        <td className="px-4 py-2.5 text-right text-gray-800">$200,000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2.5 text-gray-600">Total taxable income (no other income)</td>
                        <td className="px-4 py-2.5 text-right font-medium text-gray-800">$200,000</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="px-4 py-2.5 text-gray-600">Federal tax (estimated, 2025 brackets)</td>
                        <td className="px-4 py-2.5 text-right text-gray-800">$38,200</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2.5 text-gray-600">Self-employment tax</td>
                        <td className="px-4 py-2.5 text-right text-emerald-600">$0 (not applicable)</td>
                      </tr>
                      <tr className="border-b bg-amber-50">
                        <td className="px-4 py-2.5 text-gray-600">NIIT (3.8% on investment income over $200k)</td>
                        <td className="px-4 py-2.5 text-right text-gray-800">$0 (exactly at threshold)</td>
                      </tr>
                      <tr className="bg-emerald-50">
                        <td className="px-4 py-2.5 font-bold text-emerald-800">Estimated federal tax on trading income</td>
                        <td className="px-4 py-2.5 text-right font-bold text-emerald-800">~$38,200 (effective ~19.1%)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500 mt-3 px-4 pb-4">
                  A $201,000 profit would trigger the 3.8% NIIT on $1,000, adding approximately $38. Even earning just $1 over the $200,000 MAGI threshold triggers NIIT on the full amount of investment income. Traders should plan carefully around this threshold.
                </p>
              </CardContent>
            </Card>

            {/* Example 3 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-emerald-800">
                  Example 3: High-Volume Day Trader — $500,000 Net Trading Profit (with MTM loss carryforward)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b bg-gray-50">
                        <td className="px-4 py-2.5 text-gray-600">Net trading profit (ordinary income under MTM)</td>
                        <td className="px-4 py-2.5 text-right text-gray-800">$500,000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2.5 text-gray-600">Prior year MTM loss carryforward</td>
                        <td className="px-4 py-2.5 text-right text-gray-800">-$50,000</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="px-4 py-2.5 text-gray-600">Net taxable income</td>
                        <td className="px-4 py-2.5 text-right font-medium text-gray-800">$450,000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2.5 text-gray-600">Federal tax (estimated, 2025 brackets)</td>
                        <td className="px-4 py-2.5 text-right text-gray-800">$121,300</td>
                      </tr>
                      <tr className="border-b bg-red-50">
                        <td className="px-4 py-2.5 text-gray-600">NIIT (3.8% on $450,000)</td>
                        <td className="px-4 py-2.5 text-right text-gray-800">$17,100</td>
                      </tr>
                      <tr className="bg-emerald-50">
                        <td className="px-4 py-2.5 font-bold text-emerald-800">Total estimated federal tax</td>
                        <td className="px-4 py-2.5 text-right font-bold text-emerald-800">$138,400</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500 mt-3 px-4 pb-4">
                  With MTM accounting, the $50,000 prior-year loss carryforward directly reduces taxable income dollar for dollar—something not possible for non-MTM investors limited to the $3,000/year offset. Without MTM, the same loss would take over 16 years to fully deduct ($3,000/year). The effective federal rate is approximately 30.8%.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Wash Sale Rules */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Wash Sale Rules for Day Traders
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              The wash sale rule is one of the most significant tax challenges facing day traders who do not use mark-to-market accounting. Under IRS Section 1091, if you sell a security at a loss and purchase a substantially identical security within 30 days before or after the sale, the loss is disallowed for tax purposes. The disallowed loss is added to the cost basis of the replacement securities, which defers—not eliminates—the tax benefit.
            </p>
            <p>
              For day traders who frequently buy and sell the same stocks or ETFs, wash sale violations can accumulate rapidly. A single stock traded multiple times in a month can generate dozens of overlapping wash sale adjustments, creating a complex web of deferred losses that can inflate your reported gains significantly. Many trading platforms do not automatically track wash sales across all accounts, so traders must be vigilant about monitoring their own transactions.
            </p>
            <p>
              The simplest way to avoid wash sale complications is to elect mark-to-market accounting, which eliminates wash sale rules entirely. Alternatively, traders can avoid repurchasing the same security within the 30-day window, or purchase a similar but not substantially identical security (for example, selling an S&P 500 ETF and purchasing a different S&P 500 ETF might not trigger a wash sale, though this is a gray area that should be discussed with a tax advisor).
            </p>
          </div>
        </section>

        {/* Estimated Tax Payments */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Estimated Tax Payments for Day Traders
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4 mb-4">
            <p>
              Unlike employees who have taxes withheld from their paychecks, day traders typically receive no withholding on their trading profits. The IRS requires taxpayers to pay taxes throughout the year, and failure to make sufficient estimated payments can result in underpayment penalties. Most day traders must make quarterly estimated tax payments.
            </p>
          </div>
          <Card className="border-blue-200">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Quarterly Estimated Payment Schedule (2025-2026)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium text-gray-800">Q1</div>
                  <div className="text-xs text-gray-500">April 15</div>
                  <div className="text-sm text-gray-600 mt-1">25% of est. tax</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium text-gray-800">Q2</div>
                  <div className="text-xs text-gray-500">June 15</div>
                  <div className="text-sm text-gray-600 mt-1">25% of est. tax</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium text-gray-800">Q3</div>
                  <div className="text-xs text-gray-500">September 15</div>
                  <div className="text-sm text-gray-600 mt-1">25% of est. tax</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="text-sm font-medium text-gray-800">Q4</div>
                  <div className="text-xs text-gray-500">January 15</div>
                  <div className="text-sm text-gray-600 mt-1">25% of est. tax</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                <strong>Safe harbor rule:</strong> You can avoid underpayment penalties by paying at least 100% of your prior-year tax liability (110% if your AGI exceeded $150,000) through quarterly estimated payments and withholding. Alternatively, pay 90% of your current-year tax liability. Using the prior-year safe harbor is often the simplest approach for traders with volatile income.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Deductions */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Tax Deductions for Day Traders
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-800 mb-2">Home Office Deduction</h3>
                <p className="text-gray-600 text-sm">
                  Traders with TTS can deduct the business portion of their home used exclusively and regularly for trading. This includes a proportional share of rent or mortgage interest, utilities, insurance, and maintenance. The space must be used exclusively for trading—your dining room table does not qualify, but a dedicated office or trading desk does.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-800 mb-2">Equipment and Technology</h3>
                <p className="text-gray-600 text-sm">
                  Computers, monitors, trading software, data subscriptions (Bloomberg, Level 2 quotes), internet service, and other technology used for trading are deductible business expenses. Higher-cost items may need to be depreciated over several years, while lower-cost items can be expensed immediately under Section 179 or bonus depreciation rules.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-800 mb-2">Education and Training</h3>
                <p className="text-gray-600 text-sm">
                  Costs for trading courses, seminars, books, market research services, and professional development related to your trading business are generally deductible. However, education that qualifies you for a new profession is not deductible. Day trading education is typically deductible because it improves existing skills rather than qualifying you for a new trade.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-800 mb-2">Professional Services</h3>
                <p className="text-gray-600 text-sm">
                  Fees paid to tax preparers, CPAs, and attorneys for trading-related tax advice and preparation are deductible. Investment advisory fees related to your trading business may also be deductible. Keep records of all professional service invoices and payment receipts for your tax files.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* CTA */}
        <section className="mb-12">
          <Card className="border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50">
            <CardContent className="py-8 text-center">
              <h2 className="text-2xl font-bold text-emerald-800 mb-3">
                Calculate Your Day Trading Tax Liability
              </h2>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Use our free capital gains tax calculator to estimate the federal tax on your trading profits. Enter your gain amount, holding period, and income details for instant results.
              </p>
              <Link href="/#calculator">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Calculator className="h-5 w-5 mr-2" />
                  Open Free Calculator
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions About Day Trading Taxes
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-start gap-2">
                    <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      Q
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed pl-8">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <Card className="border-amber-200 bg-amber-50 mb-8">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-800 mb-1">Disclaimer</h3>
                <p className="text-gray-700 text-sm">
                  This page provides general educational information about day trading taxes for the 2025-2026 tax year. Tax treatment of trading income is complex and depends on your individual circumstances. Trader Tax Status, mark-to-market elections, and wash sale rules have significant implications that require careful analysis. We strongly recommend consulting a qualified CPA or tax attorney who specializes in trader taxation for personalized advice. This content does not constitute legal or tax advice.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SiteLayout>
  );
}
