/* 

Consegna:
Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

*/

let n;

do {
    n = parseInt(prompt('Inserisci un numero diverso da 0 fino a cui calcolare il cubo:'));
    if (isNaN(n) || n == 0) {
        alert('Dato non corretto');
    }
} while (isNaN(n) || n == 0);

if (n > 0) {
    for (let i = 1; i <= n; i++) {
        let cubo = Math.pow(i, 3);
        console.log(cubo);
    }
} else {
    for (let i = n; i < 0; i++) {
        let cubo = Math.pow(i, 3);
        console.log(cubo);
    }
}