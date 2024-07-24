const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '83fb3e4919mshe4f4f8a82a9c70bp1c47c1jsn2b6d9a181281',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather = (city) => {
    const cityname = document.getElementById('cityname');
    const temp = document.getElementById('temp');
    const feels_like = document.getElementById('feels_like');
    const humidityy = document.getElementById('humidityy');
    const min_temp = document.getElementById('min_temp');
    const max_temp = document.getElementById('max_temp');
    const wind_speed = document.getElementById('wind_speed');
    const wind_degrees = document.getElementById('wind_degrees');
    const sunrise = document.getElementById('sunrise');
    const sunset = document.getElementById('sunset');

    cityname.innerHTML = city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            temp.innerHTML = response.temp;
            feels_like.innerHTML = response.feels_like;
            humidityy.innerHTML = response.humidity;
            min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            wind_speed.innerHTML = response.wind_speed;
            wind_degrees.innerHTML = response.wind_degrees;
            sunrise.innerHTML = response.sunrise;
            sunset.innerHTML = response.sunset;
            console.log(response);
        })
        .catch(error => console.error('Error:', error));
};

const submit = document.getElementById('submit');
const cityInput = document.getElementById('city');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    getweather(cityInput.value);
});

getweather('Faisalabad');
