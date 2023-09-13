import styles from '../styles/Button.module.css'
const Button=({className,eventHandler})=>{
    return(
        <button className={className} onClick={eventHandler}>Find Weather</button>
    )
}

export default Button