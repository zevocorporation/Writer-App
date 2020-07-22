import React from 'react'
import { Link } from 'react-router-dom'

import Colors from '../styles/colors'

function Navlinks(props) {
  const styles = {
    navlinks: {
      display: 'flex',
      flexDirection: 'row',
      maxwidth: '50%',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    navlink: {
      color: Colors.accent.secondary,
      margin: '0px 25px',
      textDecoration: 'none',
    },
  }
  const renderNavlink = props.navlinks.map((navlink) => (
    <Link type='link' to={navlink.to} style={styles.navlink} key={navlink.id}>
      {navlink.name}
    </Link>
  ))
  return <div style={styles.navlinks}>{renderNavlink}</div>
}

export default Navlinks
