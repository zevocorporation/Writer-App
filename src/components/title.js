import React from 'react'

import Typography from '../styles/typography'

function Title(props) {
  const category = 'title'
  return (
    <h1 onClick={props.onClick} style={Typography(props, category)}>
      {props.children}
    </h1>
  )
}

export default Title
