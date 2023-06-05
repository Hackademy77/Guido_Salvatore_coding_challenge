
/*Es - 6

Tramite una finestra di pop-up, catturare l’input dell’utente e mostrarlo all’interno di un paragrafo

- Utilizzare prompt() → metodo che fa visualizzare una finestra di pop-up per far inserire un dato all’utente
    let text = prompt('Come ti chiami?');
    console.log(text);*/

let text = prompt('Come ti chiami?');
let paragrafo = document.querySelector('#paragrafoEs6')
paragrafo.innerHTML = `${text}`
