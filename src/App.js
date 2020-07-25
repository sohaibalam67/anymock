import React from "react";
import "./App.css";
import Editor from "./screens/Editor/Editor";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Editor />
      </div>
    </Provider>
  );
}

export default App;
