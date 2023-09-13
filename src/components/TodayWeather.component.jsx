import styles from "./TodayWeather.module.css"
import ImgAndCaption from "./ImgAndCaption.component";
import Temp from "./Temp.component";
import HumidityAndPressure from "./HumidityAndPressure.component";
const TodayWeather=({data})=>{
    if(data){
        let humidity=data.list[0].main.humidity
        let temp=data.list[0].main.temp
        let pressure=data.list[0].main.pressure
        let desc=data.list[0].weather[0].description 
    
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
}

export default TodayWeather