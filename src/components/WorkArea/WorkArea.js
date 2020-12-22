import React, { Component } from "react";
import styles from "./WorkArea.module.css";

// packages
import { fabric } from "fabric";
import Hotkeys from "react-hot-keys";

// redux
import { connect } from "react-redux";
import { updateCanvas, updateZoom } from "../../store/actions/canvas";
import {
  updateSelectedItemId,
  updateItemPositionByIndex,
  updateItemAngleByIndex,
  deleteItemsByIds,
} from "../../store/actions/layer";
import { setActivePane } from "../../store/actions/rightPane";
import { getSelectedLayerIndex } from "../../store/selectors";

// helpers
import { setCanvasBackgroundImage } from "../../helpers/canvas";
import {
  mergeColorAndOpacity,
  opacityPercentToHex,
} from "../../helpers/common";
import { initAligningGuidelines } from "../../helpers/aligning_guidelines";

// constants
import { CANVAS_PANE, DEVICE_PANE } from "../../constants/rightPane";

// icons
import { ReactComponent as SyncIcon } from "../../assets/images/icons/app/sync-outline.svg";

const MOVE_GRID = 1;

class WorkArea extends Component {
  componentDidMount() {
    // initialize canvas
    this.canvas = new fabric.Canvas("fabricCanvas", {
      backgroundColor: mergeColorAndOpacity(
        this.props.background,
        opacityPercentToHex(this.props.backgroundOpacity)
      ),
      enableRetinaScaling: true,
      preserveObjectStacking: true,
      controlsAboveOverlay: false,
      selectionCompatibility: true,
      stopContextMenu: true,
      fireRightClick: true,
      width: this.props.width || 1600,
      height: this.props.height || 1200,
    });

    this.canvas.state = [];
    this.canvas.index = 0;
    this.canvas.stateaction = true;

    // canvas events
    this.canvas
      .on({
        "object:moving": this.centerLines,
        "object:modified": this.centerLines,
        "object:scaling": this.centerLines,
        "selection:cleared": this.selectionCleared,
        "object:selected": this.objectSelected,
        "selection:updated": this.objectSelected,
        "mouse:up": this.objectMouseUp,
      })
      .on("object:rotating", (opt) => {
        const { target } = opt;
        if (target) {
          if (opt.e.shiftKey) target.set({ snapAngle: 10 });
          else target.set({ snapAngle: 1 });
        }
      })
      .on("mouse:down", (opt) => {
        if (opt.target) {
          opt.target.origPos = opt.target.getCenterPoint();

          opt.target.set({
            dragStart: { x: opt.target.left, y: opt.target.top },
          });
        }
      });

    initAligningGuidelines(this.canvas);

    // horizontal alignment line
    this.line_h = new fabric.Line(
      [this.canvas.width / 2, 0, this.canvas.width / 2, this.canvas.width],
      {
        id: "line_h",
        name: "line_h",
        opacity: 0,
        stroke: "red",
        strokeWidth: 3,
        evented: false,
        selectable: false,
      }
    );

    // vertical alignment line
    this.line_v = new fabric.Line(
      [0, this.canvas.height / 2, this.canvas.width, this.canvas.height / 2],
      {
        id: "line_v",
        name: "line_v",
        opacity: 0,
        stroke: "red",
        strokeWidth: 3,
        evented: false,
        selectable: false,
      }
    );

    this.canvas.add(this.line_h).add(this.line_v).renderAll();

    // Updating the canvas instance in redux store, so that
    // other components can access the canvas from props
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

    if (oldProps.backgroundImage !== newProps.backgroundImage) {
      setCanvasBackgroundImage(this.canvas, this.props.backgroundImage);
    }

    this.canvas.renderAll();
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
    const { target, e } = event;

    if (!target) return;

    if (e.shiftKey && target.origPos) {
      const delta = target.getCenterPoint().subtract(target.origPos);
      // Lock vertical movements
      if (Math.abs(delta.x) >= Math.abs(delta.y)) {
        target.lockMovementX = false;
        target.lockMovementY = true;
      }

      // Lock horizontal movements
      if (Math.abs(delta.x) <= Math.abs(delta.y)) {
        target.lockMovementY = false;
        target.lockMovementX = true;
      }
    } else {
      target.lockMovementY = false;
      target.lockMovementX = false;
    }

    // Snap to GRID [1, 1]
    target.set({
      left: Math.round(target.left / MOVE_GRID) * MOVE_GRID,
      top: Math.round(target.top / MOVE_GRID) * MOVE_GRID,
    });

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

  changeZoom = (value) => {
    this.props.updateZoom(value);
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
    if (keyName === "backspace" || keyName === "del") {
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

    if (keyName === "cmd+=" || keyName === "ctrl+=") {
      let zoom = this.props.zoom;

      this.changeZoom(Math.min(zoom + 5, 100));
    }

    if (keyName === "cmd+-" || keyName === "ctrl+-") {
      let zoom = this.props.zoom;

      this.changeZoom(Math.max(zoom - 5, 10));
    }

    if (keyName === "cmd+]" || keyName === "ctrl+]") {
      let activeObject = this.canvas.getActiveObject();
      this.canvas.preserveObjectStacking = true;
      this.canvas.bringForward(activeObject);
      this.canvas.renderAll();
    }

    if (keyName === "cmd+[" || keyName === "ctrl+[") {
      let activeObject = this.canvas.getActiveObject();
      this.canvas.preserveObjectStacking = true;
      this.canvas.sendBackwards(activeObject);
      this.canvas.renderAll();
    }
  }

  render() {
    return (
      <>
        <Hotkeys
          keyName="backspace,cmd+a,control+a,ctrl+a,cmd+=,cmd+-,cmd+],cmd+["
          onKeyDown={this.onKeyDown.bind(this)}
          allowRepeat
        >
          <div
            className={styles.container}
            onClick={this.deselectAllItemsOnCanvas}
          >
            <div
              style={{
                margin: "100px",
                transform: `scale(${this.props.zoom / 100})`,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  minWidth: `${Math.max(this.props.width, 2) - 2}px`,
                  minHeight: `${Math.max(this.props.height, 2) - 2}px`,
                  margin: "1px",
                  background:
                    "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAEhJREFUWAnt1rENADAIA0HICuy/IZ4BsoMjpXn6l9A1kN09YUxVGXXEseoHMQsggAACCCCAQM4d56pKcnL+AQQQQAABBBD4L7D9Pwr+3ufr7AAAAABJRU5ErkJggg==')",
                }}
              ></div>
              <canvas id="fabricCanvas"></canvas>
            </div>
          </div>
        </Hotkeys>
        {this.props.processing ? (
          <span className={styles.processing}>
            <SyncIcon width={18} height={18} className={styles.syncIcon} />
            &nbsp; Please wait...
          </span>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  zoom: state.canvas.zoom,
  width: state.canvas.width,
  height: state.canvas.height,
  processing: state.canvas.processing,
  background: state.canvas.background,
  backgroundImage: state.canvas.backgroundImage,
  backgroundOpacity: state.canvas.backgroundOpacity,
  selectedLayerIndex: getSelectedLayerIndex(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateCanvas: (canvas) => dispatch(updateCanvas(canvas)),
  updateZoom: (zoom) => dispatch(updateZoom(zoom)),
  setActivePane: (activePane) => dispatch(setActivePane(activePane)),
  updateSelectedItemId: (id) => dispatch(updateSelectedItemId(id)),
  updateItemPositionByIndex: (index, left, top) =>
    dispatch(updateItemPositionByIndex(index, left, top)),
  updateItemAngleByIndex: (index, angle) =>
    dispatch(updateItemAngleByIndex(index, angle)),
  deleteItemsByIds: (ids) => dispatch(deleteItemsByIds(ids)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkArea);
