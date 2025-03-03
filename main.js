function avgOfNumber(num) {
    let numbers = num.filter(function (item) {
        return typeof item === 'number';
    });

    if (numbers.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

let listArray = [4, 'branch', undefined, 24, 'front-end', false, 'back-end', 66, 4];
console.log(avgOfNumber(listArray));