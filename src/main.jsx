import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ProjectsPage from './projects/ProjectsPage.jsx'
import RedirectToDiscord from './components/RedirectToDiscord.jsx' // ✅ fixed path
import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/projects', element: <ProjectsPage /> },
  { path: '/server', element: <RedirectToDiscord /> }, // 👈 Discord redirect
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
