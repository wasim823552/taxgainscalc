import { Metadata } from 'next';
import PrivacyPolicyPage from './PrivacyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy - TaxGainsCalc | Your Privacy Matters',
  description: 'Read our comprehensive privacy policy. Learn how TaxGainsCalc collects, uses, and protects your information.',
  alternates: {
    canonical: 'https://taxgainscalc.com/privacy-policy',
  },
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}
