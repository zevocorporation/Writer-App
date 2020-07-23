import React from 'react'

import { Colors } from '../../styles/styles'

import ImageLogo from '../../assets/logo.svg'

import { Logo } from '../../components/components'
import { Navlinks } from './navigations'

function Navbar(props) {
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

     return (
          <div style={styles.navbar}>
               <Logo image={ImageLogo} />
               <Navlinks navlinks={props.navlinks} />
          </div>
     )
}

export default Navbar
