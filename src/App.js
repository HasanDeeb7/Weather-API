import Search from "./components/Search"
import TodayWeather from"./components/TodayWeather.component"
import fakeWeatherData from "./data/fakeWeatherData.json";
import WeatherItem from "./components/WeatherItem"
import clear from './img/weather-icons/clear.svg'
import "./App.css";
import { useState,useEffect } from "react";
import style from "./styles/weather-item.module.css"



const App=()=>{
  const [inputValue, setInputValue] = useState("")
  let onInputChange=(e)=>{
    setInputValue(e.target.value)
  }
 
const fakeData = fakeWeatherData.list
 let humidity = fakeData[0].main.humidity
 console.log(`humidity: ${humidity}`)
 let pressure = fakeData[0].main.pressure
 console.log(`pressure: ${pressure}`)
let temp = Math.floor(fakeData[0].main.temp - 273.15) + ' to ' + Math.ceil(fakeData[0].main.temp - 273.15)
console.log(temp)
 let description = fakeData[0].weather[0].description


// console.log(fakeData.list[0].main.pressure)
// console.log(fakeData.list[0].main.temp)
// console.log(fakeData.list[0].weather[0].description)//caption on weather
  return(
    <div className="App">
      <main>
        <Search onInputChange={onInputChange} />
        <TodayWeather 
        temp = {temp}
        pressure={pressure}
        humidity={humidity}
        description={description}
        />
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
