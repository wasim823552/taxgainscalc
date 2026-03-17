'use client';

import SiteLayout from '@/components/SiteLayout';
import { Card, CardContent } from '@/components/ui/card';

export default function TermsContent() {
  return (
    <SiteLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600">
            <strong>Last Updated:</strong> March 2026
          </p>
        </div>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using TaxGainsCalc (taxgainscalc.com), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website. Your continued use of the website constitutes your acceptance of any changes to these terms.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              TaxGainsCalc provides a free online capital gains tax calculator designed to help users estimate potential tax liabilities on capital gains from investments. Our calculator provides estimates based on current U.S. federal tax laws and rates.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The service includes a tax calculator, educational content about capital gains tax, tax rate tables, and related information. All services are provided free of charge and are intended for informational and educational purposes only.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-amber-200 bg-amber-50">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-amber-800 mb-4">3. Disclaimer of Warranty</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The tax calculations and information provided on this website are for informational and educational purposes only. They are not intended to be, and should not be used as, professional tax advice. The calculations provided:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-amber-600 mt-1">•</span>
                Are estimates only and may not reflect your actual tax liability
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-amber-600 mt-1">•</span>
                Do not account for all possible tax situations, deductions, or credits
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-amber-600 mt-1">•</span>
                May not reflect the most current tax laws or rates
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-amber-600 mt-1">•</span>
                Should not be relied upon for making financial or tax decisions
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">4. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              TaxGainsCalc and its owners, operators, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our website or reliance on any information provided. This includes, but is not limited to:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                Errors in tax calculations
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                Loss of profits, revenue, or savings
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                Loss of data or interruption of business
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                Any financial decisions made based on our calculations
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                Any claim arising from the use or inability to use the service
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">5. Professional Advice Recommended</h2>
            <p className="text-gray-700 leading-relaxed">
              We strongly recommend consulting with a qualified tax professional, Certified Public Accountant (CPA), or financial advisor before making any tax-related decisions. Tax laws are complex and subject to change, and individual circumstances can significantly affect tax liability. The information provided on this website is not a substitute for professional advice tailored to your specific situation.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">6. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content on this website, including text, graphics, logos, images, and software, is the property of TaxGainsCalc and is protected by United States and international copyright and intellectual property laws.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You may use our calculator and view our content for personal, non-commercial purposes. You may not reproduce, distribute, modify, create derivative works from, publicly display, or exploit any content from this website without our express written permission.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">7. User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By using our website, you agree to:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                Provide accurate information when using our calculator
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                Not use the website for any illegal purpose
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                Not attempt to disrupt or damage the website
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                Not collect or harvest user information
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                Not use automated systems to access the website
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                Not interfere with other users' use of the website
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">8. Third-Party Links and Advertisements</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites and display third-party advertisements. We are not responsible for the content, privacy practices, or accuracy of information on third-party sites. We do not endorse or guarantee the products or services advertised on our website. Interactions with third parties are solely between you and the third party.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">9. Modifications to Service</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any part of our service at any time without notice. We may also update these Terms of Service periodically. Your continued use of the website after any changes constitutes your acceptance of the new terms.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">10. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify and hold harmless TaxGainsCalc and its owners, operators, employees, and affiliates from any claims, damages, losses, or expenses arising from your use of the website or violation of these terms.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">11. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles. Any disputes arising from these terms shall be resolved in the appropriate courts of the United States.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">12. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Email:</strong> taxgainscalc@gmail.com</p>
              <p className="text-gray-700"><strong>Website:</strong> https://taxgainscalc.com</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </SiteLayout>
  );
}
