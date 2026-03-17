import { Metadata } from 'next';
import TermsOfServicePage from './TermsContent';

export const metadata: Metadata = {
  title: 'Terms of Service - TaxGainsCalc | Usage Terms',
  description: 'Read our terms of service for using TaxGainsCalc capital gains tax calculator. Understand your rights and responsibilities.',
  alternates: {
    canonical: 'https://taxgainscalc.com/terms-of-service',
  },
};

export default function TermsOfService() {
  return <TermsOfServicePage />;
}
