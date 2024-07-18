import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';

import { RouterProvider } from "react-router-dom";
import { routers } from './routes/Routers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers}/>
  </React.StrictMode>
)
