function getNumb() {
    let number;
    for (let i = 0; i < 10; i++) {
        number = prompt("Enter a number greater than 100");
        if (number === null ) {
            alert("Cancel entry");
            return;
        }
        number = parseInt(number);
        if (!isNaN(number) && number > 100) {
            alert("Last enter a number: " + number);
            return;
        }
    }
    alert("Last number entered after 10 attempts " + number);
}

getNumb();