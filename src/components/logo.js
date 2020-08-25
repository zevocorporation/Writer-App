import React from 'react'

function Logo(props) {
  return <img style={{ height: props.height? props.height :  '40px' }} src={props.image} alt='logo' />
}

export default Logo
