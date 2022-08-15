import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';

import 'antd/dist/antd.css';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import HomePage from './pages/HomePage';
import RegisterCategoryPage from './pages/RegisterCategoryPage';

import TokenContext from './contexts/TokenContext';

export default function App() {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')));
  console.log('Token', token);
  return (
    <>
      <TokenContext.Provider value={{ token, setToken }}>
        <Reset />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/sign-in' element={<SignInPage />} />
            <Route path='/sign-up' element={<SignUpPage />} />
            <Route path='/register/category' element={<RegisterCategoryPage />} />
          </Routes>
        </BrowserRouter>
      </TokenContext.Provider>
    </>
  );
}
