import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Intro from "./pages/Intro";
import Home from "./pages/Home";
import Detalles from "./pages/Detalles";
import Regalos from "./pages/Regalos";
import Confirma from "./pages/Confirma";

export default function App() {
  const location = useLocation();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      document.body.classList.add("is-ready");
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detalles" element={<Detalles />} />
      <Route path="/regalos" element={<Regalos />} />
      <Route path="/confirma" element={<Confirma />} />
    </Routes>
  );
}
