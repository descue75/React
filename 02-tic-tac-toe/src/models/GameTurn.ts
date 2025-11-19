import type { PlayerSymbol } from "./Player";

export type GameTurn = {
  square: {
    row: number;
    col: number;
  };
  player: PlayerSymbol;
};
