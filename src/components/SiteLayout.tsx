'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calculator, Menu, X, TrendingUp, ChevronDown } from 'lucide-react';

const navLinks = [
  { href: '/#calculator', label: 'Calculator' },
  { href: '/capital-gains-tax-rates', label: 'Tax Rates' },
  { href: '/long-term-capital-gains-tax-calculator', label: 'Long-Term' },
  { href: '/short-term-capital-gains-tax-calculator', label: 'Short-Term' },
  { href: '/stock-capital-gains-tax-calculator', label: 'Stocks' },
  { href: '/real-estate-capital-gains-tax-calculator', label: 'Real Estate' },
  { href: '/home-sale-capital-gains-tax-calculator', label: 'Home Sale' },
  { href: '/day-trading-tax-calculator', label: 'Day Trading' },
  { href: '/capital-gains-tax-by-state', label: 'By State' },
  { href: '/how-to-calculate-capital-gains-tax', label: 'Guide' },
];

const calculatorPages = [
  { href: '/capital-gains-tax-calculator', label: 'Capital Gains Calculator' },
  { href: '/long-term-capital-gains-tax-calculator', label: 'Long-Term Calculator' },
  { href: '/short-term-capital-gains-tax-calculator', label: 'Short-Term Calculator' },
  { href: '/stock-capital-gains-tax-calculator', label: 'Stock Calculator' },
  { href: '/real-estate-capital-gains-tax-calculator', label: 'Real Estate Calculator' },
  { href: '/home-sale-capital-gains-tax-calculator', label: 'Home Sale Calculator' },
  { href: '/day-trading-tax-calculator', label: 'Day Trading Calculator' },
];

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calcDropdownOpen, setCalcDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">TaxGainsCalc</span>
                <p className="text-xs text-gray-500 hidden sm:block">Capital Gains Tax Calculator</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.slice(0, 4).map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-emerald-600 transition px-2.5 py-2 rounded-md hover:bg-emerald-50"
                >
                  {link.label}
                </Link>
              ))}

              {/* More Dropdown */}
              <div className="relative"
                onMouseEnter={() => setCalcDropdownOpen(true)}
                onMouseLeave={() => setCalcDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-emerald-600 transition px-2.5 py-2 rounded-md hover:bg-emerald-50">
                  More
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${calcDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {calcDropdownOpen && (
                  <div className="absolute right-0 top-full mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {navLinks.slice(4).map(link => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 mt-1 pt-1">
                      <Link
                        href="/capital-gains-on-crypto"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition"
                      >
                        Crypto Tax Guide
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-3 pb-3 border-t border-gray-100 pt-3">
              <div className="grid grid-cols-2 gap-1">
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition px-3 py-2.5 rounded-md"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/capital-gains-on-crypto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition px-3 py-2.5 rounded-md"
                >
                  Crypto Tax Guide
                </Link>
              </div>
            </nav>
          )}
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
              <h4 className="font-semibold text-white mb-4">Calculators</h4>
              <ul className="space-y-2 text-sm">
                {calculatorPages.map(page => (
                  <li key={page.href}>
                    <Link href={page.href} className="hover:text-emerald-400 transition">{page.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/capital-gains-tax-rates" className="hover:text-emerald-400 transition">Tax Rates 2025-2026</Link></li>
                <li><Link href="/capital-gains-tax-by-state" className="hover:text-emerald-400 transition">Tax by State</Link></li>
                <li><Link href="/how-to-calculate-capital-gains-tax" className="hover:text-emerald-400 transition">How to Calculate</Link></li>
                <li><Link href="/capital-gains-on-crypto" className="hover:text-emerald-400 transition">Crypto Tax Guide</Link></li>
                <li><Link href="/day-trading-tax-calculator" className="hover:text-emerald-400 transition">Day Trading Taxes</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy-policy" className="hover:text-emerald-400 transition">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-emerald-400 transition">Terms of Service</Link></li>
                <li><Link href="/disclaimer" className="hover:text-emerald-400 transition">Disclaimer</Link></li>
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
