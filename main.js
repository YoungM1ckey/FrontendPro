let numberUser = prompt('Enter your 5 digit number:');

let result = ''
    result += (numberUser / 10000 | 0) + ' ';
    numberUser %= 10000;
    result += (numberUser / 1000 | 0) + ' ';
    numberUser %= 1000;
    result += (numberUser / 100 | 0) + ' ';
    numberUser %= 100;
    result += (numberUser / 10 | 0) + ' ';
    numberUser %= 10;
    result += numberUser;
alert(`Result: ${result}`);