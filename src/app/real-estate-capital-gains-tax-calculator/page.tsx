import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Calculator,
  Home as HomeIcon,
  TrendingUp,
  Shield,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  FileText,
  Building2,
  Key,
  BarChart3,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Real Estate Capital Gains Tax Calculator 2025-2026',
  description: 'Free real estate capital gains tax calculator. Calculate tax on sale of investment property, rental property, and primary residence. Includes 1031 exchange and Section 121 exclusion.',
  keywords: 'real estate capital gains tax calculator, capital gains on sale of property, investment property capital gains, rental property capital gains calculator, property tax calculator',
  alternates: {
    canonical: 'https://taxgainscalc.com/real-estate-capital-gains-tax-calculator',
  },
  openGraph: {
    title: 'Real Estate Capital Gains Tax Calculator 2025-2026',
    description: 'Free real estate capital gains tax calculator. Calculate tax on sale of investment property, rental property, and primary residence.',
    url: 'https://taxgainscalc.com/real-estate-capital-gains-tax-calculator',
    siteName: 'TaxGainsCalc',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Capital Gains Tax Calculator 2025-2026',
    description: 'Free real estate capital gains tax calculator for investment property, rental property, and home sales.',
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
    question: 'How is capital gains tax calculated on the sale of real estate?',
    answer: 'Capital gains tax on real estate is calculated by subtracting your adjusted cost basis from the net sale proceeds. Your cost basis includes the original purchase price plus closing costs, capital improvements, and certain selling expenses. The net proceeds are the sale price minus agent commissions and other selling costs. For example, if you bought a property for $300,000, made $50,000 in improvements, and sold it for $500,000 with $30,000 in selling costs, your capital gain would be $500,000 minus $30,000 minus $350,000, equaling $120,000. The tax rate depends on your holding period and income level.',
  },
  {
    question: 'What is the Section 121 primary residence exclusion?',
    answer: 'The Section 121 exclusion, also known as the primary residence exclusion, allows you to exclude up to $250,000 of capital gains ($500,000 for married couples filing jointly) from the sale of your primary home. To qualify, you must have owned and used the home as your primary residence for at least two of the five years preceding the sale. You can only use this exclusion once every two years. If you sell your home for a gain less than the exclusion amount, you owe no federal capital gains tax on the sale.',
  },
  {
    question: 'What is a 1031 exchange and how does it defer capital gains tax?',
    answer: 'A 1031 exchange, named after IRS Section 1031, allows you to defer paying capital gains tax on an investment property sale by reinvesting the proceeds into a "like-kind" replacement property. The replacement property must be identified within 45 days and the purchase completed within 180 days. A qualified intermediary must hold the proceeds between transactions. This strategy effectively allows you to roll your entire investment forward without paying taxes, enabling greater portfolio growth over time. Note that 1031 exchanges apply only to investment or business properties, not personal residences.',
  },
  {
    question: 'What is depreciation recapture on rental property?',
    answer: 'Depreciation recapture is a tax provision that requires you to pay tax on the depreciation deductions you claimed on a rental property when you sell it. The depreciation recapture amount is taxed at a maximum rate of 25%, regardless of your regular capital gains rate. For example, if you claimed $60,000 in depreciation deductions over the years you owned a rental property, that $60,000 would be subject to depreciation recapture at up to 25% ($15,000) when you sell. Any remaining gain above the recapture amount is taxed at the standard capital gains rate.',
  },
  {
    question: 'Can I avoid capital gains tax when selling my home?',
    answer: 'Yes, there are several strategies to minimize or avoid capital gains tax when selling a home. The most common is the Section 121 exclusion, which can eliminate tax on up to $250,000 ($500,000 for married couples) of gain if the home was your primary residence. For investment properties, a 1031 exchange allows you to defer the tax by reinvesting in another property. You can also offset gains with capital losses from other investments. Converting a rental property to a primary residence and then selling may also reduce your tax liability, though rules have tightened under the Tax Cuts and Jobs Act.',
  },
  {
    question: 'How does the two-out-of-five-year rule work for the home sale exclusion?',
    answer: 'The two-out-of-five-year rule requires that you owned and used the home as your primary residence for at least two years (730 days) within the five-year period ending on the date of the sale. The two years do not need to be consecutive. You could, for example, live in the home for one year, rent it out for two years, and then move back in for one year before selling. The two years of ownership and the two years of use can overlap but do not have to be the same months. If you fail to fully meet this test due to health, employment, or unforeseen circumstances, you may qualify for a reduced exclusion.',
  },
  {
    question: 'What closing costs are included in my cost basis?',
    answer: 'When purchasing property, you can include many closing costs in your cost basis. These include the purchase price, title insurance, legal fees, recording fees, survey costs, transfer taxes, and any mortgage points not already deducted. When selling, you can also subtract selling expenses from your proceeds, such as real estate agent commissions, advertising costs, legal fees, and escrow fees. Capital improvements (not repairs) such as adding a room, renovating a kitchen, or installing a new roof also increase your basis. Keeping detailed records of all these expenses is essential for accurate tax reporting.',
  },
  {
    question: 'Does flipping houses create different tax consequences?',
    answer: 'Yes, flipping houses can have significantly different tax consequences than long-term real estate investing. Properties held for one year or less are subject to short-term capital gains tax rates, which match your ordinary income tax rate (up to 37%). Additionally, if the IRS determines that your house-flipping activity constitutes a business rather than an investment, the profits may be taxed as ordinary income and subject to self-employment tax as well. Frequent flippers may also be classified as "dealers" by the IRS, which disqualifies them from using the 1031 exchange and other real estate investor tax benefits.',
  },
  {
    question: 'How do state taxes affect real estate capital gains?',
    answer: 'Most states impose their own capital gains tax in addition to the federal tax. State treatment varies widely. States like California tax capital gains as ordinary income, with rates up to 13.3%. States like Florida, Texas, Nevada, and Washington have no state income tax, meaning you only pay federal capital gains tax. Some states offer partial exclusions or preferential rates for certain types of property. When calculating your total tax liability on a real estate sale, always factor in both federal and state taxes, as state taxes can add substantially to your total bill depending on where you live and where the property is located.',
  },
];

