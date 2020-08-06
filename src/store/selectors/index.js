import { createSelector } from "reselect";

const getSelectedItemId = (state) => state.layers.selectedItemId;
const getLayers = (state) => state.layers.layers;

export const getSelectedLayer = createSelector(
  [getSelectedItemId, getLayers],
  (selectedItemId, layers) => {
    if (selectedItemId === null) {
      return null;
    }

    let selectedLayer = null;
    for (let index = 0; index < layers.length; index++) {
      if (layers[index].id === selectedItemId) {
        selectedLayer = layers[index];
        break;
      }
    }
    return selectedLayer;
  }
);

export const getSelectedLayerIndex = createSelector(
  [getSelectedItemId, getLayers],
  (selectedItemId, layers) => {
    if (selectedItemId === null) {
      return null;
    }

    let selectedLayerIndex = null;
    for (let index = 0; index < layers.length; index++) {
      if (layers[index].id === selectedItemId) {
        selectedLayerIndex = index;
        break;
      }
    }
    return selectedLayerIndex;
  }
);
