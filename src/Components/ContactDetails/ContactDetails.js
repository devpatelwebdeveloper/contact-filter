import React, { useState, useEffect, Suspense } from "react";
import ReactDom from "react-dom";
import "./ContactDetails.css";

const ContactDetails = ({ open, details, onClose }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="contactFullDetails">
        <button onClick={onClose}>Close</button>
        {details}
      </div>
    </>,
    document.getElementById("root")
  );
};

export default ContactDetails;
