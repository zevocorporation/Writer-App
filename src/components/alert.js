import React from 'react'
import { Colors } from '../styles/base'

import { Backdrop, Title, Text, Button, Icon } from '.'

import { SuccessIcon, ErrorIcon, WarnIcon } from '../assets/assets'

function Alert(props) {
   const styles = {
      alertModal: {
         backgroundColor: props.color ? props.color : Colors.accent.secondary,
         padding: '32px',
         borderRadius: '8px',
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         ...props.style,
      },
      alertMessage: {
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
      },
      alertMessageText: {
         textAlign: 'center',
         padding: '16px',
      },
      modalControls: {
         padding: '0px',
         display: 'flex',
         width: '110%',
         justifyContent: 'space-around',
      },
   }
   const renderModal = (
      <Backdrop>
         <div style={styles.alertModal}>
            <Icon
               icon={
                  (props.type === 'ERROR_MESSAGE_MODAL' && ErrorIcon) ||
                  (props.type === 'WARN_MESSAGE_MODAL' && WarnIcon) ||
                  (props.type === 'SUCCESS_MESSAGE_MODAL' && SuccessIcon)
               }
               style={{ height: '80px' }}
            />
            <Title color={Colors.secondary}></Title>
            <Text>Login success</Text>
            <div style={styles.modalControls}>
               <Button style={{ width: '100px' }} name='Okay' />
               <Button color={Colors.alert.error} name='Delete' />
            </div>
         </div>
      </Backdrop>
   )

   const renderMessage = (
      <div style={styles.alertMessage}>
         <Icon
            icon={
               (props.type === 'ERROR_MESSAGE' && ErrorIcon) ||
               (props.type === 'WARN_MESSAGE' && WarnIcon) ||
               (props.type === 'SUCCESS_MESSAGE' && SuccessIcon)
            }
         />
         <Text style={styles.alertMessageText} type='label'>
            {props.children}
         </Text>
      </div>
   )

   return (
      (props.type === 'ERROR_MESSAGE' && renderMessage) ||
      (props.type === 'SUCCESS_MESSAGE' && renderMessage) ||
      (props.type === 'WARN_MESSAGE' && renderMessage)(
         props.type === 'SUCCESS_MESSAGE_MODAL' && renderModal
      )
   )
}

export default Alert
