import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/globals.scss';
import CollectPage from './pages/CollectPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar/';
import RegisterPage from './pages/RegisterPage';
import { MovieProvider } from './func/context';
import SearchPage from './pages/SearchPage';
import LoginPage from './pages/LoginPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MovieProvider>
      <BrowserRouter basename="/movie-final">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collect" element={<CollectPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  </React.StrictMode>,
);
