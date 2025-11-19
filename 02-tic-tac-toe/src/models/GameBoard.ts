import type { GameTurn } from "./GameTurn";

export type BoardValues = 'X' | 'O' | null;

export interface GameBoardProps {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  turns: GameTurn[];
}
