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
  BarChart3,
  PieChart,
  Clock,
  FileText,
  Shield,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Stock Capital Gains Tax Calculator 2025-2026',
  description: 'Free stock capital gains tax calculator. Calculate tax on stock gains, mutual funds, and employee stock options. FIFO, LIFO, and specific identification methods explained.',
  keywords: 'stock capital gains calculator, stock tax calculator, selling stock tax calculator, tax on stock gains, capital gains on stocks calculator, stock profit tax',
  alternates: {
    canonical: 'https://taxgainscalc.com/stock-capital-gains-tax-calculator',
  },
  openGraph: {
    title: 'Stock Capital Gains Tax Calculator 2025-2026',
    description: 'Free stock capital gains tax calculator. Calculate tax on stock gains, mutual funds, and employee stock options.',
    url: 'https://taxgainscalc.com/stock-capital-gains-tax-calculator',
    siteName: 'TaxGainsCalc',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stock Capital Gains Tax Calculator 2025-2026',
    description: 'Free stock capital gains tax calculator for stocks, mutual funds, and employee stock options.',
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
    question: 'How much tax do I pay on stock gains?',
    answer: 'The tax you pay on stock gains depends on your holding period and income level. Short-term gains (held one year or less) are taxed at ordinary income rates of 10% to 37%. Long-term gains (held more than one year) are taxed at preferential rates of 0%, 15%, or 20% based on your taxable income. For example, a single filer with $80,000 in taxable income pays 0% on long-term gains up to $48,350 and 15% on gains above that. High earners with income above $200,000 may also owe the additional 3.8% Net Investment Income Tax.',
  },
  {
    question: 'What is the difference between FIFO and specific identification for stock sales?',
    answer: 'FIFO (First In, First Out) sells your oldest shares first, which generally results in the largest long-term gains and the lowest tax rate. Specific identification allows you to choose which specific shares to sell, giving you control over your tax outcome. With specific identification, you can sell shares with the highest cost basis first to minimize gains, or sell shares with losses to offset gains elsewhere. Most brokerages now support specific identification, but you must designate the shares at the time of sale. FIFO is the default method if you do not specify.',
  },
  {
    question: 'How does a stock split affect my cost basis?',
    answer: 'A stock split does not change your total investment value or total cost basis. Instead, it divides your existing shares into more shares at a proportionally lower price per share. For example, in a 2-for-1 split, you receive two shares for every one you own, and your per-share cost basis is cut in half. If you bought 100 shares at $50 each (total basis $5,000) and the stock splits 2-for-1, you would own 200 shares with a cost basis of $25 per share (total basis remains $5,000). Your total gain or loss when you sell remains the same regardless of the split.',
  },
  {
    question: 'How are mutual fund capital gains taxed?',
    answer: 'Mutual funds generate taxable capital gains in two ways. First, when the fund manager sells securities within the fund at a profit, those gains are distributed to shareholders as capital gains distributions, typically annually. You owe tax on these distributions even if you reinvest them in additional shares. Second, when you sell your mutual fund shares, you realize your own capital gain or loss based on the difference between your sale proceeds and your cost basis. Fund distributions can be short-term or long-term depending on how long the fund held the underlying securities.',
  },
  {
    question: 'How are employee stock options (ISOs and NSOs) taxed?',
    answer: 'Incentive Stock Options (ISOs) and Non-Qualified Stock Options (NSOs) have different tax treatments. With NSOs, you pay ordinary income tax on the spread between the exercise price and the fair market value at exercise. With ISOs, there is no regular income tax at exercise, but the spread may be subject to the Alternative Minimum Tax (AMT). For both types, when you eventually sell the shares, any additional gain beyond the exercise price is taxed as a capital gain. If you hold ISO shares for at least two years from the grant date and one year from the exercise date, the entire gain qualifies for long-term capital gains treatment.',
  },
  {
    question: 'Do I pay tax on stock gains in a retirement account?',
    answer: 'Stock gains within a traditional IRA or 401(k) are tax-deferred, meaning you do not pay capital gains tax as the investments grow. Instead, withdrawals in retirement are taxed as ordinary income. In a Roth IRA or Roth 401(k), qualified withdrawals are completely tax-free. Stock gains in taxable brokerage accounts are subject to capital gains tax each year you realize gains. This is why tax-advantaged retirement accounts are excellent for actively traded investments that would generate short-term gains in a taxable account.',
  },
  {
    question: 'What is the wash sale rule and how does it affect my taxes?',
    answer: 'The wash sale rule disallows a tax loss deduction if you sell a security at a loss and purchase a substantially identical security within 30 days before or after the sale. This includes buying the same stock, purchasing an option on the same stock, or buying shares in a mutual fund that tracks the same index. The disallowed loss is added to the cost basis of the replacement shares, which defers the loss deduction until you eventually sell the new shares. To avoid wash sale violations, wait at least 31 days before repurchasing a sold security.',
  },
  {
    question: 'How do I report stock capital gains on my tax return?',
    answer: 'Your brokerage sends you Form 1099-B each year, which reports all your stock sales. You report each transaction on IRS Form 8949, including the date acquired, date sold, proceeds, cost basis, and gain or loss. The totals from Form 8949 flow to Schedule D, which summarizes your net capital gains and losses for the year. The net capital gain is then transferred to your Form 1040. Most tax software can import your 1099-B data directly from your broker, simplifying the reporting process significantly.',
  },
  {
    question: 'Can I deduct stock losses from my taxes?',
    answer: 'Yes, stock losses can be used to offset stock gains dollar-for-dollar. If your total capital losses exceed your capital gains for the year, you can deduct up to $3,000 of the net loss ($1,500 if married filing separately) against your ordinary income. Any remaining unused losses carry forward to future tax years indefinitely. This makes tax-loss harvesting a valuable strategy where you intentionally sell losing investments to offset gains from winning investments, reducing your overall tax liability.',
  },
];

