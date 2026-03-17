const Store = {

getUser(){
return JSON.parse(localStorage.getItem("user"))
},

setUser(user){
localStorage.setItem("user", JSON.stringify(user))
},

logout(){
localStorage.removeItem("user")
},

showToast(text){

const toast = document.createElement("div")
toast.className = "toast"
toast.innerText = text

document.body.appendChild(toast)

setTimeout(()=>toast.classList.add("show"),10)

setTimeout(()=>{
toast.classList.remove("show")
setTimeout(()=>toast.remove(),300)
},2500)

},

getCart(){
return JSON.parse(localStorage.getItem("cart")) || []
},

getCartCount(){
return this.getCart().reduce((sum, item)=>sum + item.quantity, 0)
}

}
