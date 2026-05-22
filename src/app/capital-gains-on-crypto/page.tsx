import { Metadata } from 'next';
import Link from 'next/link';
import SiteLayout from '@/components/SiteLayout';
import RelatedCalculators from '@/components/RelatedCalculators';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Calculator,
  HelpCircle,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Shield,
  Info,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cryptocurrency Capital Gains Tax Guide 2025-2026 | TaxGainsCalc',
  description: 'Complete guide to cryptocurrency capital gains tax. Learn how Bitcoin, Ethereum, DeFi, NFTs, and staking are taxed. Includes calculation examples and tax strategies for crypto investors.',
  alternates: {
    canonical: 'https://taxgainscalc.com/capital-gains-on-crypto',
  },
  openGraph: {
    title: 'Cryptocurrency Capital Gains Tax Guide 2025-2026 | TaxGainsCalc',
    description: 'Complete guide to cryptocurrency capital gains tax. Learn how Bitcoin, Ethereum, DeFi, NFTs, and staking are taxed with calculation examples and strategies.',
    url: 'https://taxgainscalc.com/capital-gains-on-crypto',
    siteName: 'TaxGainsCalc',
    type: 'article',
    locale: 'en_US',
  },
};

const faqs = [
  {
    question: 'How is cryptocurrency taxed in the United States?',
    answer: 'The IRS treats cryptocurrency as property, not currency. This means every time you sell, trade, or exchange cryptocurrency for a gain, you trigger a taxable capital gains event. If you hold the cryptocurrency for more than one year before selling, you pay long-term capital gains tax rates of 0%, 15%, or 20%. If you hold it for one year or less, you pay short-term capital gains tax at your ordinary income rate, which can be as high as 37%. Additionally, the 3.8% Net Investment Income Tax may apply to high-income taxpayers.',
  },
  {
    question: 'Is converting one cryptocurrency to another a taxable event?',
    answer: 'Yes. The IRS has clarified that converting one cryptocurrency to another (for example, trading Bitcoin for Ethereum) is a taxable event. You must report the capital gain or loss based on the difference between the fair market value of the crypto you received and your cost basis in the crypto you disposed of. This is true even if you never convert the cryptocurrency back to US dollars. Every swap, trade, or exchange triggers a tax calculation.',
  },
  {
    question: 'Do I owe tax on cryptocurrency I receive as income?',
    answer: 'Yes. Cryptocurrency received as payment for goods or services, mining income, staking rewards, airdrops, or hard forks is taxable as ordinary income at its fair market value on the date you receive it. Your cost basis in that cryptocurrency becomes the fair market value at receipt. When you later sell or exchange that cryptocurrency, you will owe capital gains tax on any appreciation since you received it.',
  },
  {
    question: 'How does the wash sale rule apply to cryptocurrency?',
    answer: 'Currently, the IRS wash sale rule (which disallows tax losses if you repurchase a substantially identical security within 30 days) does not explicitly apply to cryptocurrency. This creates an opportunity for crypto investors to harvest losses more aggressively than stock investors. However, the IRS has proposed extending the wash sale rule to digital assets, and the rules may change. Always check the latest IRS guidance before implementing tax-loss harvesting strategies with cryptocurrency.',
  },
  {
    question: 'Are NFT gains taxed differently than regular cryptocurrency?',
    answer: 'NFTs are treated as digital assets by the IRS and are subject to the same capital gains tax rules as cryptocurrency. When you sell an NFT for a profit, you owe capital gains tax on the difference between your sale proceeds and your cost basis (typically the purchase price plus any gas fees). If you create and sell an NFT, the proceeds are generally treated as ordinary income from a business activity. Collectibles held long-term may be subject to the 28% collectibles tax rate.',
  },
  {
    question: 'What are the tax implications of DeFi yield farming and liquidity pools?',
    answer: 'DeFi activities create multiple taxable events. Providing liquidity to a pool and receiving LP tokens in return is generally not taxable at the time of deposit, but the tokens you provide may be treated as a sale or exchange. Yield farming rewards and interest earned are taxable as ordinary income when received. When you withdraw from a liquidity pool and receive back different tokens than you deposited, the transaction may trigger capital gains tax. The complex nature of DeFi transactions makes accurate record-keeping essential.',
  },
  {
    question: 'How do I report cryptocurrency gains on my tax return?',
    answer: 'Cryptocurrency capital gains and losses are reported on IRS Form 8949 (Sales and Other Dispositions of Capital Assets) and summarized on Schedule D of Form 1040, just like stock transactions. Each taxable crypto transaction should be listed separately with the date acquired, date sold, proceeds, cost basis, and resulting gain or loss. Income from mining, staking, and payments received in crypto is reported on Schedule 1 as other income. You must answer &quot;Yes&quot; to the virtual currency question on Form 1040 if you engaged in crypto transactions during the year.',
  },
  {
    question: 'What records do I need to keep for cryptocurrency tax purposes?',
    answer: 'You should maintain detailed records of every cryptocurrency transaction including the date and time of each transaction, the type of transaction (buy, sell, trade, mining, staking, airdrop), the amount and type of cryptocurrency involved, the fair market value in US dollars at the time of the transaction, the cost basis of disposed assets, any fees paid (gas fees, exchange fees), and receipts from exchanges. Using cryptocurrency tax software can help automate much of this record-keeping and generate the necessary reports for tax filing.',
  },
];

