import React, { useState, useEffect, useRef } from 'react'
import LatestProduct from './LatestProduct'
import {start,next,back} from '../../../Hooks/slider';
const LatestNews = ({products,Divider}) => {

    const [width, setWidth] = useState({
        px:window.innerWidth,
        porcentage:window.innerWidth*100/window.innerWidth
    })

    const [sliderChildren, setSliderChildren] = useState([])


    const btnBackRef= useRef()
    const btnNextRef= useRef()

    useEffect(() => {
        window.addEventListener('resize',()=>{
            setWidth({
                px:window.innerWidth,
                porcentage:window.innerWidth*100/window.innerWidth
        })
        })
    }, [width.porcentage])
    
    const handleBtnBack=()=>{
        back((sliderChildren.clientWidth*100)/sliderChildren.parentElement.clientWidth,sliderChildren.parentElement)
    }
    const handleBtnNext=()=>{
        next((sliderChildren.clientWidth*100)/sliderChildren.parentElement.clientWidth,sliderChildren.parentElement)
    }
    useEffect(() => {
        sliderChildren?.parentElement?.children&&
        (start(sliderChildren.parentElement,(sliderChildren.clientWidth*100)/sliderChildren.parentElement.clientWidth),
        console.log((sliderChildren.parentElement.clientWidth*100)/sliderChildren.parentElement.clientWidth)
        
        )
    }, [sliderChildren])


  return (
    <div className='latest-news'>
        <h2>Ultimas novedades</h2>
        <Divider/>
        <div className='latest-news__container'>

            <div className='latest-news-carts'>
                {
                    products.map(item => (<LatestProduct key={item.id} id={item.id} title={item.name} price={item.price} pictureUrl={item.url} stock={item.stock} sliderChildren setSliderChildren={setSliderChildren} products={products}/>))
                }
            </div>
        </div>
        <div className='btn-container'>
        <button className='back' ref={btnBackRef} onClick={handleBtnBack}>{'<'}</button>
        <button className='next' ref={btnNextRef} onClick={handleBtnNext}>{'>'}</button>
        </div>
    </div>
  )
}

export default LatestNews