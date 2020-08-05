import React, { Component } from "react";
import styles from "./ObjectsContainer.module.css";
import ObjectsCard from "./ObjectsCard/ObjectsCard";

let browser_icon = require("../../../assets/images/icons/objects/browser.svg");
let phone_icon = require("../../../assets/images/icons/objects/phone.svg");
let laptop_icon = require("../../../assets/images/icons/objects/laptop.svg");
let tablet_icon = require("../../../assets/images/icons/objects/tablet.svg");
let watch_icon = require("../../../assets/images/icons/objects/watch.svg");
let display_icon = require("../../../assets/images/icons/objects/display.svg");

export default class ObjectsContainer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.cardsContainer}>
          <ObjectsCard
            source={browser_icon}
            title="Browsers"
            onClick={() => {}}
          />
          <ObjectsCard
            source={phone_icon}
            title="Phones"
            onClick={this.props.addFrameToScreen}
          />
          <ObjectsCard
            source={laptop_icon}
            title="Laptops"
            onClick={() => {}}
          />
          <ObjectsCard
            source={tablet_icon}
            title="Tablets"
            onClick={() => {}}
          />
          <ObjectsCard source={watch_icon} title="Watches" onClick={() => {}} />
          <ObjectsCard
            source={display_icon}
            title="Displays"
            onClick={() => {}}
          />
        </div>
      </div>
    );
  }
}
