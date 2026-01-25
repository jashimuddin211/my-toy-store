import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root.jsx';
import Home from './component/Home/Home.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import Register from './component/register/Register.jsx';
import CardDetails from './component/allcard/CardDetails.jsx';
import Login from './component/register/Login.jsx';

const router = createBrowserRouter([
 {
   path: "/",
   Component:Root,
   children:[
    {
      index:true,
      Component:Home
    },
    {
      path:'/register',
      Component:Register
    },
    {
path:'login',
Component:Login,
    },
    {
      path:'/cardDetails/:id',
      loader: async ({ params }) => {
    const res = await fetch('/index.json');
    const data = await res.json();
    return data.find(card => card.toyId === params.id);
  },
      Component:CardDetails,
    }
   ]
 },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
