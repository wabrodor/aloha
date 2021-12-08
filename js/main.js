

const navLinks = document.querySelectorAll("#nav-home")
const toggle = document.querySelector(".toggle")
const nav = document.querySelector(".navigation")
const overlay = document.querySelector(".overlay");

const links = document.querySelectorAll("#nav-home");

const navHeight = document.querySelector("nav")
const footer = document.querySelector("footer")

const date = new Date()
footer.innerHTML = `<P>copyright © ${date.getFullYear()}  ${document.title}  powerd by ALOHA </P>`



toggle.addEventListener("click", ()=>{
nav.classList.toggle("active_menu");
window.scrollTo(0,0);

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
        
    const slicedLink =  link.querySelector("a").getAttribute("href").slice(1);

        nav.classList.toggle("active_menu")
    })
})




