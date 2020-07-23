import React from "react";
function TemplateCard(props) {
  return (
    <div style={styles.container}>
      <img
        src={props.thumbnail}
        style={{
          height: "150px",
          width: "100%",
          objectFit: "cover",
          borderRadius: "6px",
        }}
      />
    </div>
  );
}

const styles = {
  container: {
    marginLeft: "12px",
    marginRight: "12px",
    marginBottom: "12px",
    height: "150px",
    backgroundColor: "#293742",
    borderRadius: "6px",
  },
};

export default TemplateCard;
