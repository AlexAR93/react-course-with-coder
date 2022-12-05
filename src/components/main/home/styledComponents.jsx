import styled from "styled-components";

//ItemList
const ProductsContainer = styled.div`
    width:100%;
    padding: 10px 20px;
    display: flex;
    justify-content:start;
    gap:5px;
`;

//Item
const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    diplay: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
`;

const ProductContainer = styled.div`
    min-width: 100%;
    max-width:100%;
    height: 350px;
    display: flex;
    flex-wrap:wrap;
    flex-direction:column;
    align-items: center;
    background-color: #1976D2;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
    text-align:center;
    font-size:.7rem;
    color:#fff;
    transition:all .5s !important;
    
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    display:flex;
    justify-content:center;
    align-items:center;
    
`;

const Image = styled.img`
    main-width:100%;
`;

const Icon = styled.div`
    font-size: 12px;
    width: 100px;
    height: 40px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px;
    transition: all 0.5s ease;
    color:#000;
    &:hover {
        background-color: #1976D2;
        transform: scale(1.3);
        color:#fff;
    }
`;


//ItemDetail
const DetailContainer = styled.div`

`;

const WrapperDetail = styled.div`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex: 1;

`;

const ImageDetail = styled.img`
    width: 100%;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price  = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

export {  
    ProductsContainer,ProductContainer,
    Circle, Image, Info, Icon,
    DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price
}