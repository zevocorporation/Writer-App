import React, { useState } from 'react'

import { Colors } from '../../styles/base'
import Styles from '../../styles/styles'
import { Validator } from '../../utils'

import { Input, Link, Text, Title, Button, Alert } from '../../components/index'

export default function Login(props) {
   const [warning, setWarning] = useState()
   const [error, setError] = useState()

   async function login(e, mobile, password) {
      e.preventDefault()
      setError()

      const res = await props.login({
         variables: { mobile: mobile, password: password },
      })
      if (res?.errors) setError(res.errors[0].message)
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
            />
            {warning?.password && (
               <Alert type='WARN_MESSAGE'>{warning.password}</Alert>
            )}
            {error && !warning && <Alert type='ERROR_MESSAGE'>{error}</Alert>}
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
