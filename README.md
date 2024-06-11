# React Routing ⚛️

Router.tsx
```tsx
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/Media",
        element: <Media />,
      },
      {
        path: "/press-releases",
        element: <PressReleases />,
      },
      {
        path: "/corporate-news",
        element: <CorporateNews />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
```

Don't forget the pages folder with every page inside!

Also use a Layout.tsx for handling the pages:
```tsx 
import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

export const Layout = () => {
  return (
    <>
    <header>
        <Navbar />
    </header>
    <main className="thingsInTheMiddleContainer">
        <Outlet />
    </main>
    <Footer />
    </>
  )
}
```