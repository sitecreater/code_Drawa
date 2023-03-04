/* eslint-disable */
import React, { lazy, Suspense } from "react";
import Fade from "react-reveal/Fade";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./assets/LoginPage";
import Random from "./assets/Random";
import Cart from "./pages/Cart";
import FooterBar from "./components/FooterBar";
import HeaderBar from "./components/HeaderBar";
import Trading from "./pages/Trading";
import "./firebase";
import DrawDetail from "./pages/DrawDetail";
import DrawDone from "./pages/DrawDone";
import DrawInfo from "./pages/DrawInfo";
import MainPage from "./pages/MainPage";
import ShopDetail from "./pages/ShopDetail";
import ShopPay from "./pages/ShopPay";

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
