import { Metadata } from 'next';
import DisclaimerPage from './DisclaimerContent';

export const metadata: Metadata = {
  title: 'Disclaimer - TaxGainsCalc | Important Legal Information',
  description: 'Read our disclaimer regarding the capital gains tax calculator. Understand the limitations of our tax estimation tool.',
  alternates: {
    canonical: 'https://taxgainscalc.com/disclaimer',
  },
};

export default function Disclaimer() {
  return <DisclaimerPage />;
}
