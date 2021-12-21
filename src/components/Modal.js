import React from "react";

const MODAL_STYLES = {
  position: "fixed",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#D3D3D3",
  padding: "2%",
  zIndex: 1000,
  opacity: 0.9,
  border: "0.1em solid #f5fcff",
  borderRadius: "2em",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 400,
  left: 250,
  right: 250,
  bottom: 400,
  backgroundColor: "rgba(0,0,0, 0.7)",
  borderRadius: "11em",
  zIndex: 1000,
};

const Modal = ({ children, open, onClose }) => {
  if (!open) return null;
  return (
    <>
      {/* <div style={OVERLAY_STYLES}></div> */}

      <div class="closeButton" style={MODAL_STYLES}>
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </>
  );
};

export default Modal;
