import React from 'react'
import { Link } from '../../components/index'
import { Colors } from '../../styles/base'

function Sidebar(props) {
   const styles = {
      sidebar: {
         backgroundColor: Colors.tertiary,
         position: 'absolute',
         top: 52,
         left: 0,
         padding: '16px',
         width: '12vw',
         height: '87.5vh',
      },
   }
   return (
      <div style={styles.sidebar}>
         <Link
            to='/abstracts'
            style={{
               color: Colors.accent.secondary,
               fontSize: '2.5vh',
               fontWeight: 580,
            }}
         >
            Abstracts
         </Link>
      </div>
   )
}

export default Sidebar
