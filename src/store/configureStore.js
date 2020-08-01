import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import canvasReducer from "./reducers/CanvasReducer";
import rightPaneReducer from "./reducers/RightPaneReducer";
import layersReducer from "./reducers/LayersReducer";

const rootReducer = combineReducers({
  canvas: canvasReducer,
  rightPane: rightPaneReducer,
  layers: layersReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunkMiddleware));
};

export default configureStore;
