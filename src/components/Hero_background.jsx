import styles from './Hero_background.module.css'

function Hero_background(){
    return(
      <div className={`${styles.div}`}>
        <p className={`${styles.p1}`}>top leetcode rankings</p>
        <p className={`${styles.p2}`}>Measure today, Master tomorrow</p>
      </div>
    )
}

export default Hero_background;