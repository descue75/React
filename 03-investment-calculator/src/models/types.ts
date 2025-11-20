export type InputFields =
  | 'Initial Investment'
  | 'Annual Investment'
  | 'Expected Return (%)'
  | 'Duration (years)';

export interface SingleInvestmentParam {
  field: InputFields;
  value: number;
}

export type InvestmentParams = Record<InputFields, number>;

export interface YearlyInvestmentResult {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
}
