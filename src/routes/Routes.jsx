import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cart from "../components/cart";
import Header from "../components/header";

import CartWidget from "../components/cart/CartWidget";
import Products from "../components/main/products";
import ItemDetailContainer from "../components/main/products/ItemDetailContainer";
import { Box,Toolbar} from '@mui/material';
import Home from "../components/main/home";
import { useState } from "react";
import { useEffect } from "react";
const MyRoutes = () => {
    
    return (
        <BrowserRouter>
            <Header/>
            <Box component="main" className="main" sx={{ py: 3, px:1 }}>
                <Toolbar/>
                <Routes>
                <Route path='/' element={<Navigate to='/productos'/>} />
                <Route  path="/inicio" element={<Home/>} />
                <Route path='/productos' element={<Products />} />
                <Route path='/productos/category/:idCategory' element={<Products />} />
                <Route path='/item/:idItem' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                </Routes>
            </Box>
            <div>
                <CartWidget />
            </div>

            <footer>@PC Components</footer>
        </BrowserRouter>

    );
}

export default MyRoutes;