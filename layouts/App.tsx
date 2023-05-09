import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';

// code splitting
const LogIn = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Channel = loadable(() => import('../pages/Channel'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/workspace/channel/*" element={<Channel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
