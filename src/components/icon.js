import React from 'react'
function Icon(props) {
   return (
      <img
         style={props.style}
         alt={props.icon}
         src={props.icon}
         icon={props.icon}
         onClick={props.onClick}
      />
   )
}

export default Icon
