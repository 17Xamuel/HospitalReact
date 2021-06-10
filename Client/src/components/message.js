import React from "react";
import screen from "../data/responsive";

export default function AlertMessage(props) {
  return (
    <div className="message-ctr" style={styles.message_ctr}>
      <div className="message">{props.content}</div>
      <div className="message-icon">
        <i className="lar la-times-circle"></i>
      </div>
    </div>
  );
}
const styles = {
  message_ctr: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: screen.width * 0.2,
    backgroundColor: "red",
    color: "white",
    position: "absolute",
    top: "15px",
    zIndex: "50",
  },
};
