import { Layout } from 'components';
import { FC } from 'react';
import { Button } from 'ui/Button';
import './App.scss';

export const App: FC = () => {
  const handleButtonClick = (event: React.MouseEvent) => {
    console.log('[button click event]', event);
  };

  return (
    <div className='App'>
      <Layout>
        <h1>React TypeScript UI Library</h1>
        <hr />
        <h2>Button</h2>
        <Button
          onClick={handleButtonClick}
          isDisabled>
          Send
        </Button>
      </Layout>
    </div>
  );
};
