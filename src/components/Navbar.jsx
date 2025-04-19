import styles from "./Navbar.module.css"

function Navbar(){

    const navbarItems=["HIGHEST QUESTIONS" , "LEETCODE RANKING" , "HARD QUESTIONS" , "MEDIUM QUESTIONS" , "EASY QUESTIONS"];

     return(
      <>
      <div className={`navbar ${styles.navbar}`}>
         {
          navbarItems.map((items,index)=>(
            <div className="navbar_item" key={index}>
                 <a className={`${styles.anchor}`} href="">{items}</a>
            </div>
          ))
         }
      </div>
      </>
     )
}

export default Navbar;