export type PlayerSymbol = 'X' | 'O';

export type PlayerNames = {
  X: string;
  O: string;
};

export type PlayerChange = {
  symbol: PlayerSymbol;
  newName: string;
};

export interface PlayerProps {
  initialName: string;
  symbol: PlayerSymbol;
  isActive: boolean;
  onChangeName: ({ symbol, newName }: PlayerChange) => void;
}