export default function CryptoCapitalGainsPage() {
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
              { '@type': 'ListItem', position: 2, name: 'Cryptocurrency Capital Gains Tax', item: 'https://taxgainscalc.com/capital-gains-on-crypto' },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Crypto Tax Guide 2025-2026</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Cryptocurrency Capital Gains Tax Guide
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            Complete guide to how Bitcoin, Ethereum, DeFi, NFTs, and staking rewards are taxed. 
            Includes calculation examples, reporting requirements, and strategies to minimize your crypto tax bill.
          </p>
          <Link href="/#calculator">
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold">
              <Calculator className="mr-2 h-5 w-5" />
              Calculate Your Crypto Tax
            </Button>
          </Link>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="text-sm text-gray-500">
          <Link href="/" className="hover:text-emerald-600 transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Cryptocurrency Capital Gains Tax</span>
        </nav>
      </div>

      {/* How Crypto Is Taxed */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            How Cryptocurrency Is Taxed in the United States
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The IRS classifies cryptocurrency as property rather than currency for federal tax purposes. This classification, established in IRS Notice 2014-21, means that cryptocurrency transactions are subject to the same capital gains tax rules that apply to stocks, bonds, real estate, and other capital assets. Every taxable crypto event must be reported on your tax return, and failure to do so can result in penalties, interest, and potential audit scrutiny.
            </p>
            <p className="mb-4">
              The most important implication of this property classification is that almost every cryptocurrency transaction can create a taxable event. Buying cryptocurrency with US dollars is not taxable (it establishes your cost basis), but selling cryptocurrency for dollars, trading one cryptocurrency for another, using cryptocurrency to purchase goods or services, and receiving cryptocurrency as payment all trigger capital gains tax calculations. This broad taxable event scope means that active crypto traders can accumulate hundreds or even thousands of taxable transactions in a single year.
            </p>
            <p>
              The tax rate you pay on cryptocurrency gains depends on your holding period. If you hold the cryptocurrency for more than one year before selling or exchanging it, you qualify for long-term capital gains rates of 0%, 15%, or 20%. Gains on cryptocurrency held for one year or less are taxed as short-term capital gains at your ordinary income rate, which ranges from 10% to 37%. This distinction makes holding periods critically important for crypto tax planning.
            </p>
          </div>
        </div>
      </section>

      {/* Taxable Events */}
      <section className="py-8 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Common Cryptocurrency Taxable Events
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-emerald-200 bg-emerald-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-emerald-800">
                  <CheckCircle className="h-5 w-5" />
                  NOT Taxable Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2"><span className="text-emerald-600">+</span> Buying crypto with fiat currency (USD)</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600">+</span> Transferring crypto between your own wallets</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600">+</span> Donating crypto to a qualified charity</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600">+</span> Gifting crypto under the annual exclusion ($18,000)</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-600">+</span> Holding crypto without selling or trading</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-red-800">
                  <AlertTriangle className="h-5 w-5" />
                  Taxable Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-600">-</span> Selling crypto for fiat currency (USD)</li>
                  <li className="flex items-start gap-2"><span className="text-red-600">-</span> Trading one crypto for another (BTC to ETH)</li>
                  <li className="flex items-start gap-2"><span className="text-red-600">-</span> Using crypto to purchase goods or services</li>
                  <li className="flex items-start gap-2"><span className="text-red-600">-</span> Receiving crypto as payment for services</li>
                  <li className="flex items-start gap-2"><span className="text-red-600">-</span> Mining, staking, and airdrop income (ordinary income)</li>
                  <li className="flex items-start gap-2"><span className="text-red-600">-</span> Earning DeFi yield farming rewards</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculation Examples */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Cryptocurrency Capital Gains Calculation Examples
          </h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-emerald-800">Example 1: Long-Term Bitcoin Sale (Single Filer)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-700 space-y-2 text-sm">
                  <p><strong>Scenario:</strong> Bought 1 BTC for $20,000 on January 15, 2023. Sold for $65,000 on March 1, 2025.</p>
                  <p><strong>Holding period:</strong> Over 1 year (qualifies for long-term rates)</p>
                  <p><strong>Cost basis:</strong> $20,000</p>
                  <p><strong>Capital gain:</strong> $65,000 - $20,000 = $45,000</p>
                  <p><strong>Assuming $50,000 other taxable income:</strong> Total income = $95,000. Most gain falls in 15% bracket.</p>
                  <p><strong>Estimated tax:</strong> ~$6,750 (15% on $45,000)</p>
                  <p><strong>Effective rate:</strong> 15%</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-emerald-800">Example 2: Multiple Short-Term Crypto Trades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-700 space-y-2 text-sm">
                  <p><strong>Scenario:</strong> Day trader with $80,000 salary, made $25,000 in short-term crypto gains across 150 trades during the year.</p>
                  <p><strong>Holding period:</strong> All under 1 year (short-term gains)</p>
                  <p><strong>Total taxable income:</strong> $80,000 + $25,000 = $105,000</p>
                  <p><strong>Short-term gains taxed at:</strong> 22% marginal rate (partially in 24% bracket)</p>
                  <p><strong>Estimated tax on crypto gains:</strong> ~$5,700 (effective rate of ~23%)</p>
                  <p><strong>Comparison:</strong> If held long-term, the same $25,000 gain would owe only ~$2,550 at 15%, saving $3,150.</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-emerald-800">Example 3: Crypto-to-Crypto Trade</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-700 space-y-2 text-sm">
                  <p><strong>Scenario:</strong> Traded 10 ETH (cost basis $300 each = $3,000) for 0.5 BTC when ETH was worth $400 each and BTC was worth $8,000.</p>
                  <p><strong>Disposal value:</strong> 10 ETH x $400 = $4,000</p>
                  <p><strong>Cost basis:</strong> 10 ETH x $300 = $3,000</p>
                  <p><strong>Capital gain on ETH:</strong> $4,000 - $3,000 = $1,000</p>
                  <p><strong>New cost basis in BTC:</strong> $4,000 (fair market value of ETH at time of trade)</p>
                  <p><strong>Tax owed:</strong> Short-term or long-term rate on $1,000 gain, depending on ETH holding period.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* DeFi and Staking */}
      <section className="py-8 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            DeFi, Staking, and NFT Tax Implications
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-emerald-200">
              <CardHeader>
                <CardTitle className="text-lg text-emerald-800">Staking Rewards</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm">
                <p className="mb-2">Staking rewards are taxable as ordinary income at their fair market value on the date you receive them. When you later sell staked tokens, you may also owe capital gains tax on any appreciation since you received the staking reward. Many stakers are caught off guard by this double-taxation aspect.</p>
              </CardContent>
            </Card>
            <Card className="border-emerald-200">
              <CardHeader>
                <CardTitle className="text-lg text-emerald-800">DeFi Yield Farming</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm">
                <p className="mb-2">Yield farming creates multiple taxable events. Depositing tokens into a liquidity pool may be treated as an exchange if you receive LP tokens. Yield rewards earned are taxable as ordinary income when received. Withdrawing liquidity and receiving back different tokens triggers another capital gains calculation.</p>
              </CardContent>
            </Card>
            <Card className="border-emerald-200">
              <CardHeader>
                <CardTitle className="text-lg text-emerald-800">NFTs</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm">
                <p className="mb-2">Buying and selling NFTs triggers capital gains tax on any profit. If you create and sell NFTs, the proceeds are generally treated as ordinary business income. Minting an NFT is not a taxable event, but gas fees paid during minting can be added to your cost basis.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tax Strategies */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Strategies to Reduce Cryptocurrency Capital Gains Tax
          </h2>
          <div className="grid gap-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-800 mb-2">1. Hold for More Than One Year</h3>
                <p className="text-gray-700 text-sm">The simplest strategy to cut your crypto tax bill in half. Long-term capital gains rates (0%, 15%, 20%) are significantly lower than short-term ordinary rates (up to 37%). Before selling, check the exact purchase date on your exchange and consider waiting until you cross the one-year threshold.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-800 mb-2">2. Harvest Crypto Losses Aggressively</h3>
                <p className="text-gray-700 text-sm">The wash sale rule may not currently apply to cryptocurrency, giving crypto investors an advantage over stock investors. You can sell losing crypto positions to offset gains from winners and immediately repurchase the same asset if desired. This strategy can significantly reduce your net taxable gains.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-800 mb-2">3. Use Specific Identification Accounting</h3>
                <p className="text-gray-700 text-sm">When you sell a portion of a larger cryptocurrency holding, you can choose which specific units (lots) are being sold. Choosing the lots with the highest cost basis (which produce the smallest gain or largest loss) can minimize your tax liability. Many exchanges now support specific identification, but you may need to track lots manually.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-800 mb-2">4. Donate Appreciated Crypto to Charity</h3>
                <p className="text-gray-700 text-sm">Donating cryptocurrency that has appreciated in value allows you to avoid capital gains tax entirely while claiming a charitable deduction for the fair market value. This is more tax-efficient than selling the crypto, paying capital gains tax, and donating the remaining cash.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-800 mb-2">5. Use a Self-Directed IRA or 401(k)</h3>
                <p className="text-gray-700 text-sm">Holding cryptocurrency inside a self-directed retirement account shields all gains from current taxation. Trades within the account are not taxable events. Roth accounts offer tax-free withdrawals in retirement, while traditional accounts defer taxes until distribution.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Frequently Asked Questions About Cryptocurrency Tax
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Common questions about how cryptocurrency is taxed, reported, and strategies for managing your crypto tax obligations.
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
            Calculate Your Cryptocurrency Capital Gains Tax
          </h2>
          <p className="text-emerald-100 text-lg mb-8">
            Use our free calculator to estimate the tax on your cryptocurrency gains and plan your trading strategy.
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
                Tax Rates Table
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <RelatedCalculators />
    </SiteLayout>
  );
}
