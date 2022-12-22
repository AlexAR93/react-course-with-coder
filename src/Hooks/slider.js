let interval=null;

const slider=(sliderContainer,btnBackRef,btnNextRef,state=false)=>{
      
    let sliderWidth=(sliderContainer.firstChild.clientWidth*100)/sliderContainer.clientWidth;
    start(sliderContainer,sliderWidth)
    
    sliderInterval(next,sliderWidth,sliderContainer,state)
    
    window.addEventListener('resize',()=>{
        sliderWidth=(sliderContainer.firstChild.clientWidth*100)/sliderContainer.clientWidth;
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

const next=(sliderWidth,sliderContainer)=>{

    let sliderSectionFirst = sliderContainer.children[0];
    sliderContainer.style.marginLeft = `-${sliderWidth*2}%`;
    sliderContainer.style.transition = "margin-left .5s";
    setTimeout(() => {
        sliderContainer.style.transition = "none";
        sliderContainer.insertAdjacentElement("beforeend", sliderSectionFirst)
        sliderContainer.style.marginLeft = `-${sliderWidth}%`
    }, 500); 
}

const back=(sliderWidth,sliderContainer)=>{
    let sliderSectionFirst = sliderContainer.children[sliderContainer.children.length-1];
    sliderContainer.style.marginLeft = `0`;
    sliderContainer.style.transition = "margin-left .5s";
    setTimeout(() => {
        sliderContainer.style.transition = "none";
        sliderContainer.insertAdjacentElement("afterbegin", sliderSectionFirst)
        sliderContainer.style.marginLeft = `-${sliderWidth}%`
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