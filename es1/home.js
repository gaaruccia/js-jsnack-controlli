//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
var numero1 = parseInt(prompt("Inserisci il primo numero"));
var numero2 = parseInt(prompt("Inserisci il secondo numero"));

var numeroMaggiore

if (numero1 > numero2) {
  numeroMaggiore = numero1
} else if (numero1 < numero2){
  numeroMaggiore = numero2
} else{
  numeroMaggiore = "Hai inserito due numeri uguali"
}

document.getElementById('mio_id').innerHTML = numeroMaggiore;
