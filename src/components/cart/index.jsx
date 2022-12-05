import { ImportExport } from "@mui/icons-material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import {CartContext} from "../../context/CartContext";

const Cart = () => {

    const {cartList, clear, deleteItem}= useContext(CartContext)

    return (
        <div>
            <h1>Carrito de compras</h1>
            {
                cartList.length>0&&
                <button onClick={clear}>Eliminar todo</button>
            }
            <Link to='/productos'><button>Continuar Comprando</button></Link>
            <hr/>
            <div>
                {
                    cartList.length==0?(<div>
                        <p>No hay productos en el carrito...</p>
                    </div>):
                    cartList.map(item=><article>
                        <img src={item.url} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>{item.price*item.qty}</p>
                        <p>{item.qty} producto/s</p>
                        <button onClick={deleteItem} value={item.id}>Quitar</button>
                    </article>)
                }
            </div>
        </div>
    );
}

export default Cart;