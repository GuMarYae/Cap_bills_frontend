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
        {/* <button className="bg-red-500 px-2 py-1 rounded-md text-white font-semibold" onClick={onClose}>close</button> */}
        <button onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </button>
        {children}
      </div>
    </>
  );
};

export default Modal;


