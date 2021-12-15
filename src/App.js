import React, {useState, useEffect} from "react";
import './style.css';
import instructions from './instructions.js';
import solutions from './solutions.js';

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

  function checkAnswer(puzzleId) {
    const correctAnswers = Object.values(solutions[puzzleId]);
    const userInput = Object.values(state.input);

    
    for (let i = 0; i < userInput.length; i += 1) {
      if (userInput[i] !== correctAnswers[i]) {
        alert(`Square ${i} is incorrect!`);
      } else {
       alert(`Great job! You solved Puzzle ${puzzleId}!`);
      }
    }
    updateState({...state, isCompleted: true});
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
    {squares}
    {state.clickedSquare !== 99 && (
    <div className="dropdown">
      <ul>
        <button onClick={() => setColor('Red', state.clickedSquare)}>Red</button>
        <button onClick={() => setColor('Orange', state.clickedSquare)}>Orange</button>
        <button onClick={() => setColor('Yellow', state.clickedSquare)}>Yellow</button>
        <button onClick={() => setColor('YellowGreen', state.clickedSquare)}>Yellow Green</button>
        <button onClick={() => setColor('Green', state.clickedSquare)}>Green</button>
        <button onClick={() => setColor('Blue', state.clickedSquare)}>Blue</button>
        <button onClick={() => setColor('DarkBlue', state.clickedSquare)}>Dark Blue</button>
        <button onClick={() => setColor('Purple', state.clickedSquare)}>Purple</button>
        <button onClick={() => setColor('Pink', state.clickedSquare)}>Pink</button>
      </ul>
    </div>
  )}
    <button className='btn' onSubmit={() => checkAnswer(state.puzzleId)}>Submit</button>
    <h2>Instructions</h2>
    <ol>
    {instructSet}
    </ol>
  </div>
);

};

export default App;