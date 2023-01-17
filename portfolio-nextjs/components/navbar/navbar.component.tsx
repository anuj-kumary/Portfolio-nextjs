import React from "react";
import styles from "../../styles/navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className="logo">
          <h3>Anujkumar Yadav</h3>
        </div>
        <ul className={styles.menu__list}>
          <li className={styles.list__item}>Home</li>
          <li className={styles.list__item}>About</li>
          <li className={styles.list__item}>Projects</li>
          <li className={styles.list__item}>Blogs</li>
          <li className={styles.list__item}>Contacts</li>
        </ul>

        <button className={styles.hire__btn}>Hire Me</button>
      </div>
    </>
  );
}

export default Navbar;
