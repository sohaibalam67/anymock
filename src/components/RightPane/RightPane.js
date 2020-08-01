import React, { Component } from "react";
import styles from "./RightPane.module.css";

import { connect } from "react-redux";

import CanvasPane from "./CanvasPane/CanvasPane";
import { CANVAS_PANE, DEVICE_PANE } from "../../constants/rightPane";
import DevicePane from "./DevicePane/DevicePane";

class RightPane extends Component {
  render() {
    if (this.props.activePane === DEVICE_PANE) {
      return (
        <div className={styles.container}>
          <DevicePane />
        </div>
      );
    }

    return (
      <div className={styles.container}>
        <CanvasPane />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  canvas: state.canvas.canvas,
  activePane: state.rightPane.activePane,
});

export default connect(mapStateToProps, null)(RightPane);
