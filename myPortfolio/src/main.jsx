import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../../07reactRouter/src/App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider rouer={router}/>
  </StrictMode>,
)
