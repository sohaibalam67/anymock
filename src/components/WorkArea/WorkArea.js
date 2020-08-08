import React, { Component } from "react";
import styles from "./WorkArea.module.css";
import Slider from "@material-ui/core/Slider";
import { connect } from "react-redux";
import { updateCanvas } from "../../store/actions/canvas";
import {
  updateSelectedItemId,
  updateItemPositionByIndex,
  updateItemAngleByIndex,
  deleteItemsByIds,
} from "../../store/actions/layer";
import { setActivePane } from "../../store/actions/rightPane";
import { CANVAS_PANE, DEVICE_PANE } from "../../constants/rightPane";
import { fabric } from "fabric";
import { getSelectedLayerIndex } from "../../store/selectors";
import { setCanvasBackgroundImage } from "../../helpers/canvas";
import {
  mergeColorAndOpacity,
  opacityPercentToHex,
} from "../../helpers/common";
import Hotkeys from "react-hot-keys";

class WorkArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 40,
    };
  }

  componentDidMount() {
    this.canvas = new fabric.Canvas("fabricCanvas", {
      backgroundColor: mergeColorAndOpacity(
        this.props.background,
        opacityPercentToHex(this.props.backgroundOpacity)
      ),
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

    this.canvas.on({
      "object:rotating": this.centerLines,
      "object:moving": this.centerLines,
      "object:modified": this.centerLines,
      "object:scaling": this.centerLines,
      "selection:cleared": this.selectionCleared,
      "object:selected": this.objectSelected,
      "selection:updated": this.objectSelected,
      "mouse:up": this.objectMouseUp,
    });

    this.line_h = new fabric.Line(
      [this.canvas.width / 2, 0, this.canvas.width / 2, this.canvas.width],
      {
        stroke: "red",
        opacity: 0,
        strokeWidth: 3,
        selectable: false,
        evented: false,
        id: "line_h",
        name: "line_h",
      }
    );

    this.line_v = new fabric.Line(
      [0, this.canvas.height / 2, this.canvas.width, this.canvas.height / 2],
      {
        stroke: "red",
        opacity: 0,
        strokeWidth: 3,
        selectable: false,
        evented: false,
        id: "line_v",
        name: "line_v",
      }
    );

    this.canvas.add(this.line_h);
    this.canvas.add(this.line_v);

    this.canvas.renderAll();

    this.props.updateCanvas(this.canvas);
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props;

    if (
      oldProps.background !== newProps.background ||
      oldProps.backgroundOpacity !== newProps.backgroundOpacity
    ) {
      this.canvas.backgroundColor = mergeColorAndOpacity(
        newProps.background,
        opacityPercentToHex(newProps.backgroundOpacity)
      );
    }

    if (oldProps.width !== newProps.width) {
      this.canvas.setWidth(newProps.width);
      // adjust guideline
      this.line_v.top = this.canvas.height / 2;
      this.line_h.left = this.canvas.width / 2;
      this.line_v.width = this.canvas.width;
      this.line_h.height = this.canvas.height;
    }

    if (oldProps.height !== newProps.height) {
      this.canvas.setHeight(newProps.height);
      // adjust guideline
      this.line_v.top = newProps.height / 2;
      this.line_h.left = this.canvas.width / 2;
      this.line_v.width = this.canvas.width;
      this.line_h.height = newProps.height;
    }
    this.canvas.renderAll();

    setCanvasBackgroundImage(this.canvas, this.props.backgroundImage);
  }

  componentWillUnmount() {
    this.canvas.__eventListeners = {};
  }

  objectSelected = (event) => {
    let activeObject = this.canvas.getActiveObject();
    this.props.updateSelectedItemId(activeObject.id);
    this.props.setActivePane(DEVICE_PANE);
  };

  selectionCleared = (event) => {
    this.props.updateSelectedItemId(null);
    this.props.setActivePane(CANVAS_PANE);
  };

  objectMouseUp = (event) => {
    this.hideLines();

    if (!event.target) {
      return;
    }

    if (
      this.props.selectedLayerIndex !== null &&
      this.props.selectedLayerIndex >= 0
    ) {
      this.props.updateItemPositionByIndex(
        this.props.selectedLayerIndex,
        event.target.left,
        event.target.top
      );
      this.props.updateItemAngleByIndex(
        this.props.selectedLayerIndex,
        event.target.angle
      );
    }
  };

  // Show alignment guides
  centerLines = (event) => {
    // TODO: activeGuideLine switch
    if (true) {
      const snapZone = 10;
      const obj_v =
        event.target.left +
        (event.target.get("width") * event.target.scaleX) / 2;
      const obj_h =
        event.target.top +
        (event.target.get("height") * event.target.scaleY) / 2;
      if (
        obj_v > this.canvas.width / 2 - snapZone &&
        obj_v < this.canvas.width / 2 + snapZone
      ) {
        this.line_h.opacity = 1;
        this.line_h.bringToFront();
        event.target
          .set({
            left:
              this.canvas.width / 2 -
              (event.target.get("width") * event.target.scaleX) / 2,
          })
          .setCoords();
      } else {
        this.line_h.opacity = 0;
      }
      if (
        obj_h > this.canvas.height / 2 - snapZone &&
        obj_h < this.canvas.height / 2 + snapZone
      ) {
        this.line_v.opacity = 1;
        this.line_v.bringToFront();
        event.target
          .set({
            top:
              this.canvas.height / 2 -
              (event.target.get("height") * event.target.scaleY) / 2,
          })
          .setCoords();
      } else {
        this.line_v.opacity = 0;
      }
    }
  };

  // Hide alignment guides
  hideLines = () => {
    this.line_h.opacity = 0;
    this.line_v.opacity = 0;
  };

  changeZoom = (event, value) => {
    this.setState({ zoom: value });
    this.canvas.calcOffset();
  };

  deselectAllItemsOnCanvas = (event) => {
    event.preventDefault();
    if (this.canvas && event.target === event.currentTarget) {
      this.canvas.discardActiveObject().renderAll();
    }
  };

  onKeyDown(keyName, e, handle) {
    e.preventDefault();
    if (keyName === "backspace") {
      let activeObjects = this.canvas.getActiveObjects();

      if (!(Array.isArray(activeObjects) && activeObjects.length > 0)) {
        return;
      }

      let ids = [];

      for (let object of activeObjects) {
        if (object.id) {
          ids.push(object.id);
        }
      }
      this.props.deleteItemsByIds(ids);
      this.canvas.discardActiveObject();
      this.canvas.remove(...activeObjects);
      this.canvas.renderAll();
    }

    if (
      keyName === "cmd+a" ||
      keyName === "control+a" ||
      keyName === "ctrl+a"
    ) {
      let objs = this.canvas.getObjects().filter((obj) => {
        return !(obj.id === "line_h" || obj.id === "line_v");
      });

      let selection = new fabric.ActiveSelection(objs, {
        canvas: this.canvas,
      });
      this.canvas.setActiveObject(selection).renderAll();
    }
  }

  render() {
    return (
      <Hotkeys
        keyName="backspace,cmd+a,control+a,ctrl+a"
        onKeyDown={this.onKeyDown.bind(this)}
      >
        <div
          className={styles.container}
          onClick={this.deselectAllItemsOnCanvas}
        >
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
            <div
              style={{
                position: "absolute",
                minWidth: `${this.props.width}px`,
                minHeight: `${this.props.height}px`,
                background:
                  "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAEhJREFUWAnt1rENADAIA0HICuy/IZ4BsoMjpXn6l9A1kN09YUxVGXXEseoHMQsggAACCCCAQM4d56pKcnL+AQQQQAABBBD4L7D9Pwr+3ufr7AAAAABJRU5ErkJggg==')",
              }}
            ></div>
            <canvas id="fabricCanvas"></canvas>
          </div>
        </div>
      </Hotkeys>
    );
  }
}

const mapStateToProps = (state) => ({
  width: state.canvas.width,
  height: state.canvas.height,
  background: state.canvas.background,
  backgroundImage: state.canvas.backgroundImage,
  backgroundOpacity: state.canvas.backgroundOpacity,
  selectedLayerIndex: getSelectedLayerIndex(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateCanvas: (canvas) => dispatch(updateCanvas(canvas)),
  setActivePane: (activePane) => dispatch(setActivePane(activePane)),
  updateSelectedItemId: (id) => dispatch(updateSelectedItemId(id)),
  updateItemPositionByIndex: (index, left, top) =>
    dispatch(updateItemPositionByIndex(index, left, top)),
  updateItemAngleByIndex: (index, angle) =>
    dispatch(updateItemAngleByIndex(index, angle)),
  deleteItemsByIds: (ids) => dispatch(deleteItemsByIds(ids)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkArea);
