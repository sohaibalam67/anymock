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
import imageIcon from "../../assets/images/icons/app/image-outline.svg";

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
            CANVAS SETTINGS
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

          <div className={styles.canvasImageUploader}>
            <img
              src={imageIcon}
              alt="image icon"
              style={{ width: "24px", height: "auto" }}
            />
            <h6
              style={{
                color: "#ffffff",
                fontSize: "0.9rem",
                marginTop: "12px",
                marginBottom: "12px",
              }}
            >
              Drag and drop image
            </h6>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: "0.9rem",
                margin: "0px",
              }}
            >
              Or click to choose
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  canvas: state.canvas.canvas,
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
