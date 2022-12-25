import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Navbar} from './components/navbar';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Home } from './components/home';
import { Contact } from './components/contact';
import { User } from './components/user';
import { Users } from './components/users';
import {data} from '../src/components/data';
import {Main} from './Main';
import { useState } from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// const user = [
//   {
//     name: 'Adison',
//     surname: 'Gonsior',
//     city: 'Bielsko'
//   },
//   {
//     name: 'Adi',
//     surname: 'Gonsior',
//     city: 'Bielsko'
//   }
// ]]


let dupa = data

console.log(dupa)
root.render(
  
  
    <React.StrictMode>

      <BrowserRouter>
        <Navbar></Navbar>
        <Main></Main>
      </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
