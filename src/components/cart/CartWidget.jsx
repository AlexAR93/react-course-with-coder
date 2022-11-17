import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";

const CartWidget = () => {
    return (
        <Badge badgeContent={4} color="secondary">
            <ShoppingCartOutlined />
        </Badge>
    );
}

export default CartWidget;