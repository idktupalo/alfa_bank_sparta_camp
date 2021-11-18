const buttons = document.getElementsByClassName("button");
const music = new Audio("pop.mp3");

let width=0;
const sliderStrips = document.querySelector('.slider_strips');

[].forEach.call(buttons,(event)=>{
    event.addEventListener('click',()=>{
        music.play();
    })
})

document.querySelector('.prev').addEventListener('click',function(){
    width=width-640
    if (width <0){
        width=2560
    }
    sliderStrips.style.left=-width+'px';
});

document.querySelector('.next').addEventListener('click',function(){
    width=width+640
    if (width > 2560){
        width=0;
    }
    sliderStrips.style.left=-width+'px';
});

