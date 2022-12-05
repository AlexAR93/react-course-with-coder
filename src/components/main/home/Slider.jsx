import React, { useEffect, useRef, useState } from 'react'
import getProducts from '../../../helpers/getProducts'
import slider from '../../../Hooks/slider';
import './index.css';


const Slider = ({sliderImg}) => {
    
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
        sliderChildren?.children?.length>1&&(
            slider(width.porcentage,sliderChildren,btnBackRef,btnNextRef)
        )
    }, [sliderChildren])


    return (
        <div className="slider-container">
            <button className='back' ref={btnBackRef}>{'<'}</button>
            <div className='slider' ref={sliderRef}>
            {
                sliderImg.map(data=>(
                    <div className='slider__item' key={data.id}>
                        <img src={
                            data.url[
                                width.px<=969?1:2
                            ]    
                        } alt={data.alt}/>
                    </div>)
                )
            }
            </div>
            <button className='next' ref={btnNextRef}>{'>'}</button>
        </div>
    )
}

export default Slider