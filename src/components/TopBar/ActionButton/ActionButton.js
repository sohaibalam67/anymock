import React from "react";
import styles from "./ActionButton.module.css";

function ActionButton({ icon = "🔥", title = "untitled", onClick = (f) => f }) {
  return (
    <div className={styles.container} onClick={onClick}>
      {icon}
      <div className={styles.title}>{title}</div>
    </div>
  );
}

export default ActionButton;
