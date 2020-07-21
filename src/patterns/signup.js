import React from 'react';

function Person(props){

    return(
        <div>
            <center>
            <input placeholder='mobile' type='number' value={props.Input} />
            <button>send OTP</button><br></br>
            <input placeholder='verification code' type='text' value={props.Input} /><br></br>
            <input placeholder='Password ' type='text' value={props.Input} /><br></br>
            <input placeholder='Confirm password' type='text' value={props.Input} /><br></br>
            <button>signup</button> 
            </center>
            <p>Already have a account?<a href=''>Sign In</a></p>
        </div>
    )
}
export default Person;