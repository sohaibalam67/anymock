import React, { Component } from "react";
import styles from "./DeviceCard.module.css";

function DeviceCard(props) {
  return (
    <div
      className={styles.deviceCard}
      onClick={() => {
        props.changeFrame(props.device, props.device.variants[0]);
      }}
    >
      <div
        className={styles.deviceThumbnail}
        style={{ background: `url(${props.device.thumbnail})` }}
      ></div>
      <div className={styles.deviceInfo}>
        <div className={styles.deviceTitle}>
          {props.device.name ?? "Untitled"}
        </div>
        <span className={styles.deviceScreenDimension}>1125 x 2463</span>
      </div>
    </div>
  );
}

export default DeviceCard;
