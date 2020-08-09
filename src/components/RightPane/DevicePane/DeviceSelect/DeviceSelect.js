import React, { Component } from "react";
import styles from "./DeviceSelect.module.css";
import DeviceCard from "../../../Commons/DeviceCard";
import HeadBar from "../../../Commons/HeadBar";

export default class DeviceSelect extends Component {
  changeFrame = (device) => {
    this.props.changeFrame(device, device.variants[0]);
  };

  render() {
    let devices = this.props.devices ?? [];
    return (
      <div className={styles.container}>
        <HeadBar title="Choose Frame" onBackClick={this.props.close} />
        <div className={styles.scrollView}>
          {devices.map((device) => (
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
