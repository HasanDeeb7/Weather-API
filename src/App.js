import Search from "./components/Search"
import TodayWeather from"./components/TodayWeather.component"
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
import { useState,useEffect } from "react";

const App=()=>{

  let [inputValue,setInputValue]=useState("")
  let onInputChange=(e)=>{
    setInputValue(e.target.value)
  }
 
let [fetchingdata,setFetchingData]=useState({})
let fetching=()=>
{
  //   useEffect(()=>{
  //     fetch(fakeWeatherData)
  //     .then((response)=>response.json())
  //     .then((country)=>setFetchingData(country))
  // },[])
  console.log("data fetching")
}

console.log(fakeWeatherData.list[0].main.humidity)
console.log(fakeWeatherData.list[0].main.pressure)
console.log(fakeWeatherData.list[0].main.temp)
console.log(fakeWeatherData.list[0].weather[0].description)//caption on weather
  return(
    <div className="App">
        <Search onInputChange={onInputChange} eventHandler={fetching}/>
        <TodayWeather data={fakeWeatherData}/>
    </div>

  )
}

export default App;
