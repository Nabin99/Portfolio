import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Works from "./pages/Works";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
