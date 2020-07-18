import React from 'react';

function Password(props){

    return(
        <div>
            <center>
            <input placeholder='mobile' type='number' value={props.value} />
            <button>send OTP</button><br></br>
            <input placeholder='verification code' type='text' value={props.value} /><br></br>
            <input placeholder='New Password' type='text' value={props.value} /><br></br>
            <input placeholder='Confirm password' type='text' value={props.value} /><br></br>
            <button>signup</button> 
            </center>
            <p>Already have a account?<a href=''>Sign In</a></p>
        </div>
    )
}
export default Password;