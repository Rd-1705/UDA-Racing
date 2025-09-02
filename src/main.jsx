// import { StrictMode } from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Home from './pages/home.jsx'
// import Login from './pages/Login.jsx'
// import About from './pages/about.jsx'
// import Product from './pages/product.jsx'
// import Detail from './pages/Detail.jsx'
// import Register from './pages/Register.jsx'
// // import Favourit from './pages/Favourit.jsx'
// // import ProtectedRouter from './component/ProtectedRouter.jsx'
// import { AutenticationProvider } from './conteks/Autentication.jsx'
// import { SearchProvider } from './conteks/SearchContext.jsx'
// // import { WishlistProvider } from './conteks/WishlistContext.jsx'

// const router = createBrowserRouter([{
//   path: "/",
//   element: <App />,
//   children: [
//     { path: "/", element: <Home /> },
//     { path: "/login", element: <Login /> },
//     { path: "/register", element: <Register /> },
//     { path: "/about", element: <About /> },
//     { path: "/product", element: <Product />},
//     { path: "/detail/:id", element: <Detail />},
//     // { path: "/favorit", element: <Favourit /> }
    
//   ]
// }])

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AutenticationProvider>
//       <SearchProvider>
//         <RouterProvider router={router} />
//       </SearchProvider>
//     </AutenticationProvider>
//   </StrictMode>,
// )


import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'

// Pages
import App from './App.jsx'
import Home from './pages/home.jsx'
import Login from './pages/Login.jsx'
import About from './pages/about.jsx'
import Product from './pages/product.jsx'
import Detail from './pages/Detail.jsx'
import Register from './pages/Register.jsx'
// import Favourit from './pages/Favourit.jsx'
// import ProtectedRouter from './component/ProtectedRouter.jsx'

// Contexts
import { AutenticationProvider } from './conteks/Autentication.jsx'
import { SearchProvider } from './conteks/SearchContext.jsx'
import { CommentProvider } from './conteks/CommentContext.jsx'   // ✅ ditambahkan

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
      // { path: "/favorit", element: <Favourit /> }
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
