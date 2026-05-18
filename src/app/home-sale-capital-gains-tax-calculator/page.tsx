import { Metadata } from 'next';
import Link from 'next/link';
import SiteLayout from '@/components/SiteLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Calculator,
  Home as HomeIcon,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  DollarSign,
  Users,
  Shield,
  Info,
  Heart,
  FileText,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Home Sale Capital Gains Tax Calculator | Section 121 Exclusion',
  description:
    'Calculate capital gains tax on your home sale. Learn about the $250K/$500K Section 121 exclusion, ownership tests, and tax strategies for selling your house.',
  alternates: {
    canonical: 'https://taxgainscalc.com/home-sale-capital-gains-tax-calculator',
  },
  openGraph: {
    title: 'Home Sale Capital Gains Tax Calculator | Section 121 Exclusion',
    description:
      'Free calculator for home sale capital gains tax. Understand Section 121 exclusion rules and estimate your tax liability when selling your house.',
    url: 'https://taxgainscalc.com/home-sale-capital-gains-tax-calculator',
    type: 'article',
  },
};

const faqs = [
  {
    question: 'What is the Section 121 exclusion for home sales?',
    answer:
      'The Section 121 exclusion, also called the primary residence exclusion, allows you to exclude up to $250,000 of capital gains from the sale of your primary residence ($500,000 for married couples filing jointly). To qualify, you must have owned the home and used it as your primary residence for at least two of the five years immediately preceding the sale. The exclusion can only be used once every two years. This is one of the most significant tax benefits available to American homeowners and can eliminate capital gains tax entirely on many home sales.',
  },
  {
    question: 'Do I have to pay capital gains tax when I sell my house?',
    answer:
      'Not necessarily. Most homeowners do not owe capital gains tax when selling their primary residence because of the Section 121 exclusion. If your gain is $250,000 or less ($500,000 for married couples), and you meet the ownership and use tests, the entire gain can be excluded from taxation. You only owe capital gains tax on the amount that exceeds the exclusion threshold. For example, if you are single with a $300,000 gain, you can exclude $250,000 and would only owe tax on $50,000.',
  },
  {
    question: 'How is the gain calculated on a home sale?',
    answer:
      'Your capital gain on a home sale is calculated by subtracting your adjusted cost basis from the net sale price. Your cost basis typically includes the original purchase price plus closing costs (title insurance, legal fees), capital improvements (additions, renovations, a new roof), and certain selling costs. The net sale price is the selling price minus real estate agent commissions and other selling expenses. For example, if you bought a home for $300,000, made $50,000 in improvements, and sold it for $500,000 with $30,000 in selling costs, your gain would be $500,000 - $30,000 - $300,000 - $50,000 = $120,000.',
  },
  {
    question: 'Can I use the exclusion more than once?',
    answer:
      'Yes, you can use the Section 121 exclusion multiple times over your lifetime, but you can only use it once every two years. The two-year waiting period runs from the date of your previous sale to the date of the new sale. However, if you fail to meet the two-year requirement due to a change in employment, health reasons, or other unforeseen circumstances, you may qualify for a partial exclusion. There is no limit on the total number of times you can claim the exclusion over your lifetime as long as you meet the requirements each time.',
  },
  {
    question: 'What happens if I sell my home for a loss?',
    answer:
      'Losses on the sale of your personal residence are not tax-deductible. The IRS does not allow you to claim a capital loss on the sale of a home that you used as your primary residence. This is different from investment property, where losses can offset gains and up to $3,000 of ordinary income. If you sell your home for less than your cost basis, you simply do not report any capital gain or loss on your tax return for the sale.',
  },
  {
    question: 'How does divorce affect the home sale exclusion?',
    answer:
      'In a divorce, the home sale exclusion rules have special provisions. If one spouse transfers the home to the other as part of a divorce settlement, the receiving spouse can include the other spouse\'s period of ownership and use when qualifying for the exclusion. This means if one spouse lived in the home but the other was on the title, both periods count. For sales within two years of the divorce, the exclusion can still apply even if the two-year frequency test is not met. Divorced couples may each be eligible for up to $250,000 in separate exclusions on the sale of the marital home.',
  },
  {
    question: 'Do I have to report the sale of my home to the IRS even if no tax is owed?',
    answer:
      'Yes, if the sale proceeds exceed $250,000 ($500,000 for married filing jointly), you must report the sale on your tax return using IRS Form 8949 and Schedule D, even if the entire gain is excluded under Section 121. You report the sale and then claim the exclusion. If your proceeds are under these thresholds and you meet the ownership and use tests, you generally do not need to report the sale. Your closing or settlement statement (Form 1099-S) will contain the information you need for reporting.',
  },
];

