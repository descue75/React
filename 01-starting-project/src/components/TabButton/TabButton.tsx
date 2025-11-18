import type { TabButtonProps } from '../../models/TabButton';
import './TabButton.css';

function TabButton({ children, onClick, isSelected }: TabButtonProps) {
  return (
    <li>
      <button className={isSelected ? 'active' : ''} onClick={onClick}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
