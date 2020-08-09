import React from "react";
import styles from "./ObjectsContainer.module.css";

// components
import ObjectsCard from "./ObjectsCard";

// images
let browser_icon = require("../../../assets/images/icons/objects/browser.svg");
let phone_icon = require("../../../assets/images/icons/objects/phone.svg");
let laptop_icon = require("../../../assets/images/icons/objects/laptop.svg");
let tablet_icon = require("../../../assets/images/icons/objects/tablet.svg");
let watch_icon = require("../../../assets/images/icons/objects/watch.svg");
let display_icon = require("../../../assets/images/icons/objects/display.svg");
let text_icon = require("../../../assets/images/icons/objects/text.svg");
let image_icon = require("../../../assets/images/icons/objects/image.svg");
let shape_icon = require("../../../assets/images/icons/objects/shape.svg");

function ObjectsContainer({
  addBrowser = (f) => f,
  addPhone = (f) => f,
  addLaptop = (f) => f,
  addTablet = (f) => f,
  addWatch = (f) => f,
  addDisplay = (f) => f,
  addText = (f) => f,
  addImage = (f) => f,
  addShape = (f) => f,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        <ObjectsCard
          source={browser_icon}
          title="Browser"
          onClick={addBrowser}
        />
        <ObjectsCard source={phone_icon} title="Phone" onClick={addPhone} />
        <ObjectsCard source={laptop_icon} title="Laptop" onClick={addLaptop} />
        <ObjectsCard source={tablet_icon} title="Tablet" onClick={addTablet} />
        <ObjectsCard source={watch_icon} title="Watch" onClick={addWatch} />
        <ObjectsCard
          source={display_icon}
          title="Display"
          onClick={addDisplay}
        />
        <ObjectsCard source={text_icon} title="Text" onClick={addText} />
        <ObjectsCard source={image_icon} title="Image" onClick={addImage} />
        <ObjectsCard source={shape_icon} title="Shape" onClick={addShape} />
      </div>
    </div>
  );
}

export default ObjectsContainer;
