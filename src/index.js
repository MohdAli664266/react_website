import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Layout from './Components/Layout';
import About from './Components/About';
import Service from './Components/Service';
import Home from './Components/Home';
import Error from './Components/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
const body = document.querySelector('body');
body.style.backgroundColor = '#1e293b';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} basename="/react_website">
      <Route path='home' element={<Home />}/>
      <Route path="login" element={<Login />}/>
      <Route path="signup" element={<Signup />} />
      <Route path="about" element={<About />} />
      <Route path="service" element={<Service />} />
      <Route element={<Error />} />
    </Route>
  )
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
reportWebVitals();
