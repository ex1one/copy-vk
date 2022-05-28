import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import routes, { ERoutesNames } from '../../constants/routes';
import Layout from '../Layout/Layout';
import useAuth from '../../hooks/useAuth';
import Auth from '../../pages/Auth/Auth';
import Home from '../../pages/Home/Home';

const RootRoutes: FC = () => {
  const { user } = useAuth();
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          path={route.path}
          key={route.path}
          element={(
            <Layout>
              {route.path && !user ? (
                <Auth />

              ) : (
                <route.element />
              )}
            </Layout>
            )}
        />
      ))}
      {user ? <Route path="*" element={<Navigate to={ERoutesNames.HOME} />} />
        : <Route path="*" element={<Navigate to={ERoutesNames.AUTH} />} />}
    </Routes>
  );
};

export default RootRoutes;
