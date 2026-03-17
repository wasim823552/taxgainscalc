'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Calculator, TrendingUp, TrendingDown, Info, DollarSign, Calendar, Users } from 'lucide-react';
import {
  calculateCapitalGainsTax,
  formatCurrency,
  formatPercent,
  type FilingStatus,
  type CalculationResult
} from '@/lib/taxCalculations';

const filingStatusOptions = [
  { value: 'single', label: 'Single' },
  { value: 'married_joint', label: 'Married Filing Jointly' },
  { value: 'married_separate', label: 'Married Filing Separately' },
  { value: 'head_household', label: 'Head of Household' }
];

export default function TaxCalculator() {
  const [purchasePrice, setPurchasePrice] = useState<string>('');
  const [salePrice, setSalePrice] = useState<string>('');
  const [purchaseDate, setPurchaseDate] = useState<string>('');
  const [saleDate, setSaleDate] = useState<string>('');
  const [filingStatus, setFilingStatus] = useState<FilingStatus>('single');
  const [taxableIncome, setTaxableIncome] = useState<string>('');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isCalculated, setIsCalculated] = useState(false);

  const handleCalculate = () => {
    if (!purchasePrice || !salePrice || !purchaseDate || !saleDate || !taxableIncome) {
      return;
    }

    const purchase = parseFloat(purchasePrice.replace(/,/g, ''));
    const sale = parseFloat(salePrice.replace(/,/g, ''));
    const income = parseFloat(taxableIncome.replace(/,/g, ''));
    const purchaseDt = new Date(purchaseDate);
    const saleDt = new Date(saleDate);

    if (isNaN(purchase) || isNaN(sale) || isNaN(income)) {
      return;
    }

    const calculation = calculateCapitalGainsTax(
      purchase,
      sale,
      purchaseDt,
      saleDt,
      filingStatus,
      income
    );

    setResult(calculation);
    setIsCalculated(true);
  };

  const formatNumberInput = (value: string) => {
    const numeric = value.replace(/[^0-9]/g, '');
    return numeric.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handlePriceChange = (setter: (value: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(formatNumberInput(e.target.value));
  };

  const resetCalculator = () => {
    setPurchasePrice('');
    setSalePrice('');
    setPurchaseDate('');
    setSaleDate('');
    setFilingStatus('single');
    setTaxableIncome('');
    setResult(null);
    setIsCalculated(false);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-xl border-0 bg-white">
      <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-lg">
        <div className="flex items-center gap-3">
          <Calculator className="h-8 w-8" />
          <div>
            <CardTitle className="text-2xl md:text-3xl">Capital Gains Tax Calculator</CardTitle>
            <CardDescription className="text-emerald-100 text-sm md:text-base">
              Calculate your 2025-2026 capital gains tax liability
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Purchase Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2 text-gray-800">
              <TrendingDown className="h-5 w-5 text-emerald-600" />
              Purchase Information
            </h3>
            <div className="space-y-3">
              <div>
                <Label htmlFor="purchasePrice" className="text-gray-700">Purchase Price ($)</Label>
                <Input
                  id="purchasePrice"
                  type="text"
                  placeholder="100,000"
                  value={purchasePrice}
                  onChange={handlePriceChange(setPurchasePrice)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="purchaseDate" className="text-gray-700">Purchase Date</Label>
                <Input
                  id="purchaseDate"
                  type="date"
                  value={purchaseDate}
                  onChange={(e) => setPurchaseDate(e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          {/* Sale Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2 text-gray-800">
              <TrendingUp className="h-5 w-5 text-emerald-600" />
              Sale Information
            </h3>
            <div className="space-y-3">
              <div>
                <Label htmlFor="salePrice" className="text-gray-700">Sale Price ($)</Label>
                <Input
                  id="salePrice"
                  type="text"
                  placeholder="150,000"
                  value={salePrice}
                  onChange={handlePriceChange(setSalePrice)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="saleDate" className="text-gray-700">Sale Date</Label>
                <Input
                  id="saleDate"
                  type="date"
                  value={saleDate}
                  onChange={(e) => setSaleDate(e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Tax Information */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg flex items-center gap-2 text-gray-800">
            <Users className="h-5 w-5 text-emerald-600" />
            Tax Filing Information
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="filingStatus" className="text-gray-700">Filing Status</Label>
              <Select value={filingStatus} onValueChange={(value) => setFilingStatus(value as FilingStatus)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select filing status" />
                </SelectTrigger>
                <SelectContent>
                  {filingStatusOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="taxableIncome" className="text-gray-700">Annual Taxable Income ($)</Label>
              <Input
                id="taxableIncome"
                type="text"
                placeholder="75,000"
                value={taxableIncome}
                onChange={handlePriceChange(setTaxableIncome)}
                className="mt-1"
              />
              <p className="text-xs text-gray-500 mt-1">Your income from other sources (excluding this gain)</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <Button
            onClick={handleCalculate}
            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg"
            disabled={!purchasePrice || !salePrice || !purchaseDate || !saleDate || !taxableIncome}
          >
            <Calculator className="mr-2 h-5 w-5" />
            Calculate Tax
          </Button>
          <Button
            onClick={resetCalculator}
            variant="outline"
            className="py-6 px-8"
          >
            Reset
          </Button>
        </div>

        {/* Results */}
        {isCalculated && result && (
          <div className="mt-8 space-y-6">
            <Separator />
            <h3 className="font-bold text-xl text-center text-gray-800">Calculation Results</h3>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {/* Capital Gain */}
              <Card className={`border-2 ${result.capitalGain >= 0 ? 'border-emerald-200 bg-emerald-50' : 'border-red-200 bg-red-50'}`}>
                <CardContent className="p-4 text-center">
                  <p className="text-sm text-gray-600">Capital Gain/Loss</p>
                  <p className={`text-2xl font-bold ${result.capitalGain >= 0 ? 'text-emerald-700' : 'text-red-700'}`}>
                    {formatCurrency(result.capitalGain)}
                  </p>
                </CardContent>
              </Card>

              {/* Holding Period */}
              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardContent className="p-4 text-center">
                  <p className="text-sm text-gray-600">Holding Period</p>
                  <p className="text-2xl font-bold text-blue-700">
                    {result.holdingPeriodDays} days
                  </p>
                  <Badge variant={result.isLongTerm ? "default" : "secondary"} className="mt-1">
                    {result.isLongTerm ? 'Long-Term' : 'Short-Term'}
                  </Badge>
                </CardContent>
              </Card>

              {/* Tax Rate */}
              <Card className="border-2 border-purple-200 bg-purple-50">
                <CardContent className="p-4 text-center">
                  <p className="text-sm text-gray-600">Tax Rate</p>
                  <p className="text-2xl font-bold text-purple-700">
                    {formatPercent(result.taxRate)}
                  </p>
                  <p className="text-xs text-gray-500">
                    {result.isLongTerm ? 'Long-term rate' : 'Ordinary income rate'}
                  </p>
                </CardContent>
              </Card>

              {/* Estimated Tax */}
              <Card className="border-2 border-amber-200 bg-amber-50">
                <CardContent className="p-4 text-center">
                  <p className="text-sm text-gray-600">Capital Gains Tax</p>
                  <p className="text-2xl font-bold text-amber-700">
                    {formatCurrency(result.estimatedTax)}
                  </p>
                </CardContent>
              </Card>

              {/* NIIT */}
              <Card className="border-2 border-rose-200 bg-rose-50">
                <CardContent className="p-4 text-center">
                  <p className="text-sm text-gray-600">Net Investment Income Tax (3.8%)</p>
                  <p className="text-2xl font-bold text-rose-700">
                    {formatCurrency(result.niitAmount)}
                  </p>
                  <p className="text-xs text-gray-500">
                    {result.niitApplicable ? 'Applicable' : 'Not Applicable'}
                  </p>
                </CardContent>
              </Card>

              {/* Total Tax */}
              <Card className="border-2 border-teal-300 bg-gradient-to-br from-teal-50 to-emerald-50">
                <CardContent className="p-4 text-center">
                  <p className="text-sm text-gray-600">Total Tax Liability</p>
                  <p className="text-2xl font-bold text-teal-700">
                    {formatCurrency(result.totalTax)}
                  </p>
                  <p className="text-xs text-gray-500">
                    Effective Rate: {formatPercent(result.effectiveRate)}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Info Note */}
            <div className="flex items-start gap-2 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-blue-800">
                <strong>Important:</strong> This calculator provides estimates based on 2025-2026 federal tax rates. 
                State taxes may apply. Consult a qualified tax professional for personalized advice. 
                Long-term capital gains apply to assets held more than one year.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
