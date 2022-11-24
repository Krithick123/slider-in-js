let sliderPosition=0;
const sliders=document.querySelectorAll('.slider-item');
const totalSlider=sliders.length;
console.log(totalSlider);
const btnPrev=document.querySelector('#btn-left');
const btnNext=document.querySelector('#btn-right');

btnPrev.addEventListener('click',function(){
PrevSlide();
});

btnNext.addEventListener('click',function(){
NextSlide();
});

function updatePosition(){
sliders.forEach(slide=>{
slide.classList.remove('active');
slide.classList.add('hidden');
});

sliders[sliderPosition].classList.add('active');

dots.forEach(dot=>{
    dot.classList.remove('dot-active');
    });

dots[sliderPosition].classList.add('dot-active');
}

function PrevSlide(){
    if(sliderPosition==0)
    {
        sliderPosition=totalSlider-1;
    }
    else{
        sliderPosition--;
    }
updatePosition();
}

function NextSlide(){
    if(sliderPosition==totalSlider-1)
    {
        sliderPosition=0;
    }
    else{
        sliderPosition++;
    }
updatePosition();
}



   //Dots creation 
const dotContainer=document.querySelector('.dots');
sliders.forEach(slide=>{
    const dot=document.createElement('div');
    dot.classList.add('dot');
    dotContainer.appendChild(dot);
    });



const dots=document.querySelectorAll('.dot');
dots[sliderPosition].classList.add('dot-active');

dots.forEach((dot,index)=>{
    dot.addEventListener('click',function(){
        sliderPosition=index;
        updatePosition();
    });
    });

    setInterval(()=>{
        if(sliderPosition==totalSlider-1)
        {
            sliderPosition=0;
        }
        else{
            sliderPosition++;
        }
    updatePosition();
    },5000);