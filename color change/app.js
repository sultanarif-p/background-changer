const btn = document.querySelector(".btn");
const boxes = document.querySelectorAll(".box");


let running = false;

function getColours (){
    let letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0 ; i < 6 ; i++){
        color += letters[Math.floor(Math.random ()* 16)]
    }
    return color
}

function start  (){
    if (running){
       boxes.forEach(color => {
           color.style.background = getColours()
       }); 
       setTimeout(start , 500)
    }
}

btn.addEventListener("click", function(){
    btn.innerText = "STOP"
    if(running){
        running=  false;
        btn.innerText = "change color"
    }
    else{
        running=true;
        start()

    }
})