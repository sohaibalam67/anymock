import { createSelector } from "reselect";
import { DEVICE_TYPES, devices } from "../../constants/devices";

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

export const getSelectedDevice = createSelector(
  [getSelectedLayer],
  (selectedLayer) => {
    if (
      selectedLayer === null ||
      !Object.values(DEVICE_TYPES).includes(selectedLayer.type)
    ) {
      return null;
    }

    let selectedDevice = null;

    if (selectedLayer.type === DEVICE_TYPES.PHONE) {
      for (let index = 0; index < devices.phones.length; index++) {
        if (devices.phones[index].id === selectedLayer.device_id) {
          selectedDevice = devices.phones[index];
          break;
        }
      }
    }

    return selectedDevice;
  }
);

export const getSelectedDeviceVariant = createSelector(
  [getSelectedDevice, getSelectedLayer],
  (selectedDevice, selectedLayer) => {
    if (
      selectedDevice === null ||
      selectedLayer === null ||
      !Object.values(DEVICE_TYPES).includes(selectedLayer.type)
    ) {
      return null;
    }

    let selectedDeviceVariant = null;

    if (selectedLayer.type === DEVICE_TYPES.PHONE) {
      for (let index = 0; index < selectedDevice.variants.length; index++) {
        if (selectedDevice.variants[index].id === selectedLayer.variant_id) {
          selectedDeviceVariant = selectedDevice.variants[index];
          break;
        }
      }
    }

    return selectedDeviceVariant;
  }
);
