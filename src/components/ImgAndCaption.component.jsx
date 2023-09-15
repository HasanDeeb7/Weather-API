import imgStyles from "../styles/ImgAndCaption.module.css";
import styles from "../styles/TodayWeather.module.css";
import errorCloud from "../img/weather-icons/Vector.svg";

const ImgAndCaption = ({ description, src }) => {

  return (
    <div>
      <section className={styles.today}>
        <img src={src} className={imgStyles.image} />
        <section
          className={src !== errorCloud ? imgStyles.caption : imgStyles.captionDanger}
        >
          {description}
        </section>
      </section>
    </div>
  );
};

export default ImgAndCaption;
