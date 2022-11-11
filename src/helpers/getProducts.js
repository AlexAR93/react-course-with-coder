import products from "../utils/products";

const newPromise=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            return resolve(products)
        }, 500);
    })
}

const getProducts = async() => {



    const data=await newPromise();

    
    return data
}

export default getProducts