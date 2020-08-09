import React, { Component } from "react";
import styles from "./TopBar.module.css";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { downloadAsPNG } from "../../helpers/image";
const logo = require("../../assets/images/logo.svg");

class TopBar extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.brandContainer}>
            <img src={logo} alt="anymock logo" className={styles.logo} />
            <span className={styles.proBadge}>PRO</span>
          </div>
        </div>
        <div className={styles.middleContainer}></div>
        <div className={styles.rightContainer}>
          <motion.button
            className={styles.exportButton}
            onClick={() => {
              downloadAsPNG(this.props.canvas);
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            Export Design
          </motion.button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  canvas: state.canvas.canvas,
});

export default connect(mapStateToProps, null)(TopBar);
