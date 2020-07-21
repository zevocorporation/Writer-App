import React from 'react'

function Input(props) {
  return (
    <div>
      <input placeholder='mobile' type='number' value={props.Input} />
      <button>send OTP</button>
      <br></br>
      <input placeholder='verification code' type='text' value={props.Input} />
      <br></br>
      <input placeholder='New Password ' type='text' value={props.Input} />
      <br></br>
      <input placeholder='Confirm password' type='text' value={props.Input} />
      <br></br>
      <button>signup</button>
      <p>
        Already have a account?<a href=''>Log In</a>
      </p>
    </div>
  )
}

export default Input
