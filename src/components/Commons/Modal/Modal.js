import React from "react";
import styles from "./Modal.module.css";

function Modal({ children, open = false, onClose = (f) => f }) {
  return open ? (
    <div
      className={styles.backdrop}
      onClick={(event) => {
        event.preventDefault();
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      {children}
    </div>
  ) : null;
}
export default Modal;
