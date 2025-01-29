const h1El = document.querySelector('h1');
const h2El = document.querySelector('h2');
const h3El = document.querySelector('h3');
let clockEl = document.querySelector('.clock')

function getTime(){

    let date = new Date();
    const format= date.toLocaleTimeString( 'en-IN' ,{hour12: true});
    console.log(format);
    h1El.innerText = format;
}


function stopTime()
{
    clearInterval(handler);
}

const handler = setInterval(getTime, 1000);


// clockEl = addEventListener('mouseover', getTime)
// clockEl = addEventListener('mouseout', stopTime)




