import type { ComponentPropsWithoutRef, ReactNode } from 'react';
export interface SectionProps extends ComponentPropsWithoutRef<'section'> {
  title: string;
  children: ReactNode;
}
