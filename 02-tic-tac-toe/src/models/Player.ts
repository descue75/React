export type PlayerSymbol = 'X' | 'O';

export interface PlayerProps {
  initialName: string;
  symbol: string;
  isActive: boolean;
}
