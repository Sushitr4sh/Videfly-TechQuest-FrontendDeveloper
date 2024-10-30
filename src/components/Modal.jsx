import React from "react";

const Modal = ({ children, onClose }) => {
  return (
    <dialog
      open
      onClick={() => onClose(false)}
      className="fixed top-0 left-0 bg-black/40 w-screen h-screen"
    >
      {children}
    </dialog>
  );
};

export default Modal;
