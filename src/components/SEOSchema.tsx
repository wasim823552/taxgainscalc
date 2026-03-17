'use client';

export default function SEOSchema() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TaxGainsCalc - Capital Gains Tax Calculator",
    "url": "https://taxgainscalc.com",
    "description": "Free online capital gains tax calculator for USA 2026. Calculate short-term and long-term capital gains tax on stocks, real estate, and investments.",
    "publisher": {
      "@type": "Organization",
      "name": "TaxGainsCalc",
      "email": "taxgainscalc@gmail.com",
      "url": "https://taxgainscalc.com"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://taxgainscalc.com/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Capital Gains Tax Calculator USA 2026",
    "url": "https://taxgainscalc.com",
    "description": "Free online capital gains tax calculator for the 2025-2026 tax year. Calculate your short-term and long-term capital gains tax liability with accurate federal tax rates.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Short-term capital gains calculation",
      "Long-term capital gains calculation",
      "2025-2026 federal tax rates",
      "Multiple filing statuses",
      "Net Investment Income Tax calculation"
    ],
    "browserRequirements": "Requires JavaScript",
    "softwareVersion": "2026.1"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the capital gains tax rate for 2025-2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For 2025-2026, long-term capital gains are taxed at 0%, 15%, or 20% depending on your taxable income and filing status. Short-term capital gains are taxed at your ordinary income tax rate (10% to 37%)."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate capital gains tax?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To calculate capital gains tax, subtract your purchase price (cost basis) from your sale price to determine your gain. Then determine if it's short-term (held 1 year or less) or long-term (held more than 1 year). Apply the appropriate tax rate based on your income and filing status."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between short-term and long-term capital gains?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Short-term capital gains apply to assets held for one year or less and are taxed at ordinary income rates (10%-37%). Long-term capital gains apply to assets held for more than one year and are taxed at preferential rates (0%, 15%, or 20%)."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Net Investment Income Tax (NIIT)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Net Investment Income Tax is an additional 3.8% tax that applies to individuals with modified adjusted gross income above certain thresholds ($200,000 for single filers, $250,000 for married filing jointly). It applies to investment income including capital gains."
        }
      },
      {
        "@type": "Question",
        "name": "How can I reduce my capital gains tax?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Strategies to reduce capital gains tax include holding investments for more than one year to qualify for lower long-term rates, using tax-loss harvesting to offset gains, utilizing 1031 exchanges for real estate, and taking advantage of the primary residence exclusion."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://taxgainscalc.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Capital Gains Tax Calculator",
        "item": "https://taxgainscalc.com/#calculator"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
