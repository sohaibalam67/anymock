import React, { Component } from "react";
import styles from "./Editor.module.css";
import LeftPane from "../../components/LeftPane/LeftPane";
import RightPane from "../../components/RightPane/RightPane";
import WorkArea from "../../components/WorkArea/WorkArea";

export default class Editor extends Component {
  render() {
    return (
      <div className={styles.container}>
        <LeftPane />
        <WorkArea />
        <RightPane />
      </div>
    );
  }
}
