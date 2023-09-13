import {useState} from "react";
import style from "../styles/weather-item.module.css"
const WeatherItem = ({time, deg, src}) =>{

    return(
     
        <section className={style.conditionContainer}>
        <i className="time">{time}</i>
        <figure><img src={src}  alt="clear-weather" width="100%" /></figure>
        <i className="temprature">{deg}&deg;C</i>
        </section>
    )
}
export default WeatherItem;