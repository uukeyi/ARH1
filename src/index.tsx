import React from 'react';
// import ReactDOM from "react-dom/client";
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// const root = ReactDOM.createRoot(
//    document.getElementById("root") as HTMLElement
// );
const root = document.getElementById('root');
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);
