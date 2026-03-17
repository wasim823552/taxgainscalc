'use client';

import SiteLayout from '@/components/SiteLayout';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Shield, Target } from 'lucide-react';

export default function AboutContent() {
  return (
    <SiteLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About TaxGainsCalc
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted online resource for calculating capital gains tax in the United States
          </p>
        </div>

        {/* Mission */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to TaxGainsCalc, your trusted online resource for calculating capital gains tax in the United States. Our mission is to provide a free, easy-to-use, and accurate capital gains tax calculator that helps American investors understand their potential tax liabilities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We understand that navigating the complexities of the U.S. tax code can be challenging, and we're here to simplify the process. Whether you're selling stocks, real estate, or other investments, our calculator provides instant estimates to help you plan your financial decisions.
            </p>
          </CardContent>
        </Card>

        {/* Who We Are */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              TaxGainsCalc was created by a team of finance enthusiasts and technology professionals who recognized the need for a straightforward, accessible tool for estimating capital gains taxes. Our team combines expertise in tax law, software development, and user experience design to deliver a calculator that is both powerful and easy to use. We are committed to accuracy, transparency, and helping everyday investors make informed decisions.
            </p>
          </CardContent>
        </Card>

        {/* What We Offer */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-emerald-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Short & Long-Term Calculations</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Calculate both short-term and long-term capital gains tax based on your holding period and income level.
                </p>
              </CardContent>
            </Card>
            <Card className="border-emerald-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Current Tax Rates</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Uses the most current 2025-2026 federal tax rates and brackets for accurate calculations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-emerald-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">All Filing Statuses</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Support for all filing statuses including Single, Married Filing Jointly, and Head of Household.
                </p>
              </CardContent>
            </Card>
            <Card className="border-emerald-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">NIIT Calculation</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Includes the 3.8% Net Investment Income Tax calculation for high-income earners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Values */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-emerald-800 mb-6">Our Values</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Accessibility</h3>
                  <p className="text-gray-600">Financial tools should be available to everyone, regardless of their financial background or expertise level.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Transparency</h3>
                  <p className="text-gray-600">We're clear about what our calculator can and cannot do. We provide estimates, not professional tax advice.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Education</h3>
                  <p className="text-gray-600">We believe informed investors make better decisions. Our content helps you understand capital gains tax.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="border-amber-200 bg-amber-50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-amber-800 mb-2">Important Disclaimer</h3>
            <p className="text-gray-700 text-sm">
              While we strive for accuracy, our calculator provides estimates only. Tax situations can be complex, and we recommend consulting with a qualified tax professional for personalized advice. TaxGainsCalc is not a substitute for professional tax, legal, or financial advice.
            </p>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Questions or feedback? Contact us at{' '}
            <a href="mailto:taxgainscalc@gmail.com" className="text-emerald-600 hover:underline font-medium">
              taxgainscalc@gmail.com
            </a>
          </p>
        </div>
      </div>
    </SiteLayout>
  );
}
