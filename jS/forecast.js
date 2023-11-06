const apiKey='e281c404f43f718131dfda9f740293b8'
const weeklyForecastId = document.getElementById('weeklyForecastİd');

btn.addEventListener('click',function (){
    const city=searchId.value;
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const xml=new XMLHttpRequest();
    xml.open('GET',url,true);
    xml.onreadystatechange=function (){
        if(xml.readyState===4 && xml.status===200){
            const forecastData=JSON.parse(xml.responseText);
            const dateTime=new Date(forecastData.dt*1000);
            const weatherIconCode=forecastData.weather[0].icon;
            cityId.textContent=forecastData.name;
            DateId.textContent=dateTime.toLocaleDateString('tr-TR');
            weatherModeId.textContent=`${forecastData.weather[0].description}`;
            tempId.textContent=`${(forecastData.main.temp-273.15).toFixed(2)}°C`;
            minTemperature.textContent=`Min Temperature: ${(forecastData.main.temp_min-273.15).toFixed(2)}°C`;
            maxTemperature.textContent=`Max Temperature: ${(forecastData.main.temp_max-273.15).toFixed(2)}°C`;
            windSpeed.textContent=`Wind Speed: ${forecastData.wind.speed} kph`;
            weatherModeImgId.src= `https://openweathermap.org/img/w/${weatherIconCode}.png`;
            weatherModeImgId.style.display='block'
            populateWeeklyForecast(forecastData.name);

        }

    }
    xml.send();

});

function populateWeeklyForecast(city) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weeklyForecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    const weeklyXml = new XMLHttpRequest();
    weeklyXml.open('GET', weeklyForecastURL, true);
    weeklyXml.onreadystatechange = function () {
        if (weeklyXml.readyState === 4 && weeklyXml.status === 200) {
            const weeklyForecastData = JSON.parse(weeklyXml.responseText);
            const filteredForecast = weeklyForecastData.list.filter((forecast, index) => {
                return (index % 3 === 0);
            });
            weeklyForecastId.innerHTML = '';
            filteredForecast.forEach((forecast, index) => {
                const day = days[new Date(forecast.dt * 1000).getDay()];
                const time = new Date(forecast.dt * 1000).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
                const weatherDescription = forecast.weather[0].description;
                const temperature = (forecast.main.temp - 273.15).toFixed(2);
                const windSpeedValue = forecast.wind.speed;
                const forecastElement = document.createElement('div');
                const weatherIconCode=forecast.weather[0].icon;
                forecastElement.className = 'hourly-forecast';
                forecastElement.innerHTML = `
                    <p id="monİd">${day} ${time}</p>
                     <img src="https://openweathermap.org/img/w/${weatherIconCode}.png" alt="Weather Icon">
                    <p id="pTag">${weatherDescription}</p>
                    <p>${temperature}°C</p>
                    <p>${windSpeedValue} kph</p>
                    
                `;
                weeklyForecastId.appendChild(forecastElement);
            });
        }
    };
    weeklyXml.send();

}

