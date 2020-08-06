import React from 'react'
import { Colors } from '../../styles/base'

import { Backdrop, Title, Input, Button } from '../../index'

function Modal(props) {
   const styles = {
      alert: {
         backgroundColor: props.color ? props.color : Colors.accent.secondary,
         padding: '32px',
         borderRadius: '8px',
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         ...props.style,
      },
   }
   const renderModal = (
      <Backdrop>
         <div style={styles.alert}>
            <Title color={Colors.secondary}>Select Subject</Title>
            <Input type='text' />
            <div
               style={{
                  padding: '0px',
                  display: 'flex',
                  width: '110%',
                  justifyContent: 'space-around',
               }}
            >
               <Button name='Create' onClick={props.onClick} />
            </div>
         </div>
      </Backdrop>
   )
   return renderModal
}

export default Modal
