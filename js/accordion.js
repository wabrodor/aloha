const question = document.querySelectorAll(".questions")


accordion(question)

   
function accordion(accord){
    accord.forEach(btn =>{
        const button = btn.querySelector(".question-btn")
        button.addEventListener("click",()=>{
         
    accord.forEach(item =>{
         if(item !== btn){
                item.classList.remove("show-question")
                item.querySelector(".qn-icon-down").classList.remove("rotate")
    
            }
        })
    
            btn.classList.toggle("show-question")
           btn.querySelector(".qn-icon-down").classList.toggle("rotate")
    
        })
    })
}

