document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelector(".slides");
    const slide = document.querySelectorAll(".slide");

    let index = 0;

    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    if (next && prev && slides) {

        next.onclick = () => {
            index++;
            if (index >= slide.length) index = 0;
            slides.style.transform = `translateX(-${index * 100}%)`;
        };

        prev.onclick = () => {
            index--;
            if (index < 0) index = slide.length - 1;
            slides.style.transform = `translateX(-${index * 100}%)`;
        };

    }

    const loginButton = document.getElementById("loginButton");
    const logoutButton = document.getElementById("logoutButton");

    const isLogged = localStorage.getItem("loggedIn");

    if (isLogged === "true") {

        loginButton.style.display = "none";
        logoutButton.style.display = "flex";

    }

    logoutButton.onclick = () => {

        localStorage.removeItem("loggedIn");
        localStorage.removeItem("userName");

        window.location.reload();

    };

    const searchInput = document.getElementById("searchInput")

    searchInput.addEventListener("input", () => {

    const value = searchInput.value.toLowerCase()

    const products = document.querySelectorAll(".product-card")

    products.forEach(product => {

    const name = product.querySelector("h3").innerText.toLowerCase()

    if(name.includes(value)){
    product.style.display = "flex"
    }else{
    product.style.display = "none"
    }

    })

    })
    
    const burger = document.querySelector(".burger-menu")
const navbar = document.querySelector(".navbar")

if(burger){
burger.addEventListener("click", () => {
navbar.classList.toggle("active")
})
}
});