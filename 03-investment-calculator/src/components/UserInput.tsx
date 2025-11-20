import {type ChangeEvent } from 'react';
import type { InputFields} from '../models/types';
import InputField from './InputField';
import type { UserInputProps } from '../models/UserInput';

function UserInput({ onUserInputChange, inputValues }: UserInputProps) {

  function inputChangeHandler(
    event: ChangeEvent<HTMLInputElement>,
    field: InputFields
  ) {
    onUserInputChange({ field: field, value: Number(event.target.value) });
  }

  return (
    <section id='user-input'>
      <div className='input-group'>
        <InputField
          id='initial-investment'
          name='Initial Investment'
          currentValue={inputValues['Initial Investment']}
          onChange={inputChangeHandler}
        ></InputField>
        <InputField
          id='annual-investment'
          name='Annual Investment'
          currentValue={inputValues['Annual Investment']}
          onChange={inputChangeHandler}
        ></InputField>
      </div>

      <div className='input-group'>
        <InputField
          id='expected-return'
          name='Expected Return (%)'
          currentValue={inputValues['Expected Return (%)']}
          onChange={inputChangeHandler}
        ></InputField>
        <InputField
          id='duration'
          name='Duration (years)'
          currentValue={inputValues['Duration (years)']}
          onChange={inputChangeHandler}
        ></InputField>
      </div>
    </section>
  );
}

export default UserInput;
