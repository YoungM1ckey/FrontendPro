let numberFromUser = Number(prompt("Enter your number"));

let numberFirst = Math.floor (numberFromUser / 100);
let numberSecond = Math.floor((numberFromUser % 100) / 10);
let numberThird = numberFromUser % 10;

// console.log(numberFirst, numberSecond, numberThird);

if (numberFirst === numberSecond && numberSecond === numberThird) {
    alert("All numbers are the same");
} else if (numberFirst === numberSecond || numberSecond === numberThird || numberFirst === numberThird) {
    alert("There are identical numbers");
} else {
    alert("All numbers are different");
}
