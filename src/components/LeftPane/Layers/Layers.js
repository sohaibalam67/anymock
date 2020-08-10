import React from "react";

// redux
import { connect } from "react-redux";
import { getSelectedLayerIndex } from "../../../store/selectors";

// components
import LayerItem from "./LayerItem";

// images
import phone from "../../../assets/images/icons/objects/phone.svg";

function Layers({ layers = [], selectedLayerIndex }) {
  return (
    <>
      {layers.map((item, index) => (
        <LayerItem
          key={item.id}
          icon={phone}
          name={item.name}
          selected={selectedLayerIndex === index}
        />
      ))}
    </>
  );
}

const mapStateToProps = (state) => ({
  canvas: state.canvas.canvas,
  layers: state.layers.layers,
  selectedLayerIndex: getSelectedLayerIndex(state),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Layers);
