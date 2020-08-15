import React, { Component } from "react";
import styles from "./DevicePane.module.css";

// packages
import Select from "react-select";

// redux
import { connect } from "react-redux";
import {
  updateDeviceScreenSource,
  updateItemPositionByIndex,
  updateItemAngleByIndex,
  updateDeviceSreenFitByIndex,
  updateLayerItem,
} from "../../../store/actions/layer";
import { updateCanvasProcessing } from "../../../store/actions/canvas";
import {
  getSelectedLayer,
  getSelectedLayerIndex,
  getSelectedDevice,
  getSelectedDeviceVariant,
} from "../../../store/selectors";

// components
import Heading from "../../Commons/Heading";
import InputBox from "../../Commons/InputBox";
import Alignment from "../../Commons/Alignment";
import DeviceCard from "../../Commons/DeviceCard";
import DeviceSelect from "./DeviceSelect/DeviceSelect";
import ImageDrop from "../../Commons/ImageDrop/ImageDrop";

// helpers
import { isNumber, isObject } from "../../../helpers/common";
import { addDeviceGroup } from "../../../helpers/image";

// constants
import { devices } from "../../../constants/devices";
import { DEVICE_TYPES } from "../../../constants/deviceTypes";
import { SCREEN_SIZE_FIT, SCREEN_SIZE_FILL } from "../../../constants/screen";
import {
  DEFAULT_SELECT_THEME,
  DEFAULT_SELECT_STYLES,
} from "../../../constants/selectComponentStyles";

class DevicePane extends Component {
  state = {
    deviceSelectVisible: false,
  };

  setDeviceSelectVisible = (value) => {
    this.setState({ deviceSelectVisible: value });
  };

  setImageFile = (source) => {
    let activeObject = this.props.canvas.getActiveObject();

    if (!isObject(activeObject)) {
      return;
    }

    if (!Object.values(DEVICE_TYPES).includes(activeObject.device_type)) {
      return;
    }

    activeObject._objects[0].setSrc(source, (img) => {
      img.set({
        scaleX: activeObject.device_screen_offset.width / img.width,
        scaleY: activeObject.device_screen_offset.height / img.height,
      });
      this.props.canvas.renderAll();
      this.props.updateDeviceScreenSource(activeObject.id, source);
    });
  };

  changeFrame = async (device, variant) => {
    if (!device || !variant) {
      return;
    }

    let activeObject = this.props.canvas.getActiveObject();

    if (!isObject(activeObject)) {
      return;
    }

    if (!Object.values(DEVICE_TYPES).includes(activeObject.device_type)) {
      return;
    }

    this.props.updateCanvasProcessing(true);

    let id = activeObject.id;
    let transforms = {
      scaleX: activeObject.scaleX,
      scaleY: activeObject.scaleY,
      angle: activeObject.angle,
      top: activeObject.top,
      left: activeObject.left,
    };

    let items = activeObject.getObjects();

    let deviceInfo = {
      device_id: device.id,
      device_name: device.name,
      variant_id: variant.id,
      device_type: device.type,
      source: variant.source,
      baseWidth: device.baseWidth,
      screenOffset: device.screenOffset,
    };

    let group = await addDeviceGroup(
      id,
      deviceInfo.device_name,
      deviceInfo,
      items[0].getSrc(),
      transforms
    );

    this.props.canvas.add(group);
    this.props.canvas.remove(activeObject);
    this.props.canvas.setActiveObject(group);
    this.props.canvas.renderAll();

    this.props.updateLayerItem({
      id: id,
      name: device.name,
      device_id: device.id,
      variant_id: variant.id,
    });

    this.props.updateCanvasProcessing(false);
  };

  changeScreenFit = (value) => {
    let activeObject = this.props.canvas.getActiveObject();

    if (value.value === SCREEN_SIZE_FILL) {
      activeObject._objects[0].set({
        scaleX:
          activeObject.device_screen_offset.width /
          activeObject._objects[0].width,
        scaleY:
          activeObject.device_screen_offset.height /
          activeObject._objects[0].height,
      });
    }

    if (value.value === SCREEN_SIZE_FIT) {
      activeObject._objects[0].set({
        scaleX:
          activeObject.device_screen_offset.width /
          activeObject._objects[0].width,
        scaleY:
          activeObject.device_screen_offset.width /
          activeObject._objects[0].width,
      });
    }

    this.props.updateDeviceSreenFitByIndex(
      this.props.selectedLayerIndex,
      value.value
    );

    this.props.canvas.renderAll();
  };

  changeActiveDevicePosition = (left, top) => {
    let activeObject = this.props.canvas.getActiveObject();
    let objectLeft = activeObject.left;
    let objectTop = activeObject.top;

    activeObject.set({
      left: left ?? objectLeft,
      top: top ?? objectTop,
    });

    activeObject.setCoords();
    this.props.canvas.renderAll();
  };

  changeActiveDeviceAngle = (angle) => {
    let activeObject = this.props.canvas.getActiveObject();

    if (isNumber(angle)) {
      activeObject.rotate(angle);
    }

    activeObject.setCoords();
    this.props.canvas.renderAll();
  };

