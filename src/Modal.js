import React from 'react'

function Modal() {
    return (
        <div className='modalBackground'>
           <div className='modalContainer'>
            <button> X </button>
            <div className='title'>
                <h3>Are you sure you want to submit?</h3>
            </div>
            <div className='body'>
            </div>
            <div className='footer'>
                <button>Yes</button>
                <button>No</button>
            </div>
           </div>
        </div>
    )
}

export default Modal
