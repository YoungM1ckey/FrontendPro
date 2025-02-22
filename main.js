let numberFromUser = prompt("Enter your number");

let numberFirst = numberFromUser / 100 | 0;
numberFromUser %= 100;
let numberSecond = numberFromUser / 10 | 0;
numberFromUser %= 10;
let numberThird = numberFromUser / 1 | 0;
numberFromUser %= 1;
console.log(numberFirst, numberSecond, numberThird);
