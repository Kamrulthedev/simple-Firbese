import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLaout from './Leout/MainLaout'
import Home from './Conpunemts/Home/Home'
import Haeder from './Conpunemts/Haeder/Haeder'
import Login from './Conpunemts/Login/Login'


const router = createBrowserRouter([
  {
   path:'/',
   element:<MainLaout></MainLaout>,
   children: [
     {
       path: '/',
       element: <Haeder></Haeder>
     },
    {
      path:'/Home',
      element: <Home></Home>

    },
    {
      path: '/Login',
      element: <Login></Login>
    }
   ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
