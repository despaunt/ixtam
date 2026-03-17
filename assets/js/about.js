document.addEventListener("DOMContentLoaded", () => {
const burger = document.querySelector(".burger-menu")
const navbar = document.querySelector(".navbar")

if(burger){
burger.addEventListener("click", () => {
navbar.classList.toggle("active")
})
}
});