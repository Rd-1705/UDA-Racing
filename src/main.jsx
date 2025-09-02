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
import Profile from './pages/Profile.jsx'
import ProtectedRouter from './component/ProtectedRouter.jsx'


import { AutenticationProvider } from './conteks/Autentication.jsx'
import { SearchProvider } from './component/SearchContext.jsx'
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
      { path: "/product", element: <ProtectedRouter><Product /></ProtectedRouter> },
      { path: "/detail/:id", element: <ProtectedRouter><Detail /></ProtectedRouter> },
      { path: "/comments", element: <ProtectedRouter><Comment /></ProtectedRouter> },
      { path: "/profil", element: <ProtectedRouter><Profile /></ProtectedRouter> }
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
