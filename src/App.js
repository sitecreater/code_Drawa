/* eslint-disable */
import React, {lazy, Suspense} from 'react';
import {Routes, Route} from 'react-router-dom'
import HeaderBar from './Components/HeaderBar';
import LoginPage from './Routes/LoginPage';
import './CSS/App.css';
import Trading from './Components/Trading';
import FooterBar from './Components/FooterBar';
import DrawDetail from './Routes/DrawDetail';
import ShopDetail from './Routes/ShopDetail';
import MainPage from './Routes/MainPage';
import Cart from './Components/Cart';
import DrawInfo from './Routes/DrawInfo';
import './firebase';
import DrawDone from './Routes/DrawDone';
import ShopPay from './Routes/ShopPay';

const Draw = lazy(() => import ('./Routes/Draw'));
const Shop = lazy(() => import ('./Routes/Shop'));

function App() {

    return (
        <div className='App'>
            <HeaderBar/>
            <Suspense fallback={<h1> Loading ...</h1>}>
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/loginPage" element={<LoginPage />}/>
                    <Route path="/draw" element={<Draw />}/>
                    <Route path="/drawDetail/:id" element={<DrawDetail />}/>
                    <Route path="/drawInfo" element={<DrawInfo />}/>
                    <Route path="/drawDone" element={<DrawDone />}/>
                    <Route path="/shop" element={<Shop />}/>
                    <Route path="/shopDetail/:id" element={<ShopDetail />}/>
                    <Route path="/shopPay" element={<ShopPay />}/>
                    <Route path="/trading" element={<Trading />}/>
                    <Route path="/cart" element={<Cart />}/>
                    <Route
                        path="*"
                        element={<div> 길을 잘못 들었나요
                            ? </div>
                        }
                    />
                </Routes>
            </Suspense>
            <FooterBar/>
        </div>
    );
}

export default App;
