import { Header, MenuPanel } from 'components';
import { FC, ReactNode } from 'react';
import './Layout.scss';

interface LoyoutProps {
  children?: ReactNode;
}

export const Layout: FC<LoyoutProps> = ({ children }) => {
  return (
    <div className='Layout'>
      <MenuPanel />
      <Header />
      <div className='Layout-Container'>{children}</div>
    </div>
  );
};
