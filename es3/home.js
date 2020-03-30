//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
var somma = 0;
for (var i = 0; i < 5; i++) {
  var numUtente = parseInt(prompt("Inserisci 5 numeri"));
  var somma = somma + numUtente;
  document.getElementById('mio_id').innerHTML = "La somma dei tuoi numeri è = " + somma;
}
//var i = 0;
//var somma = 0;
//while (i < 5) {
  //var numUtente = parseInt(prompt("Inserisci 5 numeri"));
  //var somma = somma + numUtente;
  //i++;
  //document.getElementById('mio_id').innerHTML = "La somma dei tuoi numeri è = " + somma;
//}
