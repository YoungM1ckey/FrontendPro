function add(a) {
    return function (b) {
        return a * b;
    }
}

let number1 = prompt("Enter a first number");
let number2 = prompt("Enter a second number");

alert(`Result: ${add(number1)(number2)}`);