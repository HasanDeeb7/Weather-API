import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg"
import drizzle from "../img/weather-icons/drizzle.svg"
import fog from "../img/weather-icons/fog.svg"
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg"
import partlycloudy from "../img/weather-icons/partlycloudy.svg"
import rain from "../img/weather-icons/rain.svg"
import snow from "../img/weather-icons/snow.svg"
import storm from "../img/weather-icons/storm.svg"
import unknown from "../img/weather-icons/unknown.svg"
import styles from "../styles/ImgAndCaption.module.css"

const ImgAndCaption=({desc})=>{
    let name;
    if(desc.split(' ')[0]=='clear')
    name=clear;
    else if(desc.split(' ')[0]=='cloudy')
    name=cloudy;
    else if(desc.split(' ')[0]=='drizzle')
    name=drizzle;
    else if(desc.split(' ')[0]=='fog')
    name=fog;
    else if(desc.split(' ')[0]=='mostlycloudy')
    name=mostlycloudy;
    else if(desc.split(' ')[0]=='partlycloudy')
    name=partlycloudy;
    else if(desc.split(' ')[0]=='rain')
    name=rain;
    else if(desc.split(' ')[0]=='snow')
    name=snow;
    else if(desc.split(' ')[0]=='storm')
    name=storm;
    else if(desc.split(' ')[0]=='unknown')
    name=unknown;
    return(
        <div>
            <img src={name} alt={`${desc.split(' ')[0]}`}/>
            <section className={styles.caption}>{desc}</section>

        </div>
    )
}

export default ImgAndCaption