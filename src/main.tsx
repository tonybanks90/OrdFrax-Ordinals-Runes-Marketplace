import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import './index.scss';
import HomePage from './pages/HomePage';
import AboutPage from './pages/Aboutpage';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/',
    element: <AboutPage />,
  }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
);
