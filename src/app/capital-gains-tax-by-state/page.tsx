import { Metadata } from 'next';
import Link from 'next/link';
import SiteLayout from '@/components/SiteLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Calculator,
  MapPin,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  ArrowRight,
  Star,
  Info,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Capital Gains Tax by State 2025-2026 | State-by-State Calculator',
  description:
    'Complete guide to capital gains tax by state for 2025-2026. Compare state tax rates for all 50 states including California, New York, Texas, and Florida.',
  alternates: {
    canonical: 'https://taxgainscalc.com/capital-gains-tax-by-state',
  },
  openGraph: {
    title: 'Capital Gains Tax by State 2025-2026 | State-by-State Calculator',
    description:
      'Compare capital gains tax rates across all 50 US states. Find your state tax rate and calculate your total liability.',
    url: 'https://taxgainscalc.com/capital-gains-tax-by-state',
    type: 'article',
  },
};

const noIncomeTaxStates = [
  'Alaska',
  'Florida',
  'Nevada',
  'New Hampshire',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Washington',
  'Wyoming',
];

const allStates = [
  { name: 'Alabama', abbr: 'AL', topRate: '5.0%', treatment: 'Ordinary income', notes: 'No special capital gains exclusion' },
  { name: 'Alaska', abbr: 'AK', topRate: '0%', treatment: 'No state income tax', notes: 'No capital gains tax at state level' },
  { name: 'Arizona', abbr: 'AZ', topRate: '2.5%', treatment: 'Ordinary income', notes: 'Flat tax rate as of 2025' },
  { name: 'Arkansas', abbr: 'AR', topRate: '4.4%', treatment: 'Ordinary income', notes: 'No special capital gains exclusion' },
  { name: 'California', abbr: 'CA', topRate: '13.3%', treatment: 'Ordinary income', notes: 'Highest top rate in the nation' },
  { name: 'Colorado', abbr: 'CO', topRate: '4.4%', treatment: 'Ordinary income', notes: 'Flat tax rate' },
  { name: 'Connecticut', abbr: 'CT', topRate: '6.99%', treatment: 'Ordinary income', notes: 'No special capital gains exclusion' },
  { name: 'Delaware', abbr: 'DE', topRate: '6.6%', treatment: 'Ordinary income', notes: 'No special capital gains exclusion' },
  { name: 'Florida', abbr: 'FL', topRate: '0%', treatment: 'No state income tax', notes: 'No capital gains tax at state level' },
  { name: 'Georgia', abbr: 'GA', topRate: '5.49%', treatment: 'Ordinary income', notes: 'Graduated rate schedule' },
  { name: 'Hawaii', abbr: 'HI', topRate: '11.0%', treatment: 'Ordinary income', notes: 'No special capital gains exclusion' },
  { name: 'Idaho', abbr: 'ID', topRate: '5.8%', treatment: 'Ordinary income', notes: 'No special capital gains exclusion' },
  { name: 'Illinois', abbr: 'IL', topRate: '4.95%', treatment: 'Ordinary income', notes: 'Flat tax rate' },
  { name: 'Indiana', abbr: 'IN', topRate: '3.05%', treatment: 'Ordinary income', notes: 'Flat tax rate' },
  { name: 'Iowa', abbr: 'IA', topRate: '5.7%', treatment: 'Ordinary income', notes: 'Graduated rate schedule' },
  { name: 'Kansas', abbr: 'KS', topRate: '5.7%', treatment: 'Ordinary income', notes: 'No special capital gains exclusion' },
  { name: 'Kentucky', abbr: 'KY', topRate: '4.0%', treatment: 'Ordinary income', notes: 'Flat tax rate as of 2025' },
  { name: 'Louisiana', abbr: 'LA', topRate: '4.25%', treatment: 'Ordinary income', notes: 'Graduated rate schedule' },
  { name: 'Maine', abbr: 'ME', topRate: '7.15%', treatment: 'Ordinary income', notes: 'No special capital gains exclusion' },
  { name: 'Maryland', abbr: 'MD', topRate: '5.75%', treatment: 'Ordinary income', notes: 'Plus county income tax up to 3.2%' },
  { name: 'Massachusetts', abbr: 'MA', topRate: '9.0%', treatment: 'Ordinary income', notes: 'Includes both earned and investment income' },
  { name: 'Michigan', abbr: 'MI', topRate: '4.25%', treatment: 'Ordinary income', notes: 'Flat tax rate' },
  { name: 'Minnesota', abbr: 'MN', topRate: '9.85%', treatment: 'Ordinary income', notes: 'No special capital gains exclusion' },
  { name: 'Mississippi', abbr: 'MS', topRate: '4.7%', treatment: 'Ordinary income', notes: 'Graduated rate schedule' },
  { name: 'Missouri', abbr: 'MO', topRate: '4.8%', treatment: 'Ordinary income', notes: 'Graduated rate schedule' },
  { name: 'Montana', abbr: 'MT', topRate: '5.9%', treatment: 'Ordinary income', notes: 'Capital gains credit available up to certain limits' },
  { name: 'Nebraska', abbr: 'NE', topRate: '6.64%', treatment: 'Ordinary income', notes: 'No special capital gains exclusion' },
  { name: 'Nevada', abbr: 'NV', topRate: '0%', treatment: 'No state income tax', notes: 'No capital gains tax at state level' },
  { name: 'New Hampshire', abbr: 'NH', topRate: '0%', treatment: 'No state income tax', notes: 'Interest & dividends tax fully repealed' },
  { name: 'New Jersey', abbr: 'NJ', topRate: '10.75%', treatment: 'Ordinary income', notes: 'No special capital gains exclusion' },
  { name: 'New Mexico', abbr: 'NM', topRate: '5.9%', treatment: 'Ordinary income', notes: 'No special capital gains exclusion' },
  { name: 'New York', abbr: 'NY', topRate: '10.9%', treatment: 'Ordinary income', notes: 'Plus NYC tax up to 3.876%' },
  { name: 'North Carolina', abbr: 'NC', topRate: '4.5%', treatment: 'Ordinary income', notes: 'Flat tax rate' },
  { name: 'North Dakota', abbr: 'ND', topRate: '2.5%', treatment: 'Ordinary income', notes: 'Graduated rate schedule' },
  { name: 'Ohio', abbr: 'OH', topRate: '3.5%', treatment: 'Ordinary income', notes: 'Flat tax rate as of 2025' },
  { name: 'Oklahoma', abbr: 'OK', topRate: '4.75%', treatment: 'Ordinary income', notes: 'No special capital gains exclusion' },
  { name: 'Oregon', abbr: 'OR', topRate: '9.9%', treatment: 'Ordinary income', notes: 'No special capital gains exclusion' },
  { name: 'Pennsylvania', abbr: 'PA', topRate: '3.07%', treatment: 'Ordinary income', notes: 'Flat tax rate; no special exclusion' },
  { name: 'Rhode Island', abbr: 'RI', topRate: '5.99%', treatment: 'Ordinary income', notes: 'No special capital gains exclusion' },
  { name: 'South Carolina', abbr: 'SC', topRate: '6.4%', treatment: 'Ordinary income', notes: 'No special capital gains exclusion' },
  { name: 'South Dakota', abbr: 'SD', topRate: '0%', treatment: 'No state income tax', notes: 'No capital gains tax at state level' },
  { name: 'Tennessee', abbr: 'TN', topRate: '0%', treatment: 'No state income tax', notes: 'Hall tax fully repealed; no capital gains tax' },
  { name: 'Texas', abbr: 'TX', topRate: '0%', treatment: 'No state income tax', notes: 'No capital gains tax at state level' },
  { name: 'Utah', abbr: 'UT', topRate: '4.65%', treatment: 'Ordinary income', notes: 'Flat tax rate' },
  { name: 'Vermont', abbr: 'VT', topRate: '8.75%', treatment: 'Ordinary income', notes: 'No special capital gains exclusion' },
  { name: 'Virginia', abbr: 'VA', topRate: '5.75%', treatment: 'Ordinary income', notes: 'Graduated rate schedule' },
  { name: 'Washington', abbr: 'WA', topRate: '0%', treatment: 'No state income tax', notes: '7% tax on LTCG over $270,200 (2025)' },
  { name: 'West Virginia', abbr: 'WV', topRate: '5.12%', treatment: 'Ordinary income', notes: 'No special capital gains exclusion' },
  { name: 'Wisconsin', abbr: 'WI', topRate: '7.65%', treatment: 'Ordinary income', notes: 'No special capital gains exclusion' },
  { name: 'Wyoming', abbr: 'WY', topRate: '0%', treatment: 'No state income tax', notes: 'No capital gains tax at state level' },
];

