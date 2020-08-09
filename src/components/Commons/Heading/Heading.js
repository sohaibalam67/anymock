import React from "react";
import styles from "./Heading.module.css";

const Heading = (props) => (
  <h6 className={styles.heading} style={props.style ?? {}}>
    {props.children}
  </h6>
);

export default Heading;
