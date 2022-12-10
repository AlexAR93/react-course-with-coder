import React, { useState, useEffect } from 'react'
import {Divider } from "@mui/material";
import Slider from './Slider';
import LatestNews from './LatestNews';
import getProducts from '../../../helpers/getProducts';
import './home.css';

const Home = () => {

  const [sliderImg, setSliderImg] = useState([]);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getProducts('HighlightSlider','createAt','asc')
    .then(result => setSliderImg(result.map(item => item)))
    .catch(err=>console.log(err))

    getProducts('products','createAt','desc')
    .then(result => setProducts(result.map(item => item)))
    .catch(err=>console.log(err))
}, [])

  if(sliderImg.length && products.length){
    return(
      <div>
        
          <Slider sliderImg={sliderImg} />
          <LatestNews products={products} Divider={Divider} />
      </div>
  )}{
    return(
      <div>
        <h3>Cargando...</h3>
      </div>
    )
  }
}

export default Home