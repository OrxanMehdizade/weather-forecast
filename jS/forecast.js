/*const xml = new XMLHttpRequest();
const btn = document.getElementById('btn');
const search = document.getElementById('searchId');
const temperatureDiv = document.getElementById('temperature');
const descriptionDiv = document.getElementById('description');
const weatherImage = document.getElementById('weatherImage');
const weeklyForecastList = document.getElementById('weeklyForecastList');
const apiKey = 'e281c404f43f718131dfda9f740293b8';

btn.addEventListener('click', function () {
    const city = search.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    xml.open('GET', url, true);

    xml.onreadystatechange = function () {
        if (xml.readyState === 4 && xml.status === 200) {
            const data = JSON.parse(xml.responseText);

            // Hava durumu bilgilerini ve resmin URL'sini alın
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            temperatureDiv.textContent = `Temperature: ${temperature}°C`;
            descriptionDiv.textContent = `Weather: ${description}`;

            const imageUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            weatherImage.src = imageUrl;
        }
    };

    xml.send();

    // 5 günlük hava durumu tahmini
    const weeklyUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    xml.open('GET', weeklyUrl, true);

    xml.onreadystatechange = function () {
        if (xml.readyState === 4 && xml.status === 200) {
            const weeklyData = JSON.parse(xml.responseText);
            const dailyForecasts = weeklyData.list.filter((forecast, index) => index % 8 === 0);

            weeklyForecastList.innerHTML = '';

            dailyForecasts.forEach(forecast => {
                const date = new Date(forecast.dt * 1000);
                const day = date.toLocaleDateString('en-US', { weekday: 'long' });
                const temperature = forecast.main.temp;
                const description = forecast.weather[0].description;

                const listItem = document.createElement('li');
                listItem.innerHTML = `<strong>${day}:</strong> Temperature: ${temperature}°C, Weather: ${description}`;
                weeklyForecastList.appendChild(listItem);
            });
        }
    };

    xml.send();
});*/
