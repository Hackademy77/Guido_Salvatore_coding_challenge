// Dato un array di oggetti:

// - crea una funzione che ritorni
//     - `true` se c’è almeno una persona che ha gli occhi verdi; 
//     - `false` se nessuno ha gli occhi verdi


let list = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, eyes: 'Brown' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, eyes: 'Black' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, eyes: 'Green' }
  ];
  function verify(){
    let eyes = list.map(element => element.eyes)
   return eyes.includes('Green') 
  }
  console.log(verify());