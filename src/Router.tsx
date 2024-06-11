import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { Career } from "./pages/Career";
import { Media } from "./pages/Media";
import { PressReleases } from "./pages/PressReleases";
import { CorporateNews } from "./pages/CorporateNews";

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
