
// Es - 5

// Dato un array di oggetti:

// - creare una funzione che permetta di mostrare un messaggio di alert:
//     - se logged=true: mostrare il messaggio “L’utente è stato registrato.”
//     - se logged=false: mostrare il messaggio “L’utente non è registrato.”
   
let list = [
        { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, logged: true },
        { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, logged: false },
        { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, logged: true }
    ];
    let nome = prompt('inserisci il nome')
    function verify(name){
        let filtered = list.filter(element => element.firstName.toLowerCase() == name.toLowerCase())
        let logged = filtered.map(element => element.logged)
        if ( logged == 'true'){
            alert('l utente è stato registrato')
        }
         
      else{
        alert('l utente non è stato registrato')
      }
      }
     verify(nome)
        
     