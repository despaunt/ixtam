document.addEventListener("DOMContentLoaded", ()=>{

const user = Store.getUser()

const loginBtn = document.getElementById("loginButton")
const logoutBtn = document.getElementById("logoutButton")

if(user){

loginBtn.innerHTML = `
<i class="far fa-user"></i>
<span>${user.name}</span>
`

loginBtn.href = "profile.html"

logoutBtn.style.display = "inline-block"

logoutBtn.addEventListener("click", ()=>{
Store.logout()
Store.showToast("Вы вышли")
setTimeout(()=> location.reload(),500)
})

}


})

 