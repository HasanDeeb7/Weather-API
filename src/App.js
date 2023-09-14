import Search from "./components/Search"
import TodayWeather from"./components/TodayWeather.component"
import fakeWeatherData from "./data/fakeWeatherData.json";
import WeatherItem from "./components/WeatherItem"
import clear from './img/weather-icons/clear.svg'
import "./App.css";
import { useState,useEffect } from "react";
import style from "./styles/weather-item.module.css"



const App=()=>{

  const [inputValue, setInputValue] = useState('London')
  let onInputChange=(e)=>{
    setInputValue(e.target.value)
    console.log(inputValue)
  }

 const apiKey = '9852889fd033baae8e3254e0455b96d8'
const fakeData = fakeWeatherData.list

const [weatherData, setWeatherData] = useState(null)

const getData = async () => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}`)
  if(!response.ok){
    throw new Error('Error')
  }else{
    return response.json()
  }
}

useEffect(()=>{
  
  getData().then(data => {
    setWeatherData(data)
    console.log(weatherData)
  }).catch(e => console.log(e.message))
  
}, [])
console.log(weatherData)
const convertToCelsius = (kelvin) =>{
  return Math.floor(kelvin - 273.15) + ' to ' + Math.ceil(kelvin - 273.15)
} 

  return(
    <div className="App">

        <main>
        <Search onInputChange={onInputChange} />
      { weatherData ? 
          (
          <TodayWeather 
          temp = {convertToCelsius(weatherData.main.temp)}
          pressure={weatherData.main.pressure}
          humidity={weatherData.main.humidity}
          description={weatherData.weather[0].description}
          /> 
          
          )
          
          : " "
        
      }
        <section className={style.nextHoursContainer}>
        <WeatherItem deg='24' time='6:00' src={clear}/>
        <WeatherItem deg='24' time='6:00' src={clear}/>
        <WeatherItem deg='24' time='6:00' src={clear}/>
        <WeatherItem deg='24' time='6:00' src={clear}/>
        <WeatherItem deg='24' time='6:00' src={clear}/>
        
        </section>
      </main>
    </div>

  )
}

export default App;
