//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
var parola1 = prompt("Inserisci la prima parola");
var parola2 = prompt("Inserisci la seconda parola");

var parolalunga;
var parolacorta;

if (parola1.length > parola2.length) {
  parolalunga = parola1;
  parolacorta = parola2
} else if (parola1.length < parola2.length){
  parolalunga = parola2
  parolacorta = parola1
} else{
  parolalunga = "Le parole sono lunghe uguali";
  parolacorta = "";
}

document.getElementById('mio_id').innerHTML =parolacorta + parolalunga;
