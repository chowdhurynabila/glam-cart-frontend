import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import AuthProvider from './AuthProvider/AuthProvider';
import { router } from './routes/routes';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
