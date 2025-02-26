let number = parseInt(prompt('Enter your number:'));

for (let i = 1; i <= 100; i++) {
    if (i * i <= number) {
        console.log(i);
    }   else {
        break;
    }
}