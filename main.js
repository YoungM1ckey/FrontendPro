const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array, item) {
    let removeNum = array.indexOf(item);
    if (removeNum !== -1) {
        array.splice(removeNum, 1);
    }
}

removeElement(array, 4);

console.log(array);