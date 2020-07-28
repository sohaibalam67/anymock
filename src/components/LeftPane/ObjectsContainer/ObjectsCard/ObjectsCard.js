import React from "react";
import styles from "./ObjectsCard.module.css";

function ObjectsCard(props) {
  return (
    <div
      className={styles.container}
      onClick={() => {
        props.onClick();
      }}
    >
      <img src={props.source} alt="" className={styles.icon} />
      <span className={styles.title}>{props.title}</span>
    </div>
  );
}

export default ObjectsCard;
