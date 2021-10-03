function onGeoOk(position) {
  const { latitude, longitude } = position.coords;
  console.log(latitude, longitude);
  const API_KEY = "7e794e5e8d90a420c85cddb7aeb9358e";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const container = document.querySelector(".weather");
      container.classList.remove("hidden");
      const weather = document.getElementById("weather");
      const city = document.getElementById("city");
      city.innerText = `Location : ${data.name}`;
      weather.innerText = `Weather : ${data.weather[0].main}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
