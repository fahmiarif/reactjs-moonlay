import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./pages/error-page";
import { Home, Planet, People, Starship } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/planet",
        element: <Planet/>,
      },
      {
        path: "/starship",
        element: <Starship/>,
      },
      {
        path: "/people",
        element: <People/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);
