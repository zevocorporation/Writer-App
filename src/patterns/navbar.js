import React from 'react'

import Colors from '../styles/colors'

import ImageLogo from '../assets/logo.svg'

import Logo from '../components/logo'
import Navlinks from '../components/navlinks'

function Navbar() {
  const styles = {
    navbar: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: Colors.primary,
      maxWidth: '100%',
      paddingLeft: '16px',
      paddingRight: '16px',
      paddingTop: '16px',
      paddingBottom: '16px',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  }
  const navlinks = [
    {
      id: 1,
      name: 'Login',
      to: '/login',
    },
    {
      id: 2,
      name: 'Signup',
      to: '/signup',
    },
  ]
  return (
    <div style={styles.navbar}>
      <Logo image={ImageLogo} />
      <Navlinks navlinks={navlinks} />
    </div>
  )
}

export default Navbar
