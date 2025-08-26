import "./global.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Programming from "./pages/Programming";
import AI from "./pages/AI";
import Security from "./pages/Security";
import Mobile from "./pages/Mobile";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";

// Ultra-lightweight app for optimal performance
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/programming" element={<Programming />} />
      <Route path="/ai" element={<AI />} />
      <Route path="/security" element={<Security />} />
      <Route path="/mobile" element={<Mobile />} />
      <Route path="/article/:id" element={<Article />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

createRoot(document.getElementById("root")!).render(<App />);
