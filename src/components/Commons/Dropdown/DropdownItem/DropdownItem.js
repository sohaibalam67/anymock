import React from "react";
import styles from "./DropdownItem.module.css";

function DropdownItem({ onClick = (f) => f, children }) {
  return (
    <div className={styles.dropdownItem} onClick={onClick}>
      {children}
    </div>
  );
}

export default DropdownItem;
