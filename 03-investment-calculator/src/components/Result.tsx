import type { ResultProps } from '../models/Result';

function Result({ inputData }: ResultProps) {
  return <p>{inputData['Annual Investment']}</p>;
}

export default Result;
