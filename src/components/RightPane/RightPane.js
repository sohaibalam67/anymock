import React, { Component } from "react";
import styles from "./RightPane.module.css";
import { Button, ButtonGroup, H6, InputGroup, Tag } from "@blueprintjs/core";
import { SketchPicker } from "react-color";

export default class RightPane extends Component {
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
    this.setState({ backgroundColor: color.hex });
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
                  <select class="textInput ">
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
                    onChange={() => {}}
                    leftElement={<Tag minimal={false}>W</Tag>}
                    placeholder="Width"
                    value={1600}
                    small
                  />
                </span>
                <InputGroup
                  onChange={() => {}}
                  leftElement={<Tag minimal={false}>H</Tag>}
                  placeholder="Height"
                  value={1200}
                  small
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
                        style={{ backgroundColor: this.state.backgroundColor }}
                      ></Tag>
                    }
                    placeholder="Width"
                    value={this.state.backgroundColor}
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
                        color={this.state.backgroundColor}
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
