import "./App.css";

import { useState } from "react";

import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
  IoMdSearch,
} from "react-icons/io";

import { BsCloudHaze2Fill, BsCloudDrizzleFill, BsGeoAlt } from "react-icons/bs";

import { ImSpinner8 } from "react-icons/im";

function App() {
  let urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${
    import.meta.env.VITE_API_KEY
  }&lang=es&units=metric`;
  let cityUrl = "&q=";
  let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?appid=${
    import.meta.env.VITE_API_KEY
  }&lang=es&units=metric`;

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("");
  const [showInput, setShowInput] = useState(true);

  const getLocation = async (loc) => {
    setLoading(true);
    setLocation(loc);

    //Llamada API Tiempo Actual
    urlWeather = urlWeather + cityUrl + loc;
    await fetch(urlWeather)
      .then((res) => {
        if (!res.ok) throw { res };
        return res.json();
      })
      .then((weatherData) => {
        setWeather(weatherData);
        // console.log(weatherData);
      })
      .catch((err) => {
        // console.log(err);
        setLoading(false);
        setShow(false);
        setShowInput(true);
      });

    //Llamada API Tiempo Próximos Días
    urlForecast = urlForecast + cityUrl + loc;
    await fetch(urlForecast)
      .then((res) => {
        if (!res.ok) throw { res };
        return res.json();
      })
      .then((forecastData) => {
        setForecast(forecastData);
        // console.log(forecastData);
        setLoading(false);
        setShow(true);
      })
      .catch((err) => {
        // console.log(err);
        setLoading(false);
        setShow(false);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value === "") {
      setCity(null);
      setShowInput(true);
      setShow(false);
      return;
    } else {
      setShowInput(false);
      getLocation(city);
    }
  };

  const onClick = (e) => {
    e.preventDefault();
    setShowInput(true);
  };

  let today = new Date();
  let day = today.getDate();
  let weekday = today.getDay();
  let month = today.getMonth();
  let year = today.getFullYear();

  switch (weekday) {
    case 0:
      weekday = "Domingo";
      break;
    case 1:
      weekday = "Lunes";
      break;
    case 2:
      weekday = "Martes";
      break;
    case 3:
      weekday = "Miércoles";
      break;
    case 4:
      weekday = "Jueves";
      break;
    case 5:
      weekday = "Viernes";
      break;
    case 6:
      weekday = "Sábado";
  }

  switch (month) {
    case 0:
      month = "Ene";
      break;
    case 1:
      month = "Feb";
      break;
    case 2:
      month = "Mar";
      break;
    case 3:
      month = "Abr";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "Jun";
      break;
    case 6:
      month = "Jul";
      break;
    case 7:
      month = "Ago";
      break;
    case 8:
      month = "Sep";
      break;
    case 9:
      month = "Oct";
      break;
    case 10:
      month = "Nov";
      break;
    case 11:
      month = "Dic";
      break;
  }

  let icon;
  if (show) {
    switch (weather.weather[0].main) {
      case "Clouds":
        icon = <IoMdCloudy className="weather-icon" />;
        break;
      case "Haze":
        icon = <BsCloudHaze2Fill className="weather-icon" />;
        break;
      case "Rain":
        icon = <IoMdRainy className="weather-icon" />;
        break;
      case "Clear":
        icon = <IoMdSunny className="weather-icon" />;
        break;
      case "Drizzle":
        icon = <BsCloudDrizzleFill className="weather-icon" />;
        break;
      case "Snow":
        icon = <IoMdSnow className="weather-icon" />;
        break;
      case "Thunderstorm":
        icon = <IoMdThunderstorm className="weather-icon" />;
        break;
    }
  }
  let iconForecast1;
  if (show) {
    switch (forecast.list[7].weather[0].main) {
      case "Clouds":
        iconForecast1 = <IoMdCloudy className="weather-icon" />;
        break;
      case "Haze":
        iconForecast1 = <BsCloudHaze2Fill className="weather-icon" />;
        break;
      case "Rain":
        iconForecast1 = <IoMdRainy className="weather-icon" />;
        break;
      case "Clear":
        iconForecast1 = <IoMdSunny className="weather-icon" />;
        break;
      case "Drizzle":
        iconForecast1 = <BsCloudDrizzleFill className="weather-icon" />;
        break;
      case "Snow":
        iconForecast1 = <IoMdSnow className="weather-icon" />;
        break;
      case "Thunderstorm":
        iconForecast1 = <IoMdThunderstorm className="weather-icon" />;
        break;
    }
  }
  let iconForecast2;
  if (show) {
    switch (forecast.list[15].weather[0].main) {
      case "Clouds":
        iconForecast2 = <IoMdCloudy className="weather-icon" />;
        break;
      case "Haze":
        iconForecast2 = <BsCloudHaze2Fill className="weather-icon" />;
        break;
      case "Rain":
        iconForecast2 = <IoMdRainy className="weather-icon" />;
        break;
      case "Clear":
        iconForecast2 = <IoMdSunny className="weather-icon" />;
        break;
      case "Drizzle":
        iconForecast2 = <BsCloudDrizzleFill className="weather-icon" />;
        break;
      case "Snow":
        iconForecast2 = <IoMdSnow className="weather-icon" />;
        break;
      case "Thunderstorm":
        iconForecast2 = <IoMdThunderstorm className="weather-icon" />;
        break;
    }
  }
  let iconForecast3;
  if (show) {
    switch (forecast.list[23].weather[0].main) {
      case "Clouds":
        iconForecast3 = <IoMdCloudy className="weather-icon" />;
        break;
      case "Haze":
        iconForecast3 = <BsCloudHaze2Fill className="weather-icon" />;
        break;
      case "Rain":
        iconForecast3 = <IoMdRainy className="weather-icon" />;
        break;
      case "Clear":
        iconForecast3 = <IoMdSunny className="weather-icon" />;
        break;
      case "Drizzle":
        iconForecast3 = <BsCloudDrizzleFill className="weather-icon" />;
        break;
      case "Snow":
        iconForecast3 = <IoMdSnow className="weather-icon" />;
        break;
      case "Thunderstorm":
        iconForecast3 = <IoMdThunderstorm className="weather-icon" />;
        break;
    }
  }
  let iconForecast4;
  if (show) {
    switch (forecast.list[31].weather[0].main) {
      case "Clouds":
        iconForecast4 = <IoMdCloudy className="weather-icon" />;
        break;
      case "Haze":
        iconForecast4 = <BsCloudHaze2Fill className="weather-icon" />;
        break;
      case "Rain":
        iconForecast4 = <IoMdRainy className="weather-icon" />;
        break;
      case "Clear":
        iconForecast4 = <IoMdSunny className="weather-icon" />;
        break;
      case "Drizzle":
        iconForecast4 = <BsCloudDrizzleFill className="weather-icon" />;
        break;
      case "Snow":
        iconForecast4 = <IoMdSnow className="weather-icon" />;
        break;
      case "Thunderstorm":
        iconForecast4 = <IoMdThunderstorm className="weather-icon" />;
        break;
    }
  }

  let day1 = "";
  let day2 = "";
  let day3 = "";
  let day4 = "";
  const weekDays = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
  if (show) {
    const date1 = new Date(forecast.list[7].dt_txt);
    const date2 = new Date(forecast.list[15].dt_txt);
    const date3 = new Date(forecast.list[23].dt_txt);
    const date4 = new Date(forecast.list[31].dt_txt);

    day1 = weekDays[date1.getDay()];
    day2 = weekDays[date2.getDay()];
    day3 = weekDays[date3.getDay()];
    day4 = weekDays[date4.getDay()];
  }

  if (loading) {
    return (
      <div className="spinner-container">
        <ImSpinner8 className="spinner" />
      </div>
    );
  }

  return (
    <main>
      {showInput && (
        <div className="searchBox">
          <form onSubmit={onSubmit}>
            <div className="inputContainer">
              <input
                className="searchInput"
                type="text"
                placeholder="Ciudad"
                onChange={(e) => setCity(e.target.value)}
              />
              <button className="searchButton" type="submit">
                <IoMdSearch className="searchIcon" />
              </button>
            </div>
          </form>
        </div>
      )}

      <div>
        {show === true ? (
          <div className="container-card">
            <div className="weather-side">
              <div className="weather-gradient"></div>
              <div className="date-container">
                <h2 className="date-dayname">{weekday}</h2>
                <span className="date-day">
                  {day} {month} {year}
                </span>
                <BsGeoAlt className="location-icon" data-feather="map-pin" />
                <span className="location">
                  {weather.name}, {weather.sys.country}
                </span>
              </div>
              <div className="weather-container">
                <i className="weather-icon">{icon}</i>
                <h1 className="weather-temp">
                  {weather.main.temp.toFixed(1)}°C
                </h1>
                <h3 className="weather-desc">
                  {weather.weather[0].description}
                </h3>
              </div>
            </div>
            <div className="info-side">
              <div className="today-info-container">
                <div className="today-info">
                  <div className="precipitation">
                    {" "}
                    <span className="title">PRECIPITACIONES</span>
                    <span className="value">{weather.clouds.all} %</span>
                    <div className="clear"></div>
                  </div>
                  <div className="wind">
                    {" "}
                    <span className="title">VIENTO</span>
                    <span className="value">{weather.wind.speed} m/s</span>
                    <div className="clear"></div>
                  </div>
                  <div className="humidity">
                    {" "}
                    <span className="title">HUMEDAD</span>
                    <span className="value">{weather.main.humidity} %</span>
                    <div className="clear"></div>
                  </div>
                </div>
              </div>
              <div className="week-container">
                <ul className="week-list">
                  <li className="active">
                    <i className="day-icon">{iconForecast1}</i>
                    <span className="day-name">{day1}</span>
                    <span className="day-temp">
                      {forecast.list[7].main.temp.toFixed(0)}°C
                    </span>
                  </li>
                  <li>
                    <i className="day-icon">{iconForecast2}</i>
                    <span className="day-name">{day2}</span>
                    <span className="day-temp">
                      {forecast.list[15].main.temp.toFixed(0)}°C
                    </span>
                  </li>
                  <li>
                    <i className="day-icon">{iconForecast3}</i>
                    <span className="day-name">{day3}</span>
                    <span className="day-temp">
                      {forecast.list[23].main.temp.toFixed(0)}°C
                    </span>
                  </li>
                  <li>
                    <i className="day-icon">{iconForecast4}</i>
                    <span className="day-name">{day4}</span>
                    <span className="day-temp">
                      {forecast.list[31].main.temp.toFixed(0)}°C
                    </span>
                  </li>
                  <div className="clear"></div>
                </ul>
              </div>
              <div className="location-container">
                <button className="location-button" onClick={onClick}>
                  {" "}
                  <BsGeoAlt className="location-icon" />
                  Cambiar ciudad
                </button>
              </div>
            </div>
          </div>
        ) : (
          <h2 className="no-data">Sin datos</h2>
        )}
      </div>
    </main>
  );
}

export default App;
