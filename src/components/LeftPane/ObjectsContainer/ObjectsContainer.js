import React from "react";
import styles from "./ObjectsContainer.module.css";

// components
import ObjectsCard from "./ObjectsCard";

// icons
import { ReactComponent as BrowserIcon } from "../../../assets/images/icons/objects/browser.svg";
import { ReactComponent as PhoneIcon } from "../../../assets/images/icons/objects/phone.svg";
import { ReactComponent as LaptopIcon } from "../../../assets/images/icons/objects/laptop.svg";
import { ReactComponent as TabletIcon } from "../../../assets/images/icons/objects/tablet.svg";
import { ReactComponent as WatchIcon } from "../../../assets/images/icons/objects/watch.svg";
import { ReactComponent as DisplayIcon } from "../../../assets/images/icons/objects/display.svg";
import { ReactComponent as TextIcon } from "../../../assets/images/icons/objects/text.svg";
import { ReactComponent as ImageIcon } from "../../../assets/images/icons/objects/image.svg";
import { ReactComponent as ShapeIcon } from "../../../assets/images/icons/objects/shape.svg";

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
        <ObjectsCard title="Browser" onClick={addBrowser}>
          <BrowserIcon width={26} height={26} />
        </ObjectsCard>
        <ObjectsCard title="Phone" onClick={addPhone}>
          <PhoneIcon width={26} height={26} />
        </ObjectsCard>
        <ObjectsCard title="Laptop" onClick={addLaptop}>
          <LaptopIcon width={26} height={26} />
        </ObjectsCard>
        <ObjectsCard title="Tablet" onClick={addTablet}>
          <TabletIcon width={26} height={26} />
        </ObjectsCard>
        <ObjectsCard title="Watch" onClick={addWatch}>
          <WatchIcon width={26} height={26} />
        </ObjectsCard>
        <ObjectsCard title="Display" onClick={addDisplay}>
          <DisplayIcon width={26} height={26} />
        </ObjectsCard>
        <ObjectsCard title="Text" onClick={addText}>
          <TextIcon width={26} height={26} />
        </ObjectsCard>
        <ObjectsCard title="Image" onClick={addImage}>
          <ImageIcon width={26} height={26} />
        </ObjectsCard>
        <ObjectsCard title="Shape" onClick={addShape}>
          <ShapeIcon width={26} height={26} />
        </ObjectsCard>
      </div>
    </div>
  );
}

export default ObjectsContainer;
