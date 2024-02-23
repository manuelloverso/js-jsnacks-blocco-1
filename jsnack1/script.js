const first = Number(prompt("inserisci il primo numero"));
const second = Number(prompt("inserisci il secondo numero"));

if (first > second) {
  console.log(first);
} else if (first < second) {
  console.log(second);
} else {
  console.log("i numeri sono uguali");
}
