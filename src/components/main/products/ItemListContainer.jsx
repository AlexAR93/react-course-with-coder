import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const ItemListContainer = ({date}) => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {

            setDatos(date.filter(item => {
            if (idCategory === undefined) 
            return item;
            return item.category.id === parseInt(idCategory)
            
        }))
    }, [date,idCategory]);
    return (
        <>  
            <ItemList items={datos} idCategory={idCategory}/>
        </>
    );
}

export default ItemListContainer;