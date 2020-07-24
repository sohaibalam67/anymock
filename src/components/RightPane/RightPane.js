import React, { Component } from "react";
import styles from "./RightPane.module.css";
import { Button, ButtonGroup, H6, InputGroup, Tag } from "@blueprintjs/core";
import { SketchPicker } from "react-color";
import { connect } from "react-redux";
import {
  updateWidth,
  updateHeight,
  updateBackground,
} from "../../store/actions/canvas";

class RightPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorPickerVisible: false,
      backgroundColor: "#ffffff",
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
    return (
      <div className={styles.container}>
        <div className={styles.canvasOptionsContainer}>
          <H6 style={{ fontSize: "9pt" }}>CANVAS OPTIONS</H6>
          <div className={styles.canvasOptionContent}>
            <div className={styles.canvasOptionRow}>
              <div className={styles.canvasOptionsLabel}>Canvas</div>
              <div className={styles.canvasOptionsInput}>
                <div className="bp3-select" style={{ width: "100%" }}>
                  <select className="textInput ">
                    <optgroup label="Custom">
                      <option value="0" disabled="">
                        Custom canvas
                      </option>
                    </optgroup>
                    <optgroup label="App store screenshot">
                      <option value="11">5.8″ (iPhone X, Xs, 11 Pro)</option>
                      <option value="12">
                        5.5″ (iPhone 6s Plus, 7 Plus, 8 Plus)
                      </option>
                      <option value="13">4.7″ (iPhone 6, 6s, 7, 8)</option>
                      <option value="14">4.0″ (iPhone SE)</option>
                      <option value="15">3.5 inch (iPhone 4s)</option>
                    </optgroup>
                    <optgroup label="Play store screenshot">
                      <option value="21">Android devices (Portrait)</option>
                      <option value="22">
                        Android devices (Landscape - Games)
                      </option>
                    </optgroup>
                    <optgroup label="Social Media">
                      <option value="31">Instagram Photo</option>
                      <option value="32">Instagram Story</option>
                      <option value="33">Facebook Cover</option>
                      <option value="34">Twitter Header</option>
                      <option value="35">Twitter Timeline</option>
                      <option value="36">Pinterest Standard Pin</option>
                      <option value="37">Pinterest Giraffe Pin</option>
                    </optgroup>
                    <optgroup label="Others">
                      <option value="41">Dribbble</option>
                    </optgroup>
                  </select>
                </div>
              </div>
            </div>
            <div className={styles.canvasOptionRow}>
              <div className={styles.canvasOptionsLabel}>Size</div>
              <div className={styles.canvasOptionsInput}>
                <span style={{ marginRight: "15px" }}>
                  <InputGroup
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
                </span>
                <InputGroup
                  onChange={(event) => {
                    this.props.updateHeight(event.target.value);
                  }}
                  leftElement={<div className={styles.inputIdentifier}>H</div>}
                  placeholder="Height"
                  value={this.props.height}
                  small
                  style={{ paddingLeft: "8px" }}
                />
              </div>
            </div>
            <div className={styles.canvasOptionRow}>
              <div className={styles.canvasOptionsLabel}>Color</div>
              <div className={styles.canvasOptionsInput}>
                <span style={{ marginRight: "15px" }}>
                  <InputGroup
                    onChange={() => {}}
                    leftElement={
                      <Tag
                        minimal={true}
                        onClick={this.showColorPicker}
                        style={{ backgroundColor: this.props.background }}
                      ></Tag>
                    }
                    placeholder="Color"
                    value={this.props.background}
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
                      />
                    </div>
                  ) : null}
                </span>
                <InputGroup
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
