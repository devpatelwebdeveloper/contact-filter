import React, { useState, useEffect, Suspense } from "react";
import ReactDom from "react-dom";
import "./ContactDetails.css";
import { phoneicon, emailicon, addressicon, closeicon } from "./icons";

const ContactDetails = ({ open, details, onClose, image }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="contactFullDetails">
        <div className="nameDiv" style={{ backgroundImage: `url('${image})'` }}>
          <div className="name">Sarah Connor</div>
        </div>
        <div className="phoneDiv">
          <div className="addressIcons">{phoneicon}</div>
          <div>(321) 555–1234</div>
        </div>
        <div className="emailDiv">
          <div className="addressIcons">{emailicon}</div>
          <div>sarah@sky.net</div>
        </div>
        <div className="addressDiv">
          <div className="addressIcons">{addressicon}</div>
          <div>1419 Westwood Blvd, LA</div>
        </div>
        <button className="closeBtn" onClick={onClose}>
          {closeicon}
        </button>
        {details}
      </div>
    </>,
    document.getElementById("root")
  );
};

export default ContactDetails;
