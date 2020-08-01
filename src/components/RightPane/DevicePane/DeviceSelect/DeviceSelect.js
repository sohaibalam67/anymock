import React, { Component } from "react";
import styles from "./DeviceSelect.module.css";
import DeviceCard from "../../../Commons/DeviceCard/DeviceCard";

export default class DeviceSelect extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let devices = this.props.devices ?? [];
    return (
      <div className={styles.container}>
        {devices.map((device, index) => (
          <DeviceCard
            key={device.id}
            device={device}
            changeFrame={this.props.changeFrame}
          />
        ))}
      </div>
    );
  }
}
