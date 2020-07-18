import React from 'react'

function Input(props) {
  const renderMobileInput = (
    <div>
      <input placeholder='mobile' type='number' value={props.value} />
      <button>send OTP</button>
    </div>
  )

  const renderTextInput = (
    <input placeholder='verification code' type='text' value={props.value} />
  )

  return (
    <div>
      {props.type == 'text' ? renderTextInput : renderMobileInput}
      {props.type == 'text' && renderTextInput}
      {props.type == 'number' && renderTextInput}
    </div>
  )
}

export default Input
