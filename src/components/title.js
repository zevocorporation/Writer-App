import React from 'react'

import Typography from '../styles/typography'

function Title(props) {
  const category = 'title'
  const style = props.style
  return (
    <h1 onClick={props.onClick} style={Typography(props, category, style)}>
      {props.children}
    </h1>
  )
}

export default Title
