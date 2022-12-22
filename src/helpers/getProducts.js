import {collection,getDocs, orderBy,query} from 'firebase/firestore';
import{db} from '../firebase/config.js'

const getProducts = async(collectionName,order,orderType) => {

    const queryCollection=collection(db,collectionName)
    const getData=await getDocs(query(queryCollection,orderBy(order,orderType)))
  
    const data=getData.docs.map(product=>({id:product.id,...product.data()}))
    
    return data;
}

export default getProducts