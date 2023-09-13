import styles from './Temp.module.css'
const Temp=({temp})=>{
    return(
        <section className={styles.temp}>
            <span>Temperature</span> {parseInt(temp) - 273.15}C
        </section>
    )
}

export default Temp