import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cart from "../components/main/cart";
import Header from "../components/header";

import CartWidget from "../components/main/cart/CartWidget";
import Products from "../components/main/products";
import ItemDetailContainer from "../components/main/products/ItemDetailContainer";
import { Box,Toolbar} from '@mui/material';
import Home from "../components/main/home";
import CartContextProvider from "../context/CartContext";
const MyRoutes = () => {
    
    return (
        <CartContextProvider>
            <BrowserRouter>
                <Header/>
                <Box component="main" className="main" sx={{ py: 3, px:1 }}>
                    <Toolbar/>
                    <Routes>
                    <Route path='/' element={<Navigate to='/inicio'/>} />
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
        </CartContextProvider>

    );
}

export default MyRoutes;