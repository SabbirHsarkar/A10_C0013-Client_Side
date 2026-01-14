import { createBrowserRouter } from "react-router";

import Root from "../Root/Root";
import Home from "../Home/Home";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";
import UpdateProfile from "../Pages/UpdateProfile";
import ForgetPass from "../Pages/ForgetPass";
import ErrorPage from "../Pages/ErrorPage";

import AllProperties from "../Pages/AllProperties";
import AddProperties from "../Pages/AddProperties";
import MyProperties from "../Pages/MyProperties";
import MyRatings from "../Pages/MyRatings";
import PropertyDetails from "../Pages/PropertyDetails";
import UpdateProperties from "../Pages/UpdateProperties";

import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard";
import DashboardHome from "../Pages/DashBoardHome";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-properties",
        element: <AllProperties />,
      },
      {
        path: "/properties",
        element: (
          <PrivateRoute>
            <AddProperties />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/details/:myId",
        element: (
          <PrivateRoute>
            <PropertyDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/forget/:email",
        element: <ForgetPass />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-properties/:id",
        element: (
          <PrivateRoute>
            <UpdateProperties />
          </PrivateRoute>
        ),
      },
    ],
  },

  
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
    
      {
        path: "my-properties",
        element: <MyProperties />,
      },
       {
        path: "dashboard-home",
        element: <DashboardHome />,
      }
      ,
      {
        path: "my-ratings",
        element: <MyRatings />,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);
