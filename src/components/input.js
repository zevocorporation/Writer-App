import React from 'react';

function Input(props) {

  
        
    return (
<<<<<<< HEAD
           <div>
                {(props.type=='text') ? renderTextInput : renderMobileInput}
           </div>
=======
       
            <div>
            <input placeholder='mobile' type='number' value={props.Input} />
            <button>send OTP</button><br></br>
            <input placeholder='verification code' type='text' value={props.Input} /><br></br>
            <input placeholder='New Password ' type='text' value={props.Input} /><br></br>
            <input placeholder='Confirm password' type='text' value={props.Input} /><br></br>
            <button>signup</button> 
            <p>Already have a account?<a href=''>Log In</a></p>
        
        
            
        </div>
>>>>>>> 5e8d2d69166cc6609009be63dbb2dfdeedaff758
    )
}

export default Input;
