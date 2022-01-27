/*

Consegna:
Calcola la somma e la media dei primi 10 numeri.

*/

const x = 10;
let somma = 0;

for (let i = x; i > 0; i--) {
    somma += i;
}

let media = somma/x;

console.log(somma, media);