import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
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
  [
    {
      path:'/',
      element: <Layout/>,
      children:
      [
        {
          path: 'home',
          element: <Home/>
        },
        {
          path: 'about',
          element: <About/>
        },
        {
          path: 'service',
          element: <Service/>
        },
        {
          path: 'login',
          element: <Login/>
        },
        {
          path: 'signup',
          element: <Signup/>
        },
        {
          path: '*',
          element: <Error/>
        },
      ]
    }
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
reportWebVitals();