export default function StockCapitalGainsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
                "name": "How much tax do I pay on stock gains?",
                "acceptedAnswer": { "@type": "Answer", text: "Short-term stock gains (held one year or less) are taxed at ordinary income rates of 10% to 37%. Long-term gains (held more than one year) are taxed at preferential rates of 0%, 15%, or 20% based on your taxable income. High earners may also owe the additional 3.8% Net Investment Income Tax." }
              },
              {
                "@type": "Question",
                "name": "What is the difference between FIFO and specific identification for stock sales?",
                "acceptedAnswer": { "@type": "Answer", text: "FIFO (First In, First Out) sells your oldest shares first, generally producing the largest long-term gains. Specific identification lets you choose which shares to sell, giving you control over your tax outcome by selling high-basis shares to minimize gains." }
              },
              {
                "@type": "Question",
                "name": "How does a stock split affect my cost basis?",
                "acceptedAnswer": { "@type": "Answer", text: "A stock split does not change your total cost basis. It divides existing shares into more shares at a lower per-share price. For example, in a 2-for-1 split of 100 shares bought at $50 each, you'd own 200 shares at $25 each, but your total basis remains $5,000." }
              },
              {
                "@type": "Question",
                "name": "How are employee stock options (ISOs and NSOs) taxed?",
                "acceptedAnswer": { "@type": "Answer", text: "NSOs are taxed as ordinary income on the spread at exercise. ISOs have no regular income tax at exercise but the spread may trigger AMT. Both types generate capital gains on subsequent sale. Holding ISO shares for 2 years from grant and 1 year from exercise qualifies the entire gain for long-term rates." }
              },
              {
                "@type": "Question",
                "name": "What is the wash sale rule and how does it affect stock taxes?",
                "acceptedAnswer": { "@type": "Answer", text: "The wash sale rule disallows a tax loss if you purchase a substantially identical security within 30 days before or after selling at a loss. The disallowed loss is added to the replacement shares' cost basis, deferring the deduction. Wait at least 31 days before repurchasing to avoid this rule." }
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
              { "@type": "ListItem", position: 2, name: "Stock Capital Gains Tax Calculator", item: "https://taxgainscalc.com/stock-capital-gains-tax-calculator" }
            ]
          })
        }}
      />
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
              <Link href="/how-to-calculate-capital-gains-tax" className="text-sm text-gray-600 hover:text-emerald-600 transition">Guide</Link>
              <Link href="/#faq" className="text-sm text-gray-600 hover:text-emerald-600 transition">FAQ</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Updated for Tax Year 2025-2026</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Stock Capital Gains Tax Calculator
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            Calculate the tax on your stock gains accurately. Covers individual stocks, mutual funds, ETFs, 
            and employee stock options. Free online calculator with 2025-2026 federal tax rates.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <TrendingUp className="h-4 w-4" />
              Individual Stocks
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <PieChart className="h-4 w-4" />
              Mutual Funds & ETFs
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Shield className="h-4 w-4" />
              Employee Stock Options
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <CheckCircle className="h-4 w-4" />
              100% Free
            </div>
          </div>
          <div className="mt-8">
            <Link href="/">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold">
                Use the Full Calculator <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How Stock Capital Gains Are Calculated */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            How Stock Capital Gains Are Calculated
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              When you sell shares of stock for a profit, the difference between your sale proceeds and your cost basis is considered a capital gain and is subject to federal (and often state) taxation. Understanding how to properly calculate your stock capital gains is essential for accurate tax reporting and effective tax planning. The calculation involves determining your cost basis, accounting for any stock splits or dividends reinvested, subtracting selling costs, and applying the correct tax rate based on your holding period and income.
            </p>
            <p className="mb-4">
              Your cost basis for a stock purchase is generally the price you paid per share plus any brokerage commissions or fees at the time of purchase. If you acquired shares through a dividend reinvestment plan (DRIP), each reinvested dividend creates a new purchase with its own cost basis and holding period. When you sell a portion of your shares, you need to identify which specific shares were sold to determine the gain or loss. The method you choose for this identification can significantly affect your tax outcome.
            </p>
            <p className="mb-4">
              The holding period is critical because it determines whether your gain is taxed at short-term or long-term rates. Short-term capital gains apply to shares held for one year or less and are taxed at your ordinary income rate, which can range from 10% to 37% depending on your total income. Long-term capital gains apply to shares held for more than one year and benefit from preferential rates of 0%, 15%, or 20%. The difference between short-term and long-term tax treatment can be dramatic: a $100,000 gain taxed at 37% costs $37,000, while the same gain taxed at 15% costs only $15,000, saving you $22,000.
            </p>
            <p>
              In addition to the basic capital gains tax, high-income taxpayers may be subject to the 3.8% Net Investment Income Tax (NIIT), which applies when your modified adjusted gross income exceeds $200,000 for single filers or $250,000 for married couples filing jointly. This additional tax effectively increases the maximum long-term capital gains rate to 23.8% and the maximum short-term rate to 40.8% for the highest earners.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Basis Methods */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Cost Basis Methods: FIFO, LIFO, and Specific Identification
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 mb-8">
            <p className="mb-4">
              When you sell a portion of your shares in a stock that you purchased at different times or prices, you must determine which shares were sold. The IRS allows several methods for making this determination, and your choice can significantly impact the amount of tax you owe. Understanding these methods and choosing the most advantageous one is an important part of tax-efficient investing.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-blue-800">
                  <BarChart3 className="h-5 w-5" />
                  FIFO
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="text-sm">
                  First In, First Out sells your oldest shares first. This is the default method for most brokerages and generally produces the lowest tax on gains because older shares are more likely to have been held long-term and likely have the largest gains. FIFO is simple and requires no additional action on your part.
                </p>
              </CardContent>
            </Card>
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-purple-800">
                  <BarChart3 className="h-5 w-5" />
                  LIFO
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="text-sm">
                  Last In, First Out sells your most recently purchased shares first. This method is not commonly used for stocks as it tends to produce short-term gains, but it can be beneficial if your most recent purchases had a higher cost basis, reducing your taxable gain. LIFO is less commonly supported by brokerages.
                </p>
              </CardContent>
            </Card>
            <Card className="border-emerald-200 bg-emerald-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-emerald-800">
                  <BarChart3 className="h-5 w-5" />
                  Specific ID
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="text-sm">
                  Specific identification allows you to choose exactly which shares to sell. This gives you the most control over your tax outcome, letting you sell high-basis shares to minimize gains or sell loss shares to offset gains elsewhere. You must identify the shares at the time of sale and your broker must support this method.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Most modern brokerages offer specific identification as an option when placing a sell order. If you want to minimize your tax liability, specific identification is generally the most powerful method because it gives you complete control. For example, if you bought 100 shares at $50 and 100 shares at $80, and the current price is $100, selling the $80 shares produces a $20 per share gain, while selling the $50 shares produces a $50 per share gain. Using specific identification to sell the higher-basis shares saves you $30 per share in taxable gains.
            </p>
          </div>
        </div>
      </section>

      {/* Calculation Examples */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Stock Capital Gains Calculation Examples
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Below are worked examples showing the estimated federal tax on different stock gain amounts for 
            both short-term and long-term holding periods. Actual tax varies based on your total income and filing status.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-emerald-200">
              <CardHeader className="bg-emerald-50">
                <CardTitle className="text-lg text-emerald-800">$10,000 Stock Gain</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm">Long-Term (held &gt; 1 year)</p>
                    <p className="text-sm">At 0% rate: <span className="font-bold text-green-600">$0 tax</span></p>
                    <p className="text-sm">At 15% rate: <span className="font-bold text-amber-600">$1,500 tax</span></p>
                    <p className="text-sm">At 20% rate: <span className="font-bold text-red-600">$2,000 tax</span></p>
                  </div>
                  <Separator />
                  <div>
                    <p className="font-semibold text-sm">Short-Term (held &le; 1 year)</p>
                    <p className="text-sm">At 22% rate: <span className="font-bold text-red-600">$2,200 tax</span></p>
                    <p className="text-sm">At 32% rate: <span className="font-bold text-red-600">$3,200 tax</span></p>
                    <p className="text-sm">At 37% rate: <span className="font-bold text-red-600">$3,700 tax</span></p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-emerald-200">
              <CardHeader className="bg-emerald-50">
                <CardTitle className="text-lg text-emerald-800">$50,000 Stock Gain</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm">Long-Term (held &gt; 1 year)</p>
                    <p className="text-sm">At 0% rate: <span className="font-bold text-green-600">$0 tax</span></p>
                    <p className="text-sm">At 15% rate: <span className="font-bold text-amber-600">$7,500 tax</span></p>
                    <p className="text-sm">At 20% rate: <span className="font-bold text-red-600">$10,000 tax</span></p>
                  </div>
                  <Separator />
                  <div>
                    <p className="font-semibold text-sm">Short-Term (held &le; 1 year)</p>
                    <p className="text-sm">At 22% rate: <span className="font-bold text-red-600">$11,000 tax</span></p>
                    <p className="text-sm">At 32% rate: <span className="font-bold text-red-600">$16,000 tax</span></p>
                    <p className="text-sm">At 37% rate: <span className="font-bold text-red-600">$18,500 tax</span></p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-emerald-200">
              <CardHeader className="bg-emerald-50">
                <CardTitle className="text-lg text-emerald-800">$100,000 Stock Gain</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm">Long-Term (held &gt; 1 year)</p>
                    <p className="text-sm">At 0% rate: <span className="font-bold text-green-600">$0 tax</span></p>
                    <p className="text-sm">At 15% rate: <span className="font-bold text-amber-600">$15,000 tax</span></p>
                    <p className="text-sm">At 20% rate: <span className="font-bold text-red-600">$20,000 tax</span></p>
                  </div>
                  <Separator />
                  <div>
                    <p className="font-semibold text-sm">Short-Term (held &le; 1 year)</p>
                    <p className="text-sm">At 22% rate: <span className="font-bold text-red-600">$22,000 tax</span></p>
                    <p className="text-sm">At 32% rate: <span className="font-bold text-red-600">$32,000 tax</span></p>
                    <p className="text-sm">At 37% rate: <span className="font-bold text-red-600">$37,000 tax</span></p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Savings Comparison */}
          <Card className="mt-8 border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2 text-amber-800">
                <AlertTriangle className="h-5 w-5" />
                The Cost of Short-Term Holding: A $100,000 Example
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-gray-700 space-y-2">
                <p>Suppose you have a $100,000 stock gain and are in the 35% ordinary income bracket:</p>
                <Separator className="my-2" />
                <p><strong>Short-term tax (35%):</strong> $35,000</p>
                <p><strong>Long-term tax (15%):</strong> $15,000</p>
                <Separator className="my-2" />
                <p className="font-bold text-emerald-800 text-lg">
                  Potential savings by holding longer than 1 year: $20,000
                </p>
                <p className="text-sm mt-2">
                  This example illustrates why holding stocks for more than one year is one of the simplest 
                  and most effective tax reduction strategies available to investors.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mutual Fund Capital Gains */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Mutual Fund and ETF Capital Gains
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Mutual funds and exchange-traded funds (ETFs) create unique capital gains situations that differ from individual stock investments. When a mutual fund manager sells securities within the fund at a profit, those gains must be distributed to shareholders at least annually. These capital gains distributions are taxable to you in the year they are received, regardless of whether you reinvest them or take them as cash. This means you can owe taxes on fund gains even if you have never sold any of your shares and the fund&apos;s share price has declined.
            </p>
            <p className="mb-4">
              Capital gains distributions from mutual funds are reported on Form 1099-DIV and are typically classified as either short-term or long-term based on how long the fund held the underlying securities, not how long you have owned the fund. Short-term distributions are taxed at your ordinary income rate, while long-term distributions benefit from preferential rates. When evaluating mutual funds, it is worth considering the fund&apos;s historical capital gains distributions, as high-distribution funds can create unexpected tax bills for shareholders.
            </p>
            <p className="mb-4">
              ETFs generally generate fewer capital gains distributions than actively managed mutual funds due to their unique creation and redemption mechanism. When ETF shares are redeemed, the fund typically distributes in-kind baskets of securities rather than selling securities for cash, which reduces the realization of capital gains within the fund. This structural advantage makes ETFs more tax-efficient than many mutual funds, particularly for taxable accounts.
            </p>
            <p>
              When you sell your mutual fund or ETF shares, you also realize your own capital gain or loss. If you have been reinvesting distributions, your cost basis includes the reinvested amounts, which actually increases your basis and reduces your gain when you eventually sell. Your broker tracks your average cost basis for mutual fund shares unless you elect a different method. For ETFs, specific identification is usually available, giving you more control over the tax consequences of your sales.
            </p>
          </div>
        </div>
      </section>

      {/* Stock Split Adjustments */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Stock Split Adjustments and Cost Basis
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 mb-8">
            <p className="mb-4">
              Stock splits are corporate actions that increase the number of outstanding shares while proportionally decreasing the share price. They do not change your total investment value or your total cost basis, but they do require you to adjust your per-share cost basis for accurate tax reporting. The two most common types of splits are forward splits and reverse splits.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-lg text-blue-800">Forward Split Example (2-for-1)</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm space-y-1">
                <p>Original: 100 shares at $100/share = $10,000 basis</p>
                <p>After split: 200 shares at $50/share</p>
                <p>New per-share basis: $10,000 / 200 = $50/share</p>
                <p className="font-semibold text-blue-800">Total basis unchanged: $10,000</p>
              </CardContent>
            </Card>
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-lg text-purple-800">Reverse Split Example (1-for-5)</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm space-y-1">
                <p>Original: 500 shares at $5/share = $2,500 basis</p>
                <p>After split: 100 shares at $25/share</p>
                <p>New per-share basis: $2,500 / 100 = $25/share</p>
                <p className="font-semibold text-purple-800">Total basis unchanged: $2,500</p>
              </CardContent>
            </Card>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Stock dividends (as opposed to cash dividends) also affect your cost basis. When a company issues a stock dividend, you receive additional shares without paying cash, but your total cost basis is now spread across more shares, reducing the per-share basis. Your broker should automatically adjust your cost basis for stock splits and stock dividends, but it is always wise to verify the adjustments on your statements. Keep all confirmations and statements to ensure accurate reporting when you eventually sell.
            </p>
          </div>
        </div>
      </section>

      {/* Employee Stock Options */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Employee Stock Options: ISOs and NSOs
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 mb-8">
            <p className="mb-4">
              Employee stock options are a form of compensation that gives employees the right to purchase company stock at a predetermined price (the exercise or strike price) within a specified period. There are two main types: Incentive Stock Options (ISOs) and Non-Qualified Stock Options (NSOs). Understanding the tax treatment of each type is critical because the difference in tax liability can be substantial, often tens of thousands of dollars on a single exercise.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-emerald-200 bg-emerald-50">
              <CardHeader>
                <CardTitle className="text-lg text-emerald-800">Incentive Stock Options (ISOs)</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-1 text-emerald-600 flex-shrink-0" />
                    <span>No regular income tax at exercise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-1 text-emerald-600 flex-shrink-0" />
                    <span>Spread may trigger AMT liability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-1 text-emerald-600 flex-shrink-0" />
                    <span>Long-term gains if held 2 yrs from grant + 1 yr from exercise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-1 text-emerald-600 flex-shrink-0" />
                    <span>Subject to $100,000 annual vesting limit</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle className="text-lg text-amber-800">Non-Qualified Stock Options (NSOs)</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <DollarSign className="h-4 w-4 mt-1 text-amber-600 flex-shrink-0" />
                    <span>Ordinary income tax on spread at exercise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="h-4 w-4 mt-1 text-amber-600 flex-shrink-0" />
                    <span>Subject to payroll taxes (FICA/Medicare)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="h-4 w-4 mt-1 text-amber-600 flex-shrink-0" />
                    <span>Future gains taxed as capital gains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="h-4 w-4 mt-1 text-amber-600 flex-shrink-0" />
                    <span>No annual vesting limit</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              For NSOs, the difference between the exercise price and the fair market value at exercise is taxed as ordinary income (plus payroll taxes). For example, if you exercise NSOs with a strike price of $20 when the stock is trading at $80, you owe ordinary income tax on the $60 spread per share. When you later sell the shares, any additional appreciation beyond the $80 fair market value at exercise is taxed as a capital gain.
            </p>
            <p>
              ISOs offer potentially better tax treatment if you meet the holding requirements: you must hold the shares for at least two years from the grant date and one year from the exercise date. If you satisfy both requirements, the entire gain qualifies for long-term capital gains rates. However, the bargain element (spread at exercise) may be subject to the Alternative Minimum Tax in the year of exercise, which can create a significant AMT liability even though no regular income tax is due at exercise. Many employees exercise ISOs strategically and plan for the AMT impact to maximize tax savings.
            </p>
          </div>
        </div>
      </section>

      {/* Day Trading Tax Implications */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Day Trading Tax Implications
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 mb-8">
            <p className="mb-4">
              Day trading generates almost exclusively short-term capital gains because positions are opened and closed within the same trading day. This means all trading profits are taxed at your ordinary income rate, which can be as high as 37% plus the 3.8% NIIT. For active day traders, the cumulative tax burden can be enormous, potentially consuming a third or more of gross trading profits.
            </p>
            <p className="mb-4">
              However, day traders may qualify for trader tax status (TTS), which provides several significant tax advantages. If the IRS classifies you as being in the trade or business of trading (rather than an investor), you can elect Mark-to-Market (Section 475) treatment. Under MTM, all your positions are treated as sold at year-end for tax purposes, and all gains and losses are treated as ordinary income. The key advantage is that MTM traders can deduct unlimited trading losses against ordinary income, without the $3,000 annual limitation that applies to investors.
            </p>
            <p>
              Day traders who qualify for TTS can also deduct business expenses such as home office costs, computer equipment, internet, data feeds, and trading education. These deductions reduce ordinary income and can provide meaningful tax savings. Additionally, TTS traders may be eligible to set up a Solo 401(k) or SEP-IRA and contribute a significant portion of their trading income to a tax-advantaged retirement account. Qualifying for TTS requires meeting certain criteria regarding trading frequency, volume, and regularity, so consult a tax professional who specializes in trader taxation.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Stock Capital Gains Tax FAQ
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
            Calculate Your Stock Capital Gains Tax Now
          </h2>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Use our free online calculator to get an accurate estimate of your capital gains tax on stocks, 
            mutual funds, and employee stock options. Updated with 2025-2026 tax rates.
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
