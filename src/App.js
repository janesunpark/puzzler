import React, { useState, useEffect } from "react";
import './style.css';
import instructions from './instructions.js';
import solutions from './solutions.js';
import Modal from './Modal';
import CompletedPrompt from './CompletedPrompt';
import "./IncompletePrompt";

// const express = require('express');
// App.use(express.json());

// //displays 

//  app.get('/', function (req, res) {
//    res.send('<>');
//  });


function App() {
  const [state, updateState] = useState(
    {
      puzzleId: 0,
      userId: '',
      isCompleted: false,
      clickedSquare: 99,
      openModal: false,
      incorrectAnswers: [],
      input: {
        0: '',
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '', 
        7: '',
        8: '',
      }
    }
  );


  function setColor(color, idx) {
    updateState({...state, clickedSquare: 99, input: {...state.input, [idx]: color}});
    
  };

  function showColor(idx) {
  updateState({...state, clickedSquare: idx})
  };

  function openModal(modalStatus) {
    updateState({...state, isCompleted: false, incorrectAnswers: [], openModal: modalStatus});
  }

  function clearGame(modalStatus) {
    const newGame = {
      0: '',
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '', 
      7: '',
      8: '',
    }
    updateState({ ...state, isCompleted: false, incorrectAnswers: [], openModal: modalStatus, input: newGame });
  }

  const correct = Object.values(solutions[state.puzzleId]);

  function checkAnswer() {

    let userInput = {
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false
    }

    for (let i = 0; i < correct.length; i += 1) {
      if (state.input[i] === correct[i]) {
        userInput[i] = true;
      }
    }


    const incorrectInput = [];
    for (const key in userInput) {
      if (userInput[key] === false) {
        incorrectInput.push(key);
      }
    };
    

    if (incorrectInput[0]) {
      updateState({...state, incorrectAnswers: incorrectInput});
    } else {
      updateState({...state, incorrectAnswers: [], isCompleted: true}); 
    }
    
   }


  
const squares = [];
for (let i = 0; i < Object.keys(state.input).length; i++) {
  squares.push(
  <div className='dropbtn' key={i} index={i}  style={{backgroundColor : state.input[i]}}
  onClick={() => showColor(i)}>{i}
  </div>
  );
}

const instructArr = Object.values(instructions[state.puzzleId]);


const instructSet = [];
for (let i = 0; i < instructArr.length; i++) {
    instructSet.push(<li key={i} index={i}>{instructArr[i]}</li>);
}

return (
  <div id="board">
    {state.openModal && <Modal closeModal={openModal} checkAnswer={checkAnswer} />}
    {state.isCompleted && state.openModal && !state.incorrectAnswers[0] && <CompletedPrompt puzzleId={state.puzzleId} closeModal={openModal} clearGame={clearGame}/>}
    {state.incorrectAnswers[0] && state.openModal && <IncompletePrompt closeModal={openModal} incorrectAnswers={state.incorrectAnswers} clearGame={clearGame}/>}
    <h2>Puzzle {state.puzzleId}</h2>
    <div><button key={state.puzzleId} index={state.userId} onClick={()=>Date()}>Timer</button></div>
    {squares}
    {state.clickedSquare !== 99 && (
    <div className="dropdown">
      <ul>
        <button onClick={() => setColor('Crimson', state.clickedSquare)}>Red</button>
        <button onClick={() => setColor('Orange', state.clickedSquare)}>Orange</button>
        <button onClick={() => setColor('Yellow', state.clickedSquare)}>Yellow</button>
        <button onClick={() => setColor('LightGreen', state.clickedSquare)}>Yellow Green</button>
        <button onClick={() => setColor('MediumSeaGreen', state.clickedSquare)}>Green</button>
        <button onClick={() => setColor('Aqua', state.clickedSquare)}>Sky Blue</button>
        <button onClick={() => setColor('DodgerBlue', state.clickedSquare)}>Blue</button>
        <button onClick={() => setColor('DarkOrchid', state.clickedSquare)}>Purple</button>
        <button onClick={() => setColor('Violet', state.clickedSquare)}>Pink</button>
      </ul>
    </div>
  )}
    <button className='btn' onClick={() => openModal(!state.openModal)}>Submit</button>
    <h2>Instructions</h2>
    <ol>
    {instructSet}
    </ol>
  </div>
);

};
import IncompletePrompt from "./IncompletePrompt";



export default App;