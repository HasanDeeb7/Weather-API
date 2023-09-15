import styles from "../styles/ImgAndCaption.module.css";
const ImgAndCaption = ({ desc, src }) => {
  return (
    <div>
      <img src={src} className={styles.image} alt={`${desc.split(" ")[0]}`} />
      <section className={styles.caption}>{desc}</section>
    </div>
  );
};

export default ImgAndCaption;