export default function HomeSaleCapitalGainsTaxCalculatorPage() {
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
              { '@type': 'ListItem', position: 2, name: 'Home Sale Capital Gains Tax Calculator', item: 'https://taxgainscalc.com/home-sale-capital-gains-tax-calculator' },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Updated for 2025-2026 Tax Year</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Home Sale Capital Gains Tax Calculator</h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            Calculate your capital gains tax when selling your home. Learn about the Section 121 exclusion, $250K/$500K exemption, ownership tests, and strategies to minimize your tax.
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
        {/* Section 121 Overview */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Understanding the Section 121 Primary Residence Exclusion
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Selling a home is one of the largest financial transactions most people will ever undertake, and understanding the tax implications is critical for maximizing your proceeds. The good news is that the IRS provides a generous exclusion under Internal Revenue Code Section 121 that allows most homeowners to exclude a significant portion—or all—of their capital gains from taxation when selling their primary residence.
            </p>
            <p>
              Under Section 121, eligible homeowners can exclude up to <strong>$250,000</strong> of capital gains if filing as single, or up to <strong>$500,000</strong> if married filing jointly. This exclusion can be used once every two years and has helped millions of Americans sell their homes without owing any capital gains tax. To qualify, you must meet both the ownership test and the use test described below.
            </p>
          </div>

          {/* Exclusion Quick Facts */}
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <Card className="border-emerald-200 bg-emerald-50 text-center">
              <CardContent className="pt-6 pb-6">
                <div className="text-3xl font-bold text-emerald-700 mb-1">$250,000</div>
                <p className="text-sm text-gray-600">Single filer exclusion</p>
              </CardContent>
            </Card>
            <Card className="border-emerald-200 bg-emerald-50 text-center">
              <CardContent className="pt-6 pb-6">
                <div className="text-3xl font-bold text-emerald-700 mb-1">$500,000</div>
                <p className="text-sm text-gray-600">Married filing jointly</p>
              </CardContent>
            </Card>
            <Card className="border-emerald-200 bg-emerald-50 text-center">
              <CardContent className="pt-6 pb-6">
                <div className="text-3xl font-bold text-emerald-700 mb-1">2 of 5</div>
                <p className="text-sm text-gray-600">Years ownership &amp; use required</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Qualification Tests */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Qualifying for the Home Sale Exclusion
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <FileText className="h-5 w-5" />
                  The Ownership Test
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm space-y-2">
                <p>
                  You must have owned the home for at least two years during the five-year period ending on the date of the sale. The two years do not need to be consecutive. The five-year period is measured backward from the sale date. If you owned the home for exactly two years, you meet this requirement.
                </p>
                <p>
                  <strong>Example:</strong> If you sold your home on June 1, 2025, you must have owned it for at least two years between June 2, 2020, and June 1, 2025. Even if you lived in the home for ten years, you only need two years of ownership during this five-year lookback window.
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <HomeIcon className="h-5 w-5" />
                  The Use Test
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm space-y-2">
                <p>
                  You must have used the home as your primary residence for at least two years during the same five-year period. Primary residence means the place where you live most of the time. Vacations and temporary absences (up to one year) generally count toward the use requirement.
                </p>
                <p>
                  <strong>Important:</strong> The ownership and use periods do not need to overlap, but both must occur within the same five-year window. You cannot combine periods from different five-year windows. However, the two years of ownership and two years of use can be satisfied by the same two years or different years within the five-year period.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Calculation Examples */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Home Sale Tax Calculation Examples
          </h2>
          <p className="text-gray-600 mb-6">
            The following examples show how the Section 121 exclusion applies to different home values and scenarios. All examples assume the homeowner meets the ownership and use tests.
          </p>

          <div className="space-y-6">
            {/* Example 1: $300k home */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-emerald-800">Example 1: $300,000 Home Sold for $500,000 (Single Filer)</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b bg-gray-50">
                        <td className="px-4 py-2.5 text-gray-600">Purchase price</td>
                        <td className="px-4 py-2.5 text-right text-gray-800">$300,000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2.5 text-gray-600">Sale price</td>
                        <td className="px-4 py-2.5 text-right text-gray-800">$500,000</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="px-4 py-2.5 text-gray-600">Selling costs (commissions, closing)</td>
                        <td className="px-4 py-2.5 text-right text-gray-800">-$30,000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2.5 text-gray-600">Improvements (new roof, kitchen remodel)</td>
                        <td className="px-4 py-2.5 text-right text-gray-800">-$20,000</td>
                      </tr>
                      <tr className="border-b bg-emerald-50">
                        <td className="px-4 py-2.5 font-semibold text-emerald-800">Capital gain</td>
                        <td className="px-4 py-2.5 text-right font-semibold text-emerald-800">$150,000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2.5 text-gray-600">Section 121 exclusion (single)</td>
                        <td className="px-4 py-2.5 text-right text-emerald-600">-$150,000</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-2.5 font-bold text-gray-900">Taxable gain</td>
                        <td className="px-4 py-2.5 text-right font-bold text-emerald-600">$0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500 mt-3 px-4 pb-4">
                  The entire $150,000 gain is excluded. No federal capital gains tax is owed on this sale.
                </p>
              </CardContent>
            </Card>

            {/* Example 2: $500k home */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-emerald-800">Example 2: $500,000 Home Sold for $1,000,000 (Married Filing Jointly)</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b bg-gray-50">
                        <td className="px-4 py-2.5 text-gray-600">Purchase price</td>
                        <td className="px-4 py-2.5 text-right text-gray-800">$500,000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2.5 text-gray-600">Sale price</td>
                        <td className="px-4 py-2.5 text-right text-gray-800">$1,000,000</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="px-4 py-2.5 text-gray-600">Selling costs (commissions, closing)</td>
                        <td className="px-4 py-2.5 text-right text-gray-800">-$60,000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2.5 text-gray-600">Improvements (addition, landscaping)</td>
                        <td className="px-4 py-2.5 text-right text-gray-800">-$40,000</td>
                      </tr>
                      <tr className="border-b bg-emerald-50">
                        <td className="px-4 py-2.5 font-semibold text-emerald-800">Capital gain</td>
                        <td className="px-4 py-2.5 text-right font-semibold text-emerald-800">$400,000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2.5 text-gray-600">Section 121 exclusion (MFJ)</td>
                        <td className="px-4 py-2.5 text-right text-emerald-600">-$400,000</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-2.5 font-bold text-gray-900">Taxable gain</td>
                        <td className="px-4 py-2.5 text-right font-bold text-emerald-600">$0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500 mt-3 px-4 pb-4">
                  The full $500,000 MFJ exclusion covers the $400,000 gain. No capital gains tax owed. The improvements were critical to keeping the gain within the exclusion limit.
                </p>
              </CardContent>
            </Card>

            {/* Example 3: $1M home with excess gain */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-emerald-800">Example 3: $300,000 Home Sold for $1,200,000 (Single Filer)</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b bg-gray-50">
                        <td className="px-4 py-2.5 text-gray-600">Purchase price</td>
                        <td className="px-4 py-2.5 text-right text-gray-800">$300,000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2.5 text-gray-600">Sale price</td>
                        <td className="px-4 py-2.5 text-right text-gray-800">$1,200,000</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="px-4 py-2.5 text-gray-600">Selling costs</td>
                        <td className="px-4 py-2.5 text-right text-gray-800">-$72,000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2.5 text-gray-600">Improvements</td>
                        <td className="px-4 py-2.5 text-right text-gray-800">-$28,000</td>
                      </tr>
                      <tr className="border-b bg-emerald-50">
                        <td className="px-4 py-2.5 font-semibold text-emerald-800">Capital gain</td>
                        <td className="px-4 py-2.5 text-right font-semibold text-emerald-800">$800,000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2.5 text-gray-600">Section 121 exclusion (single)</td>
                        <td className="px-4 py-2.5 text-right text-red-600">-$250,000</td>
                      </tr>
                      <tr className="border-b bg-red-50">
                        <td className="px-4 py-2.5 font-bold text-gray-900">Taxable gain</td>
                        <td className="px-4 py-2.5 text-right font-bold text-red-600">$550,000</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-2.5 text-gray-600">Est. federal tax (15%)</td>
                        <td className="px-4 py-2.5 text-right text-gray-800">~$82,500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500 mt-3 px-4 pb-4">
                  The gain exceeds the $250,000 single exclusion by $550,000. Federal long-term capital gains tax of approximately $82,500 applies (at 15%). State taxes may also apply. The total tax depends on your income level and state of residence.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Partial Exclusion */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Partial Exclusion: When You Do Not Fully Qualify
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              If you do not meet the full two-year ownership and use requirements, you may still qualify for a partial exclusion under certain circumstances. The IRS recognizes that life events can make it impractical to meet the standard requirements and provides relief in specific situations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-800 mb-2 flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Health-Related Reasons
                </h3>
                <p className="text-gray-600 text-sm">
                  If you sell your home due to a qualifying health reason—such as a diagnosis of a disease, seeking medical care, or accommodating a disability—you may qualify for a partial exclusion. The exclusion amount is reduced proportionally based on the fraction of the two-year requirement you met.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-800 mb-2 flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Change in Employment
                </h3>
                <p className="text-gray-600 text-sm">
                  A job relocation that makes it impractical to continue living in your home can qualify you for a partial exclusion. This includes starting a new job, being transferred by your employer, or a change in job location that is at least 50 miles farther from your home than your old job location.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-800 mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Unforeseen Circumstances
                </h3>
                <p className="text-gray-600 text-sm">
                  The IRS also allows partial exclusions for unforeseen circumstances such as natural disasters, divorce or legal separation, death of a spouse, multiple births from the same pregnancy, and damage to the home from a casualty or act of war. The exclusion is prorated based on how long you lived in the home relative to the two-year requirement.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-800 mb-2 flex items-center gap-2">
                  <Calculator className="h-4 w-4" />
                  How the Proration Works
                </h3>
                <p className="text-gray-600 text-sm">
                  The partial exclusion is calculated by multiplying the maximum exclusion ($250,000 or $500,000) by the fraction of the two-year period you qualified for. For example, if you lived in the home for one year out of the required two, you could exclude 50% ($125,000 single, $250,000 MFJ) of your gain. The formula is: (months qualified ÷ 24 months) × maximum exclusion.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Marriage and Divorce */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Marriage, Divorce, and Inherited Homes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-purple-800">
                  <Users className="h-5 w-5" />
                  Marriage Considerations
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm space-y-2">
                <p>
                  To qualify for the $500,000 married filing jointly exclusion, both spouses must meet the ownership test (at least one must own the home for two years) and both must meet the use test (both must have lived in the home as their primary residence for two years). If only one spouse meets the use test, the exclusion is limited to $250,000.
                </p>
                <p>
                  If you marry someone who owned a home before the marriage and then you both live in it for two years, you can both qualify for the full $500,000 exclusion even though only one spouse was the original owner. The key is that both spouses must meet the two-year use test.
                </p>
              </CardContent>
            </Card>
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-purple-800">
                  <Heart className="h-5 w-5" />
                  Divorce Considerations
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm space-y-2">
                <p>
                  During a divorce, special rules apply. The spouse who retains the home can count the other spouse&apos;s periods of ownership and use toward the exclusion requirements. This means if you received the home in a divorce decree, you can include the years your ex-spouse owned and lived in the home when calculating your eligibility.
                </p>
                <p>
                  If the home is sold within two years of the divorce, the two-year frequency test (limiting the exclusion to once every two years) may be waived for one spouse. Each spouse may also be eligible for up to $250,000 in separate exclusions under certain circumstances.
                </p>
              </CardContent>
            </Card>
            <Card className="border-purple-200 md:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-purple-800">
                  <Shield className="h-5 w-5" />
                  Inherited Home Sales
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm space-y-2">
                <p>
                  When you inherit a home, you generally receive a stepped-up cost basis equal to the fair market value of the home on the date of the previous owner&apos;s death. This can significantly reduce or eliminate capital gains. For example, if your parent bought a home for $100,000 and it was worth $500,000 when you inherited it, your cost basis becomes $500,000. If you sell for $500,000, there is no gain.
                </p>
                <p>
                  However, inherited homes do not qualify for the Section 121 exclusion based on the deceased owner&apos;s residence period. To claim the exclusion on an inherited home, you must move in and establish it as your primary residence for at least two years before selling. The inherited cost basis (stepped-up value) plus your two-year use period can result in a very tax-efficient sale.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tips to Reduce Tax */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Strategies to Reduce Capital Gains Tax on Your Home Sale
          </h2>
          <div className="grid gap-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-800 mb-2">1. Keep Records of All Improvements</h3>
                <p className="text-gray-600 text-sm">
                  Every capital improvement you make to your home increases your cost basis and reduces your taxable gain. Keep receipts and documentation for renovations, additions, a new roof, HVAC systems, landscaping, and other improvements. Routine maintenance and repairs do not count, but major upgrades that add value or extend the life of your home do. Over decades of ownership, improvements can add up to tens of thousands of dollars in additional basis.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-800 mb-2">2. Time Your Sale Strategically</h3>
                <p className="text-gray-600 text-sm">
                  If you are approaching the two-year ownership or use threshold, wait until you qualify before selling. The difference between a full and partial exclusion can be hundreds of thousands of dollars in tax savings. If you need to sell before meeting the requirements, consider whether any qualifying exceptions (health, job relocation, unforeseen circumstances) apply to your situation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-800 mb-2">3. Consider Converting to a Rental Before Selling</h3>
                <p className="text-gray-600 text-sm">
                  If you have a large gain that exceeds the Section 121 exclusion, consider converting the home to a rental property. After renting for at least three years, you could potentially use a 1031 exchange to defer all capital gains tax by reinvesting in another investment property. However, you would need to meet specific requirements for both the exclusion and the exchange, so professional advice is essential.
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
                Calculate Your Home Sale Capital Gains Tax
              </h2>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Use our free calculator to estimate the federal capital gains tax on your home sale. Enter your sale price, purchase price, and holding period for instant results.
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
            Frequently Asked Questions About Home Sale Capital Gains Tax
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
                  This page provides general educational information about capital gains tax on home sales for the 2025-2026 tax year. Tax laws are complex and subject to change. Your specific situation may involve additional considerations. We strongly recommend consulting a qualified tax professional or CPA for personalized advice regarding your home sale. This content does not constitute legal or tax advice.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SiteLayout>
  );
}
