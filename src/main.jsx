import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { RouterProvider } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";
import router from "./Router/Router";
import AuthProvider from "./Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>

        <RouterProvider router={router}></RouterProvider>

      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode >

);
