'use client';

import { useState } from 'react';
import Link from 'next/link';
import TaxCalculator from '@/components/TaxCalculator';
import AdSenseAdmin from '@/components/AdSenseAdmin';
import SEOSchema from '@/components/SEOSchema';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Calculator, 
  TrendingUp, 
  Shield, 
  Clock, 
  DollarSign, 
  FileText, 
  Home as HomeIcon, 
  PiggyBank,
  AlertTriangle,
  HelpCircle,
  CheckCircle,
  ChevronDown,
  Mail,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const faqs = [
    {
      question: "What is capital gains tax and how does it work?",
      answer: "Capital gains tax is a tax on the profit realized from the sale of a capital asset such as stocks, bonds, real estate, or other investments. When you sell an asset for more than you paid for it, the difference between the sale price and your cost basis is considered a capital gain and is subject to taxation. The tax rate depends on how long you held the asset before selling and your overall income level. Understanding capital gains tax is essential for effective investment planning and tax optimization strategies."
    },
    {
      question: "What are the current capital gains tax rates for 2025-2026?",
      answer: "For the 2025-2026 tax year, long-term capital gains are taxed at three preferential rates: 0%, 15%, and 20%. The rate you pay depends on your taxable income and filing status. For single filers, the 0% rate applies to income up to $48,350, the 15% rate applies to income between $48,351 and $533,400, and the 20% rate applies to income above $533,400. Married couples filing jointly have different thresholds: 0% up to $96,700, 15% between $96,701 and $600,050, and 20% above $600,050. Short-term capital gains are taxed at ordinary income tax rates ranging from 10% to 37%."
    },
    {
      question: "What is the difference between short-term and long-term capital gains?",
      answer: "The primary difference between short-term and long-term capital gains lies in the holding period of the asset. Short-term capital gains apply to assets held for one year or less and are taxed at your ordinary income tax rate, which can be as high as 37% for high earners. Long-term capital gains apply to assets held for more than one year and benefit from preferential tax rates of 0%, 15%, or 20%, depending on your income level. This significant tax advantage encourages investors to hold their investments longer, potentially reducing their overall tax burden considerably."
    },
    {
      question: "How do I calculate my capital gains tax liability?",
      answer: "Calculating your capital gains tax involves several steps. First, determine your cost basis, which includes the purchase price plus any commissions, fees, or improvements. Second, calculate your net proceeds from the sale, which is the sale price minus selling expenses like commissions. Third, subtract your cost basis from your net proceeds to find your capital gain or loss. Fourth, determine whether the gain is short-term or long-term based on your holding period. Finally, apply the appropriate tax rate based on your filing status and taxable income. Our free capital gains tax calculator automates this entire process for you."
    },
    {
      question: "What is the Net Investment Income Tax (NIIT)?",
      answer: "The Net Investment Income Tax (NIIT) is an additional 3.8% tax that applies to certain net investment income of individuals, estates, and trusts with income above specified threshold amounts. For individuals, the NIIT applies if your modified adjusted gross income exceeds $200,000 for single filers, $250,000 for married couples filing jointly, or $125,000 for married filing separately. This tax applies to investment income including capital gains, dividends, interest, royalties, and rental income. The NIIT was introduced as part of the Affordable Care Act and is separate from regular capital gains tax."
    },
    {
      question: "Can I avoid or reduce capital gains tax legally?",
      answer: "Yes, there are several legal strategies to reduce or minimize capital gains tax. Holding investments for more than one year qualifies you for lower long-term capital gains rates. Tax-loss harvesting allows you to offset gains with losses from other investments. The primary residence exclusion permits you to exclude up to $250,000 ($500,000 for married couples) of capital gains from the sale of your primary home if you meet ownership and use requirements. A 1031 exchange allows you to defer capital gains tax on investment property by reinvesting in a similar property. Charitable donations of appreciated assets can help you avoid capital gains tax while receiving a charitable deduction."
    },
    {
      question: "How does capital gains tax apply to real estate?",
      answer: "Capital gains tax on real estate follows the same principles as other capital assets, but with some special considerations. For primary residences, you may exclude up to $250,000 ($500,000 for married couples filing jointly) of capital gains if you lived in the home for at least two of the five years before selling. For investment properties, you'll owe capital gains tax on the profit, but you may be able to defer it through a 1031 exchange, which allows you to reinvest the proceeds into a similar property. Depreciation recapture may also apply to investment properties, which is taxed at a maximum rate of 25%."
    },
    {
      question: "Do I have to pay state capital gains tax?",
      answer: "Yes, in addition to federal capital gains tax, most states also tax capital gains. The treatment varies significantly by state. Some states tax capital gains at the same rate as ordinary income, while others have special rates or exclusions. States like California, New York, and Oregon have relatively high state capital gains taxes, while states like Florida, Texas, Washington, Nevada, Wyoming, and Alaska have no state income tax at all. When calculating your total tax liability, it's important to consider both federal and state capital gains taxes."
    },
    {
      question: "What IRS forms do I need for reporting capital gains?",
      answer: "Reporting capital gains to the IRS requires several forms. Form 8949 is used to report each capital asset transaction, including the purchase date, sale date, proceeds, cost basis, and gain or loss. Schedule D (Form 1040) summarizes all capital gains and losses from Form 8949 and calculates your net capital gain or loss. Form 1040 includes the capital gains tax on your overall tax return. For more complex situations, you may also need Form 4797 for sales of business property, or Form 8824 for 1031 exchanges. Your broker typically provides Form 1099-B with transaction details."
    },
    {
      question: "What is the primary residence exclusion for capital gains?",
      answer: "The primary residence exclusion, also known as the Section 121 exclusion, allows homeowners to exclude up to $250,000 of capital gains ($500,000 for married couples filing jointly) from the sale of their primary residence. To qualify, you must have owned and used the home as your primary residence for at least two of the five years before the sale. The exclusion can be used once every two years. If you don't meet the full requirements due to employment changes, health issues, or unforeseen circumstances, you may qualify for a partial exclusion. This is one of the most valuable tax benefits for homeowners."
    },
    {
      question: "How does tax-loss harvesting work?",
      answer: "Tax-loss harvesting is a strategy that involves selling investments at a loss to offset capital gains from other investments. For example, if you have $10,000 in capital gains from selling Stock A, you could sell Stock B at a $10,000 loss to completely offset those gains, resulting in zero net capital gains tax for that transaction. If your losses exceed your gains, you can deduct up to $3,000 of net capital losses against ordinary income per year ($1,500 for married filing separately), with any excess losses carried forward to future years. This strategy is particularly effective near year-end and in volatile markets."
    },
    {
      question: "What is a 1031 exchange and how does it work?",
      answer: "A 1031 exchange, named after Section 1031 of the Internal Revenue Code, allows you to defer capital gains tax when you sell an investment property and reinvest the proceeds in a similar property. To qualify, the properties must be of 'like-kind,' which broadly includes most types of real estate held for investment or business purposes. There are strict timing requirements: you must identify potential replacement properties within 45 days of selling your property and complete the purchase within 180 days. A qualified intermediary must hold the funds between transactions. This powerful tax deferral strategy is widely used by real estate investors."
    }
  ];

  return (
    <>
      <SEOSchema />
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
                  <h1 className="text-xl font-bold text-gray-900">TaxGainsCalc</h1>
                  <p className="text-xs text-gray-500">Capital Gains Tax Calculator</p>
                </div>
              </div>
              <nav className="hidden lg:flex items-center gap-3 text-sm">
                <a href="#calculator" className="text-sm text-gray-600 hover:text-emerald-600 transition px-2.5 py-2 rounded-md hover:bg-emerald-50">Calculator</a>
                <Link href="/capital-gains-tax-rates" className="text-sm text-gray-600 hover:text-emerald-600 transition px-2.5 py-2 rounded-md hover:bg-emerald-50">Tax Rates</Link>
                <Link href="/long-term-capital-gains-tax-calculator" className="text-sm text-gray-600 hover:text-emerald-600 transition px-2.5 py-2 rounded-md hover:bg-emerald-50">Long-Term</Link>
                <Link href="/short-term-capital-gains-tax-calculator" className="text-sm text-gray-600 hover:text-emerald-600 transition px-2.5 py-2 rounded-md hover:bg-emerald-50">Short-Term</Link>
                <Link href="/stock-capital-gains-tax-calculator" className="text-sm text-gray-600 hover:text-emerald-600 transition px-2.5 py-2 rounded-md hover:bg-emerald-50">Stocks</Link>
                <Link href="/real-estate-capital-gains-tax-calculator" className="text-sm text-gray-600 hover:text-emerald-600 transition px-2.5 py-2 rounded-md hover:bg-emerald-50">Real Estate</Link>
                <Link href="/home-sale-capital-gains-tax-calculator" className="text-sm text-gray-600 hover:text-emerald-600 transition px-2.5 py-2 rounded-md hover:bg-emerald-50">Home Sale</Link>
                <Link href="/day-trading-tax-calculator" className="text-sm text-gray-600 hover:text-emerald-600 transition px-2.5 py-2 rounded-md hover:bg-emerald-50">Day Trading</Link>
                <Link href="/capital-gains-tax-by-state" className="text-sm text-gray-600 hover:text-emerald-600 transition px-2.5 py-2 rounded-md hover:bg-emerald-50">By State</Link>
                <Link href="/how-to-calculate-capital-gains-tax" className="text-sm text-gray-600 hover:text-emerald-600 transition px-2.5 py-2 rounded-md hover:bg-emerald-50">Guide</Link>
              </nav>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-md text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition" aria-label="Toggle menu">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
            {mobileMenuOpen && (
              <nav className="lg:hidden mt-3 pb-3 border-t border-gray-100 pt-3">
                <div className="grid grid-cols-2 gap-1">
                  <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition px-3 py-2.5 rounded-md">Calculator</a>
                  <Link href="/capital-gains-tax-rates" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition px-3 py-2.5 rounded-md">Tax Rates</Link>
                  <Link href="/long-term-capital-gains-tax-calculator" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition px-3 py-2.5 rounded-md">Long-Term</Link>
                  <Link href="/short-term-capital-gains-tax-calculator" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition px-3 py-2.5 rounded-md">Short-Term</Link>
                  <Link href="/stock-capital-gains-tax-calculator" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition px-3 py-2.5 rounded-md">Stocks</Link>
                  <Link href="/real-estate-capital-gains-tax-calculator" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition px-3 py-2.5 rounded-md">Real Estate</Link>
                  <Link href="/home-sale-capital-gains-tax-calculator" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition px-3 py-2.5 rounded-md">Home Sale</Link>
                  <Link href="/day-trading-tax-calculator" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition px-3 py-2.5 rounded-md">Day Trading</Link>
                  <Link href="/capital-gains-tax-by-state" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition px-3 py-2.5 rounded-md">By State</Link>
                  <Link href="/how-to-calculate-capital-gains-tax" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition px-3 py-2.5 rounded-md">Guide</Link>
                </div>
              </nav>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Updated for Tax Year 2025-2026</Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Capital Gains Tax Calculator USA 2026
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
              Calculate your short-term and long-term capital gains tax liability instantly. 
              Free online tax estimator for stocks, real estate, and investment property.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <CheckCircle className="h-4 w-4" />
                100% Free
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <CheckCircle className="h-4 w-4" />
                2025-2026 Tax Rates
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <CheckCircle className="h-4 w-4" />
                Instant Results
              </div>
            </div>
          </div>
        </section>

        {/* Main Calculator Section */}
        <section id="calculator" className="py-12 md:py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <TaxCalculator />
          </div>
        </section>

        {/* What is Capital Gains Tax */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              What is Capital Gains Tax?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Capital gains tax is a fundamental component of the United States tax system that affects millions of investors, homeowners, and businesses each year. When you sell a capital asset for more than you originally paid for it, the profit you realize is considered a capital gain and is subject to taxation by the federal government and, in most cases, state governments as well. Understanding how capital gains tax works is essential for anyone who invests in stocks, bonds, real estate, or other appreciating assets.
              </p>
              <p className="mb-4">
                The Internal Revenue Service (IRS) defines a capital asset broadly to include almost everything you own for personal or investment purposes. This includes stocks, bonds, mutual funds, real estate, vehicles, jewelry, collectibles, and even cryptocurrency. When you sell one of these assets for a profit, the gain is subject to capital gains tax. However, the tax treatment varies significantly depending on how long you held the asset before selling and your overall income level.
              </p>
              <p className="mb-4">
                The U.S. tax code distinguishes between two types of capital gains: short-term and long-term. This distinction is crucial because it directly affects the tax rate you'll pay on your investment profits. Short-term capital gains, which apply to assets held for one year or less, are taxed at your ordinary income tax rate, which can be as high as 37% for high earners. In contrast, long-term capital gains, which apply to assets held for more than one year, benefit from preferential tax rates of 0%, 15%, or 20%, depending on your taxable income and filing status.
              </p>
              <p>
                The rationale behind these preferential long-term rates is to encourage long-term investment and provide tax relief to investors who commit their capital for extended periods. This policy aims to promote economic growth by incentivizing patient, long-term capital allocation rather than short-term speculation. For investors, understanding these rules can lead to significant tax savings over time through strategic investment timing and portfolio management.
              </p>
            </div>
          </div>
        </section>

        {/* Short-Term vs Long-Term Capital Gains */}
        <section className="py-12 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Short-Term vs Long-Term Capital Gains: Understanding the Difference
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-800">
                    <Clock className="h-5 w-5" />
                    Short-Term Capital Gains
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Assets held for 1 year or less</li>
                    <li>• Taxed at ordinary income rates (10%-37%)</li>
                    <li>• No preferential tax treatment</li>
                    <li>• Higher tax burden for most investors</li>
                    <li>• Common for active traders</li>
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
                    <li>• Assets held for more than 1 year</li>
                    <li>• Taxed at preferential rates (0%, 15%, 20%)</li>
                    <li>• Significant tax savings potential</li>
                    <li>• Encourages long-term investing</li>
                    <li>• Best for buy-and-hold investors</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                The holding period is the single most important factor in determining whether your capital gains qualify for preferential tax treatment. For the IRS, the holding period begins the day after you acquire the asset and ends on the day you sell it. This means if you purchase a stock on January 1st and sell it on January 1st of the following year, you've held it for exactly 364 days, which still qualifies as a short-term holding period. To qualify for long-term capital gains treatment, you must hold the asset for more than 365 days.
              </p>
              <p className="mb-4">
                The tax implications of this distinction can be substantial. Consider an investor in the 35% ordinary income tax bracket who realizes a $50,000 capital gain. If this gain is short-term, they would owe approximately $17,500 in federal taxes. However, if the same gain qualifies as long-term and falls within the 15% capital gains bracket, the tax liability drops to just $7,500—a savings of $10,000 simply by holding the investment for an additional few days or weeks. This example illustrates why understanding and strategically managing holding periods is a critical component of tax-efficient investing.
              </p>
              <p>
                For active traders and those who frequently buy and sell investments, short-term capital gains can significantly increase their overall tax burden. Day traders, for instance, typically generate predominantly short-term gains and may face tax rates as high as 37% plus the 3.8% Net Investment Income Tax. In contrast, long-term investors who follow a buy-and-hold strategy can benefit from substantially lower tax rates, allowing more of their investment returns to compound over time. This tax advantage is one reason many financial advisors recommend long-term investing strategies for most individual investors.
              </p>
            </div>
          </div>
        </section>

        {/* Tax Rates Table Section */}
        <section id="rates" className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              2025-2026 Capital Gains Tax Rates
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              The following tables show the federal capital gains tax rates for the 2025-2026 tax year. 
              Long-term capital gains enjoy preferential rates of 0%, 15%, or 20% based on your taxable income.
            </p>
            
            {/* Long-Term Rates */}
            <Card className="mb-8">
              <CardHeader className="bg-emerald-600 text-white">
                <CardTitle className="text-xl">Long-Term Capital Gains Tax Rates 2025</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Tax Rate</th>
                        <th className="px-4 py-3 text-left font-semibold">Single</th>
                        <th className="px-4 py-3 text-left font-semibold">Married Filing Jointly</th>
                        <th className="px-4 py-3 text-left font-semibold">Married Filing Separately</th>
                        <th className="px-4 py-3 text-left font-semibold">Head of Household</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-3 font-medium text-green-600">0%</td>
                        <td className="px-4 py-3">Up to $48,350</td>
                        <td className="px-4 py-3">Up to $96,700</td>
                        <td className="px-4 py-3">Up to $48,350</td>
                        <td className="px-4 py-3">Up to $64,750</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="px-4 py-3 font-medium text-amber-600">15%</td>
                        <td className="px-4 py-3">$48,351 – $533,400</td>
                        <td className="px-4 py-3">$96,701 – $600,050</td>
                        <td className="px-4 py-3">$48,351 – $300,025</td>
                        <td className="px-4 py-3">$64,751 – $566,700</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-red-600">20%</td>
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

            {/* NIIT */}
            <Card className="mb-8 border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-amber-800">
                  <AlertTriangle className="h-5 w-5" />
                  Net Investment Income Tax (NIIT) – 3.8%
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  High-income taxpayers may be subject to an additional 3.8% Net Investment Income Tax on their investment income, including capital gains. The NIIT applies when your modified adjusted gross income exceeds:
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-amber-600" /> <strong>$200,000</strong> for Single filers</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-amber-600" /> <strong>$250,000</strong> for Married Filing Jointly</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-amber-600" /> <strong>$125,000</strong> for Married Filing Separately</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-amber-600" /> <strong>$200,000</strong> for Head of Household</li>
                </ul>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Understanding these tax brackets is crucial for effective tax planning. The 0% long-term capital gains rate is particularly valuable for retirees and others with lower incomes who may be able to realize gains without paying any federal tax. For investors in the 15% bracket, long-term capital gains are taxed at less than half the rate of short-term gains for many taxpayers, representing substantial savings.
              </p>
              <p>
                It's important to note that these thresholds apply to your taxable income, which includes your ordinary income plus your net capital gains. The tax rate is determined by stacking your capital gains on top of your ordinary income. For example, if you have $40,000 in ordinary income and $20,000 in long-term capital gains as a single filer, your total taxable income would be $60,000, placing your gains in the 15% bracket.
              </p>
            </div>
          </div>
        </section>

        {/* How to Calculate Section */}
        <section id="guide" className="py-12 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              How to Calculate Capital Gains Tax: Step-by-Step Guide
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Calculating your capital gains tax liability involves several steps, but the process becomes straightforward once you understand the key concepts. Here's a comprehensive guide to help you accurately determine your capital gains tax obligation.
              </p>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">Step 1: Determine Your Cost Basis</h3>
                    <p className="text-gray-700">
                      Your cost basis is the original value of an asset for tax purposes, typically the purchase price plus any additional costs such as commissions, fees, and improvements (for real estate). For stocks, your cost basis includes the purchase price plus any brokerage fees. For real estate, you can add closing costs, title fees, and the cost of improvements to your basis. Accurate record-keeping is essential because a higher cost basis means a lower taxable gain.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">Step 2: Calculate Your Net Proceeds</h3>
                    <p className="text-gray-700">
                      Net proceeds are the amount you receive from selling an asset, minus selling expenses. For stocks, this is the sale price minus any brokerage commissions. For real estate, subtract real estate agent commissions, closing costs, and other selling expenses from the sale price. Your net proceeds, not the gross sale price, are used to calculate your capital gain or loss.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">Step 3: Calculate Your Capital Gain or Loss</h3>
                    <p className="text-gray-700">
                      Subtract your cost basis from your net proceeds to determine your capital gain or loss. If the result is positive, you have a capital gain. If negative, you have a capital loss. Capital losses can be used to offset capital gains, and up to $3,000 of excess losses can be deducted against ordinary income each year, with any remaining losses carried forward to future years.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">Step 4: Determine Your Holding Period</h3>
                    <p className="text-gray-700">
                      Calculate how long you held the asset from the day after your purchase date to the sale date. Holdings of one year or less are short-term, while holdings exceeding one year are long-term. This determination is crucial because it dictates which tax rates apply to your gains. Our calculator automatically determines this for you based on the dates you enter.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">Step 5: Apply the Appropriate Tax Rate</h3>
                    <p className="text-gray-700">
                      Using your taxable income (excluding the capital gain) and filing status, determine your applicable capital gains tax rate from the tables above. Remember that short-term gains are taxed at ordinary income rates, while long-term gains qualify for preferential rates of 0%, 15%, or 20%. Also consider whether the 3.8% NIIT applies to your situation.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Asset Types Section */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Capital Gains Tax on Different Asset Types
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Capital gains tax applies to various types of assets, but the specific rules and considerations can vary significantly depending on what you're selling. Understanding these differences is essential for accurate tax planning and reporting.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-blue-800">
                    <TrendingUp className="h-5 w-5" />
                    Stocks & Bonds
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p>
                    Stocks and bonds are the most common assets subject to capital gains tax. When you sell shares of stock or bonds for more than your cost basis, you realize a capital gain. Mutual funds and ETFs generate capital gains through both your sales of shares and the fund's internal trading activities. Your broker provides Form 1099-B reporting your transactions, making tax reporting straightforward. Consider using specific share identification or FIFO methods to optimize your tax position.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-green-800">
                    <HomeIcon className="h-5 w-5" />
                    Real Estate & Property
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p>
                    Real estate transactions involve unique capital gains considerations. For primary residences, the Section 121 exclusion allows you to exclude up to $250,000 ($500,000 for married couples) of gains if you lived in the home for at least two of the five years before selling. Investment properties don't qualify for this exclusion, but 1031 exchanges allow you to defer gains by reinvesting in similar property. Depreciation recapture rules also apply to rental properties.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-purple-800">
                    <PiggyBank className="h-5 w-5" />
                    Mutual Funds
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p>
                    Mutual funds present unique capital gains challenges. Funds distribute capital gains to shareholders when they sell underlying securities at a profit, even if you haven't sold your shares. These distributions are taxable to you in the year received. When you sell mutual fund shares, you also realize your own capital gains or losses. Understanding the difference between short-term and long-term distributions is important for tax planning.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-orange-800">
                    <DollarSign className="h-5 w-5" />
                    Cryptocurrency
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p>
                    Cryptocurrency is treated as property for tax purposes, meaning capital gains tax applies when you sell or exchange crypto for a profit. Every crypto transaction, including using Bitcoin to purchase goods, is a taxable event. The IRS has increased enforcement of crypto tax compliance, requiring disclosure of crypto holdings on tax returns. Keep detailed records of all purchases, sales, and exchanges to accurately calculate your gains.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tax Strategies Section */}
        <section className="py-12 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Strategies to Minimize Capital Gains Tax
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p>
                While capital gains tax is an inevitable part of investing, there are several legal strategies you can employ to minimize your tax liability and keep more of your investment returns. These strategies should be part of any comprehensive investment and tax planning approach.
              </p>
            </div>
            <div className="grid gap-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg text-emerald-800 mb-2">1. Hold Investments Long-Term</h3>
                  <p className="text-gray-700">
                    The simplest and most effective strategy is to hold investments for more than one year to qualify for lower long-term capital gains rates. By waiting just a few extra days before selling, you could reduce your tax rate from 37% to 20% or less. This strategy requires patience but offers substantial tax savings with no additional cost.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg text-emerald-800 mb-2">2. Tax-Loss Harvesting</h3>
                  <p className="text-gray-700">
                    Tax-loss harvesting involves selling investments at a loss to offset capital gains from other investments. You can use losses to offset gains dollar-for-dollar, and any excess losses can offset up to $3,000 of ordinary income per year. This strategy is particularly effective in volatile markets and should be implemented carefully to avoid wash sale rules.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg text-emerald-800 mb-2">3. Utilize 1031 Exchanges</h3>
                  <p className="text-gray-700">
                    For real estate investors, 1031 exchanges offer a powerful way to defer capital gains tax indefinitely. By reinvesting proceeds from a property sale into a similar property within specified timeframes, you can defer the tax and potentially benefit from continued appreciation on the full pre-tax amount.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg text-emerald-800 mb-2">4. Primary Residence Exclusion</h3>
                  <p className="text-gray-700">
                    Take advantage of the Section 121 exclusion for your primary residence. By living in your home for at least two of the five years before selling, you can exclude up to $250,000 ($500,000 for married couples) of capital gains. This is one of the most valuable tax breaks available to homeowners.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg text-emerald-800 mb-2">5. Charitable Donations of Appreciated Assets</h3>
                  <p className="text-gray-700">
                    Donating appreciated assets to charity allows you to avoid capital gains tax entirely while receiving a charitable deduction for the full market value. This strategy is more tax-efficient than selling the asset and donating cash, especially for highly appreciated investments held long-term.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Common Mistakes Section */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Common Capital Gains Tax Mistakes to Avoid
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-6">
              <p>
                Even experienced investors make mistakes when it comes to capital gains tax. Being aware of these common errors can help you avoid costly penalties and missed opportunities for tax savings.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-red-100">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Miscalculating Holding Periods</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        The holding period starts the day after purchase, not the purchase date. Missing the one-year threshold by even one day can cost you thousands in additional taxes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-red-100">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Ignoring State Taxes</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Many investors focus only on federal taxes and forget that most states also tax capital gains. Factor state taxes into your planning, especially if considering relocation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-red-100">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Not Tracking Cost Basis</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Failing to maintain accurate cost basis records can result in paying taxes on more gain than necessary. Keep all purchase records and adjust for splits, dividends, and reinvestments.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-red-100">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Wash Sale Violations</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Buying a substantially identical security within 30 days before or after selling at a loss triggers wash sale rules, disallowing the loss deduction. Plan transactions carefully.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-12 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Frequently Asked Questions About Capital Gains Tax
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <Card key={index} className="overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left p-4 flex items-center justify-between hover:bg-gray-50 transition"
                  >
                    <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-4 pb-4 text-gray-700">
                      <Separator className="mb-4" />
                      {faq.answer}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* IRS Forms Section */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              IRS Forms for Reporting Capital Gains
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p>
                Properly reporting capital gains on your tax return requires familiarity with several IRS forms. Here's an overview of the key forms you'll need and how to use them.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FileText className="h-5 w-5 text-emerald-600" />
                    Form 8949
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 text-sm">
                  <p>
                    Sales and Other Dispositions of Capital Assets. Report each individual capital asset transaction on this form, including purchase date, sale date, proceeds, cost basis, and gain or loss. Transactions are separated into short-term and long-term sections.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FileText className="h-5 w-5 text-emerald-600" />
                    Schedule D
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 text-sm">
                  <p>
                    Capital Gains and Losses. This form summarizes all capital transactions from Form 8949 and calculates your net capital gain or loss. The result flows to your Form 1040 and determines your capital gains tax liability.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FileText className="h-5 w-5 text-emerald-600" />
                    Form 1040
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 text-sm">
                  <p>
                    U.S. Individual Income Tax Return. Your net capital gain or loss from Schedule D is reported on your main tax return. Capital gains tax is calculated and included in your total tax liability on this form.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Start Calculating Your Capital Gains Tax Today
            </h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Use our free capital gains tax calculator to estimate your tax liability and plan your investment strategy. 
              Accurate calculations with 2025-2026 federal tax rates.
            </p>
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50" asChild>
              <a href="#calculator">
                <Calculator className="mr-2 h-5 w-5" />
                Use Calculator Now
              </a>
            </Button>
          </div>
        </section>

        {/* Explore More Calculators & Guides */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">
              Capital Gains Tax Calculators & Guides
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
              Explore our comprehensive collection of free capital gains tax calculators and guides for every asset type and situation.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/capital-gains-tax-rates" className="group">
                <Card className="h-full border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-emerald-800 mb-1 group-hover:text-emerald-600">Capital Gains Tax Rates 2025-2026</h3>
                    <p className="text-sm text-gray-500">Complete federal tax rate brackets for all filing statuses</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/long-term-capital-gains-tax-calculator" className="group">
                <Card className="h-full border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-emerald-800 mb-1 group-hover:text-emerald-600">Long-Term Capital Gains Calculator</h3>
                    <p className="text-sm text-gray-500">Calculate 0%, 15%, 20% long-term capital gains tax</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/short-term-capital-gains-tax-calculator" className="group">
                <Card className="h-full border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-emerald-800 mb-1 group-hover:text-emerald-600">Short-Term Capital Gains Calculator</h3>
                    <p className="text-sm text-gray-500">Calculate short-term gains at ordinary income rates</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/real-estate-capital-gains-tax-calculator" className="group">
                <Card className="h-full border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-emerald-800 mb-1 group-hover:text-emerald-600">Real Estate Capital Gains Calculator</h3>
                    <p className="text-sm text-gray-500">Tax on property, 1031 exchanges, Section 121 exclusion</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/stock-capital-gains-tax-calculator" className="group">
                <Card className="h-full border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-emerald-800 mb-1 group-hover:text-emerald-600">Stock Capital Gains Tax Calculator</h3>
                    <p className="text-sm text-gray-500">Calculate taxes on stock sales, mutual funds, and ETFs</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/capital-gains-tax-by-state" className="group">
                <Card className="h-full border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-emerald-800 mb-1 group-hover:text-emerald-600">Capital Gains Tax by State</h3>
                    <p className="text-sm text-gray-500">State-by-state capital gains tax rates for all 50 states</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/home-sale-capital-gains-tax-calculator" className="group">
                <Card className="h-full border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-emerald-800 mb-1 group-hover:text-emerald-600">Home Sale Capital Gains Tax</h3>
                    <p className="text-sm text-gray-500">Section 121 exclusion, primary residence tax rules</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/day-trading-tax-calculator" className="group">
                <Card className="h-full border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-emerald-800 mb-1 group-hover:text-emerald-600">Day Trading Tax Calculator</h3>
                    <p className="text-sm text-gray-500">Tax rules for active traders, mark-to-market, TTS</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/how-to-calculate-capital-gains-tax" className="group">
                <Card className="h-full border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-emerald-800 mb-1 group-hover:text-emerald-600">How to Calculate Capital Gains Tax</h3>
                    <p className="text-sm text-gray-500">Step-by-step guide with worked examples and IRS forms</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
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
                <h4 className="font-semibold text-white mb-4">Calculators</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#calculator" className="hover:text-emerald-400 transition">Tax Calculator</a></li>
                  <li><Link href="/long-term-capital-gains-tax-calculator" className="hover:text-emerald-400 transition">Long-Term Calculator</Link></li>
                  <li><Link href="/short-term-capital-gains-tax-calculator" className="hover:text-emerald-400 transition">Short-Term Calculator</Link></li>
                  <li><Link href="/real-estate-capital-gains-tax-calculator" className="hover:text-emerald-400 transition">Real Estate Calculator</Link></li>
                  <li><Link href="/stock-capital-gains-tax-calculator" className="hover:text-emerald-400 transition">Stock Calculator</Link></li>
                  <li><Link href="/day-trading-tax-calculator" className="hover:text-emerald-400 transition">Day Trading Calculator</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Guides</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/capital-gains-tax-rates" className="hover:text-emerald-400 transition">Tax Rates 2025-2026</Link></li>
                  <li><Link href="/how-to-calculate-capital-gains-tax" className="hover:text-emerald-400 transition">How to Calculate</Link></li>
                  <li><Link href="/capital-gains-tax-by-state" className="hover:text-emerald-400 transition">Tax by State</Link></li>
                  <li><Link href="/home-sale-capital-gains-tax-calculator" className="hover:text-emerald-400 transition">Home Sale Tax</Link></li>
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
                  <li className="flex items-center gap-2 mt-2">
                    <Mail className="h-4 w-4" />
                    taxgainscalc@gmail.com
                  </li>
                </ul>
              </div>
            </div>
            <Separator className="bg-gray-700 mb-8" />
            <div className="text-center text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} TaxGainsCalc. All rights reserved.</p>
              <p className="mt-2">
                This calculator provides estimates only. Consult a qualified tax professional for personalized advice.
              </p>
            </div>
          </div>
        </footer>

        {/* Hidden Admin Panel */}
        <AdSenseAdmin />
      </div>
    </>
  );
}
