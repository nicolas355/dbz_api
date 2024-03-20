
import styles from './loader.module.css'


const Loader = () => {
  
  return (
    <div>
      <div className= {styles.ray}>
        <div className={styles.yellow} ></div>
        <div className={styles.shadow}></div>
      </div>
      <div className= {`${styles.kinto} ${styles.centered}`} >
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className={`${styles.cloud} ${styles.cloud1}`}>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className={`${styles.cloud} ${styles.cloud2}`}>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className={`${styles.cloud} ${styles.cloud3}`}>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className={`${styles.line} ${styles.line1}`}></div>
      <div className={`${styles.line} ${styles.line2}`}></div>
      <div className={`${styles.line} ${styles.line3}`}></div>
      <div className={`${styles.line} ${styles.line4}`}></div>
      <div className={`${styles.line} ${styles.line5}`}></div>
    </div>
  )
}

export default Loader
