import { Metadata } from 'next';
import AboutPage from './AboutContent';

export const metadata: Metadata = {
  title: 'About Us - TaxGainsCalc | Free Capital Gains Tax Calculator',
  description: 'Learn about TaxGainsCalc, your trusted resource for capital gains tax calculations. Free online tax calculator for USA investors.',
  alternates: {
    canonical: 'https://taxgainscalc.com/about',
  },
};

export default function About() {
  return <AboutPage />;
}
