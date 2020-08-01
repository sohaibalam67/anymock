import React, { Component } from "react";
import styles from "./LeftPane.module.css";
import uuid from "react-uuid";

import { motion } from "framer-motion";
import ObjectsContainer from "./ObjectsContainer/ObjectsContainer";
import TemplatesContainer from "./TemplatesContainer/TemplatesContainer";
import { connect } from "react-redux";
import { addItemToLayer } from "../../store/actions/layer";

import { fabric } from "fabric";
import { addImage, addDeviceGroup } from "../../helpers/image";

import { devices } from "../../constants/devices";

const logo = require("../../assets/images/logo.svg");
const arrowBack = require("../../assets/images/icons/app/arrow-back-outline.svg");

const SEGMENT_TEMPLATE = "segment_template";
const SEGMENT_OBJECT = "segment_object";

// const frame = require("../../assets/images/frame.png");
const sample = require("../../assets/images/sample.png");
const sample_screen = require("../../assets/images/sample_screen.png");

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

  addDevice = async (
    id,
    name,
    device,
    screen,
    transforms = { top: 0, left: 0, angle: 0, scaleX: 1, scaleY: 1 }
  ) => {
    let group = await addDeviceGroup(id, name, device, screen, transforms);
    this.props.canvas.add(group);
    this.props.canvas.renderAll();

    this.props.addItemToLayer({
      id: id,
      name: name,
      device_id: device.id,
      variant_id: device.variant_id,
      type: device.type,
      screenOffset: device.screenOffset,
      transforms: transforms,
      screenSource: null,
    });
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
            <ObjectsContainer
              addFrameToScreen={() => {
                this.addDevice(
                  uuid(),
                  devices.phones[0].name,
                  {
                    id: devices.phones[1].id,
                    variant_id: devices.phones[1].variants[0].id,
                    type: devices.phones[1].type,
                    source: devices.phones[1].variants[0].source,
                    baseWidth: devices.phones[1].baseWidth,
                    screenOffset: devices.phones[1].screenOffset,
                  },
                  sample_screen
                );
              }}
            />
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

const mapDispatchToProps = (dispatch) => ({
  addItemToLayer: (item) => dispatch(addItemToLayer(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftPane);
