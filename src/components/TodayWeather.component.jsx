import styles from "./TodayWeather.module.css"
import ImgAndCaption from "./ImgAndCaption.component";
import Temp from "./Temp.component";
import HumidityAndPressure from "./HumidityAndPressure.component";
const TodayWeather=({humidity,pressure,temp,desc})=>{
    return(
        <main>
        <section className={styles.today}>
            <ImgAndCaption desc={desc}/>
            <section id="today-weather-details">
                <Temp temp={temp}/>
                <HumidityAndPressure humidity={humidity} pressure={pressure}/>
            </section>
        </section>
    </main>
    )
}

export default TodayWeather