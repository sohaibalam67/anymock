import React from "react";
import styles from "./Heading.module.css";

function Heading({ style = {}, children }) {
  return (
    <h6 className={styles.heading} style={style}>
      {children}
    </h6>
  );
}

export default Heading;
