// Es - 4 

// Dato un Array di oggetti:

// - crea una funzione che ritorni la seguente stringa:
//     - `< firstName >, < country >` del primo sviluppatore Python che trova
//     - `Non ci sono sviluppatori Python` nel caso in cui non ci siano.

let list = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
  ];

  function findDeveloper(language){
    let found = list.find(developer => developer.language.toLowerCase() == language.toLowerCase() )
    

    if (found != undefined){
        return `${found.firstName}, ${found.country}`
    }
    else {
        return `non ci sono sviluppatori ${language}`

    }
    
  }
  let language = prompt('inserisci il linguaggio')
  console.log(findDeveloper(language));
