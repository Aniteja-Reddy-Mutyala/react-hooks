import React, { use, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {FaStar} from 'react-icons/fa'
import reportWebVitals from './reportWebVitals';
const createArray=(length)=>[
  ...Array(length)]
function Star({selected=false,onSelect}){
  return <FaStar color={selected?"red":"gray"} onClick={onSelect}/>
}
function StarRating({totalStars=5}){
  const [selectedStars,setSelectedStars]=useState(0);
  return (
    <>
  {createArray(totalStars).map((n,i)=>(
    <Star key={i} selected={selectedStars>i} onSelect={()=>setSelectedStars(i+1)}/>
  ))}
  <p>You have selected {selectedStars} stars out of {totalStars}</p>
  </>
)
}
function App(){
 const [checked,setChecked]=useState(false)
  return (
    <>
    <div>
      <input type="checkbox" value={checked} onChange={()=>setChecked((checked)=>!checked)}/>
      <p>{checked?"checked":"not checked"}</p>
      <StarRating totalStars={15}/>
    </div>
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
