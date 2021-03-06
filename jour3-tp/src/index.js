import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter , Routes, Route } from "react-router-dom";
import { Home } from "./composants/Home"
import { Connexion } from "./composants/Connexion"
import { Admin } from "./composants/Admin"
import {UserContextProvider} from "./context/userContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
    <UserContextProvider>
          <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="connexion" element={<Connexion />}  />
            <Route path="admin" element={<Admin />} />
          </Route>
       </Routes>
       </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
