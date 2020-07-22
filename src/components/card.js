import React from 'react'
import Colors from '../styles/colors'

function Card(props) {
  const styles = {
    card: {
      backgroundColor: props.color ? props.color : Colors.accent.secondary,
      padding: '16px',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      ...props.style,
    },
  }
  const rendercard = <div style={styles.card}>{props.children}</div>
  return rendercard
}

export default Card
