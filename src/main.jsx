import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Github, { GithubInfoLoader } from './components/Github/Github'
import './App.css'
import Contact from './components/Contact/Contact'
import User from './components/Users/User'

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])


// another similar method
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={ <Home /> } />
      <Route path='about' element={ <About /> } />
      <Route path='contact' element={ <Contact /> } />
      <Route path='user/:Userid' element={ <User /> } />
      <Route loader={GithubInfoLoader}  path='github' element={ <Github /> } />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
