import React from 'react'
import { Link } from '../../components/components'
import { Colors } from '../../styles/styles'

function Sidebar(props) {
     const styles = {
          sidebar: {
               backgroundColor: Colors.tertiary,
               position: 'absolute',
               top: 0,
               left: 0,
               zIndex: -1,
               padding: '12vh 16px 16px 16px',
               maxWidth: '15%',
               minWidth: '10%',
               height: '85.6vh',
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
