import React from "react";
import ReactDOM from "react-dom";

const fName = "Swarna";
const lName = "Sarker";
const currentYear = new Date().getFullYear();
ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Created by {fName + " " + lName}!</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
