
let interval=null;

const slider=(width,sliderChildren,btnBackRef,btnNextRef)=>{
      
    start(sliderChildren)
    
    sliderInterval(next,width,sliderChildren)
    

    window.addEventListener('resize',()=>{
        clearInterval(interval)
        sliderInterval(next,width,sliderChildren)
    })

    btnNextRef.current.addEventListener('click',()=>{
        next(width,sliderChildren)
        sliderInterval(next,width,sliderChildren)
    })
    btnBackRef.current.addEventListener('click',()=>{
        back(width,sliderChildren)
        sliderInterval(next,width,sliderChildren)
    })
    
}
const start=(sliderChildren)=>{
    let sliderSectionEnd = sliderChildren.children[sliderChildren.children.length-1];
    sliderChildren.insertAdjacentElement("afterbegin", sliderSectionEnd);
}


const next=(width,sliderRef)=>{

    let sliderSectionFirst = sliderRef.children[0];
    sliderRef.style.marginLeft = `-${width*2}%`;
    sliderRef.style.transition = "margin-left .3s";
    setTimeout(() => {
        sliderRef.style.transition = "none";
        sliderRef.insertAdjacentElement("beforeend", sliderSectionFirst)
        sliderRef.style.marginLeft = `-${width}%`
    }, 100); 
}

const back=(width,sliderRef)=>{
    let sliderSectionFirst = sliderRef.children[sliderRef.children.length-1];
    sliderRef.style.marginLeft = `0`;
    sliderRef.style.transition = "margin-left .3s";
    setTimeout(() => {
        sliderRef.style.transition = "none";
        sliderRef.insertAdjacentElement("afterbegin", sliderSectionFirst)
        sliderRef.style.marginLeft = `-${width}%`
    }, 100); 
}


const sliderInterval=(next,width,sliderChildren)=>{
    clearInterval(interval)
    interval=setInterval(() => {
        next(width,sliderChildren)
    }, 7300);
}

export default slider

export{start,next,back}