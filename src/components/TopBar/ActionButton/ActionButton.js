import React from "react";
import styles from "./ActionButton.module.css";

function ActionButton({ icon = "🔥", title = "untitled" }) {
  return (
    <div className={styles.container}>
      {icon}
      <div className={styles.title}>{title}</div>
    </div>
  );
}

export default ActionButton;
