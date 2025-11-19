import { useRef, useState } from 'react';
import type { PlayerProps } from '../models/Player';

function Player({ initialName, symbol, isActive, onChangeName}: PlayerProps) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleEditClick() {
    if (isEditing) {
      const newName = inputRef.current?.value.trim() || playerName;
      setPlayerName(newName);
      onChangeName({symbol, newName});
    }

    setIsEditing((editing) => !editing);
  }

  let playerNameField = <span className='player-name'>{playerName}</span>;

  if (isEditing) {
    playerNameField = (
      <input
        ref={inputRef}
        type='text'
        required
        defaultValue={playerName}
        className='player-name'
      />
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className='player'>
        {playerNameField}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}

export default Player;
