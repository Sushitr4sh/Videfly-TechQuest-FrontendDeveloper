import React from "react";

const Modal = ({ onClose }) => {
  return (
    <>
      <dialog
        open
        onClick={() => onClose(false)}
        className="fixed top-0 left-0 bg-black/40 w-full h-screen"
      />
    </>
  );
};

export default Modal;
