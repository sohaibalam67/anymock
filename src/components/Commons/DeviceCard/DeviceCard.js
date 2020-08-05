import React from "react";
import styles from "./DeviceCard.module.css";

function DeviceCard(props) {
  let thumbnailStyle = props.thumbnailStyle ?? {};
  thumbnailStyle.background = `url(${props.thumbnail})`;
  return (
    <div
      className={styles.deviceCard}
      onClick={() => {
        props.onClick();
      }}
      style={props.style ?? {}}
    >
      <div className={styles.deviceThumbnail} style={thumbnailStyle}></div>
      <div className={styles.deviceInfo}>
        <div className={styles.title}>{props.title ?? "Untitled"}</div>
        <span className={styles.subtitle}>{props.subtitle ?? ""}</span>
      </div>
    </div>
  );
}

export default DeviceCard;
