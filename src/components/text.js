import React from 'react'
import Typography from '../styles/typography'

function Text(props) {
  const category = 'text'
  const style = props.style
  return (
    <p onClick={props.onClick} style={Typography(props, category, style)}>
      {props.children}
    </p>
  )
}

export default Text
