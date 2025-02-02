import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Evaluate Digital Assets</h1>
        <p className={styles.desc}>
        Code Equity is the first B2B service provider to offer precise evaluations of digital assets, ensuring investors make informed decisions with confidence.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Submit Evaluation</button>
          <button className={styles.button}>Learn More</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
      </div>
    </div>
  );
};

export default Home;
