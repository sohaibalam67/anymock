import React from "react";
import "./App.css";
import Editor from "./screens/Editor/Editor";
import { FocusStyleManager } from "@blueprintjs/core";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
const store = configureStore();

FocusStyleManager.onlyShowFocusOnTabs();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="bp3-dark">
          <Editor />
        </div>
      </div>
    </Provider>
  );
}

export default App;
