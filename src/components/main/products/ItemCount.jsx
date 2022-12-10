import { Button } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { useEffect, useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial+1) {
            setCount(count - 1);
        }
    }
    return (
        <div className='product-amount'>
            <Button variant="text" onClick={increment}><Add /></Button>
            <p className='product-amount__count'>{count}</p>
            <Button variant="text" onClick={decrement}><Remove /></Button>
            {
                stock && count
                ? <Button variant="contained" color="primary" onClick={() => onAdd(count)}>Add to Cart</Button>
                : <Button variant="contained" disabled>Add to Cart</Button>
            }
            
        </div>
    );
}

export default ItemCount;