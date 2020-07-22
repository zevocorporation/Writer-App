import React from 'react'
import Colors from '../styles/colors'

function Button(props) {
  const styles = {
    button: {
      padding: '12px 5%',
      backgroundColor: props.color ? props.color : Colors.secondary,
      color: Colors.accent.secondary,
      border: 'none',
      borderRadius: '8px',
      fontFamily: 'Quicksand',
      fontSize: '16px',
      marginTop: '16px',
      marginBottom: '16px',
      maxWidth: '100%',
      minWidth: '280px',
      outline: 'none',
      cursor: 'pointer',
      ...props.style,
    },
  }
  const renderbutton = <button style={styles.button}>{props.name}</button>

  return renderbutton
}

export default Button
