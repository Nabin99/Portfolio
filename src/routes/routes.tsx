import About from "../pages/About/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Works from "../pages/Works/Works";

const routes = [
  {
    path: "/about",
    element: About,
  },
  {
    path: "/skills",
    element: Skills,
  },
  {
    path: "/works",
    element: Works,
  },
  {
    path: "/blog",
    element: Blog,
  },
  {
    path: "/contact",
    element: Contact,
  },
  {
    path: "/",
    element: Home,
  },
];

export default routes;
