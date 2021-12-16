import React from 'react'

function CompletedPrompt( { puzzleId, closeModal, clearGame } ) {
    return (
     <div className='modalBackground'>
        <div className='modalContainer'>
         {/* <button onClick={() => closeModal()}> X </button> */}
         <div className='title'>
             <h3>Great job! You solved Puzzle {puzzleId}!</h3>
         </div>
         <div className='body'>
             <p>Create an account to play again!</p>
         </div>
         <div className='footer'>
             <button onClick={() => closeModal(false)}>Create Account</button>
             <button onClick={() => closeModal(false)}>No Thanks</button>
         </div>
        </div>
     </div>
    )
}

export default CompletedPrompt;
