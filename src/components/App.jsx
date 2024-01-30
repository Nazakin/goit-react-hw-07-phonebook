import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Contacts = React.lazy(() =>
  import('../pages/Contacts').then(module => ({ default: module.Contacts })));
  const RegisterForm = React.lazy(() =>
  import('../pages/Register').then(module => ({ default: module.RegisterForm }))
);const LoginForm = React.lazy(() =>
import('../pages/Login').then(module => ({ default: module.LoginForm }))
);
export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Suspense>
  );
};