  handleLeftPositionChange = (value) => {
    if (!isNumber(value)) {
      return;
    }

    if (
      this.props.selectedLayerIndex !== null &&
      this.props.selectedLayerIndex >= 0
    ) {
      this.changeActiveDevicePosition(value, null);
      this.props.updateItemPositionByIndex(
        this.props.selectedLayerIndex,
        value,
        this.props.selectedLayer.transforms.top
      );
    }
  };

  handleTopPositionChange = (value) => {
    if (!isNumber(value)) {
      return;
    }

    if (
      this.props.selectedLayerIndex !== null &&
      this.props.selectedLayerIndex >= 0
    ) {
      this.changeActiveDevicePosition(null, value);
      this.props.updateItemPositionByIndex(
        this.props.selectedLayerIndex,
        this.props.selectedLayer.transforms.left,
        value
      );
    }
  };

  handleAngleChange = (value) => {
    if (!isNumber(value)) {
      return;
    }

    if (
      this.props.selectedLayerIndex !== null &&
      this.props.selectedLayerIndex >= 0
    ) {
      this.changeActiveDeviceAngle(value);
      this.props.updateItemAngleByIndex(this.props.selectedLayerIndex, value);
    }
  };

  handleLeftAlignClick = () => {
    let activeObject = this.props.canvas.getActiveObject();

    if (!isObject(activeObject)) {
      return;
    }

    if (!Object.values(DEVICE_TYPES).includes(activeObject.device_type)) {
      return;
    }

    let boundingBox = activeObject.getBoundingRect();

    activeObject.set({
      left: activeObject.left - boundingBox.left,
    });

    activeObject.setCoords();
    this.props.canvas.renderAll();
  };
  handleHorizontalCenterAlignClick = () => {
    let activeObject = this.props.canvas.getActiveObject();

    if (!isObject(activeObject)) {
      return;
    }

    if (!Object.values(DEVICE_TYPES).includes(activeObject.device_type)) {
      return;
    }

    let boundingBox = activeObject.getBoundingRect();

    activeObject.set({
      left:
        this.props.canvas.width / 2 +
        activeObject.left -
        boundingBox.left -
        boundingBox.width / 2,
    });

    activeObject.setCoords();
    this.props.canvas.renderAll();
  };
  handleRightAlignClick = () => {
    let activeObject = this.props.canvas.getActiveObject();

    if (!isObject(activeObject)) {
      return;
    }

    if (!Object.values(DEVICE_TYPES).includes(activeObject.device_type)) {
      return;
    }

    let boundingBox = activeObject.getBoundingRect();
    let boundingBoxRight = boundingBox.left + boundingBox.width;

    activeObject.set({
      left: this.props.canvas.width - (boundingBoxRight - activeObject.left),
    });

    activeObject.setCoords();
    this.props.canvas.renderAll();
  };
  handleTopAlignClick = () => {
    let activeObject = this.props.canvas.getActiveObject();

    if (!isObject(activeObject)) {
      return;
    }

    if (!Object.values(DEVICE_TYPES).includes(activeObject.device_type)) {
      return;
    }

    let boundingBox = activeObject.getBoundingRect();

    activeObject.set({
      top: activeObject.top - boundingBox.top,
    });

    activeObject.setCoords();
    this.props.canvas.renderAll();
  };
  handleVerticalCenterAlignClick = () => {
    let activeObject = this.props.canvas.getActiveObject();

    if (!isObject(activeObject)) {
      return;
    }

    if (!Object.values(DEVICE_TYPES).includes(activeObject.device_type)) {
      return;
    }

    let boundingBox = activeObject.getBoundingRect();

    activeObject.set({
      top:
        this.props.canvas.height / 2 +
        activeObject.top -
        boundingBox.top -
        boundingBox.height / 2,
    });

    activeObject.setCoords();
    this.props.canvas.renderAll();
  };
  handleBottomAlignClick = () => {
    let activeObject = this.props.canvas.getActiveObject();

    if (!isObject(activeObject)) {
      return;
    }

    if (!Object.values(DEVICE_TYPES).includes(activeObject.device_type)) {
      return;
    }

    let boundingBox = activeObject.getBoundingRect();
    let boundingBoxBottom = boundingBox.top + boundingBox.height;

    activeObject.set({
      top: this.props.canvas.height - (boundingBoxBottom - activeObject.top),
    });

    activeObject.setCoords();
    this.props.canvas.renderAll();
  };

