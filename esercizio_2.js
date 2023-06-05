
// Es - 2

// Dato un array di oggetti:
// crea una funzione che ritorni un array
// e aggiunga a ogni oggetto la proprietà ‘greeting’ con il seguente valore:

//     “ciao io sono 'nome' e ho '' anni”


let list = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
    ];
function propriety (){
    list.forEach ((element) => {
        element.greeting = `ciao io sono ${element.firstName} e ho ${element.age} anni`
    })
    return list;
}
console.log(propriety());

    