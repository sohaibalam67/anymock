import React, { Component } from "react";
import { SketchPicker } from "react-color";
import Select from "react-select";
import ImageDrop from "../../Commons/ImageDrop/ImageDrop";
import { connect } from "react-redux";
import styles from "./CanvasPane.module.css";

import {
  updateWidth,
  updateHeight,
  updateBackground,
} from "../../../store/actions/canvas";

const options = [
  { value: "0", label: "Custom canvas" },
  { value: "11", label: "iPhone X, Xs, 11 Pro" },
  { value: "12", label: "iPhone 6s Plus, 7 Plus, 8 Plus" },
  { value: "13", label: "iPhone 6, 6s, 7, 8" },
  { value: "14", label: "iPhone SE" },
  { value: "15", label: "iPhone 4s" },
  { value: "21", label: "Android devices (Portrait)" },
  { value: "22", label: "Android devices (Landscape)" },
  { value: "31", label: "Instagram Photo" },
  { value: "32", label: "Instagram Story" },
  { value: "33", label: "Facebook Cover" },
  { value: "34", label: "Twitter Header" },
  { value: "35", label: "Twitter Timeline" },
  { value: "36", label: "Pinterest Standard Pin" },
  { value: "37", label: "Pinterest Giraffe Pin" },
  { value: "41", label: "Dribbble" },
];

class CanvasPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorPickerVisible: false,
      tempBackground: "#ffffff",
    };
  }

  hideColorPicker = () => {
    this.setState({ colorPickerVisible: false });
  };

  showColorPicker = () => {
    this.setState({ colorPickerVisible: true });
  };

  changeBackgroundColor = (color, event) => {
    this.props.updateBackground(color.hex);
  };

  render() {
    let strippedBackgroundValue = this.props.background;
    if (
      typeof strippedBackgroundValue === "string" &&
      strippedBackgroundValue.length > 0 &&
      strippedBackgroundValue[0] === "#"
    ) {
      strippedBackgroundValue = strippedBackgroundValue.substr(1);
    }
    return (
      <div className={styles.canvasOptionsContainer}>
        <h6
          style={{
            fontSize: "9pt",
            color: "#fff",
            marginTop: "12px",
            marginBottom: "12px",
          }}
        >
          CANVAS SETTINGS
        </h6>
        <div className={styles.canvasOptionContent}>
          <div className={styles.canvasOptionRow}>
            <div className={styles.canvasOptionsLabel}>Preset</div>
            <div className={styles.canvasOptionsInput}>
              <Select
                value={options[0]}
                onChange={() => {}}
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
          <div className={styles.canvasOptionRow}>
            <div className={styles.canvasOptionsLabel}>Size</div>
            <div className={styles.canvasOptionsInput}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <input
                    className={styles.inputBox}
                    onChange={(event) => {
                      this.props.updateWidth(event.target.value);
                    }}
                    placeholder="Width"
                    value={this.props.width}
                  />
                  <span className={styles.modifier}>W</span>
                </div>
                <div className={styles.column}>
                  <input
                    className={styles.inputBox}
                    onChange={(event) => {
                      this.props.updateHeight(event.target.value);
                    }}
                    placeholder="Height"
                    value={this.props.height}
                  />
                  <span className={styles.modifier}>H</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.canvasOptionRow}>
            <div className={styles.canvasOptionsLabel}>Color</div>
            <div className={styles.canvasOptionsInput}>
              <div className={styles.row}>
                <div className={styles.column3}>
                  <div className={styles.colorPickerInput}>
                    <div
                      className={styles.colorButton}
                      onClick={this.showColorPicker}
                      style={{
                        backgroundColor: this.props.background,
                        cursor: "pointer",
                      }}
                    />
                    <input
                      className={styles.inputBox}
                      onClick={this.showColorPicker}
                      placeholder="Color"
                      value={strippedBackgroundValue}
                      readOnly
                    />
                  </div>
                  {this.state.colorPickerVisible ? (
                    <div
                      style={{
                        position: "absolute",
                        zIndex: 100,
                        marginLeft: "-70px",
                      }}
                    >
                      <div
                        style={{
                          position: "fixed",
                          top: "0px",
                          right: "0px",
                          bottom: "0px",
                          left: "0px",
                        }}
                        onClick={this.hideColorPicker}
                      />
                      <SketchPicker
                        color={this.props.background}
                        onChange={this.changeBackgroundColor}
                        disableAlpha
                        presetColors={[
                          "#ef5777",
                          "#575fcf",
                          "#4bcffa",
                          "#34e7e4",
                          "#0be881",
                          "#f53b57",
                          "#3c40c6",
                          "#0fbcf9",
                          "#00d8d6",
                          "#05c46b",
                          "#f1c40f",
                          "#fff200",
                          "#ff5e57",
                          "#d2dae2",
                          "#485460",
                          "#ffa801",
                          "#ffd32a",
                          "#ff3f34",
                          "#f1f2f6",
                          "#1e272e",
                          "#be2edd",
                          "#3742fa",
                          "#ffffff",
                          "#000000",
                        ]}
                      />
                    </div>
                  ) : null}
                </div>
                <div className={styles.column1}>
                  <input
                    className={styles.inputBox}
                    onChange={() => {}}
                    placeholder="Height"
                    value="100"
                  />
                  <span className={styles.modifier}>%</span>
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
            marginBottom: "24px",
          }}
        >
          CANVAS BACKGROUND
        </h6>
        <ImageDrop />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  canvas: state.canvas.canvas,
  width: state.canvas.width,
  height: state.canvas.height,
  background: state.canvas.background,
  activePane: state.rightPane.activePane,
});

const mapDispatchToProps = (dispatch) => ({
  updateWidth: (width) => dispatch(updateWidth(width)),
  updateHeight: (height) => dispatch(updateHeight(height)),
  updateBackground: (color) => dispatch(updateBackground(color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CanvasPane);
