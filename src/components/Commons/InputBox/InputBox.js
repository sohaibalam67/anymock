import React, { useRef, useState, useEffect } from "react";
import styles from "./InputBox.module.css";

function InputBox({
  value = "",
  placeholder = "",
  modifier = "",
  live = false,
  onChange = (f) => f,
}) {
  const [_value, setValue] = useState("");

  const mounted = useRef();

  useEffect(() => {
    if (!mounted.current) {
      // componentDidMount logic
      mounted.current = true;
      setValue(value);
    } else {
      // componentDidUpdate logic
      setValue(value);
    }
  }, [value]);

  return (
    <div className={styles.container}>
      <input
        className={styles.inputBox}
        onChange={(event) => {
          onChange(event.target.value);
          setValue(event.target.value);
        }}
        onFocus={(event) => {
          event.target.select();
        }}
        onBlur={() => {
          onChange(_value);
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            onChange(_value);
          }
        }}
        placeholder={placeholder}
        value={_value}
      />
      <span className={styles.modifier}>{modifier}</span>
    </div>
  );
}
export default InputBox;
