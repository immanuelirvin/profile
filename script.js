const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.home-background');

let load = 0;

const scale = (num, in_min, in_max, out_min, out_max)=>{
    return (num-in_min)*(out_max-out_min) / (in_max-in_min)+out_min;
}

function blurring(){
    load++;

    if(load>99){
        clearInterval(int);
        loadText.parentNode.removeChild(loadText);
    }
    // console.log(load);
    loadText.style.zIndex = 5;
    loadText.innerHTML = `Welcome in ${load}%`;
    loadText.style.opacity = scale(load, 0,100,1,0);
    bg.style.filter = `blur(${scale(load,0,100,15,0)}px)`;
    

}

let int = setInterval(blurring,30);


