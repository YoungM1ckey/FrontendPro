const apiKey = 'a5bfe73d689ae664a15ce3da9125c551';
const city = 'Odesa';

async function getWeather() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );
        const data = await response.json();

        const tempCelsius = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;

        document.querySelector('#temperature').textContent = `${tempCelsius}°C`;
        document.querySelector('#description').textContent = description;
        document.querySelector('#humidity').textContent = humidity;
        document.querySelector('#wind').textContent = windSpeed;
    } catch (error) {
        console.error('Error fetching data:', error);
        document.querySelector('#temperature').textContent = 'Error';
        document.querySelector('#description').textContent = 'No data';
        document.querySelector('#humidity').textContent = '-';
        document.querySelector('#wind').textContent = '-';
    }
}

document.getElementById('refresh-btn').addEventListener('click', getWeather);

getWeather();
