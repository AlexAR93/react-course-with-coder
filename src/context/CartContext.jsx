import { createContext, useState } from "react";
export const CartContext = createContext()
const CartContextProvider=(props)=>{
    const [cartList, setCartList] = useState([])
    const addToCart=(item, qty)=>{
        const isItem=cartList.map(product=>product.name).includes(item.name);

        let found = cartList.find(product => product.id === item.id);

        !isItem?
        (setCartList(c=>c=[
            ...c,
            {
                ...item,
                qty:qty
            }
        ])):
        (found.qty += qty)
    }
    const clear=()=>{
        setCartList([])
    }

    const deleteItem=(e)=>{
        setCartList(cartList.filter(product=>product.id!=e.target.value))
    }
    return(
        <CartContext.Provider value={{cartList, addToCart,clear,deleteItem}}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContextProvider