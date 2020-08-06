import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Colors } from '../../styles/base'

import { UserContext } from '../../store/contexts'

function Navlinks(props) {
   const { dispatch } = useContext(UserContext)

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
   const logoutHandler = () => {
      localStorage.setItem('token', JSON.stringify({}))
      dispatch({
         type: 'LOG_OUT',
      })
   }
   const renderNavlink = props.navlinks.map((navlink) =>
      navlink.name === 'Logout' ? (
         <Link
            to={navlink.to}
            type='link'
            onClick={() => logoutHandler()}
            style={styles.navlink}
            key={navlink.id}
         >
            {navlink.name}
         </Link>
      ) : (
         <Link
            type='link'
            to={navlink.to}
            onClick={navlink.onClick}
            style={styles.navlink}
            key={navlink.id}
         >
            {navlink.name}
         </Link>
      )
   )
   return <div style={styles.navlinks}>{renderNavlink}</div>
}

export default Navlinks
