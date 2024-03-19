import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Header from './components/Header/Header.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path:'/header',
    element: <Header></Header>
  },
  {
    path: '/about',
    element: <div>Hello from about page</div>

  },
  {
    path: '/contact',
    element: <div>call me right now</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)