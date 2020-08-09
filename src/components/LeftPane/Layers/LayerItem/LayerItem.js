import React from "react";
import styles from "./LayerItem.module.css";

function LayerItem({ selected, icon, name }) {
  return (
    <div
      className={styles.container}
      style={{
        background: selected ? "#18a0fb" : "transparent",
      }}
    >
      <img src={icon} alt="device icon" className={styles.itemIcon} />
      <div className={styles.name}>{name}</div>
    </div>
  );
}

export default LayerItem;