const faqs = [
  {
    question: 'Does every state tax capital gains?',
    answer:
      'No, nine states do not levy a state income tax and therefore do not tax capital gains at the state level: Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming. Residents of these states only pay federal capital gains tax. However, Washington state imposes a 7% tax on long-term capital gains exceeding $270,200 (2025 threshold), which functions similarly to a capital gains tax despite the lack of a general income tax.',
  },
  {
    question: 'Which state has the highest capital gains tax?',
    answer:
      'California has the highest top marginal income tax rate in the nation at 13.3%, which also applies to capital gains since California taxes them as ordinary income. When combined with the top federal capital gains rate of 20% plus the 3.8% NIIT, high-income California residents can face a combined capital gains tax rate of over 37%. New Jersey (10.75%), Hawaii (11.0%), and New York (10.9% plus additional city taxes) also have very high rates.',
  },
  {
    question: 'How is capital gains tax calculated at the state level?',
    answer:
      'Most states that impose an income tax treat capital gains the same as ordinary income for state tax purposes. Your capital gains are added to your other income, and the total is taxed according to the state\'s graduated rate schedule or flat tax rate. Some states have specific deductions or credits related to capital gains. To calculate your total capital gains tax liability, add your federal capital gains tax to your applicable state capital gains tax. You can use our free capital gains tax calculator to estimate your federal liability.',
  },
  {
    question: 'Are short-term and long-term capital gains taxed differently at the state level?',
    answer:
      'Most states do not distinguish between short-term and long-term capital gains, unlike the federal tax system. The vast majority of states tax all capital gains as ordinary income at the same rates. There are very few exceptions. At the federal level, long-term gains enjoy preferential rates of 0%, 15%, or 20%, while short-term gains are taxed at ordinary income rates up to 37%. This federal-state discrepancy is an important consideration when planning investment sales.',
  },
  {
    question: 'Can I deduct capital losses on my state tax return?',
    answer:
      'In most states that impose an income tax, yes, you can deduct capital losses similarly to how they are deducted on your federal return. Generally, capital losses can offset capital gains dollar for dollar, and excess losses up to $3,000 per year ($1,500 if married filing separately) can offset ordinary income, with remaining losses carried forward. However, some states have their own rules regarding the treatment of capital losses, so it is important to check your specific state\'s tax regulations.',
  },
  {
    question: 'Do I pay state capital gains tax if I move to another state?',
    answer:
      'The general rule is that you pay state income tax (including on capital gains) in the state where you are a resident at the time of the sale. If you move to a new state and then sell an asset, the gain is typically taxed by your new state of residence. Some states have exit taxes or special rules for part-year residents. If you sell an asset while living in a high-tax state like California, you will owe California taxes on that gain even if you move shortly afterward.',
  },
  {
    question: 'Are there any states with special capital gains exclusions or deductions?',
    answer:
      'A few states offer special treatment for capital gains. Montana provides a capital gains tax credit that effectively reduces the tax rate on gains. Colorado allows a subtraction for a portion of long-term capital gains. Some states also exclude gains from the sale of certain types of property, such as agricultural land or small business stock. Additionally, Washington state has carved out long-term capital gains exceeding $270,200 (2025) for its 7% excise tax, while exempting certain other types of gains such as real estate sales.',
  },
  {
    question: 'How do state capital gains taxes affect investment decisions?',
    answer:
      'State taxes can significantly impact your total return on investments, especially in high-tax states. For example, a $100,000 long-term capital gain would incur approximately $20,000 in federal taxes (at the 20% rate) plus up to $13,300 in California state taxes, totaling $33,300. The same gain in Texas or Florida would cost only the $20,000 federal tax. This $13,300 difference can influence decisions about when to sell, where to live, and how to structure investment portfolios. Investors in high-tax states may want to prioritize tax-advantaged accounts like IRAs and 401(k)s to defer or eliminate state capital gains tax.',
  },
  {
    question: 'Does the state capital gains tax apply to gains inside a retirement account?',
    answer:
      'No, capital gains realized inside tax-advantaged retirement accounts such as Traditional IRAs, Roth IRAs, 401(k) plans, and similar accounts are generally not subject to state or federal capital gains tax. Traditional IRA and 401(k) withdrawals are taxed as ordinary income when distributed, while qualified Roth withdrawals are tax-free at both the federal and state level. However, some states do not conform to federal tax treatment of retirement income, so it is worth checking your state\'s specific rules.',
  },
];

