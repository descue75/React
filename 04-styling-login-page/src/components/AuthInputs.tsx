import { useState } from 'react';

type InputIdentifier = 'email' | 'password';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState<string>('');
  const [enteredPassword, setEnteredPassword] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  function handleInputChange(identifier: InputIdentifier, value: string) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id='auth-inputs'>
      <div className='controls'>
        <p className='paragraph'>
          <label className={`label ${emailNotValid ? 'invalid' : ''}`}>
            Email
          </label>
          <input
            type='email'
            // style={{
            //   backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db',
            // }}
            className={emailNotValid ? 'invalid' : undefined}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange('email', event.target.value)
            }
          />
        </p>
        <p>
          <label className={`label ${passwordNotValid ? 'invalid' : ''}`}>
            Password
          </label>
          <input
            type='password'
            className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </div>
      <div className='actions'>
        <button type='button' className='text-button'>
          Create a new account
        </button>
        <button className='button' onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
}
