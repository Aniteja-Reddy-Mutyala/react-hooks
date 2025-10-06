import React, { useEffect, useState,useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

function App(){
 const [checked,toggle]=useReducer((checked)=>!checked,false)
 return (
  <>
  <input type="checkbox" value={checked} onChange={toggle}/>
  {checked?"checked":"not checked"}
  </>
 )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
