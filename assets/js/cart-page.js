document.addEventListener("DOMContentLoaded", renderCart)

function renderCart(){

const cartContainer = document.getElementById("cartItems")
const totalContainer = document.getElementById("cartTotal")

let cart = JSON.parse(localStorage.getItem("cart")) || []

cartContainer.innerHTML = ""

if(cart.length === 0){
cartContainer.innerHTML = "<p class='cart-empty'>Корзина пуста</p>"
totalContainer.innerText = ""
return
}

let total = 0

cart.forEach(item => {

total += item.price * item.quantity

cartContainer.innerHTML += `
<div class="cart-item">

<img src="${item.img}">

<div class="cart-info">
<h3>${item.name}</h3>
<p>${item.price} ₽</p>

<div class="cart-controls">

<button onclick="changeQty('${item.id}',-1)">−</button>

<span>${item.quantity}</span>

<button onclick="changeQty('${item.id}',1)">+</button>

<button class="remove-btn" onclick="removeItem('${item.id}')">
<i class="fas fa-trash"></i>
</button>

</div>

</div>

</div>
`

})

totalContainer.innerText = "Итого: " + total + " ₽"

}

function changeQty(id,delta){

let cart = JSON.parse(localStorage.getItem("cart")) || []

cart = cart.map(item => {

if(item.id === id){
item.quantity += delta
}

return item

}).filter(item => item.quantity > 0)

localStorage.setItem("cart", JSON.stringify(cart))

renderCart()

}

function removeItem(id){

let cart = JSON.parse(localStorage.getItem("cart")) || []

cart = cart.filter(item => item.id !== id)

localStorage.setItem("cart", JSON.stringify(cart))

renderCart()

}

document.addEventListener("DOMContentLoaded", () => {

renderCart()

const orderBtn = document.getElementById("orderBtn")
const modal = document.getElementById("orderModal")
const closeBtn = document.getElementById("closeModal")

if(orderBtn){

orderBtn.addEventListener("click", () => {

const name = document.getElementById("name").value
const phone = document.getElementById("phone").value
const address = document.getElementById("address").value

if(!name || !phone || !address){
showToast("Заполните обязательные поля")
return
}

modal.classList.add("show")

localStorage.removeItem("cart")

renderCart()

})

}

if(closeBtn){
closeBtn.addEventListener("click", () => {
modal.classList.remove("show")
})
}

})

function showToast(text){

const toast = document.createElement("div")
toast.className = "toast"
toast.innerText = text

document.body.appendChild(toast)

setTimeout(()=>toast.classList.add("show"),10)

setTimeout(()=>{
toast.classList.remove("show")
setTimeout(()=>toast.remove(),300)
},2500)

}

const burger = document.querySelector(".burger-menu")
const navbar = document.querySelector(".navbar")

if(burger){
burger.addEventListener("click", () => {
navbar.classList.toggle("active")
})
}