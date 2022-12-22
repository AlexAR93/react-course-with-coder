import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Item = ({ id, title, stock, price, pictureUrl }) => {
    return (
        <div className='latest-new__product'>
            <div className='latest-new__product-container'>
                <div className='product__img-container'>
                    <img  src={pictureUrl}/>
                </div>
            
                <h2>{title}</h2>
                <div className='latest-new__product-info'>
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
        </div>
    );
}

export default Item;