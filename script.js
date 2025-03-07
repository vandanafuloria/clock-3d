const secondHandEl = document.querySelector('.second-hand');
const minuteHandEl = document.querySelector('.minute-hand');
const hourHandEl = document.querySelector('.hour-hand');


function secondHandRotation() {
    const sec = new Date();
    let seconds = sec.getSeconds();
     
    seconds =  seconds * 6;
    // const audio = new Audio("/assets/tik.mp3");
    // audio.play();
    // const audio = new Audio("/assets/tik.mp3"); // Absolute path
    // audio.play();
    //  audio.currentTime = 0;
    //  audio.volume = 0.5;
    secondHandEl.style.transform = `rotate(${seconds}deg)`;
   
    
}
 
function  minuteRotation(){
    const min = new Date();
    let minutes = min.getMinutes();
    console.log(minutes);
    minutes = minutes * 6 ;
    console.log("working>>")
    minuteHandEl.style.transform = `rotate(${minutes}deg)`;
}

function hourRotaion(){
    const hour = new Date();
    let hours = hour.getHours();
    hours = hours * 30 ;
    hourHandEl.style.transform = `rotate(${hours}deg)`;
 
}

 const handler1 = setInterval(secondHandRotation, 1000);
const  handler2 = setInterval(minuteRotation, 60000)
const handler3  = setInterval(hourRotaion, 1000 * 60 * 60 ); 


addEventListener("load",hourRotaion);
addEventListener("load", minuteRotation)
addEventListener('load', secondHandRotation);