import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Layout from './Components/Layout';
import About from './Components/About/About';
import Service from './Components/Service';
import Home from './Components/Home';
import Error from './Components/Error';
import Description from './Components/About/Description';
import Skills from './Components/About/Skills';
import Projects from './Components/About/Projects';
import Contact from './Components/About/Contact';
import ToDo from './Components/ToDo/ToDo';

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
          path: '',
          element: <Home/>
        },
        {
          path: 'home',
          element: <Home/>
        },
        {
          path: 'about',
          element: <About/>,
          children:[
            {
              path: '',
              element: <Description/>
            },
            {
              path: 'description',
              element: <Description/>
            },
            {
              path: 'skills',
              element: <Skills />
            },
            {
              path: 'projects',
              element: <Projects />
            },
            {
              path: 'contact',
              element: <Contact />
            }
          ]
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
          path: 'toDo',
          element: <ToDo/>
        },
        {
          path: 'passwordGenerator',
          element: <Service />
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
