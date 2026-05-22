import { Metadata } from 'next';
import Link from 'next/link';
import SiteLayout from '@/components/SiteLayout';
import TaxCalculator from '@/components/TaxCalculator';
import RelatedCalculators from '@/components/RelatedCalculators';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calculator, HelpCircle, ArrowRight, TrendingUp, Clock, CheckCircle, DollarSign, Shield, BarChart3, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Capital Gains Tax Calculator - Calculate Your Tax Liability Free | TaxGainsCalc',
  description: 'Use our free capital gains tax calculator to estimate your federal tax liability on stocks, real estate, and crypto. Supports short-term and long-term gains with 2025-2026 rates.',
  alternates: {
    canonical: 'https://taxgainscalc.com/capital-gains-tax-calculator',
  },
  openGraph: {
    title: 'Capital Gains Tax Calculator - Calculate Your Tax Liability Free | TaxGainsCalc',
    description: 'Free capital gains tax calculator for 2025-2026. Calculate short-term and long-term capital gains on stocks, real estate, and investments instantly.',
    url: 'https://taxgainscalc.com/capital-gains-tax-calculator',
    siteName: 'TaxGainsCalc',
    type: 'website',
    locale: 'en_US',
  },
};

const faqs = [
  {
    question: 'How do I use the capital gains tax calculator?',
    answer: 'Enter your purchase price, sale price, purchase date, and sale date into the calculator. Select your filing status and annual income. The calculator will automatically determine whether your gain is short-term or long-term based on your holding period, apply the correct federal tax rate including the 3.8% NIIT if applicable, and display your estimated tax liability. You can try multiple scenarios to compare different holding periods or income levels.',
  },
  {
    question: 'What tax rates does the calculator use?',
    answer: 'The calculator uses the official IRS tax rates for the 2025-2026 tax year. For long-term capital gains (assets held more than one year), it applies the preferential rates of 0%, 15%, and 20% based on your taxable income and filing status. For short-term capital gains (assets held one year or less), it applies ordinary income tax rates ranging from 10% to 37%. The calculator also factors in the 3.8% Net Investment Income Tax for high-income taxpayers.',
  },
  {
    question: 'Is this capital gains tax calculator free?',
    answer: 'Yes, our capital gains tax calculator is completely free to use with no registration required. You can calculate as many scenarios as you need. There are no hidden fees, premium tiers, or paywalls. We believe everyone deserves access to accurate tax planning tools regardless of their financial situation.',
  },
  {
    question: 'Does the calculator include state capital gains tax?',
    answer: 'The calculator currently estimates your federal capital gains tax liability. State capital gains tax varies significantly by state, ranging from zero in states like Florida, Texas, and Nevada, to over 13% in California. We recommend adding your applicable state rate to the federal estimate for a more complete picture. You can find your state rate on our capital gains tax by state page.',
  },
  {
    question: 'How accurate is the capital gains tax estimate?',
    answer: 'Our calculator provides accurate estimates based on the current IRS federal tax brackets for the 2025-2026 tax year. However, your actual tax liability may differ due to factors such as other income sources, deductions, credits, capital losses from other investments, depreciation recapture on real estate, and special tax situations. For a precise calculation, consult a qualified tax professional who can review your complete financial picture.',
  },
  {
    question: 'What is the difference between short-term and long-term capital gains tax?',
    answer: 'Short-term capital gains apply to assets you hold for one year or less and are taxed at your ordinary income tax rate, which ranges from 10% to 37% depending on your income bracket. Long-term capital gains apply to assets held for more than one year and benefit from preferential tax rates of 0%, 15%, or 20%. The difference can be substantial: a $50,000 gain taxed at 37% short-term costs $18,500, while the same gain taxed at 15% long-term costs only $7,500, saving you $11,000.',
  },
  {
    question: 'Can I calculate capital gains on real estate with this calculator?',
    answer: 'Yes. Enter the original purchase price as your cost basis and the selling price as your sale price. For a more accurate real estate calculation, you should ideally include closing costs, capital improvements, and selling expenses in your cost basis and net proceeds figures. Our home sale capital gains tax calculator page provides detailed guidance on calculating gains on real estate transactions, including the Section 121 primary residence exclusion.',
  },
  {
    question: 'What is the Net Investment Income Tax (NIIT) and does it apply to me?',
    answer: 'The Net Investment Income Tax (NIIT) is an additional 3.8% tax on investment income, including capital gains. It applies when your modified adjusted gross income exceeds $200,000 for single filers, $250,000 for married couples filing jointly, or $125,000 for married filing separately. Our calculator automatically factors in the NIIT when your income exceeds these thresholds. The combined maximum federal rate on long-term gains is 23.8% (20% plus 3.8% NIIT).',
  },
];

