import {useState} from "react";
import style from "../styles/weather-item.module.css"
const WeatherItem = ({time, temp, src}) =>{

    return(
     
        <section className={style.conditionContainer}>
        <i className="time">{time}</i>
        <figure><img alt="clear-weather" width="100%" /></figure>
        <i className="temprature">{temp}&deg;C</i>
        </section>
    )
}
export default WeatherItem;