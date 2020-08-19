import React, { Component } from "react";
import styles from "./RightPane.module.css";

// redux
import { connect } from "react-redux";

// components
import CanvasPane from "./CanvasPane/CanvasPane";
import DevicePane from "./DevicePane/DevicePane";

// constants
import { DEVICE_PANE } from "../../constants/rightPane";

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
