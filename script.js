let display = document.getElementById('display');
let generate = document.getElementById('generate');
let clear = document.getElementById('clear');
let lowerinp = document.getElementById('lowerinp');
let upperinp = document.getElementById('upperinp');
generate.addEventListener('click',()=>{
    let min =parseInt(lowerinp.value) 
    let max = parseInt(upperinp.value)
    display.innerText = Math.floor(Math.random() * (max- min + 1)) + min;

})
clear.addEventListener('click',()=>{
    display.innerText= ""
    lowerinp.value = ""
    upperinp.value = ""
})