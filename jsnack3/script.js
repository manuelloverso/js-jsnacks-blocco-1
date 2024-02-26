let sum = 0;
/*
for (let i = 0; i < 10; i++) {
  let number = Number(prompt("inserisci un numero"));
  sum += number;
}

console.log(sum); */

/* let i = 0;
while (i < 10) {
  let number = Number(prompt("inserisci un numero"));
  sum += number;

  i++;
}

console.log(sum);
 */

let i = 0;

do {
  let number = Number(prompt("inserisci un numero"));
  sum += number;

  i++;
} while (i < 10);
console.log(sum);
