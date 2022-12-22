
let interval=null;

const slider=(sliderContainer,btnBackRef,btnNextRef,state=false)=>{
      
    let sliderWidth=(sliderContainer.firstChild.clientWidth*100)/sliderContainer.clientWidth;

    start(sliderContainer,sliderWidth)
    
    sliderInterval(next,sliderWidth,sliderContainer,state)
    
    window.addEventListener('resize',()=>{
        clearInterval(interval)
        sliderInterval(next,sliderWidth,sliderContainer,state)
    })

    btnNextRef.current.addEventListener('click',()=>{
        next(sliderWidth,sliderContainer)
        sliderInterval(next,sliderWidth,sliderContainer,state)
    })
    btnBackRef.current.addEventListener('click',()=>{
        back(sliderWidth,sliderContainer)
        sliderInterval(next,sliderWidth,sliderContainer,state)
    })
    
}
const start=(sliderContainer,sliderWidth)=>{
    let sliderSectionEnd = sliderContainer.children[sliderContainer.children.length-1];
    sliderContainer.insertAdjacentElement("afterbegin", sliderSectionEnd);
    sliderContainer.style.marginLeft=`
        -${sliderWidth}%
    `
}


const next=(sliderWidth,sliderRef)=>{

    let sliderSectionFirst = sliderRef.children[0];
    sliderRef.style.marginLeft = `-${sliderWidth*2}%`;
    sliderRef.style.transition = "margin-left .5s";
    setTimeout(() => {
        sliderRef.style.transition = "none";
        sliderRef.insertAdjacentElement("beforeend", sliderSectionFirst)
        sliderRef.style.marginLeft = `-${sliderWidth}%`
    }, 500); 
}

const back=(sliderWidth,sliderRef)=>{
    let sliderSectionFirst = sliderRef.children[sliderRef.children.length-1];
    sliderRef.style.marginLeft = `0`;
    sliderRef.style.transition = "margin-left .5s";
    setTimeout(() => {
        sliderRef.style.transition = "none";
        sliderRef.insertAdjacentElement("afterbegin", sliderSectionFirst)
        sliderRef.style.marginLeft = `-${sliderWidth}%`
    }, 500); 
}


const sliderInterval=(next,sliderWidth,sliderContainer,state)=>{
    state==true&&(
    clearInterval(interval),
    interval=setInterval(() => {
        next(sliderWidth,sliderContainer)
    }, 3333)
    )
}

export default slider

export{start,next,back}