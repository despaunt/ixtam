document.addEventListener("DOMContentLoaded", () => {

const buttons = document.querySelectorAll(".buy-btn")

buttons.forEach(button => {

button.addEventListener("click", () => {

const card = button.closest(".product-card")

const product = {
id: card.dataset.id,
name: card.dataset.name,
price: Number(card.dataset.price),
img: card.dataset.img,
quantity: 1
}

let cart = JSON.parse(localStorage.getItem("cart")) || []

const existing = cart.find(item => item.id === product.id)

if(existing){
existing.quantity++
}else{
cart.push(product)
}

localStorage.setItem("cart", JSON.stringify(cart))

showToast("Товар добавлен в корзину")

})

})

})

function showToast(text){

const toast = document.createElement("div")
toast.className = "toast"
toast.innerText = text

document.body.appendChild(toast)

setTimeout(()=>{
toast.classList.add("show")
},10)

setTimeout(()=>{
toast.classList.remove("show")
setTimeout(()=>toast.remove(),300)
},2500)

}

