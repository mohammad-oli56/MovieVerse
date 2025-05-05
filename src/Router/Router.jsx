import {
    createBrowserRouter,
 
  } from "react-router";
import Rootlayout from "../Rootlayout/Rootlayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../Component/Login";
import Signup from "../Component/Signup";

  export const router = createBrowserRouter([
    {
      path: '/',
      Component:Rootlayout,
      errorElement:<Error></Error>,
      children :[
        {
          index: true,
          path: '/',
          Component: Home,
          loader: async () => {
            const [subPlanRes, moviesRes] = await Promise.all([
              fetch("/sub_plan.json"),
              fetch("/movies.json")
            ]);
        
            const subPlan = await subPlanRes.json();
            const movies = await moviesRes.json();
        
            return { subPlan, movies };
          }
        },
         {
            path:'/login',
            element:<Login></Login>
         },
         {
            path :'signup',
            element:<Signup></Signup>
         }
      ]
    },
  ]);