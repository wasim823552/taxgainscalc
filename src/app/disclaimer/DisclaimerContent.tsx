'use client';

import SiteLayout from '@/components/SiteLayout';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, ExternalLink } from 'lucide-react';

export default function DisclaimerContent() {
  return (
    <SiteLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Disclaimer
          </h1>
          <p className="text-gray-600">
            <strong>Last Updated:</strong> March 2026
          </p>
        </div>

        {/* Important Notice */}
        <Card className="mb-8 border-red-200 bg-red-50">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <h2 className="text-xl font-bold text-red-800">Important Notice</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The information provided on TaxGainsCalc (taxgainscalc.com) is for general informational and educational purposes only. All information on the site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">Not Professional Tax Advice</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The capital gains tax calculator and related content on this website should NOT be considered as professional tax advice, financial advice, or legal advice. The calculations are estimates based on publicly available tax rate information and may not account for:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                State and local taxes that may apply to your situation
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                Alternative Minimum Tax (AMT) calculations
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                Specific deductions and credits you may be eligible for
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                Recent changes in tax laws that may affect your liability
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                Your complete financial situation and circumstances
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                Complex investment structures or tax situations
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                Wash sale rules or other tax regulations
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">No Client-Advisor Relationship</h2>
            <p className="text-gray-700 leading-relaxed">
              Your use of this website does not create any tax professional-client, accountant-client, or attorney-client relationship. The information provided should not be relied upon as a substitute for consultations with qualified professionals. No confidential relationship is established by your use of this website.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">Accuracy of Calculations</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we strive to provide accurate tax calculations, we cannot guarantee that:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                All calculations are error-free or complete
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                Tax rates and brackets are always up-to-date
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                The calculator accounts for all applicable tax rules
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                Results match your actual tax liability
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Tax laws are subject to change, and individual circumstances vary widely. Always verify calculations with a tax professional.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">External Links Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              This website may contain links to external websites that are not provided or maintained by or in any way affiliated with TaxGainsCalc. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites. Links to external websites are provided for convenience only and do not imply endorsement.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">Advertising Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              This website displays third-party advertisements through Google AdSense. These advertisements may not reflect the views or opinions of TaxGainsCalc. We are not responsible for the content of any advertisements displayed on our website. Appearance of an advertisement does not constitute endorsement or recommendation of the advertised product or service.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-red-200 bg-red-50">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-red-800 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              Under no circumstances shall TaxGainsCalc or its owners, operators, employees, or affiliates have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">Professional Consultation Recommended</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Before making any financial or tax decisions, we strongly recommend that you consult with qualified professionals:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                A Certified Public Accountant (CPA) for tax advice
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                A tax attorney for legal tax matters
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                A qualified financial advisor for investment decisions
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                The Internal Revenue Service (IRS) for official guidance
              </li>
            </ul>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <a 
                href="https://www.irs.gov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                <ExternalLink className="h-4 w-4" />
                Visit IRS.gov for official tax information
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">Fair Use Notice</h2>
            <p className="text-gray-700 leading-relaxed">
              This website may contain copyrighted material the use of which has not always been specifically authorized by the copyright owner. We make such material available in our efforts to provide educational resources about capital gains tax. We believe this constitutes a "fair use" of any such copyrighted material.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about this disclaimer, please contact us at:
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
