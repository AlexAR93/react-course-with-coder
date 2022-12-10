import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@mui/icons-material';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, title, stock, price, pictureUrl, setSliderChildren, products }) => {
  
    const sliderRef=useRef()
    useEffect(() => {
        setSliderChildren(sliderRef.current)
    }, [products])

    return (
        <div className='latest-new__product' ref={sliderRef}>
            <div className='product__img-container'>
                <img  src={pictureUrl}/>
            </div>
         
            <h2>{title}</h2>
            <div className='product__info'>
                <span>
                    <LocalOfferOutlined /><strong>$ {price}</strong>
                </span>
                <span>
                    <DescriptionOutlined />{stock} unid.
                </span>
                <span style={{cursor: "pointer"}}>
                    <Link to={`/item/${id}`}><InfoOutlined />Detalle</Link>
                </span>
            </div>
        </div>
    );
}

export default Item;