import {
    createBrowserRouter,
 
  } from "react-router";
import Rootlayout from "../Rootlayout/Rootlayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../Component/Login";
import Signup from "../Component/Signup";
import SubDetails from "../Component/SubDetails";
import Allmovies from "../Component/Allmovies";
import PrivateRut from "../PrivateRoute/PrivateRut";
import Profile from "../Component/Profile";
import Review from "../Component/Review";

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
         },
         {
          path:'/subDetails/:id',
          element:<PrivateRut> <SubDetails></SubDetails> </PrivateRut>,
          loader:()=>fetch("/sub_plan.json")
         },
         {
          path:'allmovies',
         element: <PrivateRut> <Allmovies></Allmovies> </PrivateRut>
         },
         {
          path:"/profile",
         element:<PrivateRut> <Profile></Profile></PrivateRut>
         },
         {
          path:'review',
          Component:Review
         }
      ]
    },
  ]);