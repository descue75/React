import type { ElementType } from 'react';

export interface TabsProps {
  buttonsContainer?: ElementType;
  buttons: React.ReactNode;
  children: React.ReactNode;
}
