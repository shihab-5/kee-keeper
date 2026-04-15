import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './component/home';
import Banner from './component/banner';
import Time from './component/pages/timeline';
import Start from './component/pages/starts';
import NotFound from './notfound';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children:[
      {
        index:true,
        Component:Banner,
      },
      {
        path:'/timeline',
        Component:Time
      },
      {
        path:'/starts',
        Component:Start,
      }

    ],
    errorElement:<NotFound></NotFound>

  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,

  </StrictMode>,
)
