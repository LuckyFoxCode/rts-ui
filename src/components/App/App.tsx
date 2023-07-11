import { Layout } from 'components';
import { ButtonPage, HomePage } from 'pages';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from 'routes/routes';
import './App.scss';

export const App: FC = () => {
  return (
    <div className='App'>
      <Layout>
        <Routes>
          <Route
            path={ROUTES.HOME}
            element={<HomePage />}
          />
          <Route
            path={ROUTES.BUTTON}
            element={<ButtonPage />}
          />
        </Routes>
      </Layout>
    </div>
  );
};
