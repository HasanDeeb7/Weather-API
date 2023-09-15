import Input from "./Input.component";
import Button from "./Button.component";
import styles from"../styles/Search.module.css";

const Search=({onInputChange,eventHandler})=>{

  return(
    <header>
      <Input className="search" placeholder="Type in a city name" onInputChange={onInputChange}/>
      <Button className="btn find-weather-btn" eventHandler={eventHandler}/>
    </header>
  )
 
}
  
export default Search;
