const menuBtn= document.querySelector("#menu-btn")
const navLnks= document.querySelector(".nav-links")
menuBtn.addEventListener("click", ()=>{
    navLnks.classList.toggle("mobile-menu")
})