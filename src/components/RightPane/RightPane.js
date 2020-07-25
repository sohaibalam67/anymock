import React, { Component } from "react";
import styles from "./RightPane.module.css";
import { SketchPicker } from "react-color";
import { connect } from "react-redux";
import {
  updateWidth,
  updateHeight,
  updateBackground,
} from "../../store/actions/canvas";
import Select from "react-select";

const options = [
  { value: "0", label: "Custom canvas" },
  { value: "11", label: "5.8″ (iPhone X, Xs, 11 Pro)" },
  { value: "12", label: "5.5″ (iPhone 6s Plus, 7 Plus, 8 Plus)" },
  { value: "13", label: "4.7″ (iPhone 6, 6s, 7, 8)" },
  { value: "14", label: "4.0″ (iPhone SE)" },
  { value: "15", label: "3.5 inch (iPhone 4s)" },
  { value: "21", label: "Android devices (Portrait)" },
  { value: "22", label: "Android devices (Landscape)" },
  { value: "22", label: "Android devices (Landscape)" },
  { value: "31", label: "Inspram Photo" },
  { value: "32", label: "Inspram Story" },
  { value: "33", label: "Facebook Cover" },
  { value: "34", label: "Twitter Header" },
  { value: "35", label: "Twitter Timeline" },
  { value: "36", label: "Pinterest Standard Pin" },
  { value: "37", label: "Pinterest Giraffe Pin" },
  { value: "41", label: "Dribbble" },
];

class RightPane extends Component {
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
      <div className={styles.container}>
        <div className={styles.canvasOptionsContainer}>
          <h6
            style={{
              fontSize: "9pt",
              color: "#fff",
              marginTop: "12px",
              marginBottom: "12px",
            }}
          >
            CANVAS OPTIONS
          </h6>
          <div className={styles.canvasOptionContent}>
            <div className={styles.canvasOptionRow}>
              <div className={styles.canvasOptionsLabel}>Canvas</div>
              <div className={styles.canvasOptionsInput}>
                <Select
                  value={options[0]}
                  onChange={() => {}}
                  options={options}
                  styles={{
                    control: (provided, state) => ({
                      ...provided,
                      borderColor: "#13171b",
                    }),
                    option: (provided, state) => ({
                      ...provided,
                      background: "#13171b",
                      color: "#fff",
                      fontSize: "0.8rem",
                    }),
                    placeholder: (provided, state) => ({
                      ...provided,
                      color: "#fff",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                    }),
                    singleValue: (provided, state) => ({
                      ...provided,
                      color: "#fff",
                      fontSize: "0.8rem",
                      fontWeight: "600",
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
                <div className={styles.twoColumn}>
                  <input
                    className={styles.inputBox}
                    onChange={(event) => {
                      this.props.updateWidth(event.target.value);
                    }}
                    leftElement={
                      <div className={styles.inputIdentifier}>W</div>
                    }
                    placeholder="Width"
                    value={this.props.width}
                    small
                    style={{ paddingLeft: "8px" }}
                  />
                  <input
                    className={styles.inputBox}
                    onChange={(event) => {
                      this.props.updateHeight(event.target.value);
                    }}
                    leftElement={
                      <div className={styles.inputIdentifier}>H</div>
                    }
                    placeholder="Height"
                    value={this.props.height}
                    small
                    style={{ paddingLeft: "8px" }}
                  />
                </div>
              </div>
            </div>
            <div className={styles.canvasOptionRow}>
              <div className={styles.canvasOptionsLabel}>Color</div>
              <div className={styles.canvasOptionsInput}>
                <div className={styles.twoColumn}>
                  <div>
                    <input
                      className={styles.inputBox}
                      onChange={() => {}}
                      leftElement={
                        <p
                          minimal={true}
                          onClick={this.showColorPicker}
                          style={{
                            backgroundColor: this.props.background,
                            marginRight: "5px",
                            cursor: "pointer",
                          }}
                        ></p>
                      }
                      placeholder="Color"
                      value={strippedBackgroundValue}
                      small
                    />
                    {this.state.colorPickerVisible ? (
                      <div
                        style={{
                          position: "absolute",
                          zIndex: 100,
                          marginLeft: "-50px",
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
                            "#f1c40f",
                            "#ecf0f1",
                            "#6c5ce7",
                            "#badc58",
                            "#7ed6df",
                            "#ff4757",
                            "#3742fa",
                            "#2f3542",
                            "#ff6348",
                            "#7bed9f",
                            "#26de81",
                            "#2bcbba",
                            "#eb3b5a",
                            "#B33771",
                            "#ffffff",
                            "#000000",
                          ]}
                        />
                      </div>
                    ) : null}
                  </div>
                  <input
                    className={styles.inputBox}
                    onChange={() => {}}
                    placeholder="Height"
                    value="100%"
                    small
                  />
                </div>
              </div>
            </div>
          </div>
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

const mapDispatchToProps = (dispatch) => ({
  updateWidth: (width) => dispatch(updateWidth(width)),
  updateHeight: (height) => dispatch(updateHeight(height)),
  updateBackground: (color) => dispatch(updateBackground(color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RightPane);
