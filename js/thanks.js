

const counter = document.querySelector(".count")
let count = 0;

// if(count > 5) return

    setInterval(() => {
        if(count > 5) return
        counter.textContent = `${count++}s` 
     },1000);


window.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(() => {
        window.location.href = "index"
    }, 5000);
})