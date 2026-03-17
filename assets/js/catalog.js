document.addEventListener("DOMContentLoaded", () => {

const products = document.querySelectorAll(".product-card");
const categoryButtons = document.querySelectorAll(".category-filter li");
const priceMin = document.getElementById("priceMin");
const priceMax = document.getElementById("priceMax");
const filterBtn = document.querySelector(".filter-btn");

let currentCategory = "all";

categoryButtons.forEach(btn => {

btn.addEventListener("click", () => {

currentCategory = btn.dataset.category;
filterProducts();

});

});

filterBtn.addEventListener("click", filterProducts);

function filterProducts(){

const min = priceMin.value ? parseInt(priceMin.value) : 0;
const max = priceMax.value ? parseInt(priceMax.value) : Infinity;

products.forEach(product => {

const category = product.dataset.category;
const price = parseInt(product.dataset.price);

let show = true;

if(currentCategory !== "all" && category !== currentCategory){
show = false;
}

if(price < min || price > max){
show = false;
}

product.style.display = show ? "block" : "none";

});

}

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