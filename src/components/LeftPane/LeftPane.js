import React, { Component } from "react";
import styles from "./LeftPane.module.css";

// packages
import uuid from "react-uuid";
import { motion } from "framer-motion";

// redux
import { connect } from "react-redux";
import { addItemToLayer } from "../../store/actions/layer";

// components
import Layers from "./Layers/Layers";
import Heading from "../Commons/Heading";
import HeadBar from "../Commons/HeadBar";
import ObjectsContainer from "./ObjectsContainer/ObjectsContainer";
import TemplatesContainer from "./TemplatesContainer/TemplatesContainer";

// helpers
import { addDeviceGroup } from "../../helpers/image";

// constants
import { devices } from "../../constants/devices";
import { SCREEN_SIZE_FILL } from "../../constants/screen";

const sample_screen = require("../../assets/images/sample_screen.webp");

const SEGMENT_TEMPLATE = "SEGMENT_TEMPLATE";
const SEGMENT_OBJECT = "SEGMENT_OBJECT";

class LeftPane extends Component {
  state = {
    activeSegment: SEGMENT_OBJECT,
  };

  switchActiveSegment = (activeSegment) => {
    this.setState({
      activeSegment,
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
      this.props.canvas.setActiveObject(group);
      this.props.canvas.renderAll();

      this.props.addItemToLayer({
        id: id,
        name: device.name,
        device_id: device.id,
        variant_id: device.variants[0].id,
        type: device.type,
        screenOffset: device.screenOffset,
        transforms: transforms,
        screenSource: null,
        screenSize: SCREEN_SIZE_FILL,
      });
    }
  };

  addPhone = () => {
    this.addDevice(devices.phones[0]);
  };

  addBrowser = () => {
    // this.addDevice(devices.browsers[0]);
  };

  addLaptop = () => {
    this.addDevice(devices.laptops[0]);
  };

  addTablet = () => {
    this.addDevice(devices.tablets[0]);
  };

  addWatch = () => {
    this.addDevice(devices.watches[0]);
  };

  addDisplay = () => {
    this.addDevice(devices.displays[0]);
  };

  addText = () => {
    // todo
  };

  addImage = () => {
    // todo
  };

  addShape = () => {
    // todo
  };

  render() {
    return (
      <div className={styles.container}>
        {this.state.activeSegment === SEGMENT_OBJECT ? (
          <>
            <div className={styles.toolsContainer}>
              <ObjectsContainer
                addPhone={this.addPhone}
                addBrowser={this.addBrowser}
                addLaptop={this.addLaptop}
                addTablet={this.addTablet}
                addWatch={this.addWatch}
                addDisplay={this.addDisplay}
                addText={this.addText}
                addImage={this.addImage}
                addShape={this.addShape}
              />
              <motion.button
                className={styles.chooseFromTemplatesButton}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() => {
                  this.switchActiveSegment(SEGMENT_TEMPLATE);
                }}
              >
                Choose a template
              </motion.button>
            </div>
            <Heading style={{ paddingLeft: "12px" }}>LAYERS</Heading>
            <div className={styles.layersContainer}>
              <Layers />
            </div>
          </>
        ) : null}

        {this.state.activeSegment === SEGMENT_TEMPLATE ? (
          <>
            <HeadBar
              title="Choose Template"
              onBackClick={() => {
                this.switchActiveSegment(SEGMENT_OBJECT);
              }}
            />
            <TemplatesContainer />
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
