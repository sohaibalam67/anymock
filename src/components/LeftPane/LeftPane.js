import React, { Component } from "react";
import styles from "./LeftPane.module.css";

// packages
import uuid from "react-uuid";
import { fabric } from "fabric";

// redux
import { connect } from "react-redux";
import { addItemToLayer } from "../../store/actions/layer";
import { updateCanvasProcessing } from "../../store/actions/canvas";

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

    this.props.updateCanvasProcessing(true);

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
      SCREEN_SIZE_FILL,
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
      this.props.updateCanvasProcessing(false);
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
    let newtext = new fabric.Textbox("Edit this text", {
      left: this.props.canvas.width > 100 ? 100 : 0,
      top: this.props.canvas.height > 100 ? 100 : 0,
      width: 400,
      fontFamily: "sans-serif",
      fill: "black",
      transparentCorners: false,
      lockRotation: true,
      borderColor: "#0E98FC",
      cornerColor: "#0E98FC",
      centeredScaling: false,
      borderOpacityWhenMoving: 1,
      hasRotationPoint: false,
      lockScalingFlip: true,
      lockSkewingX: true,
      lockSkewingY: true,
      cursorWidth: 1,
      cursorDuration: 1,
      cursorDelay: 250,
    });

    // textboxes.push(newtext);
    newtext.setControlsVisibility({
      bl: true,
      br: true,
      tl: true,
      tr: true,
      mb: false,
      ml: true,
      mr: true,
      mt: false,
      mtr: false,
    });
    this.props.canvas.add(newtext).setActiveObject(newtext);
    this.props.canvas.bringToFront(newtext);
    this.props.canvas.renderAll();
    newtext.enterEditing();
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
              <button
                className={styles.chooseFromTemplatesButton}
                // onClick={() => {
                //   this.switchActiveSegment(SEGMENT_TEMPLATE);
                // }}
              >
                Choose a template
              </button>
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
  updateCanvasProcessing: (processing) =>
    dispatch(updateCanvasProcessing(processing)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftPane);