export default function CapitalGainsTaxCalculatorPage() {
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
              { '@type': 'ListItem', position: 2, name: 'Capital Gains Tax Calculator', item: 'https://taxgainscalc.com/capital-gains-tax-calculator' },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Free Tax Calculator</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Capital Gains Tax Calculator
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mb-6">
            Calculate your federal capital gains tax on stocks, real estate, cryptocurrency, and other investments.
            Free, instant, and accurate for the 2025-2026 tax year.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <CheckCircle className="h-4 w-4" />
              100% Free
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <CheckCircle className="h-4 w-4" />
              2025-2026 Rates
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <CheckCircle className="h-4 w-4" />
              Short-Term and Long-Term
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="text-sm text-gray-500">
          <Link href="/" className="hover:text-emerald-600 transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Capital Gains Tax Calculator</span>
        </nav>
      </div>

      {/* Calculator */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <TaxCalculator />
        </div>
      </section>

      {/* Quick Guide */}
      <section className="py-8 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            How to Calculate Your Capital Gains Tax
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Calculating your capital gains tax is straightforward with our calculator. Here is a quick overview of the process and what you need to know.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-5 w-5 text-red-600" />
                  <h3 className="font-semibold text-red-800">Short-Term Capital Gains</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold">1.</span> Held for 1 year or less</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold">2.</span> Taxed at ordinary income rates (10%-37%)</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold">3.</span> No preferential tax treatment</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold">4.</span> Plus 3.8% NIIT for high earners</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-emerald-200 bg-emerald-50">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-semibold text-emerald-800">Long-Term Capital Gains</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">1.</span> Held for more than 1 year</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">2.</span> Taxed at preferential rates (0%, 15%, 20%)</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">3.</span> Significant tax savings</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 font-bold">4.</span> Plus 3.8% NIIT for high earners</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Your capital gains tax is calculated by subtracting your cost basis (purchase price plus fees and improvements) from your net sale proceeds (sale price minus selling expenses). The resulting gain is then classified as either short-term or long-term based on your holding period. The calculator applies the appropriate tax rate based on your filing status and total taxable income. For detailed step-by-step instructions, see our comprehensive <Link href="/how-to-calculate-capital-gains-tax" className="text-emerald-600 hover:underline font-medium">guide on how to calculate capital gains tax</Link>.
            </p>
            <p>
              For asset-specific calculators and strategies, explore our specialized tools: the <Link href="/stock-capital-gains-tax-calculator" className="text-emerald-600 hover:underline font-medium">stock capital gains calculator</Link> for equity investors, the <Link href="/real-estate-capital-gains-tax-calculator" className="text-emerald-600 hover:underline font-medium">real estate capital gains calculator</Link> for property transactions, and the <Link href="/day-trading-tax-calculator" className="text-emerald-600 hover:underline font-medium">day trading tax calculator</Link> for active traders.
            </p>
          </div>
        </div>
      </section>

      {/* How to Use This Calculator - Step by Step */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            How to Use This Capital Gains Tax Calculator
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Follow these simple steps to get an accurate estimate of your capital gains tax liability. The entire process takes less than two minutes.
          </p>
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-emerald-800 mb-2">Enter Your Purchase Price</h3>
                    <p className="text-gray-600 text-sm">
                      Input the original amount you paid for the asset. For stocks, this is the price per share multiplied by the number of shares, plus any brokerage commissions or fees. For real estate, this is the purchase price shown on your closing statement. This figure represents your starting cost basis before adjustments. If you are uncertain of the exact purchase price, check your brokerage statements, tax records, or closing documents for the most accurate figure.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-emerald-800 mb-2">Enter Your Sale Price</h3>
                    <p className="text-gray-600 text-sm">
                      Input the amount you received (or expect to receive) when selling the asset. For stocks, this is the price per share multiplied by the number of shares minus any selling commissions. For real estate, this is the gross sale price. The calculator will compute the difference between your sale price and purchase price to determine your capital gain or loss. If the result is negative, you have a capital loss, which may be used to offset other gains.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-emerald-800 mb-2">Select Your Purchase and Sale Dates</h3>
                    <p className="text-gray-600 text-sm">
                      Choose the approximate dates you acquired and sold the asset. The calculator uses these dates to determine your holding period, which is the single most important factor in your tax rate. If you held the asset for one year or less, the gain is classified as short-term and taxed at ordinary income rates. If you held the asset for more than one year, it qualifies for the lower long-term capital gains rates. Even a difference of a few days can save you thousands of dollars in tax.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-emerald-800 mb-2">Choose Your Filing Status and Income</h3>
                    <p className="text-gray-600 text-sm">
                      Select your tax filing status (single, married filing jointly, married filing separately, or head of household) and enter your approximate annual taxable income. Your filing status and income level determine which tax bracket applies to your capital gains. Higher-income taxpayers are subject to higher rates and may also owe the 3.8% Net Investment Income Tax. Selecting the correct filing status ensures the calculator applies the most accurate rate to your situation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">5</div>
                  <div>
                    <h3 className="font-semibold text-emerald-800 mb-2">Review Your Results and Compare Scenarios</h3>
                    <p className="text-gray-600 text-sm">
                      After clicking calculate, review your estimated federal tax liability, effective tax rate, and after-tax profit. The results will clearly show whether your gain is short-term or long-term and which rate was applied. Try adjusting the sale date by a few weeks to see the impact of the holding period on your tax bill. You can also compare different income levels or filing statuses to understand how changes in your financial situation might affect your capital gains tax. This side-by-side comparison capability is one of the most powerful features of our calculator.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Understanding Your Results */}
      <section className="py-8 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Understanding Your Results
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Knowing how to interpret your capital gains tax estimate helps you make better financial decisions and plan more effectively for tax season.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-emerald-200">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-semibold text-emerald-800">Capital Gain Amount</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  This is the profit you realized from the sale, calculated as the sale price minus the purchase price. A positive number indicates a gain, while a negative number indicates a loss. Capital gains can be reduced by selling expenses, improvements (for real estate), and other adjustments to your cost basis. The gain amount is the starting point for determining your tax liability.
                </p>
              </CardContent>
            </Card>
            <Card className="border-emerald-200">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-semibold text-emerald-800">Applicable Tax Rate</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  The tax rate applied to your gain depends on your holding period, filing status, and taxable income. Short-term gains use ordinary income brackets (10% to 37%), while long-term gains use preferential brackets (0%, 15%, 20%). The rate shown is the marginal rate applied to your capital gain, which may differ from your overall effective tax rate if the gain spans multiple brackets.
                </p>
              </CardContent>
            </Card>
            <Card className="border-emerald-200">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <BarChart3 className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-semibold text-emerald-800">Estimated Tax Liability</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  This is the estimated amount of federal tax you owe on this capital gain. It includes the applicable capital gains tax rate plus the 3.8% Net Investment Income Tax if your income exceeds the threshold. This is an estimate based on the information you provided and current IRS tax brackets. Your actual tax may differ due to other factors in your tax return, such as capital losses, deductions, or credits.
                </p>
              </CardContent>
            </Card>
            <Card className="border-emerald-200">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-semibold text-emerald-800">Net After-Tax Profit</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  This is the amount you keep after paying capital gains tax. It represents the actual financial benefit of the sale. Comparing this figure across different scenarios (different sale dates, holding periods, or income levels) helps you make informed decisions about when and whether to sell an asset. A higher after-tax profit means more money in your pocket to reinvest or use for other financial goals.
                </p>
              </CardContent>
            </Card>
          </div>
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2 text-amber-800">
                <HelpCircle className="h-5 w-5" />
                Important Limitations to Keep in Mind
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 text-sm space-y-2">
              <p>
                This calculator provides estimates based on federal tax rates only and does not account for state income taxes, which vary from 0% to over 13% depending on where you live. It also does not factor in capital losses you may have from other investments, which could reduce or eliminate your tax liability. Special situations such as depreciation recapture on real estate, the primary residence exclusion (Section 121), installment sales, and like-kind exchanges (1031) are not captured by the calculator. For these scenarios, use our specialized calculators or consult a qualified tax professional.
              </p>
              <p>
                The calculator uses the IRS tax brackets for the 2025-2026 tax year. While these rates are current as of the latest available information, tax laws can change. Future legislation could modify tax rates, brackets, or the treatment of capital gains. Always verify current rates with the IRS or a tax advisor before making financial decisions based on these estimates.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Asset-Specific Guidance */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Capital Gains Tax by Asset Type
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Capital gains tax applies differently depending on the type of asset you sell. Below is guidance for the most common investment types.
          </p>
          <div className="space-y-4">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-blue-800">
                  <TrendingUp className="h-5 w-5" />
                  Stocks, Bonds, and Mutual Funds
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm space-y-2">
                <p>
                  Capital gains on stocks, bonds, ETFs, and mutual funds are the most straightforward to calculate. Your cost basis is the purchase price plus any commissions, and your sale proceeds are the sale price minus selling commissions. For mutual funds, you may need to choose an accounting method (FIFO, specific identification, or average cost) to determine which shares were sold. The calculator above works directly for these asset types. For stock-specific strategies and considerations such as wash sale rules, ISO/NSO stock options, and employee stock purchase plans, visit our <Link href="/stock-capital-gains-tax-calculator" className="text-emerald-600 hover:underline font-medium">stock capital gains tax calculator page</Link>.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-green-800">
                  <Calculator className="h-5 w-5" />
                  Real Estate and Property
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm space-y-2">
                <p>
                  Real estate transactions involve additional complexity. For a primary residence, the Section 121 exclusion can eliminate tax on up to $250,000 ($500,000 for married couples) of gain if you meet the ownership and use tests. For investment properties, depreciation recapture may apply at up to 25%, and 1031 exchanges can defer the remaining gain. The calculator above provides a basic estimate, but for accurate real estate calculations, use our <Link href="/home-sale-capital-gains-tax-calculator" className="text-emerald-600 hover:underline font-medium">home sale capital gains tax calculator</Link> or <Link href="/real-estate-capital-gains-tax-calculator" className="text-emerald-600 hover:underline font-medium">real estate capital gains tax calculator</Link>.
                </p>
              </CardContent>
            </Card>
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-orange-800">
                  <DollarSign className="h-5 w-5" />
                  Cryptocurrency and Digital Assets
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm space-y-2">
                <p>
                  The IRS treats cryptocurrency as property, meaning every sale, exchange, or use of crypto to purchase goods or services is a taxable event subject to capital gains tax. If you buy Bitcoin at $10,000 and later spend it when it is worth $50,000, you have a $40,000 capital gain that must be reported. Cryptocurrency received as income (mining, staking, payment for services) is taxed as ordinary income at the fair market value at the time of receipt. For a complete guide to crypto tax rules, visit our <Link href="/capital-gains-on-crypto" className="text-emerald-600 hover:underline font-medium">cryptocurrency capital gains tax guide</Link>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-8 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Related Tax Calculators and Guides
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/long-term-capital-gains-tax-calculator" className="group">
              <Card className="border-emerald-200 hover:border-emerald-400 transition group-hover:shadow-md">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-emerald-800 mb-2 group-hover:text-emerald-600 transition">Long-Term Capital Gains Calculator</h3>
                  <p className="text-gray-600 text-sm">Detailed calculator and rate tables for assets held more than one year, with preferential tax rates of 0%, 15%, and 20%.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/short-term-capital-gains-tax-calculator" className="group">
              <Card className="border-red-200 hover:border-red-400 transition group-hover:shadow-md">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-red-800 mb-2 group-hover:text-red-600 transition">Short-Term Capital Gains Calculator</h3>
                  <p className="text-gray-600 text-sm">Full ordinary income tax brackets for assets held one year or less, with strategies to minimize your tax burden.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/capital-gains-tax-rates" className="group">
              <Card className="border-blue-200 hover:border-blue-400 transition group-hover:shadow-md">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-blue-800 mb-2 group-hover:text-blue-600 transition">Capital Gains Tax Rates 2025-2026</h3>
                  <p className="text-gray-600 text-sm">Complete federal rate tables for all filing statuses, including NIIT thresholds and historical rate comparisons.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/capital-gains-tax-by-state" className="group">
              <Card className="border-purple-200 hover:border-purple-400 transition group-hover:shadow-md">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-purple-800 mb-2 group-hover:text-purple-600 transition">Capital Gains Tax by State</h3>
                  <p className="text-gray-600 text-sm">State-by-state capital gains tax rates, from zero-tax states like Florida and Texas to high-tax states like California.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/home-sale-capital-gains-tax-calculator" className="group">
              <Card className="border-teal-200 hover:border-teal-400 transition group-hover:shadow-md">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-teal-800 mb-2 group-hover:text-teal-600 transition">Home Sale Tax Calculator</h3>
                  <p className="text-gray-600 text-sm">Calculate tax on selling your home, including the Section 121 exclusion, ownership tests, and partial exclusion rules.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/day-trading-tax-calculator" className="group">
              <Card className="border-amber-200 hover:border-amber-400 transition group-hover:shadow-md">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-amber-800 mb-2 group-hover:text-amber-600 transition">Day Trading Tax Calculator</h3>
                  <p className="text-gray-600 text-sm">Tax planning tools for active traders, including mark-to-market election, wash sale rules, and business expense deductions.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Answers to common questions about using our capital gains tax calculator and understanding your tax liability.
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
            Need More Detailed Tax Information?
          </h2>
          <p className="text-emerald-100 text-lg mb-8">
            Browse our complete library of capital gains tax guides, rate tables, and specialized calculators.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/capital-gains-tax-rates">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold">
                Full Tax Rates Table
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/how-to-calculate-capital-gains-tax">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold">
                Step-by-Step Guide
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <RelatedCalculators />
    </SiteLayout>
  );
}
