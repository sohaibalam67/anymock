export const DEFAULT_SELECT_STYLES = {
  control: (provided) => ({
    ...provided,
    borderColor: "#2b2b2b",
    minHeight: "27px",
  }),
  valueContainer: (provided) => ({
    ...provided,
    paddingTop: "0px",
    paddingBottom: "0px",
  }),
  option: (provided) => ({
    ...provided,
    background: "#2b2b2b",
    color: "#fff",
    fontSize: "0.8rem",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#fff",
    fontSize: "0.8rem",
    fontWeight: "600",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#fff",
    fontSize: "0.8rem",
    fontWeight: "600",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    maxHeight: "27px",
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: "4px",
    boxShadow:
      "0 2px 3.4px rgba(0, 0, 0, 0.084),0 5.5px 9.4px rgba(0, 0, 0, 0.12),0 13.3px 22.6px rgba(0, 0, 0, 0.156),0 44px 75px rgba(0, 0, 0, 0.24)",
  }),
};

export const DEFAULT_SELECT_THEME = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: "hotpink",
    primary: "black",
    neutral0: "#2b2b2b",
    neutral5: "#2b2b2b",
    neutral10: "#2b2b2b",
    neutral20: "#2e3740",
    neutral30: "#2b2b2b",
    neutral40: "#2b2b2b",
  },
});
