const first = prompt("inserisci la prima parola");
const second = prompt("inserisci la seconda parola");

if (first.length > second.length) {
  console.log("la prima parola è piu lunga");
} else if (first.length < second.length) {
  console.log("la seconda parola è piu lunga");
} else {
  console.log("le parole hanno la stessa lunghezza");
}
