// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";

import router from "./router.jsx";
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
  
);


