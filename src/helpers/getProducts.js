// import products from "../utils/products";
import {getFirestore,collection,getDocs, query, orderBy} from 'firebase/firestore';
import{db} from '../firebase/config.js'
// const newPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             return resolve(products)
//         }, 500);
//     })
// }

const getProducts = async(collectionName,order,orderType) => {

    const queryCollection=collection(db,collectionName)
    const getData=await getDocs(queryCollection,orderBy(order,orderType))
  
    const data=getData.docs.map(product=>({id:product.id,...product.data()}))
    
    console.log(data)
    return data;


    // const data=await newPromise();  
    // return data
}

export default getProducts