import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import ErrorPage from './error-page';
import ResidentialPage from './routes/residentialpage';
import IndustrialPage from './routes/industrialpage';
import CommercialPage from './routes/commercialpage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'residential',
    element: <ResidentialPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'industrial',
    element: <IndustrialPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'commercial',
    element: <CommercialPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
