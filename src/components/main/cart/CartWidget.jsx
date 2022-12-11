import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import './cartWidget.css';
import {CartContext} from "../../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {

    const {productsCalculator}= useContext(CartContext)

    return (

        <NavLink to='/cart' className="cart-widget">
            <Badge badgeContent={productsCalculator()} color="secondary">
                <ShoppingCartOutlined />
            </Badge>
        </NavLink>
    );
}

export default CartWidget;