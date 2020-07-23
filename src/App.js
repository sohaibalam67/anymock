import React from "react";
import "./App.css";
import Editor from "./screens/Editor/Editor";
import { FocusStyleManager } from "@blueprintjs/core";
FocusStyleManager.onlyShowFocusOnTabs();

function App() {
  return (
    <div className="App">
      <div className="bp3-dark">
        <Editor />
      </div>
    </div>
  );
}

export default App;
