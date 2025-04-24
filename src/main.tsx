import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/home";
import { ListContextProvider } from "./components/ListContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewCreate from "./components/newCreate";
import EditRecord from "./components/edit";
import NotFound from "./components/notFound";
import ViewModal from "./components/viewModal";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <NotFound /> },
  { path: "/create", element: <NewCreate /> },
  { path: "/view", element: <ViewModal /> },
])

ReactDOM.render(
  <React.StrictMode>
    <ListContextProvider>
      <RouterProvider router={router} />
    </ListContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