  render() {
    let options = [
      { value: SCREEN_SIZE_FIT, label: "Fit" },
      { value: SCREEN_SIZE_FILL, label: "Fill" },
    ];

    let screenSource;
    let left = "";
    let top = "";
    let angle = "";
    let screenSize;
    let screenSizeValue;
    let selectedDevice = this.props.selectedDevice;
    let selectedDeviceVariants = selectedDevice ? selectedDevice.variants : [];

    if (
      this.props.selectedLayer !== null &&
      Object.values(DEVICE_TYPES).includes(this.props.selectedLayer.type)
    ) {
      screenSource = this.props.selectedLayer.screenSource ?? null;
      left = this.props.selectedLayer.transforms.left ?? "";
      top = this.props.selectedLayer.transforms.top ?? "";
      angle = this.props.selectedLayer.transforms.angle ?? "";
      screenSize = this.props.selectedLayer.screenSize ?? null;

      if (options[0].value === screenSize) {
        screenSizeValue = options[0];
      } else {
        screenSizeValue = options[1];
      }
    }

    return (
      <div>
        <div style={{ paddingBottom: "15px" }}>
          <Heading>ALIGNMENT</Heading>
          <Alignment
            leftAlign={this.handleLeftAlignClick}
            horizontalCenterAlign={this.handleHorizontalCenterAlignClick}
            rightAlign={this.handleRightAlignClick}
            topAlign={this.handleTopAlignClick}
            verticalCenterAlign={this.handleVerticalCenterAlignClick}
            bottomAlign={this.handleBottomAlignClick}
          />
        </div>
        <Heading>DEVICE SETTINGS</Heading>
        <div style={{ paddingBottom: "15px" }}>
          <div className={styles.optionRow}>
            <div className={styles.optionsLabel}>Position</div>
            <div className={styles.optionsInput}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <InputBox
                    value={left}
                    placeholder="Left"
                    onChange={(value) => {
                      this.handleLeftPositionChange(+value);
                    }}
                    modifier="X"
                  />
                </div>
                <div className={styles.column}>
                  <InputBox
                    value={top}
                    placeholder="Top"
                    onChange={(value) => {
                      this.handleTopPositionChange(+value);
                    }}
                    modifier="Y"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.optionRow}>
            <div className={styles.optionsLabel}>Rotation</div>
            <div className={styles.optionsInput}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <InputBox
                    value={angle}
                    placeholder="Angle"
                    onChange={(value) => {
                      this.handleAngleChange(+value);
                    }}
                    modifier="°"
                  />
                </div>
                <div className={styles.column}></div>
              </div>
            </div>
          </div>
        </div>
        <Heading>ACTIVE DEVICE</Heading>
        <div
          style={{
            borderRadius: "3px",
          }}
        >
          <DeviceCard
            title={selectedDevice ? selectedDevice.name : "Untitled"}
            subtitle="Click to change device"
            thumbnail={selectedDevice ? selectedDevice.thumbnail : null}
            onClick={() => {
              this.setDeviceSelectVisible(true);
            }}
            style={{
              background: "rgba(255,255,255,0.1)",
              marginBottom: "12px",
            }}
          />
        </div>

        <div className={styles.optionRow} style={{ paddingBottom: "15px" }}>
          <div className={styles.optionsInput}>
            <Select
              value={this.props.selectedDeviceVariant}
              onChange={(value) => {
                this.changeFrame(selectedDevice, value);
              }}
              options={selectedDeviceVariants}
              getOptionValue={(option) => `${option}`}
              getOptionLabel={(option) => `${option.name}`}
              styles={DEFAULT_SELECT_STYLES}
              theme={DEFAULT_SELECT_THEME}
            />
          </div>
        </div>

        <Heading>SCREEN SETTINGS</Heading>
        <div style={{ paddingBottom: "15px" }}>
          <ImageDrop
            title="Drop your screenshot here"
            file={screenSource}
            setImageFile={this.setImageFile}
          />
          <div className={styles.optionRow} style={{ marginTop: "15px" }}>
            <div className={styles.optionsLabel}>Fitting</div>
            <div className={styles.optionsInput}>
              <Select
                value={screenSizeValue}
                onChange={this.changeScreenFit}
                options={options}
                styles={DEFAULT_SELECT_STYLES}
                theme={DEFAULT_SELECT_THEME}
              />
            </div>
          </div>
        </div>
        {this.state.deviceSelectVisible ? (
          <DeviceSelect
            devices={devices.phones}
            changeFrame={this.changeFrame}
            close={() => {
              this.setDeviceSelectVisible(false);
            }}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  canvas: state.canvas.canvas,
  layers: state.layers.layers,
  selectedLayer: getSelectedLayer(state),
  selectedLayerIndex: getSelectedLayerIndex(state),
  selectedDevice: getSelectedDevice(state),
  selectedDeviceVariant: getSelectedDeviceVariant(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateLayerItem: (item) => dispatch(updateLayerItem(item)),
  updateDeviceScreenSource: (id, source) =>
    dispatch(updateDeviceScreenSource(id, source)),
  updateItemPositionByIndex: (index, left, top) =>
    dispatch(updateItemPositionByIndex(index, left, top)),
  updateItemAngleByIndex: (index, angle) =>
    dispatch(updateItemAngleByIndex(index, angle)),
  updateDeviceSreenFitByIndex: (index, fit) =>
    dispatch(updateDeviceSreenFitByIndex(index, fit)),
  updateCanvasProcessing: (processing) =>
    dispatch(updateCanvasProcessing(processing)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DevicePane);
