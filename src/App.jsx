import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { AboutUs } from "./components/AboutUs";
import { Features } from "./components/Features";
import { Solution } from "./components/Solution";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/features" element={<Features />} />
          <Route path="/solution" element={<Solution />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
