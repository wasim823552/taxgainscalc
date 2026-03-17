'use client';

import SiteLayout from '@/components/SiteLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Clock, MessageCircle, HelpCircle, Briefcase, AlertCircle } from 'lucide-react';

export default function ContactContent() {
  return (
    <SiteLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We value your feedback and are here to help. Reach out to us with any questions or suggestions.
          </p>
        </div>

        {/* Email Card */}
        <Card className="mb-8 border-0 shadow-lg bg-gradient-to-r from-emerald-50 to-teal-50">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Email Us</h2>
            <p className="text-gray-600 mb-4">For general inquiries, feedback, or support:</p>
            <a 
              href="mailto:taxgainscalc@gmail.com" 
              className="text-xl font-semibold text-emerald-600 hover:text-emerald-700 transition"
            >
              taxgainscalc@gmail.com
            </a>
          </CardContent>
        </Card>

        {/* Response Time */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Response Time</h2>
            </div>
            <p className="text-gray-700">
              We aim to respond to all inquiries within <strong>24-48 business hours</strong>. Please note that response times may be longer during peak tax season (January through April). We appreciate your patience and will get back to you as soon as possible.
            </p>
          </CardContent>
        </Card>

        {/* What We Can Help With */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">What We Can Help With</h2>
            </div>
            <ul className="space-y-3">
              {[
                'Questions about our capital gains tax calculator',
                'Technical issues or bug reports',
                'Suggestions for new features or improvements',
                'General inquiries about our website',
                'Advertising opportunities',
                'Privacy concerns or data questions'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* What We Cannot Help With */}
        <Card className="mb-8 border-amber-200 bg-amber-50">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-amber-600" />
              </div>
              <h2 className="text-xl font-bold text-amber-800">What We Cannot Help With</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Please note that we are not tax professionals and cannot provide:
            </p>
            <ul className="space-y-2">
              {[
                'Personal tax advice or recommendations',
                'Help with filing your tax returns',
                'Legal or financial advice',
                'Assistance with IRS disputes or audits',
                'State-specific tax guidance'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 mt-4">
              For professional tax advice, please consult a <strong>qualified tax professional</strong> or <strong>Certified Public Accountant (CPA)</strong>.
            </p>
          </CardContent>
        </Card>

        {/* Report Errors */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Report Errors</h2>
            </div>
            <p className="text-gray-700">
              If you notice any errors in our calculations or content, please let us know. We appreciate your help in improving the accuracy of our calculator. When reporting an error, please include:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                <span className="text-gray-700">The specific calculation or section with the error</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                <span className="text-gray-700">The input values you used</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                <span className="text-gray-700">What you expected vs. what you received</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Business Inquiries */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Business Inquiries</h2>
            </div>
            <p className="text-gray-700">
              For business partnerships, advertising opportunities, or media inquiries, please contact us at the email above with <strong>"Business Inquiry"</strong> in the subject line. We're open to exploring mutually beneficial partnerships.
            </p>
          </CardContent>
        </Card>

        {/* Website Info */}
        <div className="text-center mt-8 p-6 bg-gray-50 rounded-lg">
          <p className="text-gray-600 mb-2">Website</p>
          <a href="https://taxgainscalc.com" className="text-emerald-600 hover:underline font-semibold text-lg">
            https://taxgainscalc.com
          </a>
          <p className="text-gray-500 text-sm mt-4">
            We look forward to hearing from you!
          </p>
        </div>
      </div>
    </SiteLayout>
  );
}
