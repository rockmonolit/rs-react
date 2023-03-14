import * as React from 'react';
import { Routes, Route, Outlet, NavLink } from 'react-router-dom';
import Header from './components/header'
import MainPage from './components/main'
import AboutPage from './components/about'
import ErrorPage from './components/404'

const App = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="main" element={<MainPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    );
};

const Layout = () => {
    return (
        <>
            <Header />
            <div className="wrapper">
                <Outlet />
            </div>
        </>
    );
};

export default App;
