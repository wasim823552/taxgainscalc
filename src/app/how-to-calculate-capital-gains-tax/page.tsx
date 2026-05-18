import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Calculator,
  TrendingUp,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  FileText,
  ClipboardList,
  Clock,
  Home as HomeIcon,
  BarChart3,
  BookOpen,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Calculate Capital Gains Tax - Step-by-Step Guide',
  description: 'Learn how to calculate capital gains tax with our complete step-by-step guide. Worked examples for stocks, real estate, and crypto. Includes IRS forms, cost basis, and tax rates.',
  keywords: 'how to calculate capital gains tax, calculate capital gains tax, calculating capital gains tax, capital gains tax calculation guide, capital gains formula, tax on gains',
  alternates: {
    canonical: 'https://taxgainscalc.com/how-to-calculate-capital-gains-tax',
  },
  openGraph: {
    title: 'How to Calculate Capital Gains Tax - Step-by-Step Guide',
    description: 'Complete guide with worked examples for stocks, real estate, and crypto. Free calculator with 2025-2026 tax rates.',
    url: 'https://taxgainscalc.com/how-to-calculate-capital-gains-tax',
    siteName: 'TaxGainsCalc',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Calculate Capital Gains Tax - Step-by-Step Guide',
    description: 'Complete guide with worked examples for stocks, real estate, and crypto. Free calculator with 2025-2026 tax rates.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const faqs = [
  {
    question: 'What is the formula for calculating capital gains tax?',
    answer: 'The basic capital gains tax formula is: Capital Gain = Net Sale Proceeds - Adjusted Cost Basis. The tax owed is then: Capital Gains Tax = Capital Gain x Applicable Tax Rate. Your net sale proceeds are the sale price minus selling expenses (commissions, fees). Your adjusted cost basis is the purchase price plus acquisition costs minus depreciation (if applicable). The applicable tax rate depends on your holding period (short-term = ordinary income rates; long-term = 0%, 15%, or 20%) and your total taxable income for the year.',
  },
  {
    question: 'How do I determine my cost basis for inherited property?',
    answer: 'When you inherit property, your cost basis is generally stepped up (or stepped down) to the fair market value of the property on the date of the deceased person\'s death. This is known as the stepped-up basis rule. For example, if your parent bought a stock for $10,000 and it was worth $50,000 when they passed away, your basis would be $50,000, not $10,000. If you later sell the stock for $55,000, your capital gain would only be $5,000. This rule can eliminate years of accumulated appreciation from taxation.',
  },
  {
    question: 'What is the difference between realized and unrealized capital gains?',
    answer: 'A realized capital gain occurs when you actually sell an asset for a profit. Only realized gains are taxable. An unrealized capital gain (also called a paper gain) is the increase in value of an asset you still own. For example, if you bought a stock for $5,000 and it is now worth $8,000 but you have not sold it, you have a $3,000 unrealized gain. Unrealized gains are not taxable. The tax is only triggered when you sell the asset and realize the gain.',
  },
  {
    question: 'How do I calculate capital gains tax on cryptocurrency?',
    answer: 'Cryptocurrency is treated as property by the IRS, so capital gains tax applies when you sell, trade, or use crypto at a gain. The calculation is the same as for stocks: subtract your cost basis (what you paid for the crypto plus fees) from your proceeds. Each transaction is a separate taxable event, including trading one cryptocurrency for another. If you buy Bitcoin for $20,000 and later trade it for Ethereum worth $35,000, you have a $15,000 capital gain. Use specific identification where possible to optimize your cost basis across multiple purchases.',
  },
  {
    question: 'Can capital losses offset ordinary income?',
    answer: 'Capital losses can offset capital gains dollar-for-dollar, but the treatment of excess losses is limited. If your total capital losses exceed your total capital gains for the year, you can deduct up to $3,000 ($1,500 if married filing separately) of the net capital loss against your ordinary income. Any unused losses carry forward to future years indefinitely until they are fully utilized. This makes tax-loss harvesting a powerful strategy for reducing your tax bill by intentionally selling investments at a loss to offset gains.',
  },
  {
    question: 'What IRS forms do I need to report capital gains?',
    answer: 'Reporting capital gains typically requires two forms. Form 8949 is where you report each individual capital asset transaction, including the date acquired, date sold, proceeds, cost basis, and gain or loss for each transaction. Schedule D summarizes all the transactions from Form 8949 and calculates your total net capital gain or loss. The net figure from Schedule D then transfers to Form 1040. Your broker provides Form 1099-B with transaction details, which you use to complete Form 8949. For real estate sales of business property, you may also need Form 4797.',
  },
  {
    question: 'Does the Net Investment Income Tax (NIIT) apply to all capital gains?',
    answer: 'The 3.8% NIIT applies to net investment income for taxpayers whose modified adjusted gross income exceeds $200,000 for single filers, $250,000 for married filing jointly, or $125,000 for married filing separately. The tax applies to the lesser of your net investment income or the amount by which your MAGI exceeds the threshold. Net investment income includes capital gains, dividends, interest, rental income, and royalty income. Not all taxpayers are subject to the NIIT, but those with higher incomes may find their effective capital gains tax rate increased by this additional surcharge.',
  },
  {
    question: 'How does capital gains tax work with mutual fund distributions?',
    answer: 'Mutual funds distribute capital gains to shareholders when the fund manager sells securities within the fund at a profit. These distributions are taxable in the year received, even if you reinvest them. The distributions are reported on Form 1099-DIV and can be classified as short-term or long-term. When you sell your mutual fund shares, you also calculate your own gain or loss based on your adjusted cost basis, which includes reinvested distributions. This means you are taxed twice: once on fund distributions and again on your own sale gains, so tracking your basis carefully is essential.',
  },
  {
    question: 'How do state taxes affect my total capital gains tax bill?',
    answer: 'Most states tax capital gains as part of your state income tax. Some states treat capital gains the same as ordinary income, while others offer partial deductions or lower rates. States with no income tax, such as Florida, Texas, Nevada, Washington, Wyoming, South Dakota, Alaska, Tennessee, and New Hampshire, do not impose state capital gains tax. In high-tax states like California (up to 13.3%) and New York (up to 10.9%), state taxes can add substantially to your total capital gains tax bill. Always factor in both federal and state taxes when estimating your total liability.',
  },
  {
    question: 'How do capital gains affect my tax bracket?',
    answer: 'Capital gains are included in your taxable income when determining which tax bracket you fall into. However, long-term capital gains are taxed at their own preferential rates (0%, 15%, or 20%) rather than ordinary income rates. Your taxable income is calculated by adding your ordinary income and your net capital gains together, then applying the appropriate rate to each type of income. Long-term capital gains are stacked on top of your ordinary income to determine which capital gains rate applies. For example, if your ordinary income is $40,000 as a single filer, and you have $30,000 in long-term capital gains, part of your gains would be taxed at 0% (up to $48,350) and the remainder at 15%.',
  },
];

export default function HowToCalculateCapitalGainsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <div>
                <Link href="/" className="text-xl font-bold text-gray-900 hover:text-emerald-600 transition">
                  TaxGainsCalc
                </Link>
                <p className="text-xs text-gray-500">Capital Gains Tax Calculator</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm text-gray-600 hover:text-emerald-600 transition">Calculator</Link>
              <Link href="/real-estate-capital-gains-tax-calculator" className="text-sm text-gray-600 hover:text-emerald-600 transition">Real Estate</Link>
              <Link href="/stock-capital-gains-tax-calculator" className="text-sm text-gray-600 hover:text-emerald-600 transition">Stocks</Link>
              <Link href="/#faq" className="text-sm text-gray-600 hover:text-emerald-600 transition">FAQ</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Complete Tax Guide 2025-2026</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            How to Calculate Capital Gains Tax
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            A complete step-by-step guide to calculating capital gains tax on stocks, real estate, 
            cryptocurrency, and other investments. Includes worked examples, IRS forms, and tax strategies.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <BookOpen className="h-4 w-4" />
              Step-by-Step Guide
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <ClipboardList className="h-4 w-4" />
              Worked Examples
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <FileText className="h-4 w-4" />
              IRS Forms Explained
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <CheckCircle className="h-4 w-4" />
              Free Calculator Included
            </div>
          </div>
          <div className="mt-8">
            <Link href="/">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold">
                Skip to Calculator <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Understanding Capital Gains Tax Calculation
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Calculating capital gains tax may seem complex, but it follows a logical step-by-step process that anyone can master. Whether you are selling stocks, real estate, cryptocurrency, or other capital assets, the fundamental calculation method remains the same: determine your gain or loss, classify it as short-term or long-term, and apply the appropriate tax rate. This guide walks you through every step with clear explanations and worked examples for different asset types.
            </p>
            <p className="mb-4">
              The capital gains tax calculation begins with two key numbers: your adjusted cost basis and your net sale proceeds. The difference between these figures determines your capital gain or loss. Your cost basis is what you paid for the asset plus certain acquisition costs. Your net proceeds are what you received from the sale minus selling expenses. The accuracy of your calculation depends on properly identifying both of these figures.
            </p>
            <p>
              Once you have determined your gain, you must classify it based on how long you held the asset. Assets held for one year or less produce short-term gains taxed at ordinary income rates (10% to 37%). Assets held for more than one year produce long-term gains taxed at preferential rates (0%, 15%, or 20%). Additional taxes such as the 3.8% Net Investment Income Tax may also apply depending on your income level. This guide covers all these elements in detail.
            </p>
          </div>
        </div>
      </section>

      {/* Step 1: Cost Basis */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Step 1: Determine Your Adjusted Cost Basis
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 mb-8">
            <p className="mb-4">
              Your adjusted cost basis is the total amount you have invested in an asset, including the purchase price and certain additional costs. A higher cost basis means a lower taxable gain, so it is important to include every eligible expense. The exact components of your cost basis depend on the type of asset you are selling.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-lg text-blue-800">Cost Basis for Stocks</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-1 text-blue-600 flex-shrink-0" />
                    <span>Purchase price per share</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-1 text-blue-600 flex-shrink-0" />
                    <span>Brokerage commissions at purchase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-1 text-blue-600 flex-shrink-0" />
                    <span>Reinvested dividends (for mutual funds)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-1 text-blue-600 flex-shrink-0" />
                    <span>Stock split adjustments (per-share basis only)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-1 text-blue-600 flex-shrink-0" />
                    <span>Corporate actions (spin-offs, mergers)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-lg text-green-800">Cost Basis for Real Estate</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-1 text-green-600 flex-shrink-0" />
                    <span>Purchase price of the property</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-1 text-green-600 flex-shrink-0" />
                    <span>Closing costs (title insurance, legal fees)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-1 text-green-600 flex-shrink-0" />
                    <span>Capital improvements (additions, renovations)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-1 text-green-600 flex-shrink-0" />
                    <span>Special assessments for local improvements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-1 text-red-600 flex-shrink-0" />
                    <span className="line-through">Minus depreciation claimed (rental property)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              For inherited assets, the cost basis is stepped up to the fair market value on the date of the original owner&apos;s death (or the alternate valuation date, six months later). This stepped-up basis can dramatically reduce or eliminate capital gains tax on inherited property. For gifted assets, your basis generally carries over from the donor, known as carryover basis, which means you take the donor&apos;s original cost basis.
            </p>
            <p>
              Keeping thorough records is essential for establishing your cost basis. Retain all purchase confirmations, closing documents, receipts for improvements, and statements showing reinvested dividends. The IRS requires you to substantiate your cost basis with documentation, and failing to do so can result in the IRS assuming a basis of zero, which would make the entire sale proceeds taxable as gain.
            </p>
          </div>
        </div>
      </section>

      {/* Step 2: Net Proceeds */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Step 2: Calculate Your Net Sale Proceeds
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Your net sale proceeds are the actual amount you receive from the sale after subtracting all selling-related expenses. This is not the same as the gross sale price listed on your contract. Deductible selling expenses reduce your net proceeds and therefore reduce your taxable gain. For stocks, the primary selling expense is the brokerage commission. For real estate, selling expenses are significantly more numerous and can include a substantial portion of the sale price.
            </p>
            <p className="mb-4">
              Common deductible selling expenses for real estate include real estate agent commissions (typically 5-6% of the sale price), transfer taxes, attorney and legal fees, title insurance for the buyer, escrow fees, home warranty costs, and advertising expenses. For stocks, deduct brokerage commissions from your gross proceeds. These commissions are sometimes already factored into the net proceeds shown on your brokerage statement, so verify whether the reported amount is gross or net.
            </p>
            <p>
              The formula is straightforward: Net Proceeds = Gross Sale Price - Selling Expenses. Always use your net proceeds, not your gross sale price, when calculating your capital gain. Using the gross sale price would overstate your gain and result in paying more tax than you actually owe. For cryptocurrency, subtract any transaction fees or mining costs from your proceeds.
            </p>
          </div>
        </div>
      </section>

      {/* Step 3: Calculate Gain */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Step 3: Calculate Your Capital Gain or Loss
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 mb-8">
            <p className="mb-4">
              Once you have your adjusted cost basis and net proceeds, calculating your capital gain or loss is a simple subtraction. If your net proceeds exceed your cost basis, you have a capital gain. If your cost basis exceeds your net proceeds, you have a capital loss. Capital losses are valuable because they can offset capital gains and potentially reduce your ordinary income tax as well.
            </p>
          </div>
          <Card className="border-emerald-200 bg-emerald-50 mb-8">
            <CardHeader>
              <CardTitle className="text-lg text-emerald-800">The Capital Gains Formula</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white rounded-lg p-6 text-center space-y-3">
                <p className="text-lg font-mono text-gray-900">
                  Capital Gain = Net Sale Proceeds - Adjusted Cost Basis
                </p>
                <Separator />
                <p className="text-lg font-mono text-gray-900">
                  Capital Gains Tax = Capital Gain x Applicable Tax Rate
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  If the result is negative, you have a capital loss which can offset other gains.
                </p>
              </div>
            </CardContent>
          </Card>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              When you have multiple capital gains and losses throughout the year, you first net all short-term gains and losses together, then net all long-term gains and losses together. If you have a net short-term gain and a net long-term gain, they are each taxed at their respective rates. If you have a net gain in one category and a net loss in the other, the loss offsets the gain. Any remaining net loss can offset up to $3,000 of ordinary income, with any excess carried forward.
            </p>
            <p>
              For example, if you have $25,000 in short-term gains, $10,000 in short-term losses, $40,000 in long-term gains, and $15,000 in long-term losses, your net short-term gain is $15,000 and your net long-term gain is $25,000. The $15,000 short-term gain is taxed at ordinary income rates, and the $25,000 long-term gain is taxed at preferential rates. Our free <Link href="/" className="text-emerald-600 underline hover:text-emerald-800">capital gains tax calculator</Link> handles all these netting calculations automatically.
            </p>
          </div>
        </div>
      </section>

      {/* Step 4: Holding Period */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Step 4: Determine Your Holding Period
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800">
                  <Clock className="h-5 w-5" />
                  Short-Term: 1 Year or Less
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="text-sm mb-3">
                  Assets held for one year or less are taxed at your ordinary income tax rate. The holding period begins the day after you acquire the asset and ends on the day you sell it. Common for day traders and active investors.
                </p>
                <div className="text-sm">
                  <p className="font-semibold">Ordinary Income Tax Rates:</p>
                  <ul className="mt-1 space-y-1 text-xs">
                    <li>10% bracket: $0 - $11,925 (single)</li>
                    <li>12% bracket: $11,926 - $48,475</li>
                    <li>22% bracket: $48,476 - $103,350</li>
                    <li>24% bracket: $103,351 - $197,300</li>
                    <li>32% bracket: $197,301 - $250,525</li>
                    <li>35% bracket: $250,526 - $626,350</li>
                    <li>37% bracket: Over $626,350</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card className="border-emerald-200 bg-emerald-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-800">
                  <Clock className="h-5 w-5" />
                  Long-Term: More Than 1 Year
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="text-sm mb-3">
                  Assets held for more than one year benefit from preferential tax rates. This is the single most important factor in capital gains tax planning. Waiting just one day past the one-year mark can save tens of thousands in taxes.
                </p>
                <div className="text-sm">
                  <p className="font-semibold">Long-Term Capital Gains Rates:</p>
                  <ul className="mt-1 space-y-1 text-xs">
                    <li><span className="font-bold text-green-600">0%</span> rate: Up to $48,350 (single)</li>
                    <li><span className="font-bold text-amber-600">15%</span> rate: $48,351 - $533,400</li>
                    <li><span className="font-bold text-red-600">20%</span> rate: Over $533,400</li>
                    <li className="mt-2 text-amber-700">+ 3.8% NIIT for income over $200,000</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              The IRS holding period rule is precise: the clock starts the day after the purchase date (the acquisition date) and ends on the disposition date (the sale date). If you buy shares on January 15, 2024, and sell them on January 15, 2025, the holding period is exactly 365 days, which qualifies as long-term. However, if you buy on January 15, 2024, and sell on January 14, 2025, you fall short by one day and the gain is short-term. Many investors use calendar reminders to avoid missing the long-term threshold by a single day.
            </p>
          </div>
        </div>
      </section>

      {/* Step 5: Apply Tax Rate */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Step 5: Apply the Appropriate Tax Rate
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 mb-8">
            <p className="mb-4">
              The final step is applying the correct tax rate to your calculated gain. For long-term gains, your rate depends on your taxable income after adding the capital gain to your ordinary income. The IRS uses a stacking method where your ordinary income fills the lower brackets first, and your long-term capital gains are stacked on top to determine which rate applies. This means part of your gain could be taxed at 0%, part at 15%, and part at 20% if your gain spans multiple brackets.
            </p>
          </div>

          <Card className="border-amber-200 bg-amber-50 mb-8">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2 text-amber-800">
                <AlertTriangle className="h-5 w-5" />
                Do Not Forget the NIIT
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                High-income taxpayers may owe an additional 3.8% Net Investment Income Tax. This applies when your modified adjusted gross income exceeds:
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-700 text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-amber-600" /> <strong>$200,000</strong> for Single filers</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-amber-600" /> <strong>$250,000</strong> for Married Filing Jointly</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-amber-600" /> <strong>$125,000</strong> for Married Filing Separately</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-amber-600" /> <strong>$200,000</strong> for Head of Household</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">
                The NIIT applies to the lesser of your net investment income or the amount your MAGI exceeds the threshold.
              </p>
            </CardContent>
          </Card>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              For the most accurate calculation, use our <Link href="/" className="text-emerald-600 underline hover:text-emerald-800">free capital gains tax calculator</Link>, which handles the stacking calculation, accounts for the NIIT, and applies the correct rate to each portion of your gain. It also allows you to factor in your filing status, state tax rate, and other variables for a comprehensive tax estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Worked Examples */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Complete Calculation Examples
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Below are fully worked examples showing the complete capital gains tax calculation for stocks, 
            real estate, and cryptocurrency.
          </p>

          {/* Example 1: Stocks */}
          <Card className="mb-8">
            <CardHeader className="bg-blue-50 border-b border-blue-200">
              <CardTitle className="text-lg text-blue-800 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Example 1: Stock Sale - $25,000 Long-Term Gain
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-gray-700 space-y-2 text-sm">
                <p><strong>Scenario:</strong> Single filer with $75,000 in salary income sold stock for a long-term gain.</p>
                <Separator className="my-3" />
                <p><strong>Purchase:</strong> 200 shares of ABC stock at $50/share + $10 commission = $10,010</p>
                <p><strong>Sale:</strong> 200 shares sold at $175/share - $10 commission = $34,990</p>
                <p><strong>Capital gain:</strong> $34,990 - $10,010 = $24,980</p>
                <p><strong>Holding period:</strong> 3 years (long-term)</p>
                <Separator className="my-3" />
                <p><strong>Tax calculation:</strong></p>
                <p>Ordinary income: $75,000</p>
                <p>Total taxable income: $75,000 + $24,980 = $99,980</p>
                <p>Long-term gain up to $48,350 threshold: $0 (fills 0% bracket gap from $48,351-$99,980)</p>
                <p>Long-term gain at 15%: $24,980 x 15% = <span className="font-bold text-red-600">$3,747</span></p>
                <p>NIIT: Not applicable (MAGI under $200,000)</p>
                <Separator className="my-3" />
                <p className="font-bold text-emerald-800 text-base">Total federal tax on gain: $3,747 (effective rate: 15%)</p>
              </div>
            </CardContent>
          </Card>

          {/* Example 2: Real Estate */}
          <Card className="mb-8">
            <CardHeader className="bg-green-50 border-b border-green-200">
              <CardTitle className="text-lg text-green-800 flex items-center gap-2">
                <HomeIcon className="h-5 w-5" />
                Example 2: Home Sale - $350,000 Gain with Section 121 Exclusion
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-gray-700 space-y-2 text-sm">
                <p><strong>Scenario:</strong> Married couple filing jointly selling their primary residence of 8 years.</p>
                <Separator className="my-3" />
                <p><strong>Purchase price:</strong> $300,000</p>
                <p><strong>Closing costs at purchase:</strong> $8,000</p>
                <p><strong>Capital improvements (new kitchen, roof):</strong> $60,000</p>
                <p><strong>Adjusted cost basis:</strong> $300,000 + $8,000 + $60,000 = $368,000</p>
                <p><strong>Sale price:</strong> $750,000</p>
                <p><strong>Selling costs (6% agent commission + fees):</strong> $48,000</p>
                <p><strong>Net proceeds:</strong> $750,000 - $48,000 = $702,000</p>
                <Separator className="my-3" />
                <p><strong>Capital gain:</strong> $702,000 - $368,000 = $334,000</p>
                <p><strong>Section 121 exclusion (MFJ):</strong> -$500,000</p>
                <p className="font-bold text-green-600 text-base">Taxable gain: $0 (fully excluded)</p>
                <p><strong>Federal tax on gain:</strong> <span className="font-bold text-green-600">$0</span></p>
              </div>
            </CardContent>
          </Card>

          {/* Example 3: Crypto */}
          <Card className="mb-8">
            <CardHeader className="bg-orange-50 border-b border-orange-200">
              <CardTitle className="text-lg text-orange-800 flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Example 3: Cryptocurrency Sale - $45,000 Short-Term Gain
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-gray-700 space-y-2 text-sm">
                <p><strong>Scenario:</strong> Single filer with $95,000 in salary income. Bought Bitcoin, held 8 months, then sold.</p>
                <Separator className="my-3" />
                <p><strong>Purchase:</strong> 1.5 BTC at $35,000/BTC + $50 fee = $52,550</p>
                <p><strong>Sale:</strong> 1.5 BTC at $65,000/BTC - $50 fee = $97,450</p>
                <p><strong>Capital gain:</strong> $97,450 - $52,550 = $44,900</p>
                <p><strong>Holding period:</strong> 8 months (short-term)</p>
                <Separator className="my-3" />
                <p><strong>Tax calculation:</strong></p>
                <p>Total taxable income: $95,000 + $44,900 = $139,900</p>
                <p>Tax bracket (single): 24% (for income $103,351 - $197,300)</p>
                <p>Short-term capital gains tax: $44,900 x 24% = <span className="font-bold text-red-600">$10,776</span></p>
                <p>NIIT: Not applicable (MAGI under $200,000)</p>
                <Separator className="my-3" />
                <p className="font-bold text-emerald-800 text-base">Total federal tax on gain: $10,776 (effective rate: 24%)</p>
                <p className="text-xs text-gray-500 mt-1">Note: If held for 12+ months, the same gain at 15% long-term rate would be only $6,735, saving $4,041.</p>
              </div>
            </CardContent>
          </Card>

          {/* Example 4: Investment Property */}
          <Card>
            <CardHeader className="bg-purple-50 border-b border-purple-200">
              <CardTitle className="text-lg text-purple-800 flex items-center gap-2">
                <HomeIcon className="h-5 w-5" />
                Example 4: Investment Property - $200,000 Gain with Depreciation Recapture
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-gray-700 space-y-2 text-sm">
                <p><strong>Scenario:</strong> Single filer with $85,000 income selling a rental property held for 10 years.</p>
                <Separator className="my-3" />
                <p><strong>Purchase price:</strong> $350,000 (building value: $280,000)</p>
                <p><strong>Annual depreciation:</strong> $280,000 / 27.5 = $10,182/year</p>
                <p><strong>Total depreciation over 10 years:</strong> $101,818</p>
                <p><strong>Adjusted cost basis:</strong> $350,000 - $101,818 = $248,182</p>
                <p><strong>Sale price:</strong> $550,000 - $33,000 selling costs = $517,000 net</p>
                <p><strong>Total capital gain:</strong> $517,000 - $248,182 = $268,818</p>
                <Separator className="my-3" />
                <p><strong>Depreciation recapture (up to 25%):</strong> $101,818 x 25% = $25,455</p>
                <p><strong>Remaining gain at 15% (long-term):</strong> $166,999 x 15% = $25,050</p>
                <p>NIIT: Not applicable (MAGI under $200,000)</p>
                <Separator className="my-3" />
                <p className="font-bold text-emerald-800 text-base">Total federal tax on gain: $50,505</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* IRS Forms */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            IRS Forms Needed for Reporting Capital Gains
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 mb-8">
            <p className="mb-4">
              Reporting capital gains to the IRS requires several forms, each serving a specific purpose in the reporting chain. Your broker provides Form 1099-B with details of all your sale transactions, which serves as the starting point for completing your capital gains reporting. Below is a summary of the key forms you need to understand.
            </p>
          </div>
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Form 1099-B: Proceeds from Broker and Barter Exchange Transactions</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Your broker sends this form each year reporting all your securities sales. It includes the date acquired, date sold, proceeds, cost basis (if reported to the IRS), and whether the gain is short-term or long-term. This form is typically available by mid-February and can be imported directly into most tax preparation software.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Form 8949: Sales and Other Dispositions of Capital Assets</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      This is where you report each individual capital asset transaction. You list the description of the property, date acquired, date sold, proceeds, cost basis, and the resulting gain or loss for each sale. Transactions are separated into short-term and long-term categories. Each category has boxes for transactions with and without basis reported to the IRS on Form 1099-B.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Schedule D: Capital Gains and Losses</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Schedule D summarizes the totals from Form 8949 and calculates your net capital gain or loss for the year. It separates short-term and long-term totals, nets gains and losses, applies the $3,000 ordinary income loss limitation, and calculates the amount to carry forward to future years. The net capital gain from Schedule D transfers to your Form 1040.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Form 4797: Sales of Business Property</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Used when selling business property, including depreciation recapture from rental real estate. This form separates Section 1245 property (personal property and certain depreciable real property) from Section 1250 property (real property). Depreciation recapture is calculated here and flows to Schedule D.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Form 8824: Like-Kind Exchanges (1031 Exchanges)</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      If you completed a 1031 exchange of real estate, you must file Form 8824 to report the details of the exchange. This form reports the relinquished property, the replacement property, the realized gain, and the deferred gain. Failure to file this form can result in the IRS treating the transaction as a taxable sale.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Reference Table */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Capital Gains Tax Quick Reference Table
          </h2>
          <Card>
            <CardHeader className="bg-emerald-600 text-white">
              <CardTitle className="text-xl">2025-2026 Federal Capital Gains Tax Rates at a Glance</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Tax Rate</th>
                      <th className="px-4 py-3 text-left font-semibold">Type</th>
                      <th className="px-4 py-3 text-left font-semibold">Single Income Range</th>
                      <th className="px-4 py-3 text-left font-semibold">MFJ Income Range</th>
                      <th className="px-4 py-3 text-left font-semibold">Holding Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium text-red-600">10-37%</td>
                      <td className="px-4 py-3">Short-term</td>
                      <td className="px-4 py-3">All incomes</td>
                      <td className="px-4 py-3">All incomes</td>
                      <td className="px-4 py-3">1 year or less</td>
                    </tr>
                    <tr className="border-b bg-green-50">
                      <td className="px-4 py-3 font-medium text-green-600">0%</td>
                      <td className="px-4 py-3">Long-term</td>
                      <td className="px-4 py-3">Up to $48,350</td>
                      <td className="px-4 py-3">Up to $96,700</td>
                      <td className="px-4 py-3">More than 1 year</td>
                    </tr>
                    <tr className="border-b bg-amber-50">
                      <td className="px-4 py-3 font-medium text-amber-600">15%</td>
                      <td className="px-4 py-3">Long-term</td>
                      <td className="px-4 py-3">$48,351 - $533,400</td>
                      <td className="px-4 py-3">$96,701 - $600,050</td>
                      <td className="px-4 py-3">More than 1 year</td>
                    </tr>
                    <tr className="border-b bg-red-50">
                      <td className="px-4 py-3 font-medium text-red-600">20%</td>
                      <td className="px-4 py-3">Long-term</td>
                      <td className="px-4 py-3">Over $533,400</td>
                      <td className="px-4 py-3">Over $600,050</td>
                      <td className="px-4 py-3">More than 1 year</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-orange-600">+3.8%</td>
                      <td className="px-4 py-3">NIIT surtax</td>
                      <td className="px-4 py-3">MAGI over $200,000</td>
                      <td className="px-4 py-3">MAGI over $250,000</td>
                      <td className="px-4 py-3">All gains</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          <p className="text-xs text-gray-500 mt-4 text-center">
            Income ranges shown are approximate thresholds for 2025. Consult the IRS for the most current brackets.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Capital Gains Tax Calculation FAQ
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
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
            Skip the Manual Math - Use Our Free Calculator
          </h2>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Our capital gains tax calculator handles all the steps automatically: cost basis, holding period, 
            tax rate stacking, NIIT, and state taxes. Get your estimate in seconds.
          </p>
          <Link href="/">
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold">
              Free Capital Gains Tax Calculator <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white">TaxGainsCalc</h3>
                  <p className="text-xs text-gray-400">Capital Gains Calculator</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Free online capital gains tax calculator for USA investors. Calculate your 2025-2026 tax liability instantly.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-emerald-400 transition">Tax Calculator</Link></li>
                <li><Link href="/real-estate-capital-gains-tax-calculator" className="hover:text-emerald-400 transition">Real Estate Calculator</Link></li>
                <li><Link href="/stock-capital-gains-tax-calculator" className="hover:text-emerald-400 transition">Stock Calculator</Link></li>
                <li><Link href="/how-to-calculate-capital-gains-tax" className="hover:text-emerald-400 transition">How to Calculate</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy-policy" className="hover:text-emerald-400 transition">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-emerald-400 transition">Terms of Service</Link></li>
                <li><Link href="/disclaimer" className="hover:text-emerald-400 transition">Disclaimer</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-emerald-400 transition">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-emerald-400 transition">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <Separator className="bg-gray-700 mb-8" />
          <div className="text-center text-sm text-gray-400">
            <p>&copy; 2025 TaxGainsCalc. All rights reserved.</p>
            <p className="mt-2">
              This calculator provides estimates only. Consult a qualified tax professional for personalized advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
