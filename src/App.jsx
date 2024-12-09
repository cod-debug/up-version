import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import { useEffect } from "react";
import Projects from "./pages/Projects";
import AboutUs from "./pages/AboutUs";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    id: 'root',
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/about-us',
        element: <AboutUs />
      }
    ],
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
