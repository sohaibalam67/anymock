import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import canvasReducer from "./reducers/CanvasReducer";

const rootReducer = combineReducers({
  canvas: canvasReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunkMiddleware));
};

export default configureStore;
