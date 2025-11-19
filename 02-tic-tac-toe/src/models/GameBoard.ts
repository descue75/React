export type BoardValues = 'X' | 'O' | null;

export interface GameBoardProps {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  board: BoardValues[][];
}
