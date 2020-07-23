import React, { Component } from "react";
import styles from "./TemplatesContainer.module.css";
import TemplateCard from "./TemplateCard/TemplateCard";

export default class TemplatesContainer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div>
          <TemplateCard
            thumbnail={require("../../../assets/images/template_thumbnails/temp1.jpg")}
          />
          <TemplateCard
            thumbnail={require("../../../assets/images/template_thumbnails/temp2.jpg")}
          />
          <TemplateCard
            thumbnail={require("../../../assets/images/template_thumbnails/temp3.jpg")}
          />
          <TemplateCard
            thumbnail={require("../../../assets/images/template_thumbnails/temp4.jpg")}
          />
          <TemplateCard
            thumbnail={require("../../../assets/images/template_thumbnails/temp5.png")}
          />
          <TemplateCard
            thumbnail={require("../../../assets/images/template_thumbnails/temp6.jpg")}
          />
          <TemplateCard
            thumbnail={require("../../../assets/images/template_thumbnails/temp7.png")}
          />
        </div>
      </div>
    );
  }
}
