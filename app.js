const name1 = document.querySelector(".yourname")
const name2 = document.querySelector(".hername")

const emoji = document.querySelector(".emoji")
const percent = document.querySelector(".percent")

const button = document.querySelector(".find")


//adding event listenor
// 💔

button.disabled = true; //setting button state to disabled

name1.addEventListener("change", stateHandle);

function stateHandle() {
    if (name1.value === "") {
        button.disabled = true; //button remains disabled
    } else {
        button.disabled = false; //button is enabled
    }
}



    button.addEventListener("click", ()=>{

        const num = Math.floor(Math.random()*100) +1+"%"
        if(num<50){
            emoji.innerHTML ="💔"
            percent.innerHTML =num
        }else{
             emoji.innerHTML ="❤️"
            percent.innerHTML =num
        }
        if (percent.value === "") {
            button.disabled = false; //button remains disabled
        } else {
            button.disabled = true; //button is enabled
        }

        
    })
  
    
    
 
    

