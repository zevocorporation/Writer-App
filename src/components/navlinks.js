import React from 'react'

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
    },
  }
  const renderNavlink = props.navlinks.map((navlink) => (
    <a style={styles.navlink} key={navlink.id}>
      {navlink.name}
    </a>
  ))
  return <div style={styles.navlinks}>{renderNavlink}</div>
}

export default Navlinks
