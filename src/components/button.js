import React from 'react'
import { Colors } from '../styles/base'
import ReactLoading from 'react-loading'

function Button(props) {
   const styles = {
      button: {
         display: 'flex',
         flexWrap: 'wrap',
         padding: '12px 32px',
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
         onClick={
            props.target
               ? () => {
                    props.newWindow ? window.open(props.target) : window.location.href = props.target
                 }
               : props.onClick
         }
         style={styles.button}
         disabled={props.disabled}
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
