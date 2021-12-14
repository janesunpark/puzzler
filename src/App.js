import React, {useState, useEffect} from "react";
import './style.css';
import instructions from './instructions.js';
import colors from './menu.js';

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
      showMenu: false,
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

// function updateState(props) {
//   const [ color, updateColor] = useState();

//   useEffect(() => {
//     console.log('You clicked this square!')
//   });
// }



// const showMenu = e => {
//   e.preventDefault()
//   document.getElementById("myDropdown").classList.toggle("show")
//   <div className='dropdown' id='myDropdown'>
//       <button value="Red">Red</button>
//       <button value="Orange">Orange</button>
//       <button value="Yellow">Yellow</button>
//       <button value="YellowGreen">Yellow Green</button>
//   </div>
// };

  // function setColor(color, index) {
  //   updateState({...state, input[index]: color});
  // };


  function toggleMenu(status) {
    // const newState = [...state.showMenu, { status }]
    updateState({...state, showMenu: status});
    if (state.showMenu === true) {showColor()}
  };

  function showColor() {
    const dropdown = [];
    const dropdownColors = Object.keys(colors)
    for (let i = 0; i < dropdownColors.length; i++) {
      dropdown.push(<button className='dropdown-content' id='dropwdown-content' value={`${colors[i]}`}>
      `${colors[i]}`
      </button>)
      }
    return {dropdown};
  }


const squares = [];
for (let i = 0; i < Object.keys(state.input).length; i++) {
  squares.push(
  <button className='box' key={i} index={i}  style={{backgroundColor : state.input[i]}}
  onClick={() => toggleMenu(!state.showMenu)}
  >{i}
   {/* set an onhover, if square is hovered over, the "menu" of color options will render within the square

   toggle function state.showMenu === false ? state.showMenu = true : state.showMenu = false
  
  1. Consider using onHover instead of onClick
    - If box is hovered on, it will display the menu "buttons" within the square
  2. The menu buttons, will change state based on the color selected


  HOVERING THE SQUARE TRIGGERES THE BUTTONS SHOWING (FOR COLOR SELECTION), BASED ON COLOR SELECTION, IT PASSES STATE UP FOR THAT SPECIFIC SQUARE (AT THE INDEX) SO IT ONLY CHANGES THE BOX YOU SELECTED
   */}
  </button>
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
    <h2>Instructions</h2>
    <ol>
    {instructSet}
    </ol>
  </div>
);

};

export default App;