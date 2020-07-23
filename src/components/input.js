import React from 'react'

import { Button } from './components'

import { Colors } from '../styles/styles'

function Input(props) {
     const styles = {
          input: {
               padding: '5%',
               backgroundColor: Colors.primaryLight,
               border: 'none',
               borderRadius: '8px',
               fontFamily: 'Quicksand',
               marginTop: '16px',
               marginBottom: '16px',
               fontSize: '14px',
               outline: 'none',
               width: '90%',
          },
          inputOTP: {
               padding: '5%',
               backgroundColor: Colors.primaryLight,
               border: 'none',
               fontFamily: 'Quicksand',
               marginTop: '16px',
               marginBottom: '16px',
               fontSize: '14px',
               outline: 'none',
               width: '90%',
               minWidth: '120px',
               borderRadius: '8px 0px 0px 8px',
          },
          otpInputContainer: {
               display: 'flex',
          },
     }
     const renderInput = (
          <input
               style={styles.input}
               type={props.inputType}
               placeholder={props.placeholder}
               value={props.value}
               onChange={props.onChange}
               maxLength={props.maxLength}
               max={props.max}
               min={props.min}
               pattern={props.pattern}
               required={props.required}
          />
     )
     const renderInlineButtonInput = (
          <div style={styles.otpInputContainer}>
               <input
                    style={styles.inputOTP}
                    type={props.inputType}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                    maxLength={props.maxLength}
                    max={props.max}
                    min={props.min}
                    pattern={props.pattern}
                    required={props.required}
               />
               <Button
                    style={{
                         minWidth: '120px',
                         borderRadius: '0px 8px 8px 0px',
                    }}
                    name={props.buttonName}
               />
          </div>
     )

     return (
          <div>
               {props.type === 'text' && renderInput}
               {props.type === 'number' && renderInput}
               {props.type === 'inline-button' &&
                    renderInlineButtonInput}
               {props.type === 'password' && renderInput}
          </div>
     )
}

export default Input
