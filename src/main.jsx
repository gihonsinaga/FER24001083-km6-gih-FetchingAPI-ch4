import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import Figures from "./Components/Figures.jsx";
import FiguresDetail from "./Components/FiguresDetail.jsx";
import Cards from "./Components/Cards.jsx";
import CardsDetail from "./Components/CardsDetail.jsx";
import Series from "./Components/Series.jsx";
import Games from "./Components/Games.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="Figures" element={<Figures />} />
      <Route path="FiguresDetail" element={<FiguresDetail />} />
      <Route path="Cards" element={<Cards />} />
      <Route path="CardsDetail" element={<CardsDetail />} />
      <Route path="Series" element={<Series />} />
      <Route path="Games" element={<Games />} />
    </Routes>
  </BrowserRouter>
);
