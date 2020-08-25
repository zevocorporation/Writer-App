import React, { useContext } from 'react'
import { Link } from '../../components/index'
import { Colors } from '../../styles/base'
import { DeviceContext } from '../../store/contexts/index'

function Sidebar(props) {
   const device = useContext(DeviceContext)

   const styles = {
      sidebar: {
         backgroundColor: Colors.primary,
         display: 'flex',
         flexDirection: 'column',
         padding: '16px',
         width: '15vw',
         height: '100%',
         position: 'fixed',
         marginTop: '52px',
      },
      mobar: {
         backgroundColor: Colors.primary,
         width: '100%',
         display: 'flex',
         paddingTop: '78px',
      },

      link: {
         color: Colors.accent.secondary,
         backgroundColor: Colors.secondary,
         padding: '8px 16px',
         borderRadius: '5px',
         fontSize: '14px',
         fontWeight: 580,
         margin: '16px',
         textAlign: 'center',
      },
   }

   return (
      <div style={device === 'mobile' ? styles.mobar : styles.sidebar}>
         <Link to='/' style={styles.link}>
            Dashboard
         </Link>
         <Link to='/abstracts' style={styles.link}>
            Abstracts
         </Link>
      </div>
   )
}

export default Sidebar
