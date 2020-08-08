import React, { Component } from "react";
import styles from "./ObjectsContainer.module.css";
import ObjectsCard from "./ObjectsCard/ObjectsCard";

let browser_icon = require("../../../assets/images/icons/objects/browser.svg");
let phone_icon = require("../../../assets/images/icons/objects/phone.svg");
let laptop_icon = require("../../../assets/images/icons/objects/laptop.svg");
let tablet_icon = require("../../../assets/images/icons/objects/tablet.svg");
let watch_icon = require("../../../assets/images/icons/objects/watch.svg");
let display_icon = require("../../../assets/images/icons/objects/display.svg");
let text_icon = require("../../../assets/images/icons/objects/text.svg");
let image_icon = require("../../../assets/images/icons/objects/image.svg");
let shape_icon = require("../../../assets/images/icons/objects/shape.svg");

export default class ObjectsContainer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.cardsContainer}>
          <ObjectsCard
            source={browser_icon}
            title="Browser"
            onClick={() => {}}
          />
          <ObjectsCard
            source={phone_icon}
            title="Phone"
            onClick={this.props.addFrameToScreen}
          />
          <ObjectsCard source={laptop_icon} title="Laptop" onClick={() => {}} />
          <ObjectsCard source={tablet_icon} title="Tablet" onClick={() => {}} />
          <ObjectsCard source={watch_icon} title="Watch" onClick={() => {}} />
          <ObjectsCard
            source={display_icon}
            title="Display"
            onClick={() => {}}
          />
          <ObjectsCard source={text_icon} title="Text" onClick={() => {}} />
          <ObjectsCard source={image_icon} title="Image" onClick={() => {}} />
          <ObjectsCard source={shape_icon} title="Shape" onClick={() => {}} />
        </div>
      </div>
    );
  }
}
