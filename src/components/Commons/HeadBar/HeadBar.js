import React from "react";
import styles from "./HeadBar.module.css";
import { ReactComponent as ArrowBack } from "../../../assets/images/icons/app/arrow-back-outline.svg";

function HeadBar({ title = "Untitled", onBackClick = (f) => f, style = {} }) {
  return (
    <div className={styles.container} style={style}>
      <div className={styles.backButtonContainer} onClick={onBackClick}>
        <ArrowBack width={20} height={20} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.filler}></div>
    </div>
  );
}

export default HeadBar;
