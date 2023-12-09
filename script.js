function getWeather() {
    const apiKey = '931f131dde3f4ae2fcbc3289fc646471';
    const city = document.getElementById('city').value;
    const weatherInfo = document.getElementById('weather-info');
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        const temperature = Math.round(data.main.temp - 273.15); // Convert temperature to Celsius
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
  
        const html = `
          <h2>${city}</h2>
          <p>Temperature: ${temperature}°C</p>
          <p>Description: ${description}</p>
          <img src="http://openweathermap.org/img/w/${icon}.png" alt="${description} icon">
        `;
  
        weatherInfo.innerHTML = html;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        weatherInfo.innerHTML = '<p>Error fetching weather data. Please try again.</p>';
      });
  }