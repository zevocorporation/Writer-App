import React from 'react'
import { Colors } from '../styles/base'

function Card(props) {
   const styles = {
      card: {
         backgroundColor: props.color ? props.color : Colors.accent.secondary,
         padding: '16px',
         borderRadius: '8px',
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         textAlign: 'center',
         ...props.style,
      },
   }
   const rendercard = (
      <div key={props.key} style={styles.card} onClick={props.onClick}>
         {props.children}
      </div>
   )
   return rendercard
}

export default Card
