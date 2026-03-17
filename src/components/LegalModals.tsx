'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'disclaimer' | 'contact' | 'about';
  isOpen: boolean;
  onClose: () => void;
}

const content = {
  privacy: {
    title: 'Privacy Policy',
    content: `
      <h2>Privacy Policy for TaxGainsCalc</h2>
      <p><strong>Last Updated:</strong> March 2026</p>
      
      <h3>1. Introduction</h3>
      <p>Welcome to TaxGainsCalc (taxgainscalc.com). We are committed to protecting your privacy and ensuring the security of any information you provide while using our Capital Gains Tax Calculator. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
      
      <h3>2. Information We Collect</h3>
      <p>We may collect information about you in various ways. The information we may collect includes:</p>
      <ul>
        <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent on pages, and calculator usage patterns.</li>
        <li><strong>Device Information:</strong> Browser type, operating system, device type, and screen resolution.</li>
        <li><strong>IP Address:</strong> Your Internet Protocol address, which may be used for security and analytics purposes.</li>
        <li><strong>Cookies:</strong> Small data files stored on your device to enhance your browsing experience.</li>
      </ul>
      
      <h3>3. How We Use Your Information</h3>
      <p>We use the information we collect for various purposes, including:</p>
      <ul>
        <li>Providing and maintaining our tax calculator services</li>
        <li>Improving, personalizing, and expanding our website</li>
        <li>Understanding and analyzing how you use our website</li>
        <li>Developing new products, services, features, and functionality</li>
        <li>Communicating with you for customer service and support</li>
        <li>Sending you updates and marketing communications (with your consent)</li>
      </ul>
      
      <h3>4. Google AdSense and Third-Party Advertising</h3>
      <p>We use Google AdSense to display advertisements on our website. Google AdSense may use cookies and web beacons to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting Google's Ads Settings.</p>
      <p>Third-party vendors, including Google, may use cookies to serve ads based on your prior visits to this website or other websites. You can opt out of personalized advertising by visiting www.aboutads.info.</p>
      
      <h3>5. Cookies and Tracking Technologies</h3>
      <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.</p>
      <p>Types of cookies we use:</p>
      <ul>
        <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
        <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
        <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements</li>
      </ul>
      
      <h3>6. Data Security</h3>
      <p>We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.</p>
      
      <h3>7. Your Rights</h3>
      <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
      <ul>
        <li>The right to access your personal information</li>
        <li>The right to rectify inaccurate information</li>
        <li>The right to request deletion of your information</li>
        <li>The right to restrict or object to processing</li>
        <li>The right to data portability</li>
      </ul>
      
      <h3>8. Children's Privacy</h3>
      <p>Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.</p>
      
      <h3>9. Changes to This Privacy Policy</h3>
      <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
      
      <h3>10. Contact Us</h3>
      <p>If you have any questions about this Privacy Policy, please contact us at:</p>
      <p>Email: taxgainscalc@gmail.com</p>
    `
  },
  terms: {
    title: 'Terms of Service',
    content: `
      <h2>Terms of Service for TaxGainsCalc</h2>
      <p><strong>Last Updated:</strong> March 2026</p>
      
      <h3>1. Acceptance of Terms</h3>
      <p>By accessing and using TaxGainsCalc (taxgainscalc.com), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>
      
      <h3>2. Description of Service</h3>
      <p>TaxGainsCalc provides a free online capital gains tax calculator designed to help users estimate potential tax liabilities on capital gains from investments. Our calculator provides estimates based on current U.S. federal tax laws and rates.</p>
      
      <h3>3. Disclaimer of Warranty</h3>
      <p>The tax calculations and information provided on this website are for informational and educational purposes only. They are not intended to be, and should not be used as, professional tax advice. The calculations provided:</p>
      <ul>
        <li>Are estimates only and may not reflect your actual tax liability</li>
        <li>Do not account for all possible tax situations, deductions, or credits</li>
        <li>May not reflect the most current tax laws or rates</li>
        <li>Should not be relied upon for making financial or tax decisions</li>
      </ul>
      
      <h3>4. Limitation of Liability</h3>
      <p>TaxGainsCalc and its owners, operators, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our website or reliance on any information provided. This includes, but is not limited to:</p>
      <ul>
        <li>Errors in tax calculations</li>
        <li>Loss of profits or revenue</li>
        <li>Loss of data</li>
        <li>Any financial decisions made based on our calculations</li>
      </ul>
      
      <h3>5. Professional Advice Recommended</h3>
      <p>We strongly recommend consulting with a qualified tax professional, accountant, or financial advisor before making any tax-related decisions. Tax laws are complex and subject to change, and individual circumstances can significantly affect tax liability.</p>
      
      <h3>6. Intellectual Property</h3>
      <p>All content on this website, including text, graphics, logos, and software, is the property of TaxGainsCalc and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
      
      <h3>7. User Responsibilities</h3>
      <p>By using our website, you agree to:</p>
      <ul>
        <li>Provide accurate information when using our calculator</li>
        <li>Not use the website for any illegal purpose</li>
        <li>Not attempt to disrupt or damage the website</li>
        <li>Not collect or harvest user information</li>
      </ul>
      
      <h3>8. Third-Party Links and Advertisements</h3>
      <p>Our website may contain links to third-party websites and display third-party advertisements. We are not responsible for the content, privacy practices, or accuracy of information on third-party sites.</p>
      
      <h3>9. Modifications to Service</h3>
      <p>We reserve the right to modify, suspend, or discontinue any part of our service at any time without notice. We may also update these Terms of Service periodically.</p>
      
      <h3>10. Governing Law</h3>
      <p>These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.</p>
      
      <h3>11. Contact Information</h3>
      <p>For questions about these Terms of Service, please contact us at:</p>
      <p>Email: taxgainscalc@gmail.com</p>
    `
  },
  disclaimer: {
    title: 'Disclaimer',
    content: `
      <h2>Disclaimer for TaxGainsCalc</h2>
      <p><strong>Last Updated:</strong> March 2026</p>
      
      <h3>General Disclaimer</h3>
      <p>The information provided on TaxGainsCalc (taxgainscalc.com) is for general informational and educational purposes only. All information on the site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>
      
      <h3>Not Professional Tax Advice</h3>
      <p>The capital gains tax calculator and related content on this website should NOT be considered as professional tax advice, financial advice, or legal advice. The calculations are estimates based on publicly available tax rate information and may not account for:</p>
      <ul>
        <li>State and local taxes</li>
        <li>Alternative Minimum Tax (AMT)</li>
        <li>Specific deductions and credits you may be eligible for</li>
        <li>Recent changes in tax laws</li>
        <li>Your complete financial situation</li>
        <li>Complex investment structures</li>
      </ul>
      
      <h3>No Client-Advisor Relationship</h3>
      <p>Your use of this website does not create any tax professional-client, accountant-client, or attorney-client relationship. The information provided should not be relied upon as a substitute for consultations with qualified professionals.</p>
      
      <h3>Accuracy of Calculations</h3>
      <p>While we strive to provide accurate tax calculations, we cannot guarantee that:</p>
      <ul>
        <li>All calculations are error-free</li>
        <li>Tax rates and brackets are always up-to-date</li>
        <li>The calculator accounts for all applicable tax rules</li>
        <li>Results match your actual tax liability</li>
      </ul>
      
      <h3>External Links Disclaimer</h3>
      <p>This website may contain links to external websites that are not provided or maintained by or in any way affiliated with TaxGainsCalc. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
      
      <h3>Advertising Disclaimer</h3>
      <p>This website displays third-party advertisements through Google AdSense. These advertisements may not reflect the views or opinions of TaxGainsCalc. We are not responsible for the content of any advertisements displayed on our website.</p>
      
      <h3>Limitation of Liability</h3>
      <p>Under no circumstances shall TaxGainsCalc or its owners, operators, employees, or affiliates have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.</p>
      
      <h3>Professional Consultation</h3>
      <p>Before making any financial or tax decisions, we strongly recommend that you consult with:</p>
      <ul>
        <li>A Certified Public Accountant (CPA)</li>
        <li>A tax attorney</li>
        <li>A qualified financial advisor</li>
        <li>The Internal Revenue Service (IRS)</li>
      </ul>
      
      <h3>Contact Us</h3>
      <p>If you have questions about this disclaimer, please contact us at:</p>
      <p>Email: taxgainscalc@gmail.com</p>
    `
  },
  contact: {
    title: 'Contact Us',
    content: `
      <h2>Contact TaxGainsCalc</h2>
      
      <h3>Get in Touch</h3>
      <p>We value your feedback and are here to help. If you have any questions, suggestions, or concerns about our Capital Gains Tax Calculator or any other aspect of our website, please don't hesitate to reach out to us.</p>
      
      <h3>Email</h3>
      <p>For general inquiries, feedback, or support:</p>
      <p><strong>taxgainscalc@gmail.com</strong></p>
      
      <h3>Response Time</h3>
      <p>We aim to respond to all inquiries within 24-48 business hours. Please note that response times may be longer during peak tax season (January through April).</p>
      
      <h3>What We Can Help With</h3>
      <ul>
        <li>Questions about our capital gains tax calculator</li>
        <li>Technical issues or bugs</li>
        <li>Suggestions for new features or improvements</li>
        <li>General inquiries about our website</li>
        <li>Advertising opportunities</li>
        <li>Privacy concerns</li>
      </ul>
      
      <h3>What We Cannot Help With</h3>
      <p>Please note that we are not tax professionals and cannot provide:</p>
      <ul>
        <li>Personal tax advice</li>
        <li>Help with filing your tax returns</li>
        <li>Legal or financial advice</li>
        <li>Assistance with IRS disputes</li>
      </ul>
      <p>For professional tax advice, please consult a qualified tax professional or CPA.</p>
      
      <h3>Report Errors</h3>
      <p>If you notice any errors in our calculations or content, please let us know. We appreciate your help in improving the accuracy of our calculator.</p>
      
      <h3>Business Inquiries</h3>
      <p>For business partnerships, advertising, or media inquiries, please contact us at the email above with "Business Inquiry" in the subject line.</p>
      
      <h3>Website</h3>
      <p>https://taxgainscalc.com</p>
      
      <p>We look forward to hearing from you!</p>
    `
  },
  about: {
    title: 'About Us',
    content: `
      <h2>About TaxGainsCalc</h2>
      
      <h3>Our Mission</h3>
      <p>Welcome to TaxGainsCalc, your trusted online resource for calculating capital gains tax in the United States. Our mission is to provide a free, easy-to-use, and accurate capital gains tax calculator that helps American investors understand their potential tax liabilities.</p>
      
      <h3>Who We Are</h3>
      <p>TaxGainsCalc was created by a team of finance enthusiasts and technology professionals who recognized the need for a straightforward, accessible tool for estimating capital gains taxes. We understand that navigating the complexities of the U.S. tax code can be challenging, and we're here to simplify the process.</p>
      
      <h3>What We Offer</h3>
      <p>Our flagship product is a comprehensive Capital Gains Tax Calculator that:</p>
      <ul>
        <li>Calculates both short-term and long-term capital gains tax</li>
        <li>Uses current 2025-2026 federal tax rates</li>
        <li>Supports all filing statuses</li>
        <li>Includes the Net Investment Income Tax (NIIT)</li>
        <li>Provides instant, accurate estimates</li>
        <li>Is completely free to use</li>
      </ul>
      
      <h3>Our Commitment to Accuracy</h3>
      <p>We strive to keep our calculator up-to-date with the latest federal tax rates and regulations. Our tax bracket information is sourced from official IRS publications and is updated annually to reflect any changes in tax law.</p>
      
      <h3>Educational Resources</h3>
      <p>Beyond our calculator, we provide comprehensive educational content about:</p>
      <ul>
        <li>Capital gains tax basics</li>
        <li>Short-term vs. long-term capital gains</li>
        <li>Tax-saving strategies</li>
        <li>IRS reporting requirements</li>
        <li>Investment tax planning</li>
      </ul>
      
      <h3>Our Values</h3>
      <ul>
        <li><strong>Accessibility:</strong> Financial tools should be available to everyone, regardless of their financial background.</li>
        <li><strong>Transparency:</strong> We're clear about what our calculator can and cannot do.</li>
        <li><strong>Privacy:</strong> We don't store your financial data or personal information.</li>
        <li><strong>Education:</strong> We believe informed investors make better decisions.</li>
      </ul>
      
      <h3>Important Disclaimer</h3>
      <p>While we strive for accuracy, our calculator provides estimates only. Tax situations can be complex, and we recommend consulting with a qualified tax professional for personalized advice.</p>
      
      <h3>Contact Us</h3>
      <p>We welcome your feedback and suggestions. Feel free to reach out to us at:</p>
      <p>Email: taxgainscalc@gmail.com</p>
      <p>Website: https://taxgainscalc.com</p>
      
      <p>Thank you for choosing TaxGainsCalc for your tax planning needs!</p>
    `
  }
};

export default function LegalModal({ type, isOpen, onClose }: LegalModalProps) {
  const modalContent = content[type];
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[85vh]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-emerald-800">
            {modalContent.title}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div 
            className="prose prose-sm max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: modalContent.content }}
          />
        </ScrollArea>
        <div className="flex justify-end pt-4">
          <Button onClick={onClose} variant="outline">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
