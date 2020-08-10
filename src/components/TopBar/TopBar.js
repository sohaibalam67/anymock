import React, { Component } from "react";
import styles from "./TopBar.module.css";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { downloadImage } from "../../helpers/image";
import Menu from "../Commons/Menu";
import DropdownItem from "../Commons/Dropdown/DropdownItem";
import Dropdown from "../Commons/Dropdown";

const logo = require("../../assets/images/logo.svg");

function ExportButton() {
  return (
    <motion.button
      className={styles.exportButton}
      whileTap={{
        scale: 0.96,
      }}
    >
      Export Design
    </motion.button>
  );
}

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
          <Menu component={<ExportButton />} style={{ marginRight: "12px" }}>
            <Dropdown translateX={-10} width={130}>
              <DropdownItem
                onClick={() => {
                  downloadImage(this.props.canvas, "png");
                }}
              >
                Download as .png
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  downloadImage(this.props.canvas, "jpeg");
                }}
              >
                Download as .jpeg
              </DropdownItem>
            </Dropdown>
          </Menu>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  canvas: state.canvas.canvas,
});

export default connect(mapStateToProps, null)(TopBar);
