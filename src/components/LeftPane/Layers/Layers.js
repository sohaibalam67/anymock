import React, { Component } from "react";
import { connect } from "react-redux";
import { getSelectedLayerIndex } from "../../../store/selectors";
import styles from "./Layers.module.css";
import phone from "../../../assets/images/icons/objects/phone.svg";

class Layers extends Component {
  render() {
    let layers = this.props.layers ?? [];
    return (
      <div>
        <h6
          style={{
            fontSize: "9pt",
            color: "#fff",
            padding: "12px",
            margin: "0px",
          }}
        >
          LAYERS
        </h6>
        {layers.map((item, index) => (
          <div
            key={item.id}
            className={styles.itemContainer}
            style={{
              background:
                this.props.selectedLayerIndex === index
                  ? "#18a0fb"
                  : "rgb(255,255,255,0.08)",
            }}
          >
            <img
              src={phone}
              alt="phone icon"
              style={{ width: "14px", height: "auto", marginRight: "6px" }}
            />
            <div className={styles.itemName}>{item.name}</div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  canvas: state.canvas.canvas,
  layers: state.layers.layers,
  selectedLayerIndex: getSelectedLayerIndex(state),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Layers);
