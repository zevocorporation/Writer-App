import React from 'react'

import Colors from '../styles/colors'
function Input(props) {
  const styles = {
    input: {
      padding: '16px',
      backgroundColor: Colors.primaryLight,
      border: 'none',
      borderRadius: '8px',
      fontFamily: 'Quicksand',
      marginTop: '16px',
      marginBottom: '16px',
      minWidth: '280px',
      fontSize: '14px',
    },
  }
  const renderInput = (
    <input
      style={styles.input}
      type='text'
      placeholder={props.placeholder}
      value={props.value}
    />
  )

  return (
    <div>
      {props.type == 'text' && renderInput}
      {props.type == 'number' && renderInput}
      {props.type == 'password' && renderInput}
    </div>
  )
}

export default Input
