import React, { Component } from "react";
import { connect } from "react-redux";
import { updateDeviceScreenSource } from "../../../store/actions/layer";
import ImageDrop from "../../Commons/ImageDrop/ImageDrop";
import _ from "lodash";
import { addImage, addDeviceGroup } from "../../../helpers/image";
import DeviceSelect from "./DeviceSelect/DeviceSelect";
import { devices } from "../../../constants/devices";
import DeviceCard from "../../Commons/DeviceCard/DeviceCard";
const sample = require("../../../assets/images/sample.png");

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

    this.props.canvas.remove(activeObject);

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
    this.props.canvas.renderAll();
  };

  render() {
    let selectedLayer = {};
    let activeObject = this.props.canvas.getActiveObject();
    const item_index = _.findIndex(this.props.layers, { id: activeObject.id });
    if (item_index >= 0) {
      selectedLayer = this.props.layers[item_index];
    }
    return (
      <div>
        <ImageDrop
          file={selectedLayer.screenSource}
          setImageFile={this.setImageFile}
        />
        <div
          style={{
            color: "#ffffff",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "3px",
            padding: "12px",
            marginTop: "12px",
            cursor: "pointer",
            fontSize: "0.9rem",
          }}
          onClick={() => {
            this.setDeviceSelectVisible(true);
          }}
        >
          Choose Device
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
