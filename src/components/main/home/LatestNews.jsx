import React, { useState, useEffect, useRef } from 'react'
import LatestProduct from './LatestProduct'
import slider from '../../../Hooks/slider';
const LatestNews = ({products,Divider}) => {
    const [sliderChildren, setSliderChildren] = useState([])
    const [width, setWidth] = useState({})

    const btnBackRef= useRef()
    const btnNextRef= useRef()
    const sliderRef=useRef()

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

    useEffect(() => {
        sliderChildren?.children&&
        slider(sliderChildren,btnBackRef,btnNextRef)
    }, [sliderChildren])

    
  return (
    <div className='latest-news'>
        <h2>Ultimas novedades</h2>
        <Divider/>
        <div className='latest-news__container'>

            <div className='latest-news-carts'  ref={sliderRef}>
                {
                    products.map(item => (<LatestProduct key={item.id} id={item.id} title={item.name} price={item.price} pictureUrl={item.url} stock={item.stock}/>))
                }
            </div>
        </div>
        <div className='btn-container'>
        <button className='back' ref={btnBackRef}>{'<'}</button>
        <button className='next' ref={btnNextRef}>{'>'}</button>
        </div>
    </div>
  )
}

export default LatestNews