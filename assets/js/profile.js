document.addEventListener("DOMContentLoaded", ()=>{

const user = Store.getUser()

if(!user){
location.href = "auth.html"
return
}

const saved = JSON.parse(localStorage.getItem("profileData")) || {}

document.getElementById("profileName").innerText = saved.name || user.name
document.getElementById("profileEmail").innerText = saved.email || user.email

document.getElementById("fieldName").value = saved.name || user.name || ""
document.getElementById("fieldEmail").value = saved.email || user.email || ""
document.getElementById("fieldPhone").value = saved.phone || ""
document.getElementById("fieldAddress").value = saved.address || ""

const avatar = document.getElementById("avatar")
avatar.innerText = (saved.name || user.name).charAt(0).toUpperCase()

document.getElementById("profileForm").addEventListener("submit",(e)=>{
e.preventDefault()

const name = document.getElementById("fieldName").value.trim()
const email = document.getElementById("fieldEmail").value.trim()
const phone = document.getElementById("fieldPhone").value.trim()
const address = document.getElementById("fieldAddress").value.trim()

if(!name){
Store.showToast("Введите имя")
return
}

localStorage.setItem("profileData", JSON.stringify({
name,
email,
phone,
address
}))

Store.setUser({
...user,
name,
email
})
document.getElementById("profileName").innerText = name
document.getElementById("profileEmail").innerText = email

avatar.innerText = name.charAt(0).toUpperCase()

Store.showToast("Данные сохранены")

})

document.getElementById("logoutBtn").onclick = ()=>{
Store.logout()
Store.showToast("Вы вышли")
setTimeout(()=> location.href="./index.html",1000)
}

})

const burger = document.querySelector(".burger-menu")
const navbar = document.querySelector(".navbar")

if(burger){
burger.addEventListener("click", () => {
navbar.classList.toggle("active")
})
}