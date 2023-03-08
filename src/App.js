/* eslint-disable */
import React, { lazy, Suspense } from "react";
import Spinner from "react-bootstrap/Spinner";
import Fade from "react-reveal/Fade";
import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import FooterBar from "./components/FooterBar";
import HeaderBar from "./components/HeaderBar";
import "./firebase";
import LoginPage from "./logic/LoginPage";
import Random from "./logic/Random";
import DrawDetail from "./pages/draw/DrawDetail";
import DrawDone from "./pages/draw/DrawDone";
import DrawInfo from "./pages/draw/DrawInfo";
import Cart from "./pages/element/Cart";
import MainPage from "./pages/element/MainPage";
import Trading from "./pages/element/Trading";
import ShopPay from "./pages/shop/ShopBuy";
import ShopDetail from "./pages/shop/ShopDetail";
const Draw = lazy(() => import("./pages/draw/Draw"));
const Shop = lazy(() => import("./pages/shop/Shop"));

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Suspense fallback={<Spinner animation="border" />}>
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
