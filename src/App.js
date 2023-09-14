import Search from "./components/Search";
import TodayWeather from "./components/TodayWeather.component";
import WeatherItem from "./components/WeatherItem";
import "./App.css";
import { useState } from "react";
import style from "./styles/weather-item.module.css";


const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  let onInputChange = (e) => {
    setInputValue(e.target.value);
  };
  

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
        .then((country) => {
          setWeatherData(country)
          console.log(weatherData)
        })
        .catch((error) => {
          setWeatherData(null);
        });
    }
  };

  return (
    <div className="App">
      <main>
        <Search onInputChange={onInputChange} eventHandler={fetching} />
        {weatherData &&  (
          <>
          <TodayWeather
            temp_min={Math.floor(weatherData.list[0].main.temp_min)}
            temp_max={Math.floor(weatherData.list[0].main.temp_max)}
            pressure={weatherData.list[0].main.pressure}
            humidity={weatherData.list[0].main.humidity}
            description={weatherData.list[0].weather[0].description}
            />

            <section className={style.nextForecast}>
            {weatherData.list.map((element,idx) =>{
              if(idx === 0) return
              console.log(element)
              
              return (<WeatherItem description={element.weather[0].description} key={element.cod} temp={Math.floor(element.main.temp)} time={(element.dt_txt).split(' ')[1].slice(0,-3)}/>)
            })}
            </section>
            </>
        ) }
        </main>
        </div>
  )
        }

export default App;