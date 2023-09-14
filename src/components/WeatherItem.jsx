import {useState} from "react";
import style from "../styles/weather-item.module.css"
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";
import unknown from "../img/weather-icons/unknown.svg";
import styles from "../styles/ImgAndCaption.module.css";

const WeatherItem = ({time, temp, src, description}) =>{
    let condtitionImg = description.split(" ")[0]
console.log(condtitionImg)
    switch(condtitionImg){
        case 'cloudy':
            condtitionImg = cloudy
            break;
        case 'clear':
            condtitionImg=clear
            break;
        case 'drizzle':
            condtitionImg=drizzle
            break;
        case 'mist':
            condtitionImg=fog
            break;
        case 'mostlycloudy':
            condtitionImg=mostlycloudy
            break;
        case 'partlycloudy':
            condtitionImg=partlycloudy
            break;
        case 'rain':
            condtitionImg=rain
            break;
        case 'snow':
            condtitionImg=snow
            break;
        case 'few':
            condtitionImg=partlycloudy
            break;
        case 'scattered':
            condtitionImg=cloudy
            break;
        case 'few':
            condtitionImg=partlycloudy
            break;
        case 'shower':
            condtitionImg=storm
            break;
        case 'thunderstorm':
            condtitionImg=storm
            break;
        case 'thunderstorm':
            condtitionImg=storm
            break;
        default:
            condtitionImg=unknown        
    }

    // if (desc.split(" ")[0] == "clear") name = clear;
    // else if (desc.split(" ")[0] == "cloudy"  desc.split(" ")[0] == "scattered")
    //   name = cloudy;
    // else if (desc.split(" ")[0] == "drizzle"  desc.split(" ")[0] == "broken")
    //   name = drizzle;
    // else if (desc.split(" ")[0] == "mist") name = fog;
    // else if (desc.split(" ")[0] == "mostlycloudy") name = mostlycloudy;
    // else if (desc.split(" ")[0] == "partlycloudy"  desc.split(" ")[0] == "few")
    //   name = partlycloudy;
    // else if (desc.split(" ")[0] == "rain") name = rain;
    // else if (desc.split(" ")[0] == "snow") name = snow;
    // else if (
    //   desc.split(" ")[0] == "shower" 
    //   desc.split(" ")[0] == "thunderstorm"
    // )


    
    return(
        <section className={style.conditionContainer}>
        <i className="time">{time}</i>
        <figure><img src={condtitionImg} alt="clear-weather" width="100%" /></figure>
        <i className="temprature">{temp}&deg;C</i>
        </section>
    )
}
export default WeatherItem;