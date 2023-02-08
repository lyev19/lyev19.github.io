
const profilePic = document.getElementById("profile-pic")
const firstName = document.getElementById("first-name")
const secondName = document.getElementById("second-name")
const descritption = document.querySelector(".aboutme-description");
const email = document.getElementById("email")
const number = document.getElementById("number")
const location1 = document.getElementById("location")
const specs = document.querySelectorAll(".information1")
const cardContainer = document.querySelectorAll(".card-container")





cardManager(cardContainer)
let fetches = JSON.parse(localStorage.getItem("data"))
document.onload= a()
window.addEventListener("storage", ()=>{
    a()
})


async function a(){
    console.log(localStorage.getItem("data"))
    if(localStorage.getItem("data")===null){

       const res = await api_call()
       fetches = JSON.parse(localStorage.getItem("data"))
       firstName.innerHTML = fetches.name.first
       secondName.innerHTML = fetches.name.last
       profilePic.src = fetches.picture.large
       email.innerHTML = fetches.email
       number.innerHTML= fetches.cell
       location1.innerHTML = fetches.location.street.name +" "+ fetches.location.street.number + " "+ fetches.location.city +", "+fetches.location.state
    
        
    }
    
    else{
        const data = JSON.parse(localStorage.getItem("data"))
        console.log(data)

         firstName.innerHTML = fetches.name.first
         secondName.innerHTML = fetches.name.last
         profilePic.src = fetches.picture.large
         email.innerHTML = fetches.email
         number.innerHTML= fetches.cell
         location1.innerHTML = fetches.location.street.name +" "+ fetches.location.street.number + " "+ fetches.location.city +", "+fetches.location.state
    }
    
    }
    




async function api_call ( ){
    
    const result = await fetch('https://randomuser.me/api/')
    
    const res=await result.json()
    console.log(res.results[0])
    localStorage.setItem("data",JSON.stringify(res.results[0]))
    

}






function cardManager (cc){
   
for(let j =0;j<cc.length;j++){
    const cards = cc[j].querySelectorAll(".card")
    console.log(cards)
    for(let i=0; i <cards.length;i++){
          cards[i].addEventListener("click",()=>{
            if(cards[i].classList.contains("card")){
                cards[i].classList.add("card-expand")
                cards[i].classList.remove("card")
                specs[i].classList.remove("card-hidden")
               
            }
            else{
                specs[i].classList.add("card-hidden")
                cards[i].classList.remove("card-expand")
                cards[i].classList.add("card")
            }
              
          })
    }

}


}

