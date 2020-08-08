import React, { Component } from "react";
import styles from "./LeftPane.module.css";
import uuid from "react-uuid";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import ObjectsContainer from "./ObjectsContainer/ObjectsContainer";
import TemplatesContainer from "./TemplatesContainer/TemplatesContainer";
import { addItemToLayer } from "../../store/actions/layer";
import { addDeviceGroup, downloadAsPNG } from "../../helpers/image";
import { devices } from "../../constants/devices";
import { SCREEN_SIZE_FILL } from "../../constants/screen";
import Layers from "./Layers/Layers";

const logo = require("../../assets/images/logo.svg");
const arrowBack = require("../../assets/images/icons/app/arrow-back-outline.svg");

const SEGMENT_TEMPLATE = "segment_template";
const SEGMENT_OBJECT = "segment_object";

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

  addDevice = async (
    device,
    transforms = { top: 0, left: 0, angle: 0, scaleX: 1, scaleY: 1 }
  ) => {
    let id = uuid();

    let deviceInfo = {
      device_id: device.id,
      device_name: device.name,
      variant_id: device.variants[0].id,
      device_type: device.type,
      source: device.variants[0].source,
      baseWidth: device.baseWidth,
      screenOffset: device.screenOffset,
    };

    // Make a group of frame and screen (behind the frame)
    let group = await addDeviceGroup(
      id,
      deviceInfo.device_name,
      deviceInfo,
      sample_screen,
      transforms
    );

    // If the group is created sucessfully, then add it on canvas
    // and add it in redux state layer
    if (group !== null && typeof group === "object" && group.id === id) {
      this.props.canvas.add(group);
      this.props.canvas.renderAll();

      this.props.addItemToLayer({
        id: id,
        name: device.name,
        device_id: device.id,
        variant_id: device.variant_id,
        type: device.type,
        screenOffset: device.screenOffset,
        transforms: transforms,
        screenSource: null,
        screenSize: SCREEN_SIZE_FILL,
      });
    }
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
            <div className={styles.toolsContainer}>
              <ObjectsContainer
                addFrameToScreen={() => {
                  this.addDevice(devices.phones[0]);
                }}
              />
              <motion.button
                // onClick={() => {
                //   this.switchActiveSegment(SEGMENT_TEMPLATE);
                // }}
                onClick={() => {
                  downloadAsPNG(this.props.canvas);
                }}
                className={styles.chooseFromTemplatesButton}
                whileTap={{
                  scale: 0.96,
                }}
              >
                Choose a template
              </motion.button>
            </div>
            <div className={styles.layersContainer}>
              <Layers />
            </div>
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
