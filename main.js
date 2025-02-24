let currentYears = 2025;

let yearUser = parseInt(prompt('What year were you born?'));
if (isNaN(yearUser)) {
    alert('It\'s a pity that you don\'t want to tell me your year of birth.');
} else {
    let age = currentYears - yearUser;

    let cityUser = prompt('Enter the city in which you live?');
    if (cityUser === null) {
        alert('It is a pity that you did not want to enter your city.');
    } else {
        let checkCity = `${cityUser}`;
        if (cityUser.toLowerCase() === 'kyiv') {
            checkCity = 'You live in the capital of Ukraine';
        } else if (cityUser.toLowerCase() === 'washington') {
            checkCity = 'You live in the capital of the USA';
        } else if (cityUser.toLowerCase() === 'london') {
            checkCity = 'You live in the capital of Great Britain';
        }

        let favoriteSport = prompt('What you favorite sport?');
        switch (favoriteSport) {
            case null:
                alert('It\'s a pity that you didn\'t want to enter your favorite sport');
                break;
            case 'football':
                alert('Steeply! Do you want to become Pelé?');
                break;
            case 'box':
                alert('Steeply! Do you want to become Oleksandr Usyk?');
                break;
            case 'bodybuilding':
                alert('Steeply! Do you want to become Ronnie Coleman?');
                break;
            default:
                alert(`Your favorite sport: ${favoriteSport}`);
        }
        alert(`Your age: ${age} years, ${checkCity}, you favorite sport: ${favoriteSport}`);
    }
}