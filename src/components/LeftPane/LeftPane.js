import React, { Component } from "react";
import styles from "./LeftPane.module.css";
import { Button, ButtonGroup, H3 } from "@blueprintjs/core";
import TemplatesContainer from "./TemplatesContainer/TemplatesContainer";
import ObjectsContainer from "./ObjectsContainer/ObjectsContainer";

const logo = require("../../assets/images/logo.svg");

const SEGMENT_TEMPLATE = "segment_template";
const SEGMENT_OBJECT = "segment_object";

export default class LeftPane extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSegment: SEGMENT_TEMPLATE,
    };
  }

  switchActiveSegment = (sengment) => {
    this.setState({
      activeSegment: sengment,
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.brandContainer} style={{ padding: "12px" }}>
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
        <div
          align="center"
          className={styles.tempObjButtonGroupContainer}
          style={{ padding: "12px" }}
        >
          <ButtonGroup minimal={true}>
            <Button
              icon="control"
              active={this.state.activeSegment === SEGMENT_TEMPLATE}
              onClick={() => {
                this.switchActiveSegment(SEGMENT_TEMPLATE);
              }}
            >
              Templates
            </Button>
            <Button
              icon="mobile-phone"
              active={this.state.activeSegment === SEGMENT_OBJECT}
              onClick={() => {
                this.switchActiveSegment(SEGMENT_OBJECT);
              }}
            >
              Objects
            </Button>
          </ButtonGroup>
        </div>
        {this.state.activeSegment === SEGMENT_TEMPLATE ? (
          <TemplatesContainer />
        ) : null}
        {this.state.activeSegment === SEGMENT_OBJECT ? (
          <ObjectsContainer />
        ) : null}
      </div>
    );
  }
}
