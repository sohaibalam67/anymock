import React, { useState } from "react";
import styles from "./Menu.module.css";

function Menu({ component, children, style = {} }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={styles.container}
        style={style}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {component}
        {open && children}
      </div>
      {open && (
        <div
          className={styles.backdrop}
          onClick={() => {
            setOpen(false);
          }}
        ></div>
      )}
    </>
  );
}

export default Menu;
