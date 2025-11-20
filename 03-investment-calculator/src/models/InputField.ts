import type { ChangeEvent } from 'react';
import type { InputFields } from './types';

export interface InputFieldProps {
  id: string;
  name: InputFields;
  currentValue: number;
  onChange: (event: ChangeEvent<HTMLInputElement>, field: InputFields) => void;
}
