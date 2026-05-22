import { Metadata } from 'next';
import Link from 'next/link';
import SiteLayout from '@/components/SiteLayout';
import RelatedCalculators from '@/components/RelatedCalculators';
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

        {/* Section 121 Complete Eligibility Guide */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Section 121 Exclusion: Complete Eligibility Guide
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4 mb-6">
            <p>
              The Section 121 exclusion is one of the most powerful tax benefits available to American homeowners, but qualifying requires careful attention to specific rules and timing. Below is a comprehensive guide to every aspect of eligibility, including the ownership test, use test, frequency limitations, and important exceptions that may apply in special circumstances.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-blue-800">
                  <FileText className="h-5 w-5" />
                  Ownership Test: Detailed Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm space-y-3">
                <p>
                  To satisfy the ownership test, you must have owned the home for at least 24 months (two full years) during the 60-month (five-year) period that ends on the date of the sale. The ownership period does not need to be continuous or consecutive. You could have owned the home for 12 months, rented it out for a year, then returned and owned it for another 12 months within the five-year window and still meet the requirement.
                </p>
                <p>
                  <strong>Counting ownership:</strong> The ownership period begins on the date you acquire the home (closing date for a purchase, date of inheritance, or date of gift) and ends on the date of sale. If you owned the home with your spouse, the period either of you owned it counts. For inherited homes, you are considered to have owned the home for the entire period the deceased person owned it, plus any additional time you owned it before selling.
                </p>
                <p>
                  <strong>Important timing note:</strong> The five-year lookback period is measured backward from the sale date, not forward. If you sell on June 15, 2025, the five-year period runs from June 16, 2020, to June 15, 2025. You must have at least 24 months of ownership within this specific window. Ownership periods outside this window do not count, even if you owned the home for decades before.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-blue-800">
                  <HomeIcon className="h-5 w-5" />
                  Use Test: Detailed Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm space-y-3">
                <p>
                  The use test requires that the home served as your primary residence for at least 24 months during the same five-year period ending on the sale date. Primary residence means the home where you live most of the time. The IRS looks at factors such as your mailing address, voter registration, driver&apos;s license address, and the location of your bank accounts to determine your primary residence.
                </p>
                <p>
                  <strong>Temporary absences:</strong> Short temporary absences for vacation, medical care, education, or sabbatical generally count toward the use requirement, provided you intend to return and the absence does not exceed one year. If you are temporarily assigned to a different location for work, the home can still be considered your primary residence during the absence. However, extended absences beyond one year may break the continuity of use.
                </p>
                <p>
                  <strong>Non-overlap allowed:</strong> The ownership and use periods do not need to overlap. You could own the home as a rental property for the first three years, then move in and live there for two years before selling. As long as both the 24-month ownership requirement and the 24-month use requirement are met within the same five-year window, you qualify for the full exclusion.
                </p>
                <p>
                  <strong>Multiple homes:</strong> You can only have one primary residence at a time. If you own two homes and split your time between them, the IRS will determine which is your primary residence based on the factors mentioned above. Only the home that qualifies as your primary residence is eligible for the Section 121 exclusion.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-blue-800">
                  <Shield className="h-5 w-5" />
                  Timing Rules and Frequency Limitations
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm space-y-3">
                <p>
                  <strong>Two-year frequency rule:</strong> The Section 121 exclusion can only be used once every two years. This means that if you sold a home and claimed the exclusion, you cannot claim it again on another sale within 24 months of the prior sale. The two-year clock starts on the date of the earlier sale and runs through the date of the new sale. Violating this rule means you cannot claim any exclusion on the second sale.
                </p>
                <p>
                  <strong>No lifetime limit:</strong> Unlike some tax benefits, there is no limit on the total number of times you can claim the Section 121 exclusion over your lifetime. A homeowner who buys, lives in, and sells a home every three years could claim the exclusion repeatedly over several decades, excluding up to $250,000 (or $500,000 if married) of gain on each sale.
                </p>
                <p>
                  <strong>Exceptions to the two-year rule:</strong> The IRS provides exceptions for sales that occur less than two years apart due to a change in place of employment, health reasons, or unforeseen circumstances. In these cases, you may qualify for a partial exclusion even if you used the exclusion within the prior two years. The partial exclusion is prorated based on the fraction of the two-year requirement you met.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-amber-800">
                  <AlertTriangle className="h-5 w-5" />
                  Exceptions and Special Circumstances
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm space-y-3">
                <p>
                  <strong>Service members and military:</strong> Members of the Armed Forces, Foreign Service, and Peace Corps may suspend the five-year use requirement for up to 10 years of qualified official extended duty. This means military families who are required to move frequently can still qualify for the full exclusion even if they did not live in the home for the full two-year period, as long as the move was due to military orders.
                </p>
                <p>
                  <strong>Death of spouse:</strong> If a spouse dies, the surviving spouse can use the deceased spouse&apos;s period of ownership and use when calculating eligibility. If the surviving spouse sells within two years of the death and has not remarried, they may qualify for the $500,000 exclusion if both spouses would have met the requirements. After the two-year window following the spouse&apos;s death, the surviving spouse can only claim the $250,000 single-filer exclusion.
                </p>
                <p>
                  <strong>Divorce proceedings:</strong> If a home is transferred to one spouse as part of a divorce decree, the receiving spouse can count the other spouse&apos;s ownership and use periods toward meeting the requirements. This is particularly important when one spouse was not on the title but lived in the home for the required period. Additionally, the two-year frequency rule may be waived for one spouse if the sale occurs within two years of the divorce.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Capital Gains on Second Homes and Vacation Properties */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Capital Gains on Second Homes and Vacation Properties
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4 mb-6">
            <p>
              One of the most common misconceptions among homeowners is that the Section 121 exclusion applies to all residential properties. In reality, the exclusion only applies to your primary residence. Second homes, vacation properties, beach houses, mountain cabins, and investment properties do not qualify for the Section 121 exclusion unless you convert them to your primary residence and meet the ownership and use tests before selling. Understanding the tax treatment of second homes is essential for property owners who are considering selling.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-red-800">
                  <AlertTriangle className="h-5 w-5" />
                  No Section 121 Exclusion for Second Homes
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm space-y-3">
                <p>
                  A second home or vacation property that is not your primary residence does not qualify for the $250,000 or $500,000 Section 121 exclusion. The full amount of your capital gain is subject to long-term capital gains tax rates of 0%, 15%, or 20%, plus the 3.8% NIIT if applicable. For example, if you purchased a vacation condo for $200,000 and sell it for $450,000 after ten years, your $250,000 gain would be fully taxable. At the 15% rate, you would owe approximately $37,500 in federal capital gains tax, plus any applicable state tax.
                </p>
                <p>
                  <strong>Converting to primary residence:</strong> If you move into your second home and establish it as your primary residence for at least two years, you can then qualify for the Section 121 exclusion on a future sale. However, since the Tax Cuts and Jobs Act of 2017, if the home was used as a non-primary residence (such as a rental or vacation home) at any time during the five years before the sale, a portion of the gain may not be eligible for the exclusion. The ineligible portion is calculated based on the ratio of non-qualified use time to the total ownership period after 2008. This anti-abuse rule prevents investors from converting rental properties into primary residences solely to avoid tax on accumulated appreciation.
                </p>
                <p>
                  <strong>Impact of non-qualified use:</strong> The non-qualified use rules apply to periods after December 31, 2008, during which the property was not used as your primary residence. The gain attributable to non-qualified use is calculated by multiplying the total gain by a fraction: (non-qualified use days) / (total ownership days after 2008). This means the longer you owned the property as a vacation home before converting it, the larger the portion of gain that remains taxable even after you meet the two-year use requirement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-amber-800">
                  <DollarSign className="h-5 w-5" />
                  Depreciation Recapture on Former Rental Properties
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm space-y-3">
                <p>
                  If your second home was ever used as a rental property, an important and often overlooked tax consequence applies: depreciation recapture. When you claim depreciation deductions on a rental property (which the IRS requires you to do for rental properties), you must recapture that depreciation when you sell, regardless of whether you later convert the property to a primary residence and qualify for the Section 121 exclusion.
                </p>
                <p>
                  Depreciation recapture is taxed at a maximum rate of 25%, which is separate from and in addition to the capital gains tax on any remaining gain. The amount of recapture is limited to the total depreciation you claimed (or were allowed to claim) during the period the property was used as a rental. For example, if you claimed $60,000 in depreciation over 10 years of renting a vacation home and then sell it after converting it to your primary residence, you would owe up to $15,000 in depreciation recapture tax (25% of $60,000), plus any capital gains tax on remaining gains.
                </p>
                <p>
                  <strong>Even if you did not claim it:</strong> The IRS applies the concept of &quot;allowed or allowable&quot; depreciation. This means that even if you forgot to claim depreciation deductions on your tax returns, the IRS assumes you could have claimed it and will still assess depreciation recapture based on what you could have deducted. This is why it is critical to properly track and claim depreciation deductions while the property is rented.
                </p>
                <p>
                  <strong>Order of taxation:</strong> When you sell a property that was formerly a rental, the IRS applies the following order: first, depreciation recapture is taxed at up to 25%; then, any remaining gain up to the Section 121 exclusion amount is excluded from tax; finally, any excess gain beyond the exclusion is taxed at long-term capital gains rates (0%, 15%, or 20%). This layered approach means you may owe tax even if the total gain is less than the exclusion amount, because depreciation recapture is always taxable.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-emerald-800">
                  <Info className="h-5 w-5" />
                  1031 Exchange for Investment Properties
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm space-y-3">
                <p>
                  For second homes that are held primarily as investment properties, a 1031 exchange (also called a like-kind exchange) may provide an alternative path to defer capital gains tax. Under Section 1031, you can defer all capital gains tax by reinvesting the proceeds from the sale into a similar investment property within strict time limits: you must identify a replacement property within 45 days and close on it within 180 days.
                </p>
                <p>
                  <strong>Important limitation:</strong> The Tax Cuts and Jobs Act of 2017 eliminated 1031 exchanges for personal property, but they remain available for real estate held for investment or business use. A true vacation home may qualify if it is held primarily for investment purposes and generates rental income. However, the IRS has specific requirements: the property must be held for productive use in a trade or business or for investment, and personal use must be limited. Excessive personal use of the property can disqualify it from 1031 exchange treatment.
                </p>
                <p>
                  <strong>Combining strategies:</strong> Sophisticated real estate investors sometimes combine these strategies. For example, you could use a 1031 exchange to acquire a vacation property, hold it as a rental for several years, convert it to your primary residence, live in it for at least two years, and then sell with a reduced tax burden. However, the non-qualified use rules and depreciation recapture described above would still apply to periods when the property was used as a rental.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Home Sale Tax Planning Checklist */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Home Sale Tax Planning Checklist
          </h2>
          <p className="text-gray-600 mb-8">
            Follow this comprehensive 10-step checklist to minimize your capital gains tax and ensure a smooth tax filing when selling your home.
          </p>

          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-emerald-800 mb-2">Calculate Your Adjusted Cost Basis</h3>
                    <p className="text-gray-600 text-sm">
                      Your cost basis is the foundation of your gain calculation. Start with the original purchase price and add closing costs from when you bought the home (title insurance, legal fees, transfer taxes), capital improvements you made over the years (new roof, kitchen renovation, bathroom remodel, additions, landscaping, HVAC replacement), and any special assessments paid for local improvements. Do not include routine maintenance and repairs such as painting, fixing leaks, or replacing broken windows. Keep all receipts, contracts, and invoices organized in a dedicated file. Over 20 years of ownership, improvements can easily add $50,000 to $100,000 or more to your basis, directly reducing your taxable gain by the same amount.
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
                    <h3 className="font-semibold text-emerald-800 mb-2">Verify the Two-Year Ownership and Use Tests</h3>
                    <p className="text-gray-600 text-sm">
                      Count the exact number of months you have owned and lived in the home during the five-year period before the planned sale date. If you fall short of 24 months for either test, consider delaying the sale until you qualify. The tax savings from a full $250,000 or $500,000 exclusion can be enormous compared to a partial exclusion. Even a few extra weeks of waiting can make the difference between a full exclusion and a significant tax bill. Also check if any exceptions (health, employment, unforeseen circumstances) might apply if you cannot meet the full requirement.
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
                    <h3 className="font-semibold text-emerald-800 mb-2">Confirm You Have Not Used the Exclusion Within Two Years</h3>
                    <p className="text-gray-600 text-sm">
                      Check whether you claimed the Section 121 exclusion on any other home sale within the past 24 months. If you did, you cannot claim the exclusion again until at least two years have passed from the date of the prior sale. If you are within the two-year window and need to sell due to health reasons, job relocation, or unforeseen circumstances, you may qualify for a partial exclusion. Calculate the prorated exclusion amount: (months qualified / 24 months) multiplied by $250,000 (single) or $500,000 (married filing jointly).
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
                    <h3 className="font-semibold text-emerald-800 mb-2">Complete Pre-Sale Capital Improvements</h3>
                    <p className="text-gray-600 text-sm">
                      If your gain is likely to exceed the exclusion amount, consider making capital improvements before selling to increase your cost basis and reduce your taxable gain. Focus on improvements that add lasting value: kitchen or bathroom renovations, energy-efficient windows, a new roof, or finishing a basement. Be aware that the improvement must be completed and paid for before the sale to be included in your basis. Obtain permits for any work that requires them, as unpermitted improvements may not be recognized by the IRS or may complicate the sale.
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
                    <h3 className="font-semibold text-emerald-800 mb-2">Document All Selling Costs</h3>
                    <p className="text-gray-600 text-sm">
                      Selling costs directly reduce your capital gain. Keep records of real estate agent commissions (typically 5-6% of the sale price), closing attorney fees, title insurance, transfer taxes, staging costs, advertising, escrow fees, and any other costs directly related to the sale. For a $500,000 home with 6% commissions and typical closing costs, selling expenses alone can total $35,000 to $40,000, which directly reduces your taxable gain dollar for dollar.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">6</div>
                  <div>
                    <h3 className="font-semibold text-emerald-800 mb-2">Time the Sale to Optimize Your Tax Bracket</h3>
                    <p className="text-gray-600 text-sm">
                      If your gain exceeds the exclusion, the remaining taxable gain is subject to long-term capital gains tax. The rate depends on your taxable income for the year. If you have flexibility in timing the sale, consider closing in a year when your income is lower (perhaps after retirement or between jobs) to take advantage of the 0% or 15% long-term capital gains rate instead of the 20% rate. Even a few thousand dollars of difference in your taxable income can affect which rate bracket applies to your gain. Consult with a tax advisor to model different scenarios.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">7</div>
                  <div>
                    <h3 className="font-semibold text-emerald-800 mb-2">Check State Capital Gains Tax Rules</h3>
                    <p className="text-gray-600 text-sm">
                      Many states impose their own capital gains tax in addition to the federal tax. States like California (up to 13.3%), New York (up to 10.9%), and Oregon (up to 9.9%) have high state capital gains rates. Other states such as Florida, Texas, Nevada, and Washington have no state income tax at all. Research your state&apos;s specific rules, as some states conform to the federal Section 121 exclusion while others may have different treatment. Factor state taxes into your total expected tax liability when evaluating whether to sell and how to price your home.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">8</div>
                  <div>
                    <h3 className="font-semibold text-emerald-800 mb-2">Consider the Net Investment Income Tax (NIIT)</h3>
                    <p className="text-gray-600 text-sm">
                      If your modified adjusted gross income exceeds $200,000 (single filers) or $250,000 (married filing jointly), an additional 3.8% Net Investment Income Tax applies to your capital gains. For married couples, this threshold is not doubled, so the NIIT can catch even moderately high-income households. Strategies to manage this include maximizing retirement contributions, making charitable contributions, or timing the sale to coincide with a lower-income year. If your taxable gain after the Section 121 exclusion plus your other income pushes you over the NIIT threshold, plan accordingly to minimize the surcharge.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">9</div>
                  <div>
                    <h3 className="font-semibold text-emerald-800 mb-2">Preserve All Documentation for IRS Reporting</h3>
                    <p className="text-gray-600 text-sm">
                      Gather and organize all documents related to the home purchase, improvements, and sale. This includes the original closing statement (HUD-1 or Closing Disclosure), improvement receipts and contracts, property tax records, selling closing statement, Form 1099-S from the sale, and any previous tax returns that reported depreciation (if the home was ever rented). The IRS recommends keeping these records for at least three years after filing the return on which you report the sale, but for home sale records, keeping them for seven years or indefinitely is prudent. If the IRS audits the sale, having complete documentation readily available will make the process much smoother.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">10</div>
                  <div>
                    <h3 className="font-semibold text-emerald-800 mb-2">Report the Sale Correctly on Your Tax Return</h3>
                    <p className="text-gray-600 text-sm">
                      If your sale proceeds exceed $250,000 (single) or $500,000 (married filing jointly), you must report the sale on IRS Form 8949 and Schedule D, even if the entire gain is excluded under Section 121. On Form 8949, report the sale price and cost basis, and on Schedule D, report the exclusion amount. If your proceeds are below these thresholds and you meet the ownership and use tests, you generally do not need to report the sale. However, reporting it voluntarily with the exclusion noted can provide an extra layer of audit protection. If you have depreciation recapture, you will also need to complete Form 4797 for the recaptured amount.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

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
