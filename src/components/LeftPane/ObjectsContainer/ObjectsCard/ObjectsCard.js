import React from "react";
import styles from "./ObjectsCard.module.css";
import { motion } from "framer-motion";

function ObjectsCard({ title, onClick, children }) {
  return (
    <motion.div
      className={styles.container}
      whileTap={{
        scale: 0.95,
      }}
      onClick={onClick}
    >
      {children}
      <span className={styles.title}>{title}</span>
    </motion.div>
  );
}

export default ObjectsCard;
