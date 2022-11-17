import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div style={{position:'absolute',top:"5px",center:'100px',color:'white',zIndex:999,fontSize:'14px'}}><h1>Ocean Biodiversity Information System (OBIS) ES50 Indicator</h1> (in development)</div>
    <div style={{position:'absolute',bottom:"30px",right:'20px',color:'white',zIndex:999,fontSize:'14px'}}><img src="https://github.com/MathewBiddle/globe/raw/main/images/globe/h3_legend.jpg" alt="Legend" /></div>
    <div style={{position:'absolute',bottom:"5px",right:'20px',color:'white',zIndex:999,fontSize:'14px'}}>TEXT NEEDS TO BE UPDATED <a style={{color:'white'}} href="https://github.com/MathewBiddle/gbif_globe" target="_blank">GitHub Repository</a></div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
