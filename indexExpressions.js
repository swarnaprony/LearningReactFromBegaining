import React from "react";
import ReactDOM from "react-dom";

const fName = "Swarna";
const lName = "Sarker"
const luckyNumber = 13;
ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <h2>How are you doing {`{${fName} ${lName}}`}?</h2>
    <p>My Lucky number is {luckyNumber}.</p>
    <p>Let's generate a random Number: {Math.floor(Math.random() * 10)}.</p>
    <p>And my age is {3 + 0}</p>
  </div>,
  document.getElementById("root")
);