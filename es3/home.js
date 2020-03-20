//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
var numero1 = parseInt(prompt("Inserisci il primo numero"));
var numero2 = parseInt(prompt("Inserisci il secondo numero"));
var numero3 = parseInt(prompt("Inserisci il terzo numero"));
var numero4 = parseInt(prompt("Inserisci il quarto numero"));
var numero5 = parseInt(prompt("Inserisci il quinto numero"));

document.getElementById('mio_id').innerHTML = numero1 + numero2 + numero3 + numero4 + numero5;
