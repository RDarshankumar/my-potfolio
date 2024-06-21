

const mobile = document.querySelector(".mobile-nav");
const nav_header = document.querySelector(".header");

mobile.addEventListener('click', ()=>togglenavbar())


const togglenavbar = ()=>{
  nav_header.classList.toggle('active')
}