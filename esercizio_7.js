/*
Es - 7

Dato un array contenente i giorni della settimana creare una funzione che inserisca all’interno del tag ul con id “openings” una lista non numerata con all’interno i giorni della settimana con gli orari delle aperture del negozio.


    Lunedi : dalle 9.00 alle 18.00
    Martedi : dalle 9.00 alle 18.00
*/

    let openingDays =[
      {day : 'monday' , from : '9.00' , to : "18.00"},
      {day : 'tuesday' , from : '9.00' , to : "18.00"},
      {day : 'wednesday' , from : '9.00' , to : "18.00"},
      {day : 'thursday' , from : '9.00' , to : "18.00"},
      {day : 'saturday' , from : '9.00' , to : "18.00"},
      {day : 'sunday' , from : '9.00' , to : "18.00"},
    ]
let lista = document.querySelector('#openings')
function listItem(){
    openingDays.forEach((day)=>{
        let li = document.createElement('li')
        li.innerHTML=`il giorno ${day.day} dalle ${day.from} alle ${day.to}`
        lista.appendChild(li)
       
    })
}listItem()