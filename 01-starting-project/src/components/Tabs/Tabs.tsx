import type { TabsProps } from '../../models/Tabs';

function Tabs({ children, buttons, buttonsContainer = 'menu' }: TabsProps) {
  const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}

export default Tabs;
