import type { ResultProps } from '../models/Result';
import type { YearlyInvestmentResult } from '../models/types';
import { calculateInvestmentResults, formatter } from '../util/investment';

function Result({ inputData }: ResultProps) {
  const ResultData: YearlyInvestmentResult[] = calculateInvestmentResults(inputData);

  function formHeader() {
    return (
      <thead>
        <tr>
          <th className='center'>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Annual Investment</th>
        </tr>
      </thead>
    );
  }

  function formRow(rowData: YearlyInvestmentResult) {
    return (
      <tr>
        <td className='center'>{rowData.year}</td>
        <td>{formatter.format(rowData.valueEndOfYear)}</td>
        <td>{formatter.format(rowData.interest)}</td>
        <td>{formatter.format(rowData.annualInvestment)}</td>
      </tr>
    );
  }

  return (
    <table id='result'>
      {formHeader()}
      <tbody>
        {ResultData.map((result) => formRow(result))}
      </tbody>
    </table>
  );
}

export default Result;
