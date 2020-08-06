import React from 'react'

function Backdrop(props) {
   const styles = {
      card: {
         backgroundColor: 'rgba(22, 22, 22, 0.72)',
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'center',
         position: 'absolute',
         top: 0,
         left: 0,
         right: 0,
         bottom: 0,
         Height: '100vh',
         maxWidth: '100vw',
         padding: '0px',
         zIndex: 1,
         overflow: 'none',
         ...props.style,
      },
   }
   const rendercard = <div style={styles.card}>{props.children}</div>
   return rendercard
}

export default Backdrop
