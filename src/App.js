/* eslint-disable */
import React, { lazy, Suspense } from "react";
import Fade from "react-reveal/Fade";
import { Routes, Route } from "react-router-dom";
import HeaderBar from "./components/HeaderBar";
import LoginPage from "./assets/LoginPage";
import "./App.css";
import Trading from "./components/Trading";
import FooterBar from "./components/FooterBar";
import DrawDetail from "./pages/DrawDetail";
import ShopDetail from "./pages/ShopDetail";
import MainPage from "./pages/MainPage";
import Cart from "./components/Cart";
import DrawInfo from "./pages/DrawInfo";
import "./firebase";
import DrawDone from "./pages/DrawDone";
import ShopPay from "./pages/ShopPay";
import Random from "./assets/Random";

const Draw = lazy(() => import("./pages/Draw"));
const Shop = lazy(() => import("./pages/Shop"));

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Suspense fallback={<h1> Loading ...</h1>}>
        <Fade>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/draw" element={<Draw />} />
            <Route path="/drawDetail/:id" element={<DrawDetail />} />
            <Route path="/drawInfo" element={<DrawInfo />} />
            <Route path="/random" element={<Random />} />
            <Route path="/drawDone" element={<DrawDone />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shopDetail/:id" element={<ShopDetail />} />
            <Route path="/shopPay" element={<ShopPay />} />
            <Route path="/trading" element={<Trading />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<div> 길을 잘못 들었나요 ? </div>} />
          </Routes>
        </Fade>
      </Suspense>
      <FooterBar />
    </div>
  );
}

export default App;
