import React, { Component } from "react";
import styles from "./Editor.module.css";

// components
import TopBar from "../../components/TopBar/TopBar";
import WorkArea from "../../components/WorkArea/WorkArea";
import LeftPane from "../../components/LeftPane/LeftPane";
import RightPane from "../../components/RightPane/RightPane";

export default class Editor extends Component {
  render() {
    return (
      <>
        <TopBar />
        <div className={styles.container}>
          <LeftPane />
          <WorkArea />
          <RightPane />
        </div>
      </>
    );
  }
}
