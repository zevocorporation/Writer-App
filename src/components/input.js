import React from 'react'

import { Button, Text } from '.'

import { Colors } from '../styles/base'
import { SuccessIcon, WarnIcon, ErrorIcon } from '../assets/assets'

function Input(props) {
   const styles = {
      container: {
         backgroundColor: Colors.accent.secondary,
         display: 'flex',
         justifyContent: 'space-around',
         height: '46px',
         alignItems: 'center',
         borderRadius: '8px',
         maxWidth: '100%',
         margin: '16px 0px',
         ...props.style,
      },
      textAreaContainer: {
         backgroundColor: Colors.accent.secondary,
         display: 'flex',
         flexDirection: 'column',
         alignContent: 'space-between',
         borderRadius: '8px',
         maxWidth: '100%',
         margin: '16px 0px',
         ...props.style,
      },
      input: {
         backgroundColor: Colors.accent.secondary,
         color: Colors.accent.label,
         border: 'none',
         borderRadius: '8px',
         fontFamily: 'Quicksand',
         marginTop: '16px',
         marginBottom: '16px',
         fontSize: '14px',
         outline: 'none',
         width: '100%',
         padding: '0px 16px',
         height: '100%',
         ...props.inputStyle,
      },
      textAreaInput: {
         backgroundColor: Colors.accent.secondary,
         color: Colors.accent.label,
         border: 'none',
         borderRadius: '8px',
         fontFamily: 'Quicksand',
         fontSize: '14px',
         outline: 'none',
         padding: '0px 16px',
         height: '200px',
         width: '95%',
         ...props.inputStyle,
      },
   }
   const renderIcon = (
      <img
         src={
            (props.icon === 'WARN' && WarnIcon) ||
            (props.icon === 'ERROR' && ErrorIcon) ||
            (props.icon === 'SUCCESS' && SuccessIcon)
         }
         style={{
            maxHeight: '22px',
            marginRight: '16px',
         }}
         alt='icon'
      />
   )

   const renderInput = (
      <div style={styles.container}>
         <input
            name={props.name}
            ref={props.register}
            style={styles.input}
            defaultValue={props.defaultValue}
            placeholder={props.placeholder}
            type={props.inputType}
            pattern={props.pattern}
            min={props.min}
            max={props.max}
            minLength={props.minLength}
            maxLength={props.maxLength}
            onChange={props.onChange}
            value={props.value}
         />
         {props.icon && renderIcon}
      </div>
   )
   const renderInlineButtonInput = (
      <div style={styles.container}>
         <input
            name={props.name}
            defaultValue={props.defaultValue}
            ref={props.register}
            style={styles.input}
            type={props.inputType}
            placeholder={props.placeholder}
            pattern={props.pattern}
            min={props.min}
            max={props.max}
            minLength={props.minLength}
            maxLength={props.maxLength}
            onChange={props.onChange}
         />
         {props.icon && renderIcon}
         <Button
            id={props.btnId}
            style={{
               fontSize: '14px',
               minWidth: props.loading ? '140px' : '110px',
               height: '46px',
               alignItems: props.loading ? 'none' : 'center',
               borderRadius: '0px 8px 8px 0px',
            }}
            loading={props.loading}
            name={props.buttonName}
            onClick={props.btnOnClick}
         />
      </div>
   )

   function wordCount(text) {
      var totalSoFar = 0
      for (var i = 1; i < text.length; i++) {
         if (text[i] === ' ') {
            totalSoFar++
         }
      }
      return props.wordLimit - totalSoFar
   }

   const renderTextArea = (
      <div style={styles.textAreaContainer}>
         <textarea
            name={props.name}
            ref={props.register}
            style={styles.textAreaInput}
            defaultValue={props.defaultValue}
            placeholder={props.placeholder}
            type={props.inputType}
            pattern={props.pattern}
            min={props.min}
            max={props.max}
            minLength={props.minLength}
            maxLength={props.maxLength}
            onChange={props.onChange}
            value={props.value}
            disabled={props.disabled}
         >
            {props.children}
         </textarea>
         <div
            style={{
               display: 'flex',
               alignItems: 'center;',
               margin: '0px 16px',
            }}
         >
            {props.text && wordCount(props.text) > 0 && (
               <img
                  src={SuccessIcon}
                  style={{
                     maxHeight: '22px',
                     marginRight: '16px',
                  }}
                  alt='icon'
               />
            )}
            {props.text && wordCount(props.text) <= 0 && (
               <img
                  src={ErrorIcon}
                  style={{
                     maxHeight: '22px',
                     marginRight: '16px',
                  }}
                  alt='icon'
               />
            )}
            <Text type='label'>
               {props.text &&
                  wordCount(props.text) > 0 &&
                  wordCount(props.text) +
                     ' words remaining out of ' +
                     props.wordLimit +
                     ' words'}
               {props.text &&
                  wordCount(props.text) <= 0 &&
                  'words out of limit. Please reduce the words'}
            </Text>
         </div>
      </div>
   )
   return (
      <div>
         {props.type === 'text' && renderInput}
         {props.type === 'number' && renderInput}
         {props.type === 'inline-button' && renderInlineButtonInput}
         {props.type === 'password' && renderInput}
         {props.type === 'textArea' && renderTextArea}
      </div>
   )
}

export default Input