export default function RealEstateCapitalGainsPage() {
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
                "name": "How is capital gains tax calculated on the sale of real estate?",
                "acceptedAnswer": { "@type": "Answer", text: "Real estate capital gains tax is calculated by subtracting your adjusted cost basis (purchase price plus closing costs and improvements) from your net sale proceeds (sale price minus commissions and selling costs). The resulting gain is taxed based on your holding period and income level." }
              },
              {
                "@type": "Question",
                "name": "What is the Section 121 primary residence exclusion?",
                "acceptedAnswer": { "@type": "Answer", text: "The Section 121 exclusion allows you to exclude up to $250,000 of gain ($500,000 for married couples) from the sale of your primary home. You must have owned and used it as your primary residence for at least two of the five years before the sale. The exclusion can be used once every two years." }
              },
              {
                "@type": "Question",
                "name": "What is a 1031 exchange and how does it defer capital gains tax?",
                "acceptedAnswer": { "@type": "Answer", text: "A 1031 exchange allows you to defer capital gains tax by reinvesting proceeds from an investment property sale into a like-kind replacement property. You must identify the replacement within 45 days and close within 180 days. A qualified intermediary must hold the proceeds between transactions." }
              },
              {
                "@type": "Question",
                "name": "What is depreciation recapture on rental property?",
                "acceptedAnswer": { "@type": "Answer", text: "Depreciation recapture requires you to pay tax on depreciation deductions previously claimed when you sell a rental property. The recaptured amount is taxed at a maximum rate of 25%, regardless of your regular capital gains rate. Any remaining gain is taxed at the standard 0%, 15%, or 20% rates." }
              },
              {
                "@type": "Question",
                "name": "Does flipping houses create different tax consequences?",
                "acceptedAnswer": { "@type": "Answer", text: "Yes. Properties held one year or less are subject to short-term rates up to 37%. If the IRS classifies your flipping as a business, profits may be taxed as ordinary income plus self-employment tax. Frequent flippers may be classified as dealers, disqualifying them from 1031 exchanges and other investor tax benefits." }
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
              { "@type": "ListItem", position: 2, name: "Real Estate Capital Gains Tax Calculator", item: "https://taxgainscalc.com/real-estate-capital-gains-tax-calculator" }
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
              <Link href="/stock-capital-gains-tax-calculator" className="text-sm text-gray-600 hover:text-emerald-600 transition">Stock Calculator</Link>
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
            Real Estate Capital Gains Tax Calculator
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            Calculate your capital gains tax on the sale of residential property, investment real estate, 
            and rental property. Free online estimator with Section 121 exclusion and 1031 exchange support.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <HomeIcon className="h-4 w-4" />
              Primary Residence
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Building2 className="h-4 w-4" />
              Investment Property
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Key className="h-4 w-4" />
              Rental Property
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

      {/* How Real Estate Capital Gains Work */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            How Real Estate Capital Gains Tax Works
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Real estate capital gains tax is a tax on the profit you earn when you sell a property for more than its cost basis. Whether you are selling your primary home, an investment property, or a rental unit, understanding how this tax applies to real estate transactions is critical for financial planning. The Internal Revenue Code treats real estate as a capital asset, meaning the same fundamental capital gains tax principles apply, but real estate has several unique provisions and exclusions that can significantly affect your tax liability.
            </p>
            <p className="mb-4">
              The basic calculation for real estate capital gains is straightforward: subtract your adjusted cost basis from your net sale proceeds. However, the adjusted cost basis for real estate is more complex than for stocks or bonds. Your cost basis includes not only the original purchase price but also closing costs from the purchase, capital improvements made during ownership, and certain other expenses. Similarly, your net proceeds account for selling expenses such as real estate agent commissions, transfer taxes, and legal fees. The difference between these two figures determines your capital gain or loss.
            </p>
            <p className="mb-4">
              The holding period of the property determines whether your gain is classified as short-term or long-term. Properties held for one year or less generate short-term capital gains, taxed at ordinary income rates up to 37%. Properties held for more than one year produce long-term capital gains, taxed at preferential rates of 0%, 15%, or 20% depending on your taxable income. Given that most real estate investments are held for multiple years, most property sales result in long-term capital gains, which benefit from substantially lower tax rates.
            </p>
            <p>
              Several special provisions in the tax code directly affect real estate capital gains. The Section 121 exclusion can shield a significant portion of gain from taxation on a primary residence. The Section 1031 exchange allows deferral of gains when reinvesting in similar property. Depreciation recapture taxes previously claimed depreciation at a separate rate of up to 25%. Understanding how these provisions interact is essential for anyone buying, selling, or managing real estate investments.
            </p>
          </div>
        </div>
      </section>

      {/* Section 121 Exclusion */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Primary Residence Exclusion (Section 121) Explained
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 mb-8">
            <p className="mb-4">
              The Section 121 exclusion is one of the most powerful tax benefits available to American homeowners. Under this provision, you can exclude up to $250,000 of capital gains from the sale of your primary residence if you are single, or up to $500,000 if you are married filing jointly. For many homeowners, this exclusion completely eliminates any federal capital gains tax liability on the sale of their home. However, specific eligibility requirements must be met to qualify for this valuable tax break.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-emerald-200 bg-emerald-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-800">
                  <CheckCircle className="h-5 w-5" />
                  Eligibility Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-1 text-emerald-600 flex-shrink-0" />
                    <span>Owned the home for at least 2 of the last 5 years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-1 text-emerald-600 flex-shrink-0" />
                    <span>Used the home as your primary residence for 2 of the last 5 years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-1 text-emerald-600 flex-shrink-0" />
                    <span>Have not used the exclusion in the past 2 years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-1 text-emerald-600 flex-shrink-0" />
                    <span>The two years of use do not need to be consecutive</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Shield className="h-5 w-5" />
                  Exclusion Amounts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <DollarSign className="h-4 w-4 mt-1 text-blue-600 flex-shrink-0" />
                    <span><strong>$250,000</strong> exclusion for single filers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="h-4 w-4 mt-1 text-blue-600 flex-shrink-0" />
                    <span><strong>$500,000</strong> exclusion for married filing jointly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="h-4 w-4 mt-1 text-blue-600 flex-shrink-0" />
                    <span>Partial exclusion available for qualifying circumstances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="h-4 w-4 mt-1 text-blue-600 flex-shrink-0" />
                    <span>Can be used once every 2 years</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              If you do not meet the full two-out-of-five-year test due to a job relocation, health problems, or certain unforeseen circumstances, you may qualify for a partial exclusion. The reduced exclusion is calculated as a fraction based on the portion of the two-year requirement you did satisfy. For example, if you lived in the home for only one of the required two years, you could potentially exclude 50% of the maximum amount ($125,000 for single filers or $250,000 for married couples).
            </p>
            <p>
              It is important to note that the Tax Cuts and Jobs Act of 2017 changed the rules for converting a rental property into a primary residence. Previously, you could rent a property and then move in for two years to qualify for the exclusion on the entire gain. Now, the exclusion only applies to gains accrued during the period the property was used as your primary residence. Depreciation taken during the rental period is still subject to recapture rules regardless of the Section 121 exclusion.
            </p>
          </div>
        </div>
      </section>

      {/* 1031 Exchange Overview */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            1031 Exchange Overview for Investment Property
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              A 1031 exchange, also known as a like-kind exchange, is one of the most powerful tax deferral strategies available to real estate investors. Under Section 1031 of the Internal Revenue Code, you can defer paying capital gains tax when you sell an investment property and reinvest the proceeds into a similar (like-kind) property. This strategy effectively allows you to preserve your entire investment capital and continue building wealth through real estate without losing a significant portion to taxes.
            </p>
            <p className="mb-4">
              To execute a valid 1031 exchange, several strict requirements must be followed. First, the property being sold and the replacement property must both be held for investment or business purposes; personal residences do not qualify. Second, you must use a qualified intermediary (QI) to handle the transaction. The QI holds the sale proceeds in a segregated account and facilitates the purchase of the replacement property. Third, you must identify the replacement property within 45 calendar days of the sale and complete the purchase within 180 calendar days.
            </p>
            <p className="mb-4">
              The property identification rules allow you to identify up to three potential replacement properties regardless of value, or any number of properties as long as their combined fair market value does not exceed 200% of the relinquished property&apos;s value. If you purchase replacement property with a fair market value less than the relinquished property, the difference is treated as taxable boot and will trigger capital gains tax on that portion.
            </p>
            <p>
              One important consideration is that the deferred gain does not disappear; it is carried forward into the basis of the replacement property. This is often referred to as a deferred gain. If you eventually sell the replacement property without completing another 1031 exchange, all previously deferred gains plus any additional appreciation will be subject to taxation at that time. Many real estate investors use serial 1031 exchanges throughout their investing careers, deferring taxes indefinitely until they ultimately pass the property to heirs, who may receive a step-up in basis to the fair market value at the time of inheritance.
            </p>
          </div>
        </div>
      </section>

      {/* Depreciation Recapture */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Depreciation Recapture on Real Estate
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 mb-8">
            <p className="mb-4">
              Depreciation is a valuable tax deduction available to owners of income-producing real estate. The IRS allows you to deduct a portion of the property&apos;s cost each year as a depreciation expense, which reduces your taxable rental income. For residential rental property, the depreciation period is 27.5 years using straight-line depreciation. For commercial property, the period is 39 years. While this deduction provides meaningful annual tax savings, it creates a tax liability when you sell the property through a mechanism known as depreciation recapture.
            </p>
            <p className="mb-4">
              When you sell a property that you have claimed depreciation on, the total amount of depreciation you deducted over the ownership period must be recaptured and taxed separately from your capital gain. Depreciation recapture is taxed at a maximum rate of 25%, which is higher than the 15% long-term capital gains rate but lower than the top ordinary income tax rate of 37%. This recapture applies regardless of whether you actually claimed the depreciation or not; the IRS requires recapture based on allowable depreciation even if you missed claiming it on prior returns.
            </p>
          </div>
          <Card className="border-amber-200 bg-amber-50 mb-8">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2 text-amber-800">
                <AlertTriangle className="h-5 w-5" />
                Depreciation Recapture Example
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-gray-700 space-y-2">
                <p><strong>Purchase price:</strong> $400,000 (land value $80,000, building value $320,000)</p>
                <p><strong>Annual depreciation:</strong> $320,000 / 27.5 years = $11,636 per year</p>
                <p><strong>Total depreciation claimed over 10 years:</strong> $116,364</p>
                <p><strong>Sale price after 10 years:</strong> $600,000</p>
                <p><strong>Adjusted basis:</strong> $400,000 - $116,364 = $283,636</p>
                <p><strong>Total capital gain:</strong> $600,000 - $283,636 = $316,364</p>
                <Separator className="my-3" />
                <p><strong>Depreciation recapture (up to 25%):</strong> $116,364 x 25% = $29,091</p>
                <p><strong>Remaining capital gain (at 15%):</strong> $200,000 x 15% = $30,000</p>
                <p className="font-bold text-emerald-800"><strong>Total estimated federal tax:</strong> $59,091</p>
              </div>
            </CardContent>
          </Card>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Even if you sell your rental property and the gain would otherwise be fully covered by the Section 121 exclusion, the depreciation recapture portion is generally still taxable. The only exception is for depreciation claimed after May 6, 1997, which may be excluded up to the Section 121 limits. Always consult a tax professional to understand the full implications of depreciation recapture on your specific property and situation.
            </p>
          </div>
        </div>
      </section>

      {/* Capital Gains Scenarios Table */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Capital Gains Scenarios for Different Property Values
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            The table below illustrates estimated federal capital gains tax for different property values assuming a 
            $100,000 cost basis, long-term holding period, and a 15% federal rate. Actual amounts vary based on your 
            specific cost basis, improvements, depreciation, and income level.
          </p>
          <Card>
            <CardHeader className="bg-emerald-600 text-white">
              <CardTitle className="text-xl">Real Estate Capital Gains Tax Scenarios</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Sale Price</th>
                      <th className="px-4 py-3 text-left font-semibold">Cost Basis</th>
                      <th className="px-4 py-3 text-left font-semibold">Capital Gain</th>
                      <th className="px-4 py-3 text-left font-semibold">15% Tax</th>
                      <th className="px-4 py-3 text-left font-semibold">20% Tax</th>
                      <th className="px-4 py-3 text-left font-semibold">After Section 121 (Single)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3">$250,000</td>
                      <td className="px-4 py-3">$150,000</td>
                      <td className="px-4 py-3 font-medium text-emerald-600">$100,000</td>
                      <td className="px-4 py-3">$15,000</td>
                      <td className="px-4 py-3">$20,000</td>
                      <td className="px-4 py-3 text-green-600">$0</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3">$400,000</td>
                      <td className="px-4 py-3">$200,000</td>
                      <td className="px-4 py-3 font-medium text-emerald-600">$200,000</td>
                      <td className="px-4 py-3">$30,000</td>
                      <td className="px-4 py-3">$40,000</td>
                      <td className="px-4 py-3">$0</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">$500,000</td>
                      <td className="px-4 py-3">$250,000</td>
                      <td className="px-4 py-3 font-medium text-emerald-600">$250,000</td>
                      <td className="px-4 py-3">$37,500</td>
                      <td className="px-4 py-3">$50,000</td>
                      <td className="px-4 py-3 text-green-600">$0</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3">$750,000</td>
                      <td className="px-4 py-3">$300,000</td>
                      <td className="px-4 py-3 font-medium text-emerald-600">$450,000</td>
                      <td className="px-4 py-3">$67,500</td>
                      <td className="px-4 py-3">$90,000</td>
                      <td className="px-4 py-3">$30,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">$1,000,000</td>
                      <td className="px-4 py-3">$400,000</td>
                      <td className="px-4 py-3 font-medium text-emerald-600">$600,000</td>
                      <td className="px-4 py-3">$90,000</td>
                      <td className="px-4 py-3">$120,000</td>
                      <td className="px-4 py-3">$52,500</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3">$1,500,000</td>
                      <td className="px-4 py-3">$500,000</td>
                      <td className="px-4 py-3 font-medium text-emerald-600">$1,000,000</td>
                      <td className="px-4 py-3">$150,000</td>
                      <td className="px-4 py-3">$200,000</td>
                      <td className="px-4 py-3">$112,500</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">$2,000,000</td>
                      <td className="px-4 py-3">$600,000</td>
                      <td className="px-4 py-3 font-medium text-emerald-600">$1,400,000</td>
                      <td className="px-4 py-3">$210,000</td>
                      <td className="px-4 py-3">$280,000</td>
                      <td className="px-4 py-3">$172,500</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">$3,000,000</td>
                      <td className="px-4 py-3">$800,000</td>
                      <td className="px-4 py-3 font-medium text-emerald-600">$2,200,000</td>
                      <td className="px-4 py-3">$330,000</td>
                      <td className="px-4 py-3">$440,000</td>
                      <td className="px-4 py-3">$292,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          <p className="text-xs text-gray-500 mt-4 text-center">
            * After Section 121 column assumes single filer with $250,000 exclusion applied. Married couples can exclude $500,000. 
            Actual tax varies based on income level, depreciation recapture, state taxes, and other factors.
          </p>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Step-by-Step Guide: Calculate Your Real Estate Capital Gains Tax
          </h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">Step 1: Determine Your Original Cost Basis</h3>
                <p className="text-gray-700">
                  Start with the original purchase price of the property. Add closing costs from the purchase such as title insurance, legal fees, recording fees, survey costs, and transfer taxes. Include any mortgage points not previously deducted. This total represents your starting cost basis before improvements.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">Step 2: Add Capital Improvements</h3>
                <p className="text-gray-700">
                  Add the cost of all capital improvements made during your ownership. Capital improvements are permanent changes that increase the property&apos;s value, such as adding a room, finishing a basement, installing a new roof, replacing HVAC systems, or landscaping. Routine repairs and maintenance cannot be added to your basis. Keep receipts and records of all improvement projects.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">Step 3: Subtract Depreciation (Investment Property)</h3>
                <p className="text-gray-700">
                  If the property was used as a rental or for business purposes, subtract any depreciation you claimed (or were entitled to claim) on your tax returns. This reduces your adjusted basis and increases your potential gain. Even if you did not claim depreciation, the IRS requires you to reduce your basis by the allowable amount.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">Step 4: Calculate Net Sale Proceeds</h3>
                <p className="text-gray-700">
                  Subtract all selling expenses from the gross sale price. This includes real estate agent commissions (typically 5-6% of the sale price), transfer taxes, attorney fees, escrow fees, staging costs, and any other costs directly related to the sale. The remaining amount is your net sale proceeds.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">Step 5: Calculate Your Capital Gain</h3>
                <p className="text-gray-700">
                  Subtract your adjusted cost basis from your net sale proceeds. The result is your total capital gain. Next, separate the depreciation recapture portion (taxed at up to 25%) from the remaining gain (taxed at 0%, 15%, or 20%). If the property is your primary residence, apply the Section 121 exclusion to see how much of the remaining gain can be excluded from taxation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">Step 6: Apply the Appropriate Tax Rate and Calculate Total Tax</h3>
                <p className="text-gray-700">
                  Apply the depreciation recapture rate (up to 25%) to the recapture amount and the long-term capital gains rate (0%, 15%, or 20%) to the remaining gain based on your taxable income and filing status. Add the 3.8% NIIT if your income exceeds the applicable threshold. For the most accurate calculation, use our <Link href="/" className="text-emerald-600 underline hover:text-emerald-800">free capital gains tax calculator</Link>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tax Strategies */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Strategies to Reduce Real Estate Capital Gains Tax
          </h2>
          <div className="grid gap-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg text-emerald-800 mb-2">1. Maximize Your Cost Basis with Improvements</h3>
                <p className="text-gray-700">
                  Keep detailed records of all capital improvements made to the property. Every dollar spent on qualified improvements increases your basis and reduces your taxable gain. This includes additions, remodels, new systems, and permanent landscaping. Save receipts, contracts, and before-and-after photos to substantiate improvement costs if audited.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg text-emerald-800 mb-2">2. Consider a 1031 Exchange for Investment Property</h3>
                <p className="text-gray-700">
                  If you are selling an investment property and plan to reinvest, a 1031 exchange allows you to defer all capital gains tax by purchasing a like-kind replacement property. This preserves your full investment capital and enables continued portfolio growth. Work with a qualified intermediary and adhere to the 45-day identification and 180-day closing timelines.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg text-emerald-800 mb-2">3. Live in the Property Before Selling</h3>
                <p className="text-gray-700">
                  Converting an investment or rental property into your primary residence for at least two years before selling can qualify you for the Section 121 exclusion on gains accrued during your ownership period. Note that under current tax law, the exclusion only applies to gains during the period you actually lived in the home, not the rental period.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg text-emerald-800 mb-2">4. Offset Gains with Capital Losses</h3>
                <p className="text-gray-700">
                  If you have capital losses from other investments such as stocks, bonds, or mutual funds, you can use these losses to offset your real estate capital gains dollar-for-dollar. If your losses exceed your gains, you can deduct up to $3,000 against ordinary income and carry forward any remaining losses indefinitely.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg text-emerald-800 mb-2">5. Donate Appreciated Property to Charity</h3>
                <p className="text-gray-700">
                  Donating real estate that has significantly appreciated to a qualified charity allows you to avoid capital gains tax entirely while claiming a charitable deduction for the full fair market value of the property. This strategy is particularly effective for properties with substantial unrealized gains and can provide a significant tax benefit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Real Estate Capital Gains Tax FAQ
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
            Calculate Your Real Estate Capital Gains Tax Now
          </h2>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Use our free online calculator to get an accurate estimate of your capital gains tax liability 
            on any property sale. Includes 2025-2026 tax rates, NIIT, and state tax considerations.
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
