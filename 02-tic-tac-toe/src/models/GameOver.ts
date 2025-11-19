export interface GameOverProps {
  winner: 'X' | 'O' | null;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
