import Search from "./components/Search";
import TodayWeather from "./components/TodayWeather.component";
import WeatherItem from "./components/WeatherItem";
import "./App.css";
import { useEffect, useState } from "react";
import style from "./styles/weather-item.module.css";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import unknown from "./img/weather-icons/unknown.svg";
import errorCloud from "./img/weather-icons/Vector.svg";
import ImgAndCaption from "./components/ImgAndCaption.component";
import imageStyle from "./styles/ImgAndCaption.module.css"

const App = () => {
  const [inputValue, setInputValue] = useState("madrid");
  const [weatherData, setWeatherData] = useState(null);
  const [mainClass, setMainClass] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  let onInputChange = (e) => {
    setInputValue(e.target.value);
  };
  let apiKey = "04eec21504ca03d13f534a27f6feb54c";

  let fetching = () => {
    setIsLoading(true);
    if (inputValue !== "") {
      fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&cnt=8&units=metric&appid=${apiKey}`
      )
        .then((response) => {
          if (!response.ok) {
            setIsLoading(false);
          }
          return response.json();
        })
        .then((country) => {
          if (country.cod === "200") {
            setWeatherData(country);
            setIsLoading(false);
            setIsError(false);
          } else if (country.cod === "404") {
            setWeatherData(null);
            setIsLoading(false);
            setIsError(true);
            setErrorMessage(country.message);
          }
        })
        .catch((error) => {
          setIsError(true);
          setErrorMessage(error.message);
        });
    }
  };
  useEffect(() => {
    document.querySelector(".search").value = inputValue;
    fetching();
  }, []);
  let checkMainClass = (weather_id) => {
    if (weather_id >= 500 && weather_id < 600) setMainClass("rain");
    else if (weather_id === 800) setMainClass("clear");
    else setMainClass("");
  };
  const checkWeatherId = (weather_id) => {
    let condtitionImg = unknown;

    switch (true) {
      case weather_id < 300:
        condtitionImg = storm;
        break;
      case weather_id >= 300 && weather_id < 500:
        condtitionImg = drizzle;
        break;
      case weather_id >= 500 && weather_id < 600:
        condtitionImg = rain;
        break;
      case weather_id >= 600 && weather_id < 700:
        condtitionImg = snow;
        break;
      case weather_id >= 700 && weather_id < 800:
        condtitionImg = fog;
        break;
      case weather_id === 800:
        condtitionImg = clear;
        break;
      case weather_id === 801:
        condtitionImg = partlycloudy;
        break;
      case weather_id >= 802 && weather_id <= 805:
        condtitionImg = mostlycloudy;
        break;
      default:
        break;
    }
    return condtitionImg;
  };

  useEffect(() => {
    if (weatherData) {
      checkMainClass(weatherData.list[0].weather[0].id);
    }
  }, [weatherData]);
  return (
    <div className="App">
      <header>
        <Search onInputChange={onInputChange} eventHandler={fetching} />
      </header>

        <main className={mainClass}>
      {!isError ? 
        weatherData && !isLoading ? (
          <>
            <TodayWeather
              src={checkWeatherId(weatherData.list[0].weather[0].id)}
              temp_min={Math.floor(weatherData.list[0].main.temp_min)}
              temp_max={Math.floor(weatherData.list[0].main.temp_max)}
              pressure={weatherData.list[0].main.pressure}
              humidity={weatherData.list[0].main.humidity}
              description={weatherData.list[0].weather[0].description}
              />

            <section className={style.nextForecast}>
              {weatherData.list.map((element, idx) => {
                if (idx === 0) return;
                return (
                  <WeatherItem
                  src={checkWeatherId(element.weather[0].id)}
                  key={idx}
                  temp={Math.floor(element.main.temp)}
                    time={element.dt_txt.split(" ")[1].slice(0, -3)}
                    />
                );
              })}
            </section>
          </>
        ) : (
          // isError ?
          // (<TodayWeather isLoading={isLoading} src={errorCloud} description={(errorMessage)} />
          //   ):
          <TodayWeather src={cloudy} description="Loading..." />
        )
        : <section id="today-weather-container"><ImgAndCaption src={errorCloud} description={errorMessage}/></section>
      }
      </main>
    </div>
  );
};

export default App;
