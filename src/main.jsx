import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, ErrorPage, action as actionDelete} from "./components";
import { NewClient, action as ActionNewClient } from "./pages";
import {
  EditClient,
  loader as editClientLoader,
  accion as editClientAccion,
} from "./pages/EditClient";
import { IndexPage, loader as clienteLoader } from "./pages/IndexPage";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <IndexPage />,
        loader: clienteLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clientes/nuevo",
        element: <NewClient />,
        action: ActionNewClient,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clientes/:id/editar",
        element: <EditClient />,
        loader: editClientLoader,
        errorElement: <ErrorPage />,
        action: editClientAccion,
      },
      {
        path : "/clientes/:id/eliminar",
        action : actionDelete
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
