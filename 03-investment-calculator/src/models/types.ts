export interface InvestmentParams {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number; // percentage per year
  duration: number; // in years
}

export interface YearlyInvestmentResult {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
}
