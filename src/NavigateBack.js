import React, { useState, useEffect } from "react";
import './style.css';
import instructions from './instructions.js';
import solutions from './solutions.js';
import Modal from './Modal';
import CompletedPrompt from './CompletedPrompt';
import "./IncompletePrompt";


function NavigateBack() {
  function navigate(){
    fetch('http://localhost:3001/')
  }
return (
  <div id="board">
    <button onClick={() => navigate()}>Back to Home</button>
    
  </div>
);

};




export default NavigateBack;