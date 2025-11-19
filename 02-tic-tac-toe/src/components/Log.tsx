import type { LogProps } from '../models/Log';

function Log({ entries }: LogProps) {
  return (
    <ol id='log'>
      {entries.map((entry) => (
        <li key={`${entry.square.row}${entry.square.col}`}>
          {entry.player} selected ({entry.square.row}, {entry.square.col})
        </li>
      ))}
    </ol>
  );
}

export default Log;
