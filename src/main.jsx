import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import { GithubInfo } from './Components/Card.jsx'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route 
//     path='/'
//     loader = {GithubInfo}
//     element = <App />
//     />
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
{/* 
    <RouterProvider router={router} /> 
     */}
    <App />
  </StrictMode>,
)