export default function CapitalGainsTaxByStatePage() {
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
              { '@type': 'ListItem', position: 2, name: 'Capital Gains Tax by State', item: 'https://taxgainscalc.com/capital-gains-tax-by-state' },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Updated for 2025-2026 Tax Year</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Capital Gains Tax by State</h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            Compare capital gains tax rates for all 50 U.S. states. Find your state tax rate and learn how state taxes impact your investment returns.
          </p>
          <Link href="/#calculator">
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold">
              <Calculator className="h-5 w-5 mr-2" />
              Use Free Tax Calculator
            </Button>
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* How State Taxes Work */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            How State Taxes Work on Capital Gains
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              While the federal government taxes capital gains under a unified set of rules with preferential rates for long-term holdings, state-level taxation of capital gains varies dramatically across the United States. Understanding your state&apos;s approach to taxing capital gains is essential for accurate tax planning and can have a substantial impact on your net investment returns.
            </p>
            <p>
              In most states that levy an income tax, capital gains are treated as ordinary income and taxed at the state&apos;s standard income tax rates. This means there is typically no distinction between short-term and long-term capital gains at the state level, unlike the federal system which provides preferential rates for assets held longer than one year. Your capital gains are simply added to your other income, and the total is taxed according to the state&apos;s rate schedule.
            </p>
            <p>
              Nine states currently do not impose a state income tax, which means residents of these states pay no state-level capital gains tax: Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming. This creates a significant tax advantage for investors living in these states, as their total capital gains tax burden consists of only the federal tax.
            </p>
            <p>
              At the other end of the spectrum, California imposes the highest top marginal income tax rate in the nation at 13.3%, which applies to capital gains as ordinary income. When combined with the top federal long-term capital gains rate of 20% plus the 3.8% Net Investment Income Tax, high-income California residents can face a combined marginal rate exceeding 37% on capital gains. New Jersey (10.75%), Hawaii (11.0%), and New York (10.9%, plus up to 3.876% for New York City residents) are also among the highest-tax states for capital gains.
            </p>
          </div>
        </section>

        {/* No-Income-Tax States */}
        <section className="mb-12">
          <Card className="border-emerald-200 bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-emerald-800">
                <Star className="h-5 w-5" />
                States with No Income Tax on Capital Gains
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Residents of these nine states do not pay any state-level tax on capital gains, meaning their total tax burden is limited to federal taxes only:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {noIncomeTaxStates.map((state) => (
                  <div
                    key={state}
                    className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-emerald-200"
                  >
                    <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-800">{state}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                <Info className="h-4 w-4 inline mr-1" />
                <strong>Note:</strong> Washington state imposes a 7% tax on long-term capital gains exceeding $270,200 (2025), even though it has no general income tax. This applies to sales of stocks, bonds, and other investments but excludes real estate, certain small business sales, and retirement account distributions.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Comprehensive Table of All 50 States */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Complete State Capital Gains Tax Table (All 50 States)
          </h2>
          <p className="text-gray-600 mb-6">
            The table below shows how each state treats capital gains for the 2025-2026 tax year. Rates shown are the top marginal state income tax rate applied to capital gains.
          </p>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-emerald-600 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">State</th>
                      <th className="px-4 py-3 text-left font-semibold">Top Rate</th>
                      <th className="px-4 py-3 text-left font-semibold">Capital Gains Treatment</th>
                      <th className="px-4 py-3 text-left font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allStates.map((state, index) => {
                      const isNoTax = noIncomeTaxStates.includes(state.name);
                      return (
                        <tr
                          key={state.abbr}
                          className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${
                            isNoTax ? 'font-medium' : ''
                          }`}
                        >
                          <td className="px-4 py-2.5">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" />
                              <span className="text-gray-800">{state.name}</span>
                              <span className="text-gray-400 text-xs">({state.abbr})</span>
                            </div>
                          </td>
                          <td className="px-4 py-2.5">
                            {isNoTax ? (
                              <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-100">
                                {state.topRate}
                              </Badge>
                            ) : (
                              <span className="text-gray-800">{state.topRate}</span>
                            )}
                          </td>
                          <td className="px-4 py-2.5 text-gray-600">{state.treatment}</td>
                          <td className="px-4 py-2.5 text-gray-500 text-xs">{state.notes}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          <p className="text-xs text-gray-500 mt-3">
            Rates are based on the top marginal state income tax rate as of the 2025-2026 tax year. Some states have graduated rate structures, so your effective rate may be lower. Consult your state&apos;s Department of Revenue for the most current information.
          </p>
        </section>

        {/* Top-Searched States */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Detailed Capital Gains Tax Guides by State
          </h2>
          <p className="text-gray-600 mb-8">
            In-depth breakdowns for the most frequently searched states. Click on any state to understand how capital gains are taxed and what strategies may help reduce your liability.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* California */}
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800">
                  <MapPin className="h-5 w-5" />
                  Capital Gains Tax in California
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="mb-3 bg-red-100 text-red-700 border-red-200 hover:bg-red-100">
                  Top Rate: 13.3%
                </Badge>
                <div className="text-gray-700 space-y-2 text-sm">
                  <p>
                    California has the highest state income tax rate in the United States, and it applies fully to capital gains. All capital gains—both short-term and long-term—are taxed as ordinary income at California&apos;s graduated rates, which range from 1% to 13.3%.
                  </p>
                  <p>
                    <strong>Example:</strong> A California resident with $100,000 in long-term capital gains and a taxable income that places them in the 9.3% bracket would pay approximately $9,300 in California state taxes on those gains, in addition to the $15,000 (15%) or $20,000 (20%) in federal taxes. This means the combined tax could reach $29,300 or more.
                  </p>
                  <p>
                    California does not offer any special capital gains exclusion, deduction, or preferential rate. However, losses can offset gains, and California conforms to the federal $3,000 annual ordinary income loss deduction limit. Investors in California should strongly consider maximizing contributions to tax-advantaged accounts and utilizing tax-loss harvesting strategies to mitigate their state tax burden.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* New York */}
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-800">
                  <MapPin className="h-5 w-5" />
                  Capital Gains Tax in New York
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="mb-3 bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-100">
                  Top Rate: 10.9% (plus NYC tax)
                </Badge>
                <div className="text-gray-700 space-y-2 text-sm">
                  <p>
                    New York State taxes capital gains as ordinary income at rates ranging from 4% to 10.9%. Unlike some states, New York does not provide any preferential treatment for long-term capital gains. All gains are added to your other income and taxed according to the state&apos;s graduated rate structure.
                  </p>
                  <p>
                    <strong>New York City residents</strong> face an additional layer of taxation. NYC imposes its own income tax with a top rate of 3.876%, which also applies to capital gains. Combined with the state rate, NYC residents can face total state and local taxes of nearly 14.8% on capital gains. Yonkers residents also pay an additional city income tax.
                  </p>
                  <p>
                    <strong>Example:</strong> A NYC resident with $50,000 in long-term capital gains in the top brackets would pay approximately $5,450 in state tax plus $1,938 in city tax ($7,388 combined), on top of federal taxes of $10,000 (at 20%). The total combined tax reaches $17,388—over 34% of the gain. Strategies like holding investments in tax-advantaged accounts and tax-loss harvesting are particularly important for New York residents.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Texas */}
            <Card className="border-emerald-200 bg-emerald-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-800">
                  <MapPin className="h-5 w-5" />
                  Capital Gains Tax in Texas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="mb-3 bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-100">
                  State Tax: 0%
                </Badge>
                <div className="text-gray-700 space-y-2 text-sm">
                  <p>
                    Texas is one of nine states with no state income tax, which means residents pay zero state-level tax on capital gains. This provides a significant advantage compared to investors in high-tax states like California or New York, potentially saving tens of thousands of dollars on large gains.
                  </p>
                  <p>
                    <strong>Example:</strong> A Texas resident with $100,000 in long-term capital gains in the 20% federal bracket would pay $20,000 in federal taxes. The same gain for a California resident in the top bracket would cost $33,300 in combined federal and state taxes—a difference of $13,300. Over a lifetime of investing, this advantage compounds significantly.
                  </p>
                  <p>
                    Texas does not levy any capital gains tax, franchise tax on investment income, or other state-level investment taxes. However, Texas residents should still be aware of the federal capital gains tax rates (0%, 15%, 20%) and the 3.8% Net Investment Income Tax. Property taxes in Texas tend to be higher than in many other states, which is a trade-off to consider when evaluating the overall tax burden.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Florida */}
            <Card className="border-emerald-200 bg-emerald-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-800">
                  <MapPin className="h-5 w-5" />
                  Capital Gains Tax in Florida
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="mb-3 bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-100">
                  State Tax: 0%
                </Badge>
                <div className="text-gray-700 space-y-2 text-sm">
                  <p>
                    Florida, like Texas, has no state income tax. This means Florida residents pay zero state-level capital gains tax on investment profits. Florida&apos;s lack of an income tax is one of the primary reasons it is a popular destination for retirees and high-net-worth individuals seeking to minimize their overall tax burden.
                  </p>
                  <p>
                    <strong>Example:</strong> A Florida resident who sells a stock for a $200,000 long-term capital gain would owe only federal taxes. At the 20% rate, that is $40,000. The same transaction for a New York City resident could result in over $67,600 in combined federal, state, and city taxes. This $27,600 savings illustrates why many investors consider state tax implications when choosing where to live.
                  </p>
                  <p>
                    Florida does not tax investment income, capital gains, dividends, or interest at the state level. The state generates revenue primarily through sales tax (6% plus local surtaxes) and property taxes. Florida also has no state estate tax or inheritance tax, making it particularly attractive for estate planning purposes. Investors in Florida should focus their tax planning efforts at the federal level.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Total Tax Burden Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Total Capital Gains Tax Burden: State Comparison
          </h2>
          <p className="text-gray-600 mb-6">
            The following table shows the estimated combined federal and state tax on a $100,000 long-term capital gain for a high-income earner in the top brackets (federal 20% + 3.8% NIIT = 23.8%):
          </p>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-800">State</th>
                      <th className="px-4 py-3 text-right font-semibold text-gray-800">Federal Tax</th>
                      <th className="px-4 py-3 text-right font-semibold text-gray-800">State Tax</th>
                      <th className="px-4 py-3 text-right font-semibold text-gray-800">Total Tax</th>
                      <th className="px-4 py-3 text-right font-semibold text-gray-800">Effective Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { state: 'California', fed: 23800, stateTax: 13300 },
                      { state: 'New York (NYC)', fed: 23800, stateTax: 14760 },
                      { state: 'New Jersey', fed: 23800, stateTax: 10750 },
                      { state: 'Hawaii', fed: 23800, stateTax: 11000 },
                      { state: 'Oregon', fed: 23800, stateTax: 9900 },
                      { state: 'Minnesota', fed: 23800, stateTax: 9850 },
                      { state: 'Illinois', fed: 23800, stateTax: 4950 },
                      { state: 'Pennsylvania', fed: 23800, stateTax: 3070 },
                      { state: 'Texas', fed: 23800, stateTax: 0 },
                      { state: 'Florida', fed: 23800, stateTax: 0 },
                      { state: 'Nevada', fed: 23800, stateTax: 0 },
                      { state: 'Washington', fed: 23800, stateTax: 5070 },
                    ].map((row, i) => (
                      <tr
                        key={row.state}
                        className={`border-b ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                      >
                        <td className="px-4 py-2.5 text-gray-800 font-medium">{row.state}</td>
                        <td className="px-4 py-2.5 text-right text-gray-600">
                          ${row.fed.toLocaleString()}
                        </td>
                        <td className={`px-4 py-2.5 text-right ${row.stateTax === 0 ? 'text-emerald-600 font-medium' : 'text-gray-600'}`}>
                          {row.stateTax === 0 ? '$0' : `$${row.stateTax.toLocaleString()}`}
                        </td>
                        <td className="px-4 py-2.5 text-right font-medium text-gray-800">
                          ${(row.fed + row.stateTax).toLocaleString()}
                        </td>
                        <td className={`px-4 py-2.5 text-right font-medium ${
                          (row.fed + row.stateTax) / 1000 >= 35 ? 'text-red-600' : (row.fed + row.stateTax) / 1000 <= 25 ? 'text-emerald-600' : 'text-gray-800'
                        }`}>
                          {((row.fed + row.stateTax) / 1000).toFixed(1)}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          <p className="text-xs text-gray-500 mt-3">
            Assumes $100,000 long-term capital gain for a high-income earner in the top federal bracket (20% + 3.8% NIIT). State taxes are based on top marginal rates. Washington includes its 7% capital gains excise tax on gains above $270,200 (2025). Your actual tax may vary based on income level, deductions, and filing status.
          </p>
        </section>

        {/* Strategies */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Strategies to Reduce State Capital Gains Tax
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-800 mb-2">1. Maximize Tax-Advantaged Accounts</h3>
                <p className="text-gray-600 text-sm">
                  Contributions to 401(k)s, IRAs, and HSAs grow tax-deferred, meaning you do not pay state or federal capital gains tax on gains within these accounts. This is especially valuable in high-tax states like California and New York. Roth accounts offer completely tax-free growth and withdrawals.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-800 mb-2">2. Tax-Loss Harvesting</h3>
                <p className="text-gray-600 text-sm">
                  Selling investments at a loss to offset gains reduces both your federal and state tax liability. In states with high marginal rates, tax-loss harvesting is even more impactful because each dollar of loss saves more in state taxes. Be mindful of the federal wash sale rule, which disallows losses if you repurchase the same security within 30 days.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-800 mb-2">3. Consider Relocation</h3>
                <p className="text-gray-600 text-sm">
                  For investors with substantial gains, relocating to a no-income-tax state before realizing gains can save significant amounts. However, most states require you to be a resident at the time of sale, and some have exit tax rules. Plan carefully and consult a tax advisor before making relocation decisions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-800 mb-2">4. Charitable Giving of Appreciated Assets</h3>
                <p className="text-gray-600 text-sm">
                  Donating appreciated stock or other assets directly to a qualified charity allows you to avoid both federal and state capital gains tax while receiving a charitable deduction for the full market value. This strategy is particularly effective in high-tax states for investors who have significantly appreciated assets.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-800 mb-2">5. Hold Long-Term for Federal Savings</h3>
                <p className="text-gray-600 text-sm">
                  While most states do not distinguish between short-term and long-term gains, the federal savings from holding investments longer than one year are substantial. Holding an asset for just over a year can reduce the federal rate from 37% to 20% or less, which is the largest single factor in capital gains tax planning.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-800 mb-2">6. Installment Sales</h3>
                <p className="text-gray-600 text-sm">
                  For large gains, consider an installment sale where you receive payments over multiple years. This spreads the gain across several tax years, potentially keeping you in a lower tax bracket each year and reducing the overall state and federal tax burden on the gain.
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
                Calculate Your Total Capital Gains Tax
              </h2>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Our free calculator computes your federal capital gains tax based on 2025-2026 rates. Combine the result with your state tax rate from the table above for your total liability.
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
            Frequently Asked Questions
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
                  State tax rates and rules are subject to change. The information on this page is for general educational purposes and reflects the best available data for the 2025-2026 tax year. Tax laws vary by state and individual circumstances. We recommend consulting a qualified tax professional or CPA for personalized advice regarding your specific situation. This page does not constitute legal or tax advice.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SiteLayout>
  );
}
