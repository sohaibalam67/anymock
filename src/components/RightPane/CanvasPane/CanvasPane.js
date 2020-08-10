import React, { Component } from "react";
import styles from "./CanvasPane.module.css";

// packages
import Select from "react-select";
import { SketchPicker } from "react-color";

// redux
import { connect } from "react-redux";

// components
import InputBox from "../../Commons/InputBox";
import Heading from "../../Commons/Heading";
import ImageDrop from "../../Commons/ImageDrop/ImageDrop";

// helpers
import { setCanvasBackgroundImage } from "../../../helpers/canvas";

// constants
import { presets } from "../../../constants/canvas";
import { PRESET_COLORS } from "../../../constants/colorPicker";
import {
  DEFAULT_SELECT_THEME,
  DEFAULT_SELECT_STYLES,
} from "../../../constants/selectComponentStyles";

import {
  updatePreset,
  updateWidth,
  updateHeight,
  updateBackground,
  updateCanvasBackgroundImage,
  updateCanvasBackgroundOpacity,
} from "../../../store/actions/canvas";

class CanvasPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorPickerVisible: false,
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

  setImageFile = (source) => {
    let success = setCanvasBackgroundImage(this.props.canvas, source);

    if (success) {
      this.props.updateCanvasBackgroundImage(source);
    }
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
        <Heading>CANVAS SETTINGS</Heading>
        <div className={styles.canvasOptionContent}>
          <div className={styles.canvasOptionRow}>
            <div className={styles.canvasOptionsLabel}>Preset</div>
            <div className={styles.canvasOptionsInput}>
              <Select
                className={styles.selectBox}
                value={this.props.preset}
                onChange={(value) => {
                  this.props.updatePreset(value);
                }}
                options={presets}
                styles={DEFAULT_SELECT_STYLES}
                theme={DEFAULT_SELECT_THEME}
              />
            </div>
          </div>
          <div className={styles.canvasOptionRow}>
            <div className={styles.canvasOptionsLabel}>Size</div>
            <div className={styles.canvasOptionsInput}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <InputBox
                    value={this.props.width}
                    placeholder="Width"
                    onChange={(value) => {
                      this.props.updateWidth(value);
                    }}
                    modifier="W"
                  />
                </div>
                <div className={styles.column}>
                  <InputBox
                    value={this.props.height}
                    placeholder="Height"
                    onChange={(value) => {
                      this.props.updateHeight(value);
                    }}
                    modifier="H"
                  />
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
                    <div className={styles.sketchPickerContainer}>
                      <div
                        className={styles.sketchPickerCover}
                        onClick={this.hideColorPicker}
                      />
                      <SketchPicker
                        color={this.props.background}
                        onChange={this.changeBackgroundColor}
                        disableAlpha
                        presetColors={PRESET_COLORS}
                      />
                    </div>
                  ) : null}
                </div>
                <div className={styles.column1}>
                  <InputBox
                    value={this.props.backgroundOpacity ?? 0}
                    placeholder="Opacity"
                    onChange={(value) => {
                      this.props.updateCanvasBackgroundOpacity(+value);
                    }}
                    modifier="%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Heading>CANVAS BACKGROUND</Heading>
        <ImageDrop
          title="Drop your background image here"
          file={this.props.backgroundImage}
          setImageFile={this.setImageFile}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  canvas: state.canvas.canvas,
  preset: state.canvas.preset,
  width: state.canvas.width,
  height: state.canvas.height,
  background: state.canvas.background,
  backgroundImage: state.canvas.backgroundImage,
  backgroundOpacity: state.canvas.backgroundOpacity,
  activePane: state.rightPane.activePane,
});

const mapDispatchToProps = (dispatch) => ({
  updatePreset: (preset) => dispatch(updatePreset(preset)),
  updateWidth: (width) => dispatch(updateWidth(width)),
  updateHeight: (height) => dispatch(updateHeight(height)),
  updateBackground: (color) => dispatch(updateBackground(color)),
  updateCanvasBackgroundImage: (source) =>
    dispatch(updateCanvasBackgroundImage(source)),
  updateCanvasBackgroundOpacity: (opacity) =>
    dispatch(updateCanvasBackgroundOpacity(opacity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CanvasPane);
