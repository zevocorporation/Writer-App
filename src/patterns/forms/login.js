import React, { useState } from 'react'

import { Colors } from '../../styles/base'
import Styles from '../../styles/styles'
import { Validator } from '../../utils'

import { Input, Link, Text, Title, Button, Alert } from '../../components/index'

export default function Login(props) {
   const [warning, setWarning] = useState()

   async function login(e, mobile, password) {
      e.preventDefault()
      const validateMobile = await Validator.mobile(props.watch('mobile'))
      const validatePassword = await Validator.password(props.watch('password'))

      if (validatePassword.message) {
         setWarning({ password: validatePassword.message })
      }
      if (validateMobile.message) {
         setWarning({ mobile: validateMobile.message })
      }
      if (validateMobile?.isValid && validatePassword?.isValid) {
         props.login({ variables: { mobile: mobile, password: password } })
      }
   }

   const renderFooter = (
      <div style={Styles.form.footer}>
         <div style={Styles.form.link}>
            <Text
               style={{
                  textAlign: 'center',
                  fontSize: '14px',
               }}
            >
               Forgot password?
            </Text>
            <Link to='/reset-password' type='link'>
               Reset now
            </Link>
         </div>
         <div style={Styles.form.link}>
            <Text
               style={{
                  textAlign: 'center',
                  fontSize: '14px',
               }}
            >
               Don't have an account?
            </Text>

            <Link to='/signup' type='link'>
               Create one
            </Link>
         </div>
      </div>
   )

   const renderLogin = (
      <form style={Styles.form}>
         <div style={Styles.form.header}>
            <Title color={Colors.secondary}>Login</Title>
         </div>
         <div style={Styles.form.control}>
            <Input
               name='mobile'
               type='number'
               placeholder='mobile'
               inputType='tel'
               minLength='10'
               maxLength='10'
               required={true}
               register={props.register}
               inputStyle={{ backgroundColor: Colors.primaryLight }}
               onChange={() => setWarning(null)}
               icon={props.watch('mobile')?.trim().length === 10 && 'SUCCESS'}
            />
            {warning?.mobile && (
               <Alert type='WARN_MESSAGE'>{warning.mobile}</Alert>
            )}
            <Input
               name='password'
               inputType='password'
               type='password'
               placeholder='password'
               minLength='8'
               maxLength='20'
               required={true}
               inputStyle={{ backgroundColor: Colors.primaryLight }}
               register={props.register}
               onChange={() => setWarning(null)}
               icon={
                  props.watch('password')?.trim().length >= 8 &&
                  props.watch('password')?.trim().length <= 20 &&
                  'SUCCESS'
               }
            />
            {warning?.password && (
               <Alert type='WARN_MESSAGE'>{warning.password}</Alert>
            )}
            {props.error && (
               <Alert type='ERROR_MESSAGE'>{props.error.message}</Alert>
            )}
            <Button
               name='Login'
               type='submit'
               onClick={(e) =>
                  login(e, props.watch('mobile'), props.watch('password'))
               }
               loading={props.loading}
            />
         </div>

         {renderFooter}
      </form>
   )
   return renderLogin
}
