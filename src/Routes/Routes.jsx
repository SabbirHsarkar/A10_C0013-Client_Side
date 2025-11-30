import React, { Component } from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import Home from '../Home/Home';
import About from '../Pages/About';
import Games from '../Pages/Games';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Profile from '../Pages/Profile';
import PrivateRoute from './PrivateRoute';
import GameDetails from '../Pages/GameDetails';
import UpdateProfile from '../Pages/UpdateProfile';
import ForgetPass from '../Pages/ForgetPass';
import ErrorPage from '../Pages/ErrorPage';
import AllProperties from '../Pages/AllProperties';
import AddProperties from '../Pages/AddProperties';
import MyProperties from '../Pages/MyProperties';
import MyRatings from '../Pages/MyRatings';
export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
   
    children:[
        { 
         path: "/",
    Component:Home,
       
        },
          {
         path: "/all-properties",
    Component:AllProperties,
       
        },
          {
         path: "/add-properties",
    Component:AddProperties,
       
        },
          {
         path: "/my-properties",
    Component:MyProperties,
       
        },
        {
         path: "/login",
    Component:Login,
       
        },
         {
         path: "/signup",
    Component:Register,
       
        },
          {
         path: "/my-ratings",
    element:<PrivateRoute><MyRatings></MyRatings></PrivateRoute>,
       
        },
        {
          path:"/details/:myId",
          element:<PrivateRoute><GameDetails></GameDetails></PrivateRoute>
        },
        {
          path:"/forget/:email",
          Component:ForgetPass,
        },
        {
        path: "*",
        Component: ErrorPage
      },
      {
  path: "/update-profile",
  element: (
    <PrivateRoute>
      <UpdateProfile />
    </PrivateRoute>
  )
},
    {
  path: "/profile",
  element: (
    <PrivateRoute>
     <Profile></Profile>
    </PrivateRoute>
  )
}
,
{
  path:'/about',
  Component:About
}

        
       
     
    ]
        
        
  },
]);