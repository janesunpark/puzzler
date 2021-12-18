// import React from "react";
// import ReactDOM from "react-dom";
// import NavigateBack from "./navigateBack";

// ReactDOM.render(<NavigateBack />, document.getElementById('root'))

import React from 'react';
import './style.css';

function createAccount( { addUser } ) {
    return (
        <div className='modalBackground'>
           <div className='modalContainer'>
           <h1>Create Account</h1>
            <div class="dropbtn">
            <input type="text" id="firstName" name="firstName" required
            minlength="4" maxlength="20" size="10">First name</input>
            <input type="text" id="lastName" name="lastName" required
            minlength="4" maxlength="20" size="10">Last name</input>
            <input type="email" id="email" name="email" required
            minlength="4" maxlength="20" size="10">Email</input>
            <input type="text" id="username" name="username" required
            minlength="4" maxlength="20" size="10">Username</input>
            <input type="password" id="password" name="password" required
            minlength="4" maxlength="20" size="10">Password</input>
            <button onClick={() => {addUser}}>Submit</button>
            </div>
           </div>
        </div>
    )
}

export default createAccount