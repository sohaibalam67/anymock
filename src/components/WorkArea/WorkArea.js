import React, { Component } from "react";
import styles from "./WorkArea.module.css";
import Slider from "@material-ui/core/Slider";
import { connect } from "react-redux";
import { fabric } from "fabric";

class WorkArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 30,
    };
  }

  componentDidMount() {
    this.canvas = new fabric.Canvas("fabricCanvas", {
      backgroundColor: this.props.background,
      preserveObjectStacking: true,
      width: this.props.width,
      height: this.props.height,
    });

    this.canvas.state = [];
    this.canvas.index = 0;
    this.canvas.stateaction = true;

    // canvas.on({
    //   "object:rotating": canvasAction,
    //   "object:moving": canvasAction,
    //   "object:modified": canvasAction,
    //   "object:scaling": canvasAction,
    //   "object:selected": canvasBox,
    //   "selection:updated": canvasBox,
    //   "before:selection:cleared": clearSelection,
    // });

    let horizontal_line = new fabric.Line(
      [this.canvas.width / 2, 0, this.canvas.width / 2, this.canvas.width],
      {
        stroke: "red",
        opacity: 0,
        selectable: false,
        evented: false,
        name: "horizontal_line",
      }
    );

    let vertical_line = new fabric.Line(
      [0, this.canvas.height / 2, this.canvas.width, this.canvas.height / 2],
      {
        stroke: "red",
        opacity: 0,
        selectable: false,
        evented: false,
        name: "vertical_line",
      }
    );

    this.canvas.add(horizontal_line);
    this.canvas.add(vertical_line);

    this.canvas.add(
      new fabric.Circle({ radius: 100, fill: "#f55", top: 100, left: 100 })
    );

    this.canvas.renderAll();
  }

  changeZoom = (event, value) => {
    this.setState({ zoom: value });
    this.canvas.calcOffset();
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
            {/* <Icon icon="zoom-in" iconSize={16} color="rgba(255,255,255,0.6)" /> */}
          </div>
        </div>
        <div
          // className={styles.canvasContainer}
          // style={{
          //   width: `${1800 * (this.state.zoom / 100)}px`,
          //   height: `${1200 * (this.state.zoom / 100)}px`,
          // }}
          style={{
            margin: "100px",
            transform: `scale(${this.state.zoom / 100})`,
          }}
        >
          {/* <div
            className={styles.canvas}
            style={{
              minWidth: `${this.props.width}px`,
              minHeight: `${this.props.height}px`,
              background: this.props.background,
              transform: `scale(${this.state.zoom / 100})`,
            }}
          ></div> */}
          <canvas id="fabricCanvas"></canvas>
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
