import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { ProductsContainer } from './styledComponents';

const ItemList = ({ items}) => {
    const { idCategory } = useParams();

    if(items.length > 0 && (idCategory==items.find(element =>element.category.id).category.id|| idCategory==undefined)){
    return (
        <ProductsContainer>
        {         
            items.map(item => (<Item key={item.id} id={item.id} title={item.name} price={item.price} pictureUrl={item.url} stock={item.stock} />))
        }
        </ProductsContainer>
    )
    }else{
        return(
            <div>
                <p>Cargando...</p>
            </div>
        )
    }
}

export default ItemList;