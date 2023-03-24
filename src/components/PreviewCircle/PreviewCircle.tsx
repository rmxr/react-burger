import React from "react";
import styles from "./PreviewCircle.module.css";

function PreviewCircle({image, alt, excess}: { image: string; alt: string; excess: number | null }) {

  return (
    <div className={styles.circle}>
      <img className={styles.image} src={image} alt={alt}/>
      {excess && <div className={styles.dim}></div>}
      {excess && <p className={styles.excess + " text text_type_main-small"}>{"+" + excess}</p>}
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4C4CFF"/>
            <stop offset="100%" stopColor="#801AB2"/>
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="49" stroke="url(#gradient)" strokeWidth="4" fill="none"
                transform='rotate(45 50 50)'/>
      </svg>
    </div>
  )
};

export default PreviewCircle;