const list = ["pippo", "pluto", "topolino", "paperino"];

const userName = prompt("Inserisci il tuo nome");

for (let i = 0; i < list.length; i++) {
  const element = list[i];

  if (element == userName) {
    console.log("sei invitato");
    break;
  } else {
    console.log("nah non entri");
  }
}
