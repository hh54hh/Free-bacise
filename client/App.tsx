import "./global.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

// Ultra-lightweight app for Free Basics compatibility
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

createRoot(document.getElementById("root")!).render(<App />);
