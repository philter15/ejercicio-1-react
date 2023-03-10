import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NombreCompleto as Name } from './components/NombreCompleto';
import { Mascota } from './components/Mascota';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Name name= "pedro" age = {20} show={true} />
    <Name name= "ander" age = {30} show={false} />
    <App />
    <Mascota name = "Solovino" age = {9} show={true} />
    <Mascota name = "sanga" age = {9} show={false} />
  </React.StrictMode>
); 