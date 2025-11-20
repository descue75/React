import type { InputFieldProps } from '../models/InputField';

function InputField({ id, name, currentValue, onChange }: InputFieldProps) {
  return (
    <p>
      <label htmlFor={id}>{name}</label>
      <input
        id={id}
        type='number'
        value={currentValue}
        required
        onChange={(event) => onChange(event, name)}
      />
    </p>
  );
}

export default InputField;
