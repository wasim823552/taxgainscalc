'use client';

import Link from 'next/link';
import { Calculator } from 'lucide-react';

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">TaxGainsCalc</h1>
                <p className="text-xs text-gray-500">Capital Gains Tax Calculator</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/#calculator" className="text-sm text-gray-600 hover:text-emerald-600 transition">Calculator</Link>
              <Link href="/#rates" className="text-sm text-gray-600 hover:text-emerald-600 transition">Tax Rates</Link>
              <Link href="/#guide" className="text-sm text-gray-600 hover:text-emerald-600 transition">Guide</Link>
              <Link href="/#faq" className="text-sm text-gray-600 hover:text-emerald-600 transition">FAQ</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white">TaxGainsCalc</h3>
                  <p className="text-xs text-gray-400">Capital Gains Calculator</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Free online capital gains tax calculator for USA investors. Calculate your 2025-2026 tax liability instantly.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#calculator" className="hover:text-emerald-400 transition">Tax Calculator</Link></li>
                <li><Link href="/#rates" className="hover:text-emerald-400 transition">Tax Rates 2025</Link></li>
                <li><Link href="/#guide" className="hover:text-emerald-400 transition">How to Calculate</Link></li>
                <li><Link href="/#faq" className="hover:text-emerald-400 transition">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy-policy" className="hover:text-emerald-400 transition">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-emerald-400 transition">Terms of Service</Link></li>
                <li><Link href="/disclaimer" className="hover:text-emerald-400 transition">Disclaimer</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-emerald-400 transition">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-emerald-400 transition">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} TaxGainsCalc. All rights reserved.</p>
            <p className="mt-2">
              This calculator provides estimates only. Consult a qualified tax professional for personalized advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
