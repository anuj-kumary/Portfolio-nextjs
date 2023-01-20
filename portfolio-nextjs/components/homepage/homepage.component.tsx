import Image from "next/image";
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
          <Image
            src="/Anuj1.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
