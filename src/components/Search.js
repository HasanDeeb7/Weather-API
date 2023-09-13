import Input from "./Input.component";
import Button from "./Button.component";
import styles from"./Search.module.css";

const Search=({onInputChange})=>{
  return(
    <header>
      <Input className="search" placeholder="Type in a city name" onInputChange={onInputChange}/>
      <Button className="btn find-weather-btn"/>
    </header>
  )
 
}
  
export default Search;
