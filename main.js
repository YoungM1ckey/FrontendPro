let userTextToRemove = prompt('Enter text for delete letters:');
let lettersDelete = prompt('Enter letter for delete (Separated by commas):').split(',');

function deleteLetter(string) {
    return string.split('').filter(function(char) {
        return !lettersDelete.includes(char);  // Видаляємо літери, які є у lettersDelete
    }).join('');
}

let result = deleteLetter(userTextToRemove);

alert(result);