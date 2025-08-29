import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ProjectsPage from './projects/ProjectsPage.jsx'
import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/projects', element: <ProjectsPage /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)