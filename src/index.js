import React from 'react';
import ReactDOM from 'react-dom/client';
import Bild from './components/bild/Bild';
import BreadCumpTrail from './components/breadcrumbtrail/BreadCumpTrail';
import Textfeld from './components/textfeld/Textfeld';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Bild />
    <BreadCumpTrail />
    <Textfeld />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
