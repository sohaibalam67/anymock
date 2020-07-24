import React, { Component } from "react";
import styles from "./WorkArea.module.css";
import Slider from "@material-ui/core/Slider";
import { Icon, Intent } from "@blueprintjs/core";
import { connect } from "react-redux";

class WorkArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 30,
    };
  }

  changeZoom = (event, value) => {
    this.setState({ zoom: value });
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.zoomControlContainer}>
          <div className={styles.controlsContainer}>
            <span className={styles.zoomLabel}>{this.state.zoom}%</span>
            <div className={styles.sliderContainer}>
              <Slider
                value={this.state.zoom}
                min={10}
                step={1}
                max={100}
                onChange={this.changeZoom}
              />
            </div>
            <Icon icon="zoom-in" iconSize={16} color="rgba(255,255,255,0.6)" />
          </div>
        </div>
        <div
          className={styles.canvasContainer}
          style={{
            width: `${1800 * (this.state.zoom / 100)}px`,
            height: `${1200 * (this.state.zoom / 100)}px`,
          }}
        >
          <div
            className={styles.canvas}
            style={{
              minWidth: `${this.props.width}px`,
              minHeight: `${this.props.height}px`,
              background: this.props.background,
              transform: `scale(${this.state.zoom / 100})`,
            }}
          ></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  width: state.canvas.width,
  height: state.canvas.height,
  background: state.canvas.background,
});

export default connect(mapStateToProps)(WorkArea);
