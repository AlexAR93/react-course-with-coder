import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { ProductsContainer } from './styledComponents';

const ItemList = ({ items}) => {
    const { idCategory } = useParams();

    if(items.length > 0 && (idCategory==items.find(element =>element.categoryId).categoryId || idCategory==undefined)){
    return (
        <ProductsContainer>
        {         
            items.map(item => (<Item key={item.id} id={item.id} title={item.name} price={item.cost} pictureUrl={item.image[0]} stock={item.stock} />))
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