import React from 'react'
import { Colors } from '../styles/base'
import ReactLoading from 'react-loading'

function Button(props) {
   const styles = {
      button: {
         display: 'flex',
         padding: '12px 5%',
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: props.color ? props.color : Colors.secondary,
         color: Colors.accent.secondary,
         border: 'none',
         borderRadius: '8px',
         fontFamily: 'Quicksand',
         fontSize: '16px',
         marginTop: '16px',
         marginBottom: '16px',
         maxWidth: '100%',
         minWidth: '120px',
         outline: 'none',
         cursor: 'pointer',
         ...props.style,
      },
   }
   const renderbutton = (
      <button
         type={props.type}
         id={props.id}
         onClick={props.onClick}
         style={styles.button}
      >
         {props.name}
         {props.loading && (
            <div style={{ margin: '0px 20px' }}>
               <ReactLoading
                  type='spin'
                  color='white'
                  width='22px'
                  height='22px'
               />
            </div>
         )}
      </button>
   )

   return renderbutton
}

export default Button
