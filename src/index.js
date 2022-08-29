import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div style={{position:'absolute',bottom:"5px",right:'20px',color:'white',zIndex:999,fontSize:'14px'}}>TEXT NEEDS TO BE UPDATED <a style={{color:'white'}} href="https://github.com/MathewBiddle/gbif_globe" target="_blank">GitHub Repository</a></div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
