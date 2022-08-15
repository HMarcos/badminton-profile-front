import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';

import 'antd/dist/antd.css';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';

import TokenContext from './contexts/TokenContext';
import { useState } from 'react';

export default function App() {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')));
  console.log('Token', token);
  return (
    <>
      <TokenContext.Provider value={{ token, setToken }}>
        <Reset />
        <BrowserRouter>
          <Routes>
            <Route path='/sign-in' element={<SignInPage />} />
            <Route path='/sign-up' element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </TokenContext.Provider>
    </>
  );
}
