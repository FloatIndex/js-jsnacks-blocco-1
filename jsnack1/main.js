/*

Consegna:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

*/

let addendi = [];
let somma = 0;
const max = 10;

let i = 0;
do {
    addendi[i] = parseInt(prompt('Inserisci ' + (i+1) + '° numero:'));
    if (isNaN(addendi[i])) {
        do {
            addendi[i] = parseInt(prompt('Dato non corretto.\nInserisci ' + (i+1) + '° numero:'));
        } while (isNaN(addendi[i]));
    }
    somma += addendi[i];
    i++;
} while (i < max);

console.log(somma);