let numbers = [];

for (let i = 0; i < 6; i++) {
  let number = Number(prompt("inserisci un numero"));

  if (number % 2 != 0) {
    numbers.push(number);
  }
}

console.log(numbers);
