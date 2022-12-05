import React, { useState, useEffect, useRef } from 'react'
import Item from './Item'
import { ProductsContainer } from './styledComponents';
import {start,next,back} from '../../../Hooks/slider';
const LatestNews = ({products,Divider}) => {

    const [width, setWidth] = useState({
        px:window.innerWidth,
        porcentage:window.innerWidth*100/window.innerWidth
    })

    const [sliderChildren, setSliderChildren] = useState([])

    const sliderRef= useRef()
    
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

    useEffect(() => {
        setSliderChildren(sliderRef.current)
    }, [products])
    
    const handleBtnBack=()=>{
        back(width.porcentage/sliderChildren.children[1].clientWidth,sliderChildren)
    }
    const handleBtnNext=()=>{
        next(width.porcentage/sliderChildren.children[1].clientWidth,sliderChildren)
    }


  return (
    <div className='latest-news-container'>
        <h2>Ultimas novedades</h2>
        <Divider/>
        <div className='latest-news'>

            <ProductsContainer ref={sliderRef}>
                {
                    
                    products.map(item => (<Item key={item.id} id={item.id} title={item.name} price={item.price} pictureUrl={item.url} stock={item.stock} className='latest-news__item'/>))
                }
            </ProductsContainer>
        </div>
        <div className='btn-container'>
        <button className='back' ref={btnBackRef} onClick={handleBtnBack}>{'<'}</button>
        <button className='next' ref={btnNextRef} onClick={handleBtnNext}>{'>'}</button>
        </div>
    </div>
  )
}

export default LatestNews