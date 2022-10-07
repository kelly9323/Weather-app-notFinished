let date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let currentWeekDay = days[date.getDay()];
let today = document.querySelector("#weekDay");
today.innerHTML = currentWeekDay;

let fullDate = document.querySelector("#date");
let currentYear = date.getFullYear();
fullDate.innerHTML = `${getDay2Digits(date)}/${getMonth2Digits(
  date
)}/${currentYear}`;

function getMonth2Digits(date) {
  let month = date.getMonth() + 1;

  if (month < 10) {
    return "0" + month;
  }

  return month;
}
function getDay2Digits(date) {
  let day = date.getDate();

  if (day < 10) {
    return "0" + day;
  }

  return day;
}
function getHours2Digits(date) {
  let hours = date.getHours();

  if (hours < 10) {
    return "0" + hours;
  }

  return hours;
}

function getMinutes2Digits(date) {
  let minutes = date.getMinutes();

  if (minutes < 10) {
    return "0" + minutes;
  }

  return minutes;
}
let currentTime = document.querySelector("#timeNow");
currentTime.innerHTML = `${getHours2Digits(date)}:${getMinutes2Digits(date)}`;

let searchPannel = document.querySelector("#search");
searchPannel.addEventListener("submit", enterCity);

function enterCity(event) {
  event.preventDefault();
  let mainCity = document.querySelector("#cityInput").value;
  let keyApi = "9d7ae4b49b3b06e0a622dcc71f2df3b4";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${mainCity}&appid=${keyApi}&units=metric`;
  axios.get(url).then(displayWeather);
}
function displayWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let displayTemp = document.querySelector("#actualTemp");
  displayTemp.innerHTML = `${temperature}`;
  let changeCity = document.querySelector("#city");
  changeCity.innerHTML = response.data.name;
  let description = document.querySelector("#description-weather");
  description.innerHTML = response.data.weather[0].main;
  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed);
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
}

function handlePosition(position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let units = "metric";
        let APIkey = "9d7ae4b49b3b06e0a622dcc71f2df3b4";
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${APIkey}`;
        axios.get(url).then(displayWeather);
      }

let submitLocation = document.querySelector("#geolocationButton");
submitLocation.addEventListener("click", geoLocationRequest);

function geoLocationRequest() {
  navigator.geolocation.getCurrentPosition(handlePosition);
}

