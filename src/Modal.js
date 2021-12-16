import React from 'react';
import './style.css';

function Modal( { closeModal, checkAnswer } ) {
    return (
        <div className='modalBackground'>
           <div className='modalContainer'>
            {/* <button onClick={() => closeModal()}> X </button> */}
            <div className='title'>
                <h3>Are you sure you want to submit?</h3>
            </div>
            <div className='body'>
            </div>
            <div className='footer'>
                <button onClick={() => checkAnswer()}>Yes</button>
                <button id='cancelBtn' onClick={() => closeModal()}>No</button>
            </div>
           </div>
        </div>
    )
}

export default Modal
