/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../styles/homepage.module.css";

function HomePage() {
  return (
    <>
      <div className={styles.main__container}>
        <div className={styles.left__container}>
          <h2 className={styles.heading}>Hello! I’m Anujkumar Yadav</h2>
        </div>
        <div className={styles.right__container}>
          <img src="/public/anuj.png" alt="Profile" />
        </div>
      </div>
    </>
  );
}

export default HomePage;
