import React from 'react'
import { Logo } from '../../components/index'
import { Navlinks } from './index'

function Navbar(props) {
   const styles = {
      navbar: {
         display: 'flex',
         flexDirection: 'row',
         position: 'fixed',
         backgroundColor: props.color,
         width: '100%',
         paddingLeft: '16px',
         paddingRight: '16px',
         paddingTop: '16px',
         paddingBottom: '16px',
         justifyContent: 'space-between',
         alignItems: 'center',
         zIndex: 1,
      },
   }

   return (
      <div style={styles.navbar}>
         <Logo image={props.logo} />
         <Navlinks navColor={props.navColor} navlinks={props.navlinks} />
      </div>
   )
}

export default Navbar
