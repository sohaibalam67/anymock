import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateDeviceScreenSource,
  updateItemPositionByIndex,
  updateItemAngleByIndex,
  updateDeviceSreenFitByIndex,
  updateLayerItem,
} from "../../../store/actions/layer";
import ImageDrop from "../../Commons/ImageDrop/ImageDrop";
import { addDeviceGroup } from "../../../helpers/image";
import DeviceSelect from "./DeviceSelect/DeviceSelect";
import { devices, DEVICE_TYPES } from "../../../constants/devices";
import DeviceCard from "../../Commons/DeviceCard/DeviceCard";
import styles from "./DevicePane.module.css";
import Select from "react-select";
import {
  getSelectedLayer,
  getSelectedLayerIndex,
} from "../../../store/selectors";
import { isNumber } from "../../../helpers/common";
import { SCREEN_SIZE_FIT, SCREEN_SIZE_FILL } from "../../../constants/screen";

class DevicePane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceSelectVisible: false,
    };
  }

  setDeviceSelectVisible = (value) => {
    this.setState({ deviceSelectVisible: value });
  };

  setImageFile = (source) => {
    let activeObject = this.props.canvas.getActiveObject();

    if (!Object.values(DEVICE_TYPES).includes(activeObject.device_type)) {
      return;
    }

    activeObject._objects[0].setSrc(source, (img) => {
      img.set({
        scaleX: activeObject.device_screen_offset.width / img.width,
        scaleY: activeObject.device_screen_offset.height / img.height,
      });
      this.props.canvas.renderAll();
    });

    this.props.updateDeviceScreenSource(activeObject.id, source);
  };

  changeFrame = async (device, variant) => {
    let activeObject = this.props.canvas.getActiveObject();

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

  handleLeftPositionChange = (event) => {
    let value = +event.target.value;

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

  handleTopPositionChange = (event) => {
    let value = +event.target.value;

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

  handleAngleChange = (event) => {
    let value = +event.target.value;

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

  render() {
    let options = [
      { value: SCREEN_SIZE_FIT, label: "Fit" },
      { value: SCREEN_SIZE_FILL, label: "Fill" },
    ];

    let screenSource = null;
    let left = null;
    let top = null;
    let angle = null;
    let screenSize = null;
    let screenSizeValue = null;

    if (
      this.props.selectedLayer !== null &&
      Object.values(DEVICE_TYPES).includes(this.props.selectedLayer.type)
    ) {
      screenSource = this.props.selectedLayer.screenSource ?? null;
      left = this.props.selectedLayer.transforms.left ?? null;
      top = this.props.selectedLayer.transforms.top ?? null;
      angle = this.props.selectedLayer.transforms.angle ?? null;
      screenSize = this.props.selectedLayer.screenSize ?? null;

      if (options[0].value === screenSize) {
        screenSizeValue = options[0];
      } else {
        screenSizeValue = options[1];
      }
    }

    return (
      <div>
        <h6
          style={{
            fontSize: "9pt",
            color: "#fff",
            marginTop: "12px",
            marginBottom: "12px",
          }}
        >
          DEVICE SETTINGS
        </h6>
        <div style={{ paddingTop: "15px", paddingBottom: "15px" }}>
          <div className={styles.optionRow}>
            <div className={styles.optionsLabel}>Position</div>
            <div className={styles.optionsInput}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <input
                    className={styles.inputBox}
                    onChange={this.handleLeftPositionChange}
                    placeholder="Left"
                    value={left}
                  />
                  <span className={styles.modifier}>X</span>
                </div>
                <div className={styles.column}>
                  <input
                    className={styles.inputBox}
                    onChange={this.handleTopPositionChange}
                    placeholder="Top"
                    value={top}
                  />
                  <span className={styles.modifier}>Y</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.optionRow}>
            <div className={styles.optionsLabel}>Rotation</div>
            <div className={styles.optionsInput}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <input
                    className={styles.inputBox}
                    onChange={this.handleAngleChange}
                    placeholder="Angle"
                    value={angle}
                  />
                  <span className={styles.modifier}>°</span>
                </div>
                <div className={styles.column}></div>
              </div>
            </div>
          </div>
        </div>
        <h6
          style={{
            fontSize: "9pt",
            color: "#fff",
            marginTop: "12px",
            marginBottom: "12px",
          }}
        >
          ACTIVE DEVICE
        </h6>
        <div
          style={{
            borderRadius: "3px",
            paddingTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <DeviceCard
            title="Apple iPhone X"
            subtitle="Click to change device"
            thumbnail={devices.phones[0].thumbnail}
            onClick={() => {
              this.setDeviceSelectVisible(true);
            }}
            style={{ padding: "0px", marginBottom: "12px" }}
            thumbnailStyle={{
              borderTopRightRadius: "0px",
              borderBottomRightRadius: "0px",
            }}
          />
        </div>

        <h6
          style={{
            fontSize: "9pt",
            color: "#fff",
            marginTop: "12px",
            marginBottom: "12px",
          }}
        >
          SCREEN SETTINGS
        </h6>

        <div style={{ paddingTop: "15px", paddingBottom: "15px" }}>
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
                styles={{
                  control: (provided) => ({
                    ...provided,
                    borderColor: "#13171b",
                    minHeight: "27px",
                  }),
                  valueContainer: (provided) => ({
                    ...provided,
                    paddingTop: "0px",
                    paddingBottom: "0px",
                  }),
                  option: (provided) => ({
                    ...provided,
                    background: "#13171b",
                    color: "#fff",
                    fontSize: "0.8rem",
                  }),
                  placeholder: (provided) => ({
                    ...provided,
                    color: "#fff",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                  }),
                  singleValue: (provided) => ({
                    ...provided,
                    color: "#fff",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                  }),
                  indicatorsContainer: (provided) => ({
                    ...provided,
                    maxHeight: "27px",
                  }),
                }}
                theme={(theme) => ({
                  ...theme,
                  colors: {
                    ...theme.colors,
                    primary25: "hotpink",
                    primary: "black",
                    neutral0: "#13171b",
                    neutral5: "#13171b",
                    neutral10: "#13171b",
                    neutral20: "#2e3740",
                    neutral30: "#13171b",
                    neutral40: "#13171b",
                  },
                })}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(DevicePane);
