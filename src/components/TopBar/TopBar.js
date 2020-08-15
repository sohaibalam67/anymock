import React, { Component } from "react";
import styles from "./TopBar.module.css";
import { connect } from "react-redux";
import { downloadImage } from "../../helpers/image";
import Menu from "../Commons/Menu";
import Modal from "../Commons/Modal";
import DropdownItem from "../Commons/Dropdown/DropdownItem";
import Dropdown from "../Commons/Dropdown";
import ActionButton from "./ActionButton";
import { updateZoom } from "../../store/actions/canvas";
import Heading from "../Commons/Heading";
import Slider from "@material-ui/core/Slider";
import { ReactComponent as ImportIcon } from "../../assets/images/icons/app/import.svg";
import { ReactComponent as SaveIcon } from "../../assets/images/icons/app/save.svg";
import { ReactComponent as ResetIcon } from "../../assets/images/icons/app/refresh.svg";
import { ReactComponent as ShortcutIcon } from "../../assets/images/icons/app/book.svg";

const logo = require("../../assets/images/logo.svg");

function ExportButton() {
  return <button className={styles.exportButton}>Export Design</button>;
}

function Separator() {
  return <div className={styles.separator}></div>;
}

class TopBar extends Component {
  state = {
    hotkeysModalOpen: true,
  };

  openHotkeysModal = () => {
    this.setState({ hotkeysModalOpen: true });
  };

  closeHotkeysModal = () => {
    this.setState({ hotkeysModalOpen: false });
  };

  changeZoom = (event, value) => {
    this.props.updateZoom(value);
    this.props.canvas.calcOffset();
  };

  render() {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.leftContainer}>
            <div className={styles.brandContainer}>
              <img src={logo} alt="anymock logo" className={styles.logo} />
              <span className={styles.proBadge}>PRO</span>
            </div>
          </div>
          <div className={styles.middleContainer}>
            <ActionButton
              icon={<ImportIcon width={16} height={16} />}
              title="Import"
            />
            <ActionButton
              icon={<SaveIcon width={16} height={16} />}
              title="Save"
            />
            <Separator />
            <ActionButton
              icon={<ResetIcon width={16} height={16} />}
              title="Reset"
            />
            <ActionButton
              icon={<ShortcutIcon width={16} height={16} />}
              title="Hotkeys"
              onClick={this.openHotkeysModal}
            />
            <Separator />
            <div className={styles.controlsContainer}>
              <span className={styles.zoomLabel}>{this.props.zoom}%</span>
              <div className={styles.sliderContainer}>
                <Slider
                  value={this.props.zoom}
                  min={10}
                  step={1}
                  max={100}
                  onChange={this.changeZoom}
                />
              </div>
            </div>
            <Separator />
            🚀
            <span
              style={{ color: "#fff", fontSize: "0.8rem", marginLeft: "5px" }}
            >
              Looks great!
            </span>
          </div>
          <div className={styles.rightContainer}>
            <Menu component={<ExportButton />} style={{ marginRight: "12px" }}>
              <Dropdown translateX={-10} width={130}>
                <DropdownItem
                  onClick={() => {
                    downloadImage(this.props.canvas, "png");
                  }}
                >
                  Download as .png
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    downloadImage(this.props.canvas, "jpeg");
                  }}
                >
                  Download as .jpeg
                </DropdownItem>
              </Dropdown>
            </Menu>
          </div>
        </div>

        <Modal
          open={this.state.hotkeysModalOpen}
          onClose={this.closeHotkeysModal}
        >
          <div className={styles.hotkeysModalContainer}>
            <Heading
              style={{
                color: "#000",
                textAlign: "center",
                paddingBottom: "15px",
              }}
            >
              KEYBOARD SHORTCUTS
            </Heading>
            <div className={styles.row}>
              <div className={styles.keyShortcut}>
                <kbd>backspace</kbd>&nbsp; or &nbsp;<kbd>delete</kbd>
              </div>
              <div className={styles.shortcutDescription}>
                Delete selected items
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.keyShortcut}>
                <kbd>cmd</kbd>&nbsp; or &nbsp;<kbd>ctrl</kbd>&nbsp; + &nbsp;
                <kbd>a</kbd>
              </div>
              <div className={styles.shortcutDescription}>
                Select all items on the canvas
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.keyShortcut}>
                <kbd>cmd</kbd>&nbsp; or &nbsp;<kbd>ctrl</kbd>&nbsp; + &nbsp;
                <kbd>+</kbd>
              </div>
              <div className={styles.shortcutDescription}>Zoom in</div>
            </div>
            <div className={styles.row}>
              <div className={styles.keyShortcut}>
                <kbd>cmd</kbd>&nbsp; or &nbsp;<kbd>ctrl</kbd>&nbsp; + &nbsp;
                <kbd>-</kbd>
              </div>
              <div className={styles.shortcutDescription}>Zoom out</div>
            </div>
            <div className={styles.row}>
              <div className={styles.keyShortcut}>
                <kbd>cmd</kbd>&nbsp; or &nbsp;<kbd>ctrl</kbd>&nbsp; + &nbsp;
                <kbd>]</kbd>
              </div>
              <div className={styles.shortcutDescription}>
                Bring selected item forward
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.keyShortcut}>
                <kbd>cmd</kbd>&nbsp; or &nbsp;<kbd>ctrl</kbd>&nbsp; + &nbsp;
                <kbd>[</kbd>
              </div>
              <div className={styles.shortcutDescription}>
                Send selected item backward
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  zoom: state.canvas.zoom,
  canvas: state.canvas.canvas,
});

const mapDispatchToProps = (dispatch) => ({
  updateZoom: (zoom) => dispatch(updateZoom(zoom)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
