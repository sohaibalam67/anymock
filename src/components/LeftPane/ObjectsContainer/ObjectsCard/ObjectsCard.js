import React from "react";
import styles from "./ObjectsCard.module.css";
import { motion } from "framer-motion";

function ObjectsCard({ source, title, onClick }) {
  return (
    <motion.div
      className={styles.container}
      whileTap={{
        scale: 0.95,
      }}
      onClick={onClick}
    >
      <img src={source} alt="object icon" className={styles.icon} />
      <span className={styles.title}>{title}</span>
    </motion.div>
  );
}

export default ObjectsCard;
