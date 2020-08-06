import React from 'react'

import { Button } from '.'

import { Colors } from '../styles/base'
import { SuccessIcon, WarnIcon, ErrorIcon } from '../assets/assets'

function Input(props) {
   const styles = {
      container: {
         backgroundColor: Colors.primaryLight,
         display: 'flex',
         justifyContent: 'space-around',
         height: '46px',
         alignItems: 'center',
         borderRadius: '8px',
         maxWidth: '100%',
         margin: '16px 0px',
         ...props.style,
      },
      input: {
         backgroundColor: Colors.primaryLight,
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
   const renderTextArea = (
      <div style={styles.container}>
         <textarea
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
         >
            {props.children}
         </textarea>
         {props.icon && renderIcon}
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
