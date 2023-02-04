import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components";
import { NewClient, IndexPage, loader as clienteLoader, action as ActionNewClient } from "./pages";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <IndexPage />, loader: clienteLoader },
      {
        path: "/clientes/nuevo",
        element: <NewClient />,
        action : ActionNewClient,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
