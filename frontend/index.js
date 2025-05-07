const BASE_URL = 'http://localhost:3000';
const MOVIES_URL = '/movies';
const REVIEWS = '/reviews';

const movieFrom = document.querySelector('#movie-from');
const moviesList = document.querySelector('#movies-list');

async function  getMovies(){
    const response = await fetch(`${BASE_URL}${MOVIES_URL}`);
    return res.json();
}

async function addMovie(newMovie){
    const res = await fetch(`${BASE_URL}${MOVIES_URL}`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie)
    });

    return res.json();
}
