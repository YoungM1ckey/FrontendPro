let number = parseInt(prompt("Enter your number more than 1"));

if (number <= 1) {
    alert("Please enter a number more than 1");
    console.log(number);
} else {
    let prime = true
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        alert("This number is prime");
    } else {
        alert("This number is not prime")
    }
}