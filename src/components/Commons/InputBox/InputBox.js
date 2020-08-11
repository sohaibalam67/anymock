import React, { useRef, useState, useEffect } from "react";
import styles from "./InputBox.module.css";

function InputBox(props) {
  const [value, setValue] = useState("");

  const mounted = useRef();

  useEffect(() => {
    if (!mounted.current) {
      // componentDidMount logic
      mounted.current = true;
      setValue(props.value);
    } else {
      // componentDidUpdate logic
      setValue(props.value);
    }
  }, [props.value]);

  return (
    <div className={styles.container}>
      <input
        className={styles.inputBox}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        onFocus={(event) => {
          event.target.select();
        }}
        onBlur={() => {
          props.onChange(value);
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            props.onChange(value);
          }
        }}
        placeholder={props.placeholder}
        value={value}
      />
      <span className={styles.modifier}>{props.modifier ?? ""}</span>
    </div>
  );
}
export default InputBox;
