import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <picture className={styles.intro_img}>
        <source
          srcSet="images/nova.png"
          media="(min-width: 1024px)"
        />
        <img src="images/nova.png" alt="" aria-hidden="true" />
      </picture>
      <div className={styles.intro_content}>
        <h1 className={styles.title}>Nova Web Applicaiton</h1>
        <p className={styles.description}>
          Your go-to web application for transforming YouTube
          videos into organized study materials using the Cornell structure
          method. Simply paste the URL of your desired video, and Nova will
          take care of the rest. Streamline your studying process with Nova and unlock
          the potential of your video resources like never before.
        </p>
        <button className={styles.view_plans_btn}>Nova App</button>
      </div>
    </div>
  );
};

export default Intro;
