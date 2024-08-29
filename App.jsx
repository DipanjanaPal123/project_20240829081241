import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/Page1', element: <Page1 /> },
{ path: '/Page2', element: <Page2 /> },
{ path: '/Page3', element: <Page3 /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}