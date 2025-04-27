import styles from "./Ranking.module.css";

function Ranking({ arr, heading, typename }) {
  
  const sortedArr = [...arr]
  .sort((a, b) => b[typename] - a[typename]) 
  .map((item) => ({ id_name: item.id_name, [typename]: item[typename] }));

  return (
    <div id={`${typename}`} className={`${styles.container}`}>
      <h2 className={`${styles.heading}`}> {heading} </h2>
      <div className={`${styles.subcontainer}`}>
        {sortedArr.map((item, index) => (
          <div key={item.id_name} className={`${styles.card}`}>
            <div className={`${styles.image}`}>
              <img
               src={`/photos/${item.id_name}.jpeg`}
               onError={(e) => { e.target.src = `/photos/default.jpeg` }}
                alt="image"
                className={`${styles.img}`}
              />
            </div>
            <div>
              <p className={`${styles.cardDetails}`}>{item.id_name}</p>
              <p className={`${styles.cardDetails}`}>
                Questions Solved :- {item[typename]}
              </p>
              <p className={`${styles.cardDetails}`}>Rank {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ranking;
