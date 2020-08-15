import { resetCanvas } from "./canvas";
import { resetLayer } from "./layer";

export const resetAll = () => {
  return (dispatch) => {
    dispatch(resetCanvas());
    dispatch(resetLayer());
  };
};
