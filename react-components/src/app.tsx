import { Routes, Route, Outlet } from 'react-router-dom';
import React from 'react';
import MainPage from './components/main';
import AboutPage from './components/about';
import ErrorPage from './components/404';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
