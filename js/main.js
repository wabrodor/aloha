

const navLinks = document.querySelectorAll(".nav-home")
const toggle = document.querySelector(".toggle")
const linksContainer = document.querySelector(".navigation")
const links = document.querySelectorAll(".nav-home");
const navHeight = document.querySelector("nav")
const footer = document.querySelector("footer")
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

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const nav = navHeight.getBoundingClientRect().height
    const fixedNav = navHeight.classList.contains("fixed");
    let position = element.offsetTop - nav;

     if (!fixedNav) {
      position = position - navHeight;
    }

    if (navHeight > 82) {
        position = position + containerHeight;
      }

      window.scrollTo({
        left: 0,
        top: position,
      });
    linksContainer.classList.toggle("active_menu")
});
    
    })





