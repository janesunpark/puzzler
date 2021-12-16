import React from 'react'

function IncompletePrompt({ incorrectAnswers, closeModal, clearGame }) {
    let newArr = [];
    for (let i = 0; i < incorrectAnswers.length; i += 1) {
        if (i < incorrectAnswers.length - 1) {
            newArr.push(incorrectAnswers[i] + ', ');
        } else {
            newArr.push(incorrectAnswers[i]);
        }
    }
    return (
        <div className='modalBackground'>
           <div className='modalContainer'>
            {/* <button onClick={() => closeModal()}> X </button> */}
            <div className='title'>
                <h3>Try again!</h3>
            </div>
            <div className='body'>
                <p>You missed Squares { newArr }</p>
            </div>
            <div className='footer'>
                <button onClick={() => closeModal(false)}>Continue</button>
                <button onClick={() => clearGame(false)}>Stop Game</button>
            </div>
           </div>
        </div>
    )
}

export default IncompletePrompt;
