import ItemList from './ItemList';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// const { products } = require('../utils/products')
import getProducts from "../helpers/getProducts";
const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();


    //componentDidUpdate
    useEffect(() => {
        getProducts()

        .then(result => {

            setDatos(result.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
            
        }))
    }
        )
        .catch(err => console.log(err))
        
    }, [idCategory]);
   
    return (
        <>  
            <ItemList items={datos} idCategory={idCategory}/>
        </>
    );
}

export default ItemListContainer;