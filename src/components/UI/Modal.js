import classes from "./Modal.module.css";
import React from "react";
import reactDom from "react-dom";
const Backdrop = (props) => {
  return <div onClick={props.onHide} className={classes.backdrop} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const PortalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {reactDom.createPortal(<Backdrop onHide={props.onHide} />, PortalElement)}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        PortalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
