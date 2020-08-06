import React from 'react'

import { Colors } from '../../styles/base'
import Styles from '../../styles/styles'

import { Input, Link, Text, Title, Button, Alert } from '../../components/index'

export default function Login(props) {
   async function login(e, mobile, password) {
      e.preventDefault()
      props.login({ variables: { mobile: mobile, password: password } })
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

            <Link to='signup' type='link'>
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
            />
            <Input
               name='password'
               inputType='password'
               type='password'
               placeholder='password'
               minLength='8'
               maxLength='20'
               required={true}
               register={props.register}
            />
            {props.loginError && (
               <Alert type='ERROR_MESSAGE'>{props.loginError?.message}</Alert>
            )}
            <Button
               name='Login'
               type='submit'
               onClick={(e) =>
                  login(e, props.watch('mobile'), props.watch('password'))
               }
               loading={props.logging}
            />
         </div>

         {renderFooter}
      </form>
   )
   return renderLogin
}
