'use client';

import SiteLayout from '@/components/SiteLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function PrivacyContent() {
  return (
    <SiteLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            <strong>Last Updated:</strong> March 2026
          </p>
        </div>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to TaxGainsCalc (taxgainscalc.com). We are committed to protecting your privacy and ensuring the security of any information you provide while using our Capital Gains Tax Calculator. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. By using our website, you consent to the data practices described in this policy.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect information about you in various ways. The information we may collect includes:
            </p>
            <ul className="space-y-3">
              <li className="text-gray-700">
                <strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent on pages, and calculator usage patterns. This helps us improve our services.
              </li>
              <li className="text-gray-700">
                <strong>Device Information:</strong> Browser type, operating system, device type, and screen resolution. This information helps us optimize the website for different devices.
              </li>
              <li className="text-gray-700">
                <strong>IP Address:</strong> Your Internet Protocol address, which may be used for security purposes, analytics, and to detect and prevent fraud.
              </li>
              <li className="text-gray-700">
                <strong>Cookies:</strong> Small data files stored on your device to enhance your browsing experience, remember preferences, and provide relevant content.
              </li>
            </ul>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-blue-800 text-sm">
                <strong>Important:</strong> We do not store your financial data or calculation inputs. All calculations are performed locally in your browser and are not saved to our servers.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                Providing and maintaining our tax calculator services
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                Improving, personalizing, and expanding our website
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                Understanding and analyzing how you use our website
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                Developing new products, services, features, and functionality
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                Communicating with you for customer service and support
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                Sending you updates and marketing communications (with your consent)
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                Detecting and preventing fraud or technical issues
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">4. Google AdSense and Third-Party Advertising</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use Google AdSense to display advertisements on our website. Google AdSense may use cookies and web beacons to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="text-gray-700">
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
                  Google Ads Settings
                </a>
              </li>
              <li className="text-gray-700">
                <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
                  www.aboutads.info
                </a>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Third-party vendors, including Google, may use cookies to serve ads based on your prior visits to this website or other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">5. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">Types of cookies we use:</p>
            <ul className="space-y-2">
              <li className="text-gray-700">
                <strong>Essential Cookies:</strong> Required for the website to function properly. These cannot be disabled.
              </li>
              <li className="text-gray-700">
                <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website, allowing us to improve our services.
              </li>
              <li className="text-gray-700">
                <strong>Advertising Cookies:</strong> Used to deliver relevant advertisements based on your interests.
              </li>
              <li className="text-gray-700">
                <strong>Preference Cookies:</strong> Remember your settings and preferences for a better user experience.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">6. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and regular security audits. However, please note that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">7. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                The right to access your personal information
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                The right to rectify inaccurate information
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                The right to request deletion of your information
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                The right to restrict or object to processing
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                The right to data portability
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 mt-1">•</span>
                The right to withdraw consent
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise any of these rights, please contact us at taxgainscalc@gmail.com.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately, and we will take steps to delete such information.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">9. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
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
