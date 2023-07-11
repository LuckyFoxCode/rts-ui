import { FC } from 'react';
import { Button } from 'ui/Button';
import './ButtonPage.scss';

export const ButtonPage: FC = () => {
  const handleButtonClick = (event: React.MouseEvent) => {
    console.log('[button click event]', event);
  };

  return (
    <div className='ButtonPage'>
      <h2>Button</h2>
      <Button
        isDisabled={false}
        onClick={handleButtonClick}>
        Send
      </Button>
    </div>
  );
};
