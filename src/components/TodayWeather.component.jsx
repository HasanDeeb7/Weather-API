import styles from "../styles/TodayWeather.module.css";
import ImgAndCaption from "./ImgAndCaption.component";
// import errorSvg from "../img/weather-icons/errorSvg.svg"
const TodayWeather = ({
  src,
  humidity,
  temp_min,
  temp_max,
  pressure,
  description,
}) => {
  return (
    <section id="today-weather-container">
      <section className={styles.today}>

            <ImgAndCaption  description={description} src={src} />
        
          {pressure &&
          <>
        <section id="today-weather-details">
          <section className={styles.temp}>
            <span id="temp-span">Temperature</span> {temp_min} To {temp_max}{" "}
            &deg;C
          </section>
          <section className={styles.other}>
            <section className="Humidity">
              <span id="humidity-span">Humidity</span> {humidity}%
            </section>
            <section className="pressure">
              <span id="pressure-span">Pressure</span> {pressure}
            </section>
          </section>
        </section>
          </> 
        }
      </section>
    </section>
  );
};

export default TodayWeather;
