import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import BatteriesDetails from "../pages/BatteriesDetails";
import Battaeries from "../pages/Batteries";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
export const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "batteries",
        element: <Battaeries />,
      },
      {
        path: "detailes",
        element: <BatteriesDetails />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // Add more routes here as needed
    ],
  },
]);
