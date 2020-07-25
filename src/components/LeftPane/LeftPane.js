import React, { Component } from "react";
import styles from "./LeftPane.module.css";

import { motion } from "framer-motion";
import ObjectsContainer from "./ObjectsContainer/ObjectsContainer";
import TemplatesContainer from "./TemplatesContainer/TemplatesContainer";

const logo = require("../../assets/images/logo.svg");
const arrowBack = require("../../assets/images/icons/app/arrow-back-outline.svg");

const SEGMENT_TEMPLATE = "segment_template";
const SEGMENT_OBJECT = "segment_object";

export default class LeftPane extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSegment: SEGMENT_OBJECT,
    };
  }

  switchActiveSegment = (sengment) => {
    this.setState({
      activeSegment: sengment,
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.brandContainer}>
          <img src={logo} alt="anymock logo" className={styles.logo} />
        </div>
        {this.state.activeSegment === SEGMENT_TEMPLATE ? (
          <>
            <div className={styles.templatesContainerHeader}>
              <div
                className={styles.backButtonContainer}
                onClick={() => {
                  this.switchActiveSegment(SEGMENT_OBJECT);
                }}
              >
                <img
                  src={arrowBack}
                  alt=""
                  style={{ width: "18px", height: "auto" }}
                />
              </div>
            </div>
            <TemplatesContainer />
          </>
        ) : null}
        {this.state.activeSegment === SEGMENT_OBJECT ? (
          <>
            <ObjectsContainer />
            <motion.button
              onClick={() => {
                this.switchActiveSegment(SEGMENT_TEMPLATE);
              }}
              className={styles.chooseFromTemplatesButton}
              whileTap={{
                scale: 0.96,
              }}
            >
              Choose a template
            </motion.button>
          </>
        ) : null}
      </div>
    );
  }
}
