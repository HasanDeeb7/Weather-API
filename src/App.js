import Search from "./components/Search";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

const App = () => {

    return (
      <div className="App">
        <header>
            <input type="text" className="search" placeholder="Type in a city name"/>
            <button className="btn find-weather-btn">Find Weather</button>
        </header>
    
    <main>
        <section className="today">
            <img src={mostlyCloudy} alt="Weather"/>
            <section className="caption">overcast clouds</section>
            <section id="today-weather-details">
                <section className="temp">
                    <span>Temperature</span>10 to 11 c
                </section>
                <section className="other">
                    <section className="Humidity">
                        <span>Humidity</span> 78%   
                </section>
                <section className="pressure">
                    <span>Pressure</span> 1008.48
                </section>
            </section>
        </section>
    </section>
        
        <section id="basis-container">
            <section className="condition-container">
                <i className="time">3:00</i>
                <figure><img className="weather-condition" src={mostlyCloudy} alt="clear-weather" /></figure>
                <i className="temprature">8&deg;C</i>
            </section>
            <section className="condition-container">
                <i className="time">6:00</i>
                <figure><img className="weather-condition" src={mostlyCloudy} alt="clear-weather" /></figure>
                <i className="temprature">9&deg;C</i>
            </section>
            <section className="condition-container">
                <i className="time">9:00</i>
                <figure><img className="weather-condition" src={clear} alt="clear-weather" /></figure>
                <i className="temprature">14&deg;C</i>
            </section>
            <section className="condition-container">
                <i className="time">12:00</i>
                <figure><img className="weather-condition" src={clear} alt="clear-weather" /></figure>
                <i className="temprature">17&deg;C</i>
            </section>
            <section className="condition-container">
                <i className="time">15:00</i>
            <figure><img className="weather-condition" src={clear} alt="clear-weather" /></figure>
            <i className="temprature">18&deg;C</i>
        </section>
        <section className="condition-container">
            <i className="time">18:00</i>
            <figure><img className="weather-condition" src={clear} alt="clear-weather" /></figure>
            <i className="temprature">16&deg;C</i>
        </section>
        <section className="condition-container">
            <i className="time">21:00</i>
            <figure><img className="weather-condition" src={mostlyCloudy} alt="clear-weather" /></figure>
            <i className="temprature">13&deg;C</i>
        </section>
    </section>
    </main>
      </div>
    );
  }


export default App;