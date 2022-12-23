
const Name = document.getElementById("card-name");
const Pic = document.getElementById("profile-pic");
const info = document.getElementById("contact");
const spec= document.getElementById("contact-info");
const bars= document.getElementById("button-sm");
const links = document.getElementById("links-sm");


async function fetching (){
     let result = await fetch('https://randomuser.me/api/')
     let res = await result.json() 

     localStorage.setItem("call",JSON.stringify( res.results[0]));
}

fetching()

console.log(localStorage.getItem("call"));
let data = JSON.parse(localStorage.getItem("call"))
Name.innerHTML= ` ${data.name.first}  ${data.name.last}`
Pic.src=`${data.picture.medium}`

let information =  document.createElement("div");
information.classList="information";




addEventListener("resize",()=>{
    if(window.innerWidth>=840){
        spec.style.width = "15vw"
        spec.style.height= "7vh"
        
        links.style.top="-100vh"
        links.classList.remove("animate")
        spec.removeChild(information)
     }
     else{
        spec.style.width = "89vw"
        spec.style.height= "8vh"
        
        spec.removeChild(information)
     }
})

info.addEventListener("click",()=>{

   if(spec.style.width!=="30vw"&& window.innerWidth>=840){

      spec.style.width= "30vw"
      spec.style.height= "30vh"
      information_set()
      spec.appendChild(information)
       
   }
   else if (spec.style.width!=="90vw"&& window.innerWidth<840){
      spec.style.width= "90vw"
      spec.style.height= "30vh"
      information_set()
      spec.appendChild(information)
   }
   else{
    if(window.innerWidth>=840){
       spec.style.width = "15vw"
       spec.style.height= "7vh"
       spec.removeChild(information)
    }
    else{
       spec.style.width = "89vw"
       spec.style.height= "8vh"
       spec.removeChild(information)
    }
   
   }
   
})

bars.addEventListener("click",()=>{
  
   if(!links.classList.contains("animate")){
     
      links.classList.add("animate")
   }
   else{
      links.style.top="-100vh"
      links.classList.remove("animate")
   }
  
   
})




function information_set(){
   if(information.innerHTML==""){
      var email = document.createElement("p");
      email.innerHTML=`Email: ${data.email}`
      email.classList="item-information";
      information.appendChild(email)
   
      var location = document.createElement("p");
      location.innerHTML=`Location: ${data.location.country} , ${data.location.state} , ${data.location.city}`
      location.classList="item-information";
      information.appendChild(location)
     
      var phone = document.createElement("p");
      phone.innerHTML=` Phone: ${data.phone} , Cell: ${data.cell}`
      phone.classList="item-information";
      information.appendChild(phone)
    }
   
}