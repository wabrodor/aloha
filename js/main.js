const toggle = document.querySelector(".toggle")
const linksContainer = document.querySelector(".navigation")
const links = document.querySelectorAll(".nav-home");
const navHeight = document.querySelector("nav")
const footer = document.querySelector("footer")
const linkList = document.querySelectorAll(".nav_link")
const date = new Date()
footer.innerHTML = `<P>copyright © ${date.getFullYear()}  ${document.title}  powerd by ALOHA </P>`



toggle.addEventListener("click", ()=>{
    linksContainer.classList.toggle("active_menu");
})


window.addEventListener("scroll", ()=>{
    const height = window.scrollY;
    const fixedNav = navHeight.getBoundingClientRect().height;
   
    if(height > fixedNav + 20){
        navHeight.classList.add("fixed")
    }
    else{
        navHeight.classList.remove("fixed")
    }
  
})



links.forEach(link =>{
    link.addEventListener("click", (e)=>{
        e.preventDefault();

    

const activeItem = document.querySelectorAll(".find_item");

activeItem.forEach(active =>{
    active.addEventListener("click", (e) =>{

    activeItem.forEach(item =>{

         if(item !== active){
             item.classList.remove("active_link")
                }
        })
    active.classList.add("active_link");
     
    })
})

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const nav = navHeight.getBoundingClientRect().height
    const fixedNav = navHeight.classList.contains("fixed");
    let position = element.offsetTop - nav;

     if (!fixedNav) {
      position = position - containerHeight;
    }

    if (navHeight > 100) {
        position = position + containerHeight;
      }

      window.scrollTo({
        left: 0,
        top: position,
      });
   
    linksContainer.classList.toggle("active_menu")
})
   })





// function 
const activeSwitcher  = (activeClass, switcher) => {
    const activeItem = document.querySelectorAll(".activeClass");

    activeItem.forEach(active =>{
        active.addEventListener("click", (e) =>{
    
        activeItem.forEach(item =>{
    
             if(item !== active){
                 item.classList.remove(switcher)
                    }
            })
        active.classList.add(switcher);
         
        })
    })
}