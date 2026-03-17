document.addEventListener("DOMContentLoaded", () => {

const loginBtn = document.getElementById("loginBtn")
const registerBtn = document.getElementById("registerBtn")

const loginForm = document.getElementById("loginForm")
const registerForm = document.getElementById("registerForm")

loginBtn.onclick = () => {
loginForm.classList.remove("hidden")
registerForm.classList.add("hidden")
loginBtn.classList.add("active")
registerBtn.classList.remove("active")
}

registerBtn.onclick = () => {
registerForm.classList.remove("hidden")
loginForm.classList.add("hidden")
registerBtn.classList.add("active")
loginBtn.classList.remove("active")
}

registerForm.addEventListener("submit", (e)=>{
e.preventDefault()

const name = document.getElementById("registerName").value
const email = document.getElementById("registerEmail").value
const password = document.getElementById("registerPassword").value

if(!name || !email || password.length < 6){
Store.showToast("Заполните корректно все поля")
return
}

Store.setUser({
name,
email,
registeredAt: new Date().toISOString()
})

Store.showToast("Регистрация успешна")

setTimeout(()=> location.href = "index.html",1000)

})

loginForm.addEventListener("submit", (e)=>{
e.preventDefault()

const email = document.getElementById("loginEmail").value
const password = document.getElementById("loginPassword").value

if(!email || password.length < 6){
Store.showToast("Ошибка входа")
return
}

Store.setUser({
name: email.split("@")[0],
email,
loginAt: new Date().toISOString()
})

Store.showToast("Вы вошли")

setTimeout(()=> location.href = "index.html",1000)

})

})

const burger = document.querySelector(".burger-menu")
const navbar = document.querySelector(".navbar")

if(burger){
burger.addEventListener("click", () => {
navbar.classList.toggle("active")
})
}