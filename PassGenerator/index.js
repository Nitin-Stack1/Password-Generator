const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1El = document.getElementById("pass1")
let pass2El = document.getElementById("pass2")
let genEl = document.getElementById("gen-Pass")

genEl.addEventListener("click",function(){
    pass1El.textContent = gen_pass()
    pass2El.textContent = gen_pass()  
}
)

function gen_pass(){
    let finalpass = ""
    for(let i=0;i<15;i++){
        let random = Math.floor(Math.random()*characters.length)
        finalpass += characters[random]
    }
    return finalpass
}









