import { useEffect, useState } from "react";
import { useParams } from "react-router";

import getProducts from "../helpers/getProducts";
import ItemDetail from "./ItemDetail";
// const { products } = require('../utils/products');

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        getProducts()
            .then(result => setDato(result.find(item => item.id === parseInt(idItem))))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;