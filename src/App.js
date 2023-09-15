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
  // this state is for getting the input value when the input changes, with an initial value madrid
  const [inputValue, setInputValue] = useState("madrid");
  // this state is for getting whole data using the api with initial value null because it's an object
  const [weatherData, setWeatherData] = useState(null);
  // this state is used to change the background color depending on different weather 
  const [mainClass, setMainClass] = useState("");
  // this state is used to display error messages based on different cases
  const [isError, setIsError] = useState(false);
  // this state shows what kind of error occured
  const [errorMessage, setErrorMessage] = useState("");
  // this state is for loading
  const [isLoading, setIsLoading] = useState(true);

  // this function sets the name of country in setInputValue
  let onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  let apiKey = "04eec21504ca03d13f534a27f6feb54c";
  // this function is for fetching the real api, catch an error if occured while fetchingand set the isError to true if status is 404(not found),
  // set is loading to false when there is a response(there is data or not it return a response)
  let fetchData = () => {
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

// becuause we have an initial inputValue which is 'madrid', we need to fetch madrid country for the first time the component mounts,
// so we use useEffect method to do this and we put an empty array as the dependency array so it's only called one time only
  useEffect(() => {
    document.querySelector(".search").value = inputValue;
    fetchData();
  }, []);

  // this function is used to check the id of a specific country and change the background color according to this id
  let checkMainClass = (weather_id) => {
    if (weather_id >= 500 && weather_id < 600) setMainClass("rain");
    else if (weather_id === 800) setMainClass("clear");
    else setMainClass("");
  };

  // this function is used to check the id of a specific country and put the correspending image in conditionImg
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

  // this useEffect is to apply the background color each time we change the country(fetching data)
  useEffect(() => {
    if (weatherData) {
      checkMainClass(weatherData.list[0].weather[0].id);
    }
  }, [weatherData]);

  return (
    <div className="App">
      <header>
        {/* this search component contains two inner components(input and button) so we pass the onInputChange method 
        and fetchingData to it so we can apply the two functions on their corresponding component, onInputChange to the input and fetchingData to the button  */}
        <Search onInputChange={onInputChange} eventHandler={fetchData} />
      </header>
        <main className={mainClass}>
      {!isError ? 
        weatherData && !isLoading ? (
          <>
          {/* this component has the ImageAndCaption component and two other section contains the temperature ,humidity and pressure so we send the src of the image,
               the min and max temp the pressure,humidity and caption(description) to use them  */}
            <TodayWeather
              src={checkWeatherId(weatherData.list[0].weather[0].id)}
              temp_min={Math.floor(weatherData.list[0].main.temp_min)}
              temp_max={Math.floor(weatherData.list[0].main.temp_max)}
              pressure={weatherData.list[0].main.pressure}
              humidity={weatherData.list[0].main.humidity}
              description={weatherData.list[0].weather[0].description}
              />
              {/* this section contains all the next 24hours, we use map to access the list from 1 to 7(we have list of 8 element we need the first for today's weather and the rest for 24h)
              and it's contains time,figure and temperature.
              note that this section will be executed in case no error happenned */}
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
         // this section will be executed in case of error to make a specific message for the error (in case of error) and  in case of loading we put loading... message
          <TodayWeather src={cloudy} description="Loading..." />
        )
        : <section id="today-weather-container"><ImgAndCaption src={errorCloud} description={errorMessage}/></section>
      }
      </main>
    </div>
  );
};

export default App;
