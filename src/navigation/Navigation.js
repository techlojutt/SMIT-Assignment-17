import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Blog from "../pages/blog/Blog";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
   {
    path:"/about",
    element: <About/>
   },
   {
     path : "/contact",
     element : <Contact/>
   },
   {
     path : "/blog",
     element : <Blog/>
   }
    
  ]);
export default function Navigation() {
  return (
    <RouterProvider router={router} />
  )
}
