import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutMe from './components/routes/AboutMe'
import ContactPage from './components/routes/ContactPage'
import Hobby from './components/routes/Hobby'

ReactDOM.render(
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<App />} />
  <Route path='/about' element={<AboutMe />} />
  <Route path='/contact' element={<ContactPage />} />
  <Route path='/hobby' element={<Hobby />} />
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
