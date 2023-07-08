import { FC, ReactNode } from 'react';

interface LoyoutProps {
  children?: ReactNode;
}

export const Layout: FC<LoyoutProps> = ({ children }) => {
  return (
    <div className='Layout'>
      <div className='Layout-Container'>{children}</div>
    </div>
  );
};
