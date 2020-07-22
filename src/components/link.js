import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import Colors from '../styles/colors'

function Link(props) {
  const styles = {
    link: {
      color: props.color ? props.color : Colors.accent.tertiary,
      fontSize: '14px',
      margin: '5px',
      textDecoration: 'none',
      ...props.style,
    },
  }
  const renderlink = (
    <ReactLink to={props.to} style={styles.link}>
      {props.children}
    </ReactLink>
  )
  return renderlink
}

export default Link
