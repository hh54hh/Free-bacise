import "./global.css";
import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Programming from "./pages/Programming";
import AI from "./pages/AI";
import Security from "./pages/Security";
import Mobile from "./pages/Mobile";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";

// Component to handle GitHub Pages SPA redirects
const RouteHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = sessionStorage.getItem("redirectPath");
    if (redirectPath && redirectPath !== "/") {
      sessionStorage.removeItem("redirectPath");
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  return null;
};

// Ultra-lightweight app for optimal performance
const App = () => (
  <BrowserRouter>
    <RouteHandler />
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
