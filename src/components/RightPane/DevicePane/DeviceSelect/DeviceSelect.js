import React, { Component } from "react";
import styles from "./DeviceSelect.module.css";

// packages
import matchsorter from "match-sorter";

// redux
import { connect } from "react-redux";
import { getSelectedDevice } from "../../../../store/selectors";

// components
import HeadBar from "../../../Commons/HeadBar";
import InputBox from "../../../Commons/InputBox";
import DeviceCard from "../../../Commons/DeviceCard";

// constants
import { devices } from "../../../../constants/devices";
import { DEVICE_TYPES } from "../../../../constants/deviceTypes";

// helpers
import { isObject } from "../../../../helpers/common";

class DeviceSelect extends Component {
  state = {
    searchQuery: "",
  };

  changeFrame = (device) => {
    this.props.changeFrame(device, device.variants[0]);
  };

  onSearchQueryChange = (searchQuery) => {
    this.setState({
      searchQuery,
    });
  };

  render() {
    let allDevices = [];

    if (
      isObject(this.props.selectedDevice) &&
      Object.values(DEVICE_TYPES).includes(this.props.selectedDevice.type)
    ) {
      if (this.props.selectedDevice.type === DEVICE_TYPES.PHONE) {
        allDevices = matchsorter(devices.phones, this.state.searchQuery, {
          keys: ["name"],
        });
      } else if (this.props.selectedDevice.type === DEVICE_TYPES.LAPTOP) {
        allDevices = matchsorter(devices.laptops, this.state.searchQuery, {
          keys: ["name"],
        });
      } else if (this.props.selectedDevice.type === DEVICE_TYPES.TABLET) {
        allDevices = matchsorter(devices.tablets, this.state.searchQuery, {
          keys: ["name"],
        });
      } else if (this.props.selectedDevice.type === DEVICE_TYPES.WATCH) {
        allDevices = matchsorter(devices.watches, this.state.searchQuery, {
          keys: ["name"],
        });
      } else if (this.props.selectedDevice.type === DEVICE_TYPES.DISPLAY) {
        allDevices = matchsorter(devices.displays, this.state.searchQuery, {
          keys: ["name"],
        });
      }
    }

    return (
      <div className={styles.container}>
        <HeadBar
          title={
            <InputBox
              live
              placeholder="Search device"
              onChange={this.onSearchQueryChange}
            />
          }
          onBackClick={this.props.close}
        />
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
