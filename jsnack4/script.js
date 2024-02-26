const list = ["pippo", "pluto", "topolino", "paperino"];

const userName = prompt("Inserisci il tuo nome");

let trovato = false;

for (let i = 0; i < list.length; i++) {
  const element = list[i];

  if (element == userName) {
    trovato = true;
    break;
  }
}
if (trovato == true) {
  console.log("puoi entrare");
} else {
  console.log("nah non entri");
}
