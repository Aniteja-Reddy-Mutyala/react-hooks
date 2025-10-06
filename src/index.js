import React, { useEffect, useState, useReducer } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

function App() {
  const initialState = {
    message: "Hi",
  };
  function reducer(state, action) {
    switch (action.type) {
      case "yell":
        return {
          message: `HEY!!! I just said ${state.message}`,
        };
        case "whispering":
          return {
            message:`excuse me. I just said ${state.message}`
          }
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>Message:{state.message}</p>
      <button onClick={()=>dispatch({type:"yell"})}>YELL</button>
      <button onClick={()=>dispatch({type:"whispering"})}>Whisper</button>
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
