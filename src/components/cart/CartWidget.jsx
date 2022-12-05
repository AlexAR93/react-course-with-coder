import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import './cartWidget.css';
const CartWidget = () => {
    return (
        <NavLink to='/cart' className="cart-widget">
            <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlined />
            </Badge>
        </NavLink>
    );
}

export default CartWidget;