import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import routes from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={<route.element />} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
