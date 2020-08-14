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
      <AlignLeftIcon
        width={13}
        height={13}
        className={styles.icon}
        onClick={leftAlign}
      />
      <AlignHorizontalCenterIcon
        width={13}
        height={13}
        className={styles.icon}
        onClick={horizontalCenterAlign}
      />
      <AlignRightIcon
        width={13}
        height={13}
        className={styles.icon}
        onClick={rightAlign}
      />
      <AlignTopIcon
        width={13}
        height={13}
        className={styles.icon}
        onClick={topAlign}
      />
      <AlignVerticalCenterIcon
        width={13}
        height={13}
        className={styles.icon}
        onClick={verticalCenterAlign}
      />
      <AlignBottomIcon
        width={13}
        height={13}
        className={styles.icon}
        onClick={bottomAlign}
      />
    </div>
  );
}

export default Alignment;
