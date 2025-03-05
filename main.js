function sumNumber() {
    let count = 0;

    return function second () {
        count += Number(prompt("Enter number:"));
        alert(`${count}`);
        return count;
    };
}

let main = sumNumber();

main();
main();
main();
main();
main();