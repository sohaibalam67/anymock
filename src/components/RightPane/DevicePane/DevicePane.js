import React, { Component } from "react";
import { connect } from "react-redux";
import { updateDeviceScreenSource } from "../../../store/actions/layer";
import ImageDrop from "../../Commons/ImageDrop/ImageDrop";
import _ from "lodash";
import { addDeviceGroup } from "../../../helpers/image";
import DeviceSelect from "./DeviceSelect/DeviceSelect";
import { devices } from "../../../constants/devices";
import DeviceCard from "../../Commons/DeviceCard/DeviceCard";
import styles from "./DevicePane.module.css";
import Select from "react-select";

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

    let group = await addDeviceGroup(
      id,
      device.name,
      {
        id: device.id,
        variant_id: variant.id,
        type: device.type,
        source: variant.source,
        baseWidth: device.baseWidth,
        screenOffset: device.screenOffset,
      },
      items[0].getSrc(),
      transforms
    );

    this.props.canvas.add(group);
    this.props.canvas.remove(activeObject);
    this.props.canvas.setActiveObject(group);
    this.props.canvas.renderAll();
  };

  changeScreenFit = (value) => {
    let activeObject = this.props.canvas.getActiveObject();

    if (value.value === "fill") {
      activeObject._objects[0].set({
        scaleX:
          activeObject.device_screen_offset.width /
          activeObject._objects[0].width,
        scaleY:
          activeObject.device_screen_offset.height /
          activeObject._objects[0].height,
      });
    }

    if (value.value === "fit") {
      activeObject._objects[0].set({
        scaleX:
          activeObject.device_screen_offset.width /
          activeObject._objects[0].width,
        scaleY:
          activeObject.device_screen_offset.width /
          activeObject._objects[0].width,
      });
    }

    this.props.canvas.renderAll();
  };

  render() {
    let selectedLayer = {};
    let activeObject = this.props.canvas.getActiveObject();
    const item_index = _.findIndex(this.props.layers, { id: activeObject.id });
    if (item_index >= 0) {
      selectedLayer = this.props.layers[item_index];
    }

    let options = [
      { value: "fit", label: "Fit" },
      { value: "fill", label: "Fill" },
    ];

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
                    onChange={(event) => {
                      // this.props.updateWidth(event.target.value);
                    }}
                    placeholder="Left"
                    value={this.props.width}
                  />
                  <span className={styles.modifier}>X</span>
                </div>
                <div className={styles.column}>
                  <input
                    className={styles.inputBox}
                    onChange={(event) => {
                      // this.props.updateHeight(event.target.value);
                    }}
                    placeholder="Top"
                    value={this.props.height}
                  />
                  <span className={styles.modifier}>Y</span>
                </div>
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
            file={selectedLayer.screenSource}
            setImageFile={this.setImageFile}
          />
          <div className={styles.optionRow} style={{ marginTop: "15px" }}>
            <div className={styles.optionsLabel}>Fitting</div>
            <div className={styles.optionsInput}>
              <Select
                value={options[0]}
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
});

const mapDispatchToProps = (dispatch) => ({
  updateDeviceScreenSource: (id, source) =>
    dispatch(updateDeviceScreenSource(id, source)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DevicePane);
