import React from "react";
import styles from "./Dropdown.module.css";

function Dropdown({ children, translateX = 0, width = 130 }) {
  return (
    <div
      className={styles.dropdown}
      style={{ transform: `translateX(${translateX}px)`, width: `${width}px` }}
    >
      {children}
    </div>
  );
}

export default Dropdown;
