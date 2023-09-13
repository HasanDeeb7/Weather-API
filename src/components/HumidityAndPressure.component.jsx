import styles from './HumidityAndPressure.module.css'
let HumidityAndPressure=({humidity,pressure})=>{
   return(
    <section className={styles.other}>
    <section className="Humidity">
        <span>Humidity</span> {humidity}%
    </section>
    <section className="pressure">
            <span>Pressure</span> {pressure}
    </section>
</section>
   )
}

export default HumidityAndPressure