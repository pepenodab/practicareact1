import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './components/Header/Header.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

let year = new Date();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header title="Tema 05" subtitle="Práctica 01" />
    <App />
    <Footer year={year.getFullYear()} />
  </React.StrictMode>
);
