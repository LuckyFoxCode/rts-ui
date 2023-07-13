import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'routes';
import './MenuPanel.scss';

export const MenuPanel: FC = () => {
  return (
    <nav className='MenuPanel'>
      <div className='MenuPanel-Brand'>
        <div className='MenuPanel-Brand-Title'>UI</div>
        <div className='MenuPanel-Brand-Version'>v1.0.0</div>
      </div>
      <div className='MenuPanel-Title'>Components:</div>
      <div className='MenuPanel-List'>
        <NavLink
          className={({ isActive }) =>
            ['MenuPanel-ListItem', isActive ? 'MenuPanel-ListItem__active' : '']
              .filter(Boolean)
              .join(' ')
          }
          to={ROUTES.BUTTON}>
          Button
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            ['MenuPanel-ListItem', isActive ? 'MenuPanel-ListItem__active' : '']
              .filter(Boolean)
              .join(' ')
          }
          to={ROUTES.ICON}>
          Icon
        </NavLink>
      </div>
    </nav>
  );
};
