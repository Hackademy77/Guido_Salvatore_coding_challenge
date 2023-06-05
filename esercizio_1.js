// 
// Dato un array di oggetti rappresentanti degli sviluppatori:
// - crea una funzione che calcoli e restituisca il numero di sviluppatori di Javascript provenienti dall’europa
let list = [
    { firstName: 'Marco', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Simone', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Matteo', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Ettore', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];
  function findDeveloper(continent , language){
    let filtered = list.filter((developer)=> developer.continent.toLowerCase() == continent.toLowerCase() && developer.language.toLowerCase() == language.toLowerCase());
    console.log(filtered);
  }
  let continent = prompt('inserisci continente'); 
  let language = prompt('inserisci linguaggio');
findDeveloper(continent , language);



