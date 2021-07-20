import React, { useState } from "react";
import "./styles.css";
import ContactCard from "./Components/ContactCard/Contactcard";

const listItems = [
  {
    image: "https://via.placeholder.com/150",
    contactTitle: "Site Name",
    contactAddress: "Site Addressasda",
    shortDesc: "Main Contact"
  },
  {
    image: "https://via.placeholder.com/150",
    contactTitle: "Site Name2",
    contactAddress: "Site Address2",
    shortDesc: "Main Contact2"
  },
  {
    image: "https://via.placeholder.com/150",
    contactTitle: "Site Name3",
    contactAddress: "Site Address3",
    shortDesc: "Main Contact3"
  }
];

export default function App() {
  return (
    <div className="App">
      {listItems.map((list) => {
        return (
          <React.Fragment key={list.contactTitle}>
            <ContactCard
              image={list.image}
              contactTitle={list.contactTitle}
              contactAddress={list.contactAddress}
              shortDesc={list.shortDesc}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}
