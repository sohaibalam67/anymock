import React, { Component } from "react";
import styles from "./LeftPane.module.css";

import { motion } from "framer-motion";
import ObjectsContainer from "./ObjectsContainer/ObjectsContainer";
import TemplatesContainer from "./TemplatesContainer/TemplatesContainer";
import { connect } from "react-redux";

import { fabric } from "fabric";

const logo = require("../../assets/images/logo.svg");
const arrowBack = require("../../assets/images/icons/app/arrow-back-outline.svg");

const SEGMENT_TEMPLATE = "segment_template";
const SEGMENT_OBJECT = "segment_object";

const frame = require("../../assets/images/frame.png");
const sample = require("../../assets/images/sample.png");

class LeftPane extends Component {
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

  downloadAsPNG = () => {
    var currentTime = new Date();
    var month = currentTime.getMonth() + 1;
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var fileName =
      month + "" + day + "" + year + "" + hours + "" + minutes + "" + seconds;
    const canvasdata = this.props.canvas;
    const canvasDataUrl = canvasdata
        .toDataURL()
        .replace(/^data:image\/[^;]*/, "data:application/octet-stream"),
      link = document.createElement("a");
    fileName = fileName + ".png";
    link.setAttribute("href", canvasDataUrl);
    link.setAttribute("crossOrigin", "anonymous");
    link.setAttribute("target", "_blank");
    link.setAttribute("download", fileName);
    if (document.createEvent) {
      var evtObj = document.createEvent("MouseEvents");
      evtObj.initEvent("click", true, true);
      link.dispatchEvent(evtObj);
    } else if (link.click) {
      link.click();
    }
  };

  addImage = (url) => {
    return new Promise((resolve, reject) => {
      new fabric.Image.fromURL(url, (frameImage) => resolve(frameImage));
    });
  };

  addFrameToScreen = async () => {
    let margins = {
      left: 8,
      right: 17,
      top: 4,
      bottom: 8,
    };

    let frameInstance = await this.addImage(frame);

    frameInstance.set({
      left: 0,
      top: 0,
      angle: 0,
      transparentCorners: false,
      id: "mockup",
      borderColor: "#0E98FC",
      cornerColor: "#0E98FC",
      centeredScaling: false,
      borderOpacityWhenMoving: 1,
      hasRotationPoint: false,
      lockScalingFlip: true,
      lockUniScaling: true,
      objectCaching: false,
      name: "mockup",
    });

    frameInstance.scaleToWidth(600);

    let screenshotInstance = await this.addImage(sample);
    screenshotInstance.scaleToWidth(600 - 118);
    screenshotInstance.set({
      left: 60,
      top: 76,
      angle: 0,
      transparentCorners: false,
      id: "mockup",
      borderColor: "#0E98FC",
      cornerColor: "#0E98FC",
      centeredScaling: false,
      borderOpacityWhenMoving: 1,
      hasRotationPoint: false,
      lockScalingFlip: true,
      lockUniScaling: true,
      objectCaching: false,
      name: "mockup",
    });

    frameInstance.bringToFront();

    let group = new fabric.Group([screenshotInstance, frameInstance], {
      left: 150,
      top: 100,
    });

    this.props.canvas.add(group);
    this.props.canvas.renderAll();
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.brandContainer}>
          <img src={logo} alt="anymock logo" className={styles.logo} />
          <span className={styles.proBadge}>PRO</span>
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
            <ObjectsContainer addFrameToScreen={this.addFrameToScreen} />
            <motion.button
              // onClick={() => {
              //   this.switchActiveSegment(SEGMENT_TEMPLATE);
              // }}
              onClick={this.downloadAsPNG}
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

const mapStateToProps = (state) => ({
  canvas: state.canvas.canvas,
  width: state.canvas.width,
  height: state.canvas.height,
  background: state.canvas.background,
});

export default connect(mapStateToProps)(LeftPane);
