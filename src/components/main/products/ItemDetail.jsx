import { Button } from '@mui/material';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import {CartContext} from '../../../context/CartContext'
const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);

    const {addToCart}=useContext(CartContext)

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
        addToCart(item, qty)
    }

    return (
        <>
        {
            item && item.url
            ? 
            <div className='product-detail' >
                    <div className='product-detail__img-container'>
                        <img src={item.url} />
                    </div>
                    <div className='product-detail__info'>
                        <h1 className='product-detail__tittle'>{item.name}</h1>
                        <p className='product-detail__description'>{item.description}</p>
                        <p className='product-detail__price'>$ {item.price}</p>
                        <div className='product-detail__stock'>{item.stock} unidades en stock</div>
                    </div>
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' style={{textDecoration: "none"}}><Button variant="contained" color="secondary">CheckOut</Button></Link>
                    }
            </div>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;