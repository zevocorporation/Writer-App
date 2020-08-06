import React from 'react'
import { Typography } from '../styles/base'

function Text(props) {
   const category = 'text'
   const style = props.style

   const renderText = (
      <p onClick={props.onClick} style={Typography(props, category, style)}>
         {props.children}
      </p>
   )

   return renderText
}

export default Text
