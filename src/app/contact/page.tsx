import { Metadata } from 'next';
import ContactPage from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us - TaxGainsCalc | Get in Touch',
  description: 'Contact TaxGainsCalc for questions, feedback, or support about our capital gains tax calculator. We\'re here to help.',
  alternates: {
    canonical: 'https://taxgainscalc.com/contact',
  },
};

export default function Contact() {
  return <ContactPage />;
}
