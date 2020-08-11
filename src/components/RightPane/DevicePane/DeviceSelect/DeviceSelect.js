import React, { Component } from "react";
import styles from "./DeviceSelect.module.css";
import DeviceCard from "../../../Commons/DeviceCard";
import HeadBar from "../../../Commons/HeadBar";
import { connect } from "react-redux";
import { devices } from "../../../../constants/devices";
import { DEVICE_TYPES } from "../../../../constants/deviceTypes";
import { isObject } from "../../../../helpers/common";
import { getSelectedDevice } from "../../../../store/selectors";

class DeviceSelect extends Component {
  changeFrame = (device) => {
    this.props.changeFrame(device, device.variants[0]);
  };

  render() {
    let allDevices = [];

    if (
      isObject(this.props.selectedDevice) &&
      Object.values(DEVICE_TYPES).includes(this.props.selectedDevice.type)
    ) {
      if (this.props.selectedDevice.type === DEVICE_TYPES.PHONE) {
        allDevices = devices.phones;
      } else if (this.props.selectedDevice.type === DEVICE_TYPES.LAPTOP) {
        allDevices = devices.laptops;
      } else if (this.props.selectedDevice.type === DEVICE_TYPES.TABLET) {
        allDevices = devices.tablets;
      } else if (this.props.selectedDevice.type === DEVICE_TYPES.WATCH) {
        allDevices = devices.watches;
      } else if (this.props.selectedDevice.type === DEVICE_TYPES.DISPLAY) {
        allDevices = devices.displays;
      }
    }

    return (
      <div className={styles.container}>
        <HeadBar title="Choose Frame" onBackClick={this.props.close} />
        <div className={styles.scrollView}>
          {allDevices.map((device) => (
            <DeviceCard
              key={device.id}
              thumbnail={device.thumbnail}
              title={device.name}
              subtitle="1125 x 2463"
              onClick={this.changeFrame.bind(this, device)}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedDevice: getSelectedDevice(state),
});

export default connect(mapStateToProps, null)(DeviceSelect);
