import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { RouterProvider } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";
import router from "./Router/Router";
import AuthProvider from "./Provider/AuthProvider";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    

      <HelmetProvider>

      <QueryClientProvider client={queryClient}>
          <React.StrictMode>
            <RouterProvider router={router}></RouterProvider>
          </React.StrictMode>,
        </QueryClientProvider>

      </HelmetProvider>

  
  </AuthProvider>
);
