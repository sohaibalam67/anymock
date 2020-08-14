import React from "react";
import styles from "./ObjectsCard.module.css";

function ObjectsCard({ title, onClick, children }) {
  return (
    <div className={styles.container} onClick={onClick}>
      {children}
      <span className={styles.title}>{title}</span>
    </div>
  );
}

export default ObjectsCard;
