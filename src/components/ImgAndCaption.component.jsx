import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";
import unknown from "../img/weather-icons/unknown.svg";
import errorSvg from "../img/weather-icons/Vector.svg";
import styles from "../styles/ImgAndCaption.module.css";

const ImgAndCaption = ({ desc }) => {
  let name;
  if (desc.split(" ")[0] == "clear") name = clear;
  else if (desc.split(" ")[0] == "cloudy" || desc.split(" ")[0] == "scattered")
    name = cloudy;
  else if (desc.split(" ")[0] == "drizzle" || desc.split(" ")[0] == "broken")
    name = drizzle;
  else if (desc.split(" ")[0] == "mist") name = fog;
  else if (desc.split(" ")[0] == "mostlycloudy") name = mostlycloudy;
  else if (desc.split(" ")[0] == "partlycloudy" || desc.split(" ")[0] == "few")
    name = partlycloudy;
  else if (desc.split(" ")[0] == "rain") name = rain;
  else if (desc.split(" ")[0] == "snow") name = snow;
  else if (
    desc.split(" ")[0] == "shower" ||
    desc.split(" ")[0] == "thunderstorm"
  )
    name = storm;
  else {
    name = errorSvg;
  }
  return (
    <div>
      {/* <img src={name} alt={`${desc.split(' ')[0]}`}/> */}
      <img src={name} alt={`${desc.split(" ")[0]}`} />
      <section className={styles.caption}>{desc}</section>
    </div>
  );
};

export default ImgAndCaption;
