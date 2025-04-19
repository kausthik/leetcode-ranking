import styles from "./Ranking.module.css";

function Ranking({ arr, heading, typename }) {
  
  return (
    <div className={`${styles.container}`}>
      <h2> {heading} </h2>
      <div className={`${styles.subcontainer}`}>
        {arr.map((item, index) => (
          <div key={item.id_name}>
            <div className={`${styles.image}`}>
              <img
                src={`/photos/${item.id_name}.jpeg`}
                alt="image"
                className={`${styles.img}`}
              />
            </div>
            <div>
              <p>{item.id_name}</p>
              <p>Questions Solved :- {item[typename]}</p>
              <p>Rank {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ranking;
