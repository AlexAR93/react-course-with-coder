import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Item = ({ id, title, stock, price, pictureUrl }) => {
    return (
        <div className='product'>
            <div className='product__image-container'>
                <img src={pictureUrl}/>
            </div>

            <h2>{title}</h2>
            <div className='product__info'>
                
                <span className='product__icon-container'>
                    <LocalOfferOutlined /><strong>$ {price}</strong>
                </span>
                <span className='product__icon-container'>
                    <DescriptionOutlined />{stock} unid.
                </span>
                <span className='product__icon-container' style={{cursor: "pointer"}}>
                    <Link to={`/item/${id}`}><InfoOutlined />Detalle</Link>
                </span>
            </div>
        </div>
    );
}

export default Item;