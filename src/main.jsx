import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Login from './pages/Login.jsx'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'
import Detail from './pages/Detail.jsx'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'
import Comment from './pages/Comment.jsx' 
// import ProtectedRouter from './component/ProtectedRouter.jsx'


import { AutenticationProvider } from './conteks/Autentication.jsx'
import { SearchProvider } from './conteks/SearchContext.jsx'
import { CommentProvider } from './conteks/CommentContext.jsx'   

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/about", element: <About /> },
      { path: "/product", element: <Product /> },
      { path: "/detail/:id", element: <Detail /> },
      { path: "/comments", element: <Comment /> },      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AutenticationProvider>
      <SearchProvider>
        <CommentProvider>   
          <RouterProvider router={router} />
        </CommentProvider>
      </SearchProvider>
    </AutenticationProvider>
  </StrictMode>,
)
