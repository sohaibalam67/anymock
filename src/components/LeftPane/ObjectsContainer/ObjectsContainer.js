import React, { Component } from "react";
import styles from "./ObjectsContainer.module.css";
import ObjectsCard from "./ObjectsCard/ObjectsCard";

export default class ObjectsContainer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.cardsContainer}>
          <ObjectsCard />
          <ObjectsCard />
          <ObjectsCard />
          <ObjectsCard />
          <ObjectsCard />
          <ObjectsCard />
          <ObjectsCard />
          <ObjectsCard />
        </div>
      </div>
    );
  }
}
