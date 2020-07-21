import React from 'react'
import Colors from '../styles/colors'

function Button(props) {
  const styles = {
    button: {
      padding: '16px',
      backgroundColor: props.color ? props.color : Colors.secondary,
      color: Colors.accent.secondary,
      border: 'none',
      borderRadius: '8px',
      fontFamily: 'Quicksand',
      fontSize: '16px',
      marginTop: '16px',
      marginBottom: '16px',
      minWidth: '280px',
      ...props.style,
    },
  }
  const renderbutton = <button style={styles.button}>{props.name}</button>

  return renderbutton
}

export default Button
