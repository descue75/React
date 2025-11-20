import type { InvestmentParams, SingleInvestmentParam } from './types';

export interface UserInputProps {
  onUserInputChange: (data: SingleInvestmentParam) => void;
  inputValues: InvestmentParams;
}
