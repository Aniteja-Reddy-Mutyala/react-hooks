import React, { useEffect, useState, useReducer, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {useInput} from "./useInput"
import reportWebVitals from "./reportWebVitals";

function App() {
  const [titleProps,resetTitle]=useInput("");
  const [colorProps,resetColor]=useInput("#000000")
  /*const [sound, setSound] = useState("");
  const [color, setColor] = useState("#000000");*/
  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} sounds liks ${colorProps.value}`);
    resetTitle();
    resetColor();
   
  };
  return (
    <>
      <form onSubmit={submit}>
        <input
          {...titleProps}
          type="text"
          placeholder="Sound...."
         
        ></input>
        <input
         {...colorProps}
          type="color"
         
        />
        <button>Add</button>
      </form>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
