import Search from "./components/Search";
import TodayWeather from "./components/TodayWeather.component";
import WeatherItem from "./components/WeatherItem";
import clear from "./img/weather-icons/clear.svg";
import "./App.css";
import { useState } from "react";
import style from "./styles/weather-item.module.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  let onInputChange = (e) => {
    setInputValue(e.target.value);
  };
  console.log(inputValue);

  let apiKey = "04eec21504ca03d13f534a27f6feb54c";

  let fetching = () => {
    if (inputValue !== "") {
      fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&cnt=8&units=metric&appid=${apiKey}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("response was not ok");
          }
          return response.json();
        })
        .then((country) => setWeatherData(country))
        .catch((error) => {
          setWeatherData(null);
        });
    }
  };

  return (
    <div className="App">
      <main>
        <Search onInputChange={onInputChange} eventHandler={fetching} />
        {weatherData ? (
          <TodayWeather
            temp_min={Math.floor(weatherData.list[0].main.temp_min)}
            temp_max={Math.floor(weatherData.list[0].main.temp_max)}
            pressure={weatherData.list[0].main.pressure}
            humidity={weatherData.list[0].main.humidity}
            description={weatherData.list[0].weather[0].description}
          />
        ) : (
          ""
        )}
        </main>
        </div>
  )
        }

export default App;