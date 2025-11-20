import { useState } from 'react';
import UserInput from './components/UserInput';
import type { InvestmentParams, SingleInvestmentParam } from './models/types';
import Result from './components/Result';

const DEFAULT_INPUT_VALUES: InvestmentParams = {
  'Initial Investment': 15000,
  'Annual Investment': 900,
  'Expected Return (%)': 5.5,
  'Duration (years)': 12,
};

function App() {
  const [inputValues, setInputValues] =
    useState<InvestmentParams>(DEFAULT_INPUT_VALUES);

  function changeHandler(data: SingleInvestmentParam) {
    setInputValues((prev) => ({ ...prev, [data.field]: data.value }));
  }

  return (
    <>
      <header id='header'>
        <img src='investment-calculator-logo.png' alt='Investment Calculator' />
        <h1>Investment Calculator</h1>
      </header>
      <UserInput inputValues={inputValues} onUserInputChange={changeHandler} />
      <Result inputData={inputValues}></Result>
    </>
  );
}

export default App;
