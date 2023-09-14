import Search from "./components/Search"
import TodayWeather from"./components/TodayWeather.component"
import fakeWeatherData from "./data/fakeWeatherData.json";
import WeatherItem from "./components/WeatherItem"
import clear from './img/weather-icons/clear.svg'
import "./App.css";
import { useState,useEffect } from "react";
import style from "./styles/weather-item.module.css"



const App=()=>{

  const [inputValue, setInputValue] = useState('Madrid')
  let onInputChange=(e)=>{
    setInputValue(e.target.value)
    console.log(inputValue)
  }

 const apiKey = '9852889fd033baae8e3254e0455b96d8'
const fakeData = fakeWeatherData.list

const [weatherData, setWeatherData] = useState(null)

const getData = async () => {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&cnt=8&units=metric&appid=${apiKey}`)
  if(!response.ok){
    throw new Error('Error')
  }else{
    return response.json()
  }
}

useEffect(()=>{
  
  getData().then(data => {
    setWeatherData(data)
  }).catch(e => console.log(e.message))
  
}, [])
console.log(weatherData)
const convertToCelsius = (min,max) =>{
  return Math.floor(min) + ' to ' + Math.ceil(max)
} 
  // if(weatherData){
  //   console.log(weatherData.list[2].main.temp)
  // }
  return(
    <div className="App">

        <Search onInputChange={onInputChange} />
      {weatherData ? 
          (
            <>
            <main>
          <TodayWeather 
          temp = {convertToCelsius(weatherData.list[0].main.temp_min, weatherData.list[0].main.temp_min)}
          pressure={weatherData.list[0].main.pressure}
          humidity={weatherData.list[0].main.humidity}
          description={weatherData.list[0].weather[0].description}
          />

          <section className={style.nextHoursContainer}>
          {weatherData.list.map((element, idx) =>{
            if (idx === 0) return
            console.log(element.main)
            return <WeatherItem temp={element.main.temp} time={(element.dt_txt).split(' ')[1].slice(0,-3)} />
            
          })} 
          </section>
      </main>
          </>
          )
          : " " 
      }
    </div>

  )
}

export default App;
