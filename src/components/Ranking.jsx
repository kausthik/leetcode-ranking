import styles from "./Ranking.module.css";

function Ranking({ arr, heading, typename }) {
  
  return (
    <div id={`${typename}`} className={`${styles.container}`}>
      <h2 className={`${styles.heading}`}> {heading} </h2>
      <div className={`${styles.subcontainer}`}>
        {arr.map((item, index) => (
          <div key={item.id_name} className={`${styles.card}`}>
            <div className={`${styles.image}`}>
              <img
                src={`/photos/${item.id_name}.jpeg`}
                alt="image"
                className={`${styles.img}`}
              />
            </div>
            <div>
              <p className={`${styles.cardDetails}`}>{item.id_name}</p>
              <p className={`${styles.cardDetails}`}>Questions Solved :- {item[typename]}</p>
              <p className={`${styles.cardDetails}`}>Rank {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ranking;
