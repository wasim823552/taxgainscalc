// 2025/2026 Capital Gains Tax Brackets for USA

export type FilingStatus = 'single' | 'married_joint' | 'married_separate' | 'head_household';

export interface TaxBracket {
  min: number;
  max: number;
  rate: number;
}

// 2025 Long-Term Capital Gains Tax Brackets
export const longTermCapitalGainsBrackets: Record<FilingStatus, TaxBracket[]> = {
  single: [
    { min: 0, max: 48350, rate: 0 },
    { min: 48351, max: 533400, rate: 15 },
    { min: 533401, max: Infinity, rate: 20 }
  ],
  married_joint: [
    { min: 0, max: 96700, rate: 0 },
    { min: 96701, max: 600050, rate: 15 },
    { min: 600051, max: Infinity, rate: 20 }
  ],
  married_separate: [
    { min: 0, max: 48350, rate: 0 },
    { min: 48351, max: 300025, rate: 15 },
    { min: 300026, max: Infinity, rate: 20 }
  ],
  head_household: [
    { min: 0, max: 64750, rate: 0 },
    { min: 64751, max: 566700, rate: 15 },
    { min: 566701, max: Infinity, rate: 20 }
  ]
};

// 2025 Ordinary Income Tax Brackets (for short-term capital gains)
export const ordinaryIncomeBrackets: Record<FilingStatus, TaxBracket[]> = {
  single: [
    { min: 0, max: 11600, rate: 10 },
    { min: 11601, max: 47150, rate: 12 },
    { min: 47151, max: 100525, rate: 22 },
    { min: 100526, max: 191950, rate: 24 },
    { min: 191951, max: 243725, rate: 32 },
    { min: 243726, max: 609350, rate: 35 },
    { min: 609351, max: Infinity, rate: 37 }
  ],
  married_joint: [
    { min: 0, max: 23200, rate: 10 },
    { min: 23201, max: 94300, rate: 12 },
    { min: 94301, max: 201050, rate: 22 },
    { min: 201051, max: 383900, rate: 24 },
    { min: 383901, max: 487450, rate: 32 },
    { min: 487451, max: 731200, rate: 35 },
    { min: 731201, max: Infinity, rate: 37 }
  ],
  married_separate: [
    { min: 0, max: 11600, rate: 10 },
    { min: 11601, max: 47150, rate: 12 },
    { min: 47151, max: 100525, rate: 22 },
    { min: 100526, max: 191950, rate: 24 },
    { min: 191951, max: 243725, rate: 32 },
    { min: 243726, max: 365600, rate: 35 },
    { min: 365601, max: Infinity, rate: 37 }
  ],
  head_household: [
    { min: 0, max: 16550, rate: 10 },
    { min: 16551, max: 63100, rate: 12 },
    { min: 63101, max: 100500, rate: 22 },
    { min: 100501, max: 191950, rate: 24 },
    { min: 191951, max: 243700, rate: 32 },
    { min: 243701, max: 609350, rate: 35 },
    { min: 609351, max: Infinity, rate: 37 }
  ]
};

export interface CalculationResult {
  capitalGain: number;
  isLongTerm: boolean;
  holdingPeriodDays: number;
  taxRate: number;
  estimatedTax: number;
  effectiveRate: number;
  niitApplicable: boolean;
  niitAmount: number;
  totalTax: number;
  taxableIncome: number;
}

// Net Investment Income Tax threshold for 2025
export const niitThresholds: Record<FilingStatus, number> = {
  single: 200000,
  married_joint: 250000,
  married_separate: 125000,
  head_household: 200000
};

export function calculateHoldingPeriod(purchaseDate: Date, saleDate: Date): number {
  const diffTime = Math.abs(saleDate.getTime() - purchaseDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export function isLongTermGains(holdingDays: number): boolean {
  return holdingDays > 365;
}

export function getTaxRate(
  taxableIncome: number,
  capitalGain: number,
  filingStatus: FilingStatus,
  isLongTerm: boolean
): number {
  if (isLongTerm) {
    const brackets = longTermCapitalGainsBrackets[filingStatus];
    const totalIncome = taxableIncome + capitalGain;
    
    for (const bracket of brackets) {
      if (totalIncome >= bracket.min && totalIncome <= bracket.max) {
        return bracket.rate;
      }
    }
    return brackets[brackets.length - 1].rate;
  } else {
    // Short-term gains are taxed as ordinary income
    const brackets = ordinaryIncomeBrackets[filingStatus];
    const totalIncome = taxableIncome + capitalGain;
    
    for (const bracket of brackets) {
      if (totalIncome >= bracket.min && totalIncome <= bracket.max) {
        return bracket.rate;
      }
    }
    return brackets[brackets.length - 1].rate;
  }
}

export function calculateCapitalGainsTax(
  purchasePrice: number,
  salePrice: number,
  purchaseDate: Date,
  saleDate: Date,
  filingStatus: FilingStatus,
  taxableIncome: number
): CalculationResult {
  const capitalGain = salePrice - purchasePrice;
  const holdingPeriodDays = calculateHoldingPeriod(purchaseDate, saleDate);
  const isLongTerm = isLongTermGains(holdingPeriodDays);
  
  let taxRate = 0;
  let estimatedTax = 0;
  
  if (capitalGain > 0) {
    taxRate = getTaxRate(taxableIncome, capitalGain, filingStatus, isLongTerm);
    estimatedTax = (capitalGain * taxRate) / 100;
  }
  
  // Calculate NIIT (Net Investment Income Tax) - 3.8%
  const niitThreshold = niitThresholds[filingStatus];
  const totalIncome = taxableIncome + capitalGain;
  const niitApplicable = totalIncome > niitThreshold && capitalGain > 0;
  const niitAmount = niitApplicable 
    ? Math.min(capitalGain, totalIncome - niitThreshold) * 0.038 
    : 0;
  
  const totalTax = estimatedTax + niitAmount;
  const effectiveRate = capitalGain > 0 ? (totalTax / capitalGain) * 100 : 0;
  
  return {
    capitalGain,
    isLongTerm,
    holdingPeriodDays,
    taxRate,
    estimatedTax,
    effectiveRate,
    niitApplicable,
    niitAmount,
    totalTax,
    taxableIncome
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

export function formatPercent(rate: number): string {
  return `${rate.toFixed(1)}%`;
}
