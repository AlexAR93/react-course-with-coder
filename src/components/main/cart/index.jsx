import { useContext } from "react";
import { Link } from "react-router-dom";
import {CartContext} from "../../../context/CartContext";
import './cart.css'
const Cart = () => {

    const {cartList, clear, deleteItem}= useContext(CartContext)

    return (
        <div className="cart">
            <div className="cart__header">
                <h1 className="cart__header-tittle">Carrito de compras</h1>
                {
                    cartList.length>0&&
                    <button onClick={clear}>Eliminar todo</button>
                }
                <Link to='/productos'><button>Continuar Comprando</button></Link>
            </div>
            <hr/>
            <div className="cart__products">
                {
                    cartList.length==0?(<div>
                        <p>No hay productos en el carrito...</p>
                    </div>):
                    cartList.map(item=><article key={item.id} className='cart__product'>
                        <div className="cart__product-img-container">
                            <img src={item.url} alt={item.name} />
                        </div>
                        <h2 className="cart__product-tittle">{item.name}</h2>
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