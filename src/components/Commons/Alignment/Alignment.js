import React from "react";
import styles from "./Alignment.module.css";

// icons
import { ReactComponent as AlignLeftIcon } from "../../../assets/images/icons/align/align-left.svg";
import { ReactComponent as AlignHorizontalCenterIcon } from "../../../assets/images/icons/align/align-horizontal-center.svg";
import { ReactComponent as AlignRightIcon } from "../../../assets/images/icons/align/align-right.svg";
import { ReactComponent as AlignTopIcon } from "../../../assets/images/icons/align/align-top.svg";
import { ReactComponent as AlignVerticalCenterIcon } from "../../../assets/images/icons/align/align-vertical-center.svg";
import { ReactComponent as AlignBottomIcon } from "../../../assets/images/icons/align/align-bottom.svg";

function Alignment({
  leftAlign = (f) => f,
  horizontalCenterAlign = (f) => f,
  rightAlign = (f) => f,
  topAlign = (f) => f,
  verticalCenterAlign = (f) => f,
  bottomAlign = (f) => f,
}) {
  return (
    <div className={styles.container}>
      <span className={styles.iconContainer}>
        <AlignLeftIcon
          width={13}
          height={13}
          className={styles.icon}
          onClick={leftAlign}
        />
        <span className={styles.iconTitle}>Left</span>
      </span>
      <span className={styles.iconContainer}>
        <AlignHorizontalCenterIcon
          width={13}
          height={13}
          className={styles.icon}
          onClick={horizontalCenterAlign}
        />
        <span className={styles.iconTitle}>Center</span>
      </span>
      <span className={styles.iconContainer}>
        <AlignRightIcon
          width={13}
          height={13}
          className={styles.icon}
          onClick={rightAlign}
        />
        <span className={styles.iconTitle}>Right</span>
      </span>
      <span className={styles.iconContainer}>
        <AlignTopIcon
          width={13}
          height={13}
          className={styles.icon}
          onClick={topAlign}
        />
        <span className={styles.iconTitle}>Top</span>
      </span>
      <span className={styles.iconContainer}>
        <AlignVerticalCenterIcon
          width={13}
          height={13}
          className={styles.icon}
          onClick={verticalCenterAlign}
        />
        <span className={styles.iconTitle}>Middle</span>
      </span>
      <span className={styles.iconContainer}>
        <AlignBottomIcon
          width={13}
          height={13}
          className={styles.icon}
          onClick={bottomAlign}
        />
        <span className={styles.iconTitle}>Bottom</span>
      </span>
    </div>
  );
}

export default Alignment;
