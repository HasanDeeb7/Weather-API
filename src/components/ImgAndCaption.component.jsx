import styles from "../styles/ImgAndCaption.module.css";
import eclipse from "../img/weather-icons/eclipse.css"
const ImgAndCaption = ({isLoading, desc, src }) => {
  return (
    <>  
    {isLoading ?
    <div>
    <section>
    <img src={src} className={styles.image} alt={`${desc.split(" ")[0]}`} />
    <div class="loadingio-spinner-eclipse-4ofw2zblpac"><div class="ldio-p881mh63uz">
    <div></div>
    </div></div>
    </section>
  </div> 
    :
    
    <div>
      <img src={src} className={styles.image} alt={`${desc.split(" ")[0]}`} />
      <section className={styles.caption}>{desc}</section>
    </div>
  }
    </>
  );
};

export default ImgAndCaption;
