/*
Es - 8

Dato un titolo e un bottone creare:

- una funzione di javascript che al click sul bottone aggiunga e tolga una classe che cambi il colore*/
let btn = document.querySelector('#btncolor')
let titolo = document.querySelector('#titolo')
function changeColor(){
        titolo.classList.toggle('color')
    }

btn.addEventListener('click',()=>{
    changeColor()
})