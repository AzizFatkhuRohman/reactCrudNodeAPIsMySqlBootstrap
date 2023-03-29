import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import Home from "./pages/Home";
import EditArticles from './pages/EditArticles';
import AddArticles from "./pages/AddArticles";
import DetailArticles from './pages/DetailArticles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/addArticles' element={<AddArticles/>}/>
    <Route path='/editArticles' element={<EditArticles/>}/>
    <Route path="/detailArticles" element={<DetailArticles/>}/>
  </Routes>
  </BrowserRouter>
);

reportWebVitals();
