import React, { Component, createRef } from "react";
import styles from "./ImageDrop.module.css";
import Dropzone from "react-dropzone";
import imageIcon from "../../../assets/images/icons/app/cloud-upload-outline.svg";

export default class ImageDrop extends Component {
  state = {
    isDragging: false,
    showReplaceOption: false,
  };

  processFile = (files) => {
    this.setState({
      isDragging: false,
    });
    var file = files[0];
    if (file) {
      if (
        file.type === "image/png" ||
        file.type === "image/jpeg" ||
        file.type === "image/svg+xml" ||
        file.type === "image/gif"
      ) {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.props.setImageFile(event.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("File not supported");
      }
    }
  };

  handleDrag = (bool) => {
    this.setState({
      isDragging: bool,
    });
  };

  removeFile = () => {
    this.props.setImageFile(null);
  };

  toggleReplaceOption = () => {
    this.setState({ showReplaceOption: !this.state.showReplaceOption });
  };

  render = () => {
    const dropzoneRef = createRef();
    let title = this.props.title || "Drop your design or screenshot here";
    let showReplaceOption = this.state.showReplaceOption;
    let supportMultipleSources = this.props.supportMultipleSources;
    return (
      <Dropzone ref={dropzoneRef} onDrop={this.processFile}>
        {({ getRootProps, getInputProps }) => (
          <div className={styles.imageUploaderContainer} {...getRootProps()}>
            <input {...getInputProps()} />
            {this.props.file ? (
              <div
                className={styles.backgroundContainer}
                style={{
                  background: `url(${this.props.file})`,
                }}
              ></div>
            ) : (
              <>
                <img
                  src={imageIcon}
                  alt="image icon"
                  style={{
                    width: "24px",
                    height: "auto",
                    marginBottom: "6px",
                  }}
                />
                <h6 className={styles.emptyStateTitle}>Drop image to upload</h6>
                <span className={styles.emptyStateSubtitle}>
                  Available formats .jpg, .png, .svg only
                </span>
                <button className={styles.browseButton}>Browse files</button>
              </>
            )}
          </div>
        )}
      </Dropzone>
    );
  };
}
