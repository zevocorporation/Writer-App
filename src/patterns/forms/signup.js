import React, { useState } from 'react'

import { Colors } from '../../styles/base'
import Styles from '../../styles/styles'
import { Input, Title, Button, Alert } from '../../components/index'

function Signup(props) {
   const [isSent, setIsSent] = useState(false)
   const [isVerified, setIsVerified] = useState(false)
   const [code, setCode] = useState()
   const [mobile, setMobile] = useState()

   async function sendCode(mobile) {
      if (props.type === 'SIGN_UP') {
         const res = await props.sendCodeSignup({
            variables: { mobile: mobile },
         })
         if (res.data?.sendCode) {
            setMobile(props.watch('mobile'))
            setIsSent(true)
         }
      }
      if (props.type === 'RESET') {
         const res = await props.sendCodeReset({
            variables: { mobile: mobile },
         })
         if (res.data?.sendCode) {
            setMobile(props.watch('mobile'))
            setIsSent(true)
         }
      }
   }

   async function verify(code, mobile) {
      const res = await props.verify({
         variables: { code: code, mobile: mobile },
      })
      console.log(res)
      if (res.data?.verifyCode) {
         setCode(props.watch('code'))
         setMobile(mobile)
         setIsVerified(!isVerified)
      }
   }

   async function signup(e, mobile, password, code) {
      e.preventDefault()
      const res = await props.signup({
         variables: { mobile: mobile, password: password, code: code },
      })
      if (res) {
         props.login({
            variables: { mobile: mobile, password: password },
         })
      }
   }

   const renderSendCode = (
      <div style={Styles.form}>
         <div style={Styles.form.header}>
            <Title color={Colors.secondary}>Signup</Title>
         </div>
         <div style={Styles.form.control}>
            <Input
               name='mobile'
               register={props.register}
               type='inline-button'
               inputType='tel'
               placeholder='mobile'
               buttonName={isSent ? 'Resend' : 'send'}
               maxLength='10'
               loading={
                  props.resetCodeSending
                     ? props.resetCodeSending
                     : props.signupCodeSending
               }
               btnOnClick={() => sendCode(props.watch('mobile'))}
            />
            {props.error && (
               <Alert type='ERROR_MESSAGE'>{props.error?.message}</Alert>
            )}
         </div>
      </div>
   )

   const renderVerify = isSent ? (
      <div style={Styles.form}>
         <div style={Styles.form.header}>
            <Title color={Colors.secondary}>Verify</Title>
         </div>
         <div style={Styles.form.control}>
            <Input
               name='code'
               register={props.register}
               inputType='text'
               placeholder='verification code'
               type='text'
               minLength='6'
               maxLength='6'
            />
            {props.verifyError && (
               <Alert type='ERROR_MESSAGE'>{props.verifyError?.message}</Alert>
            )}
            <Button
               name='Verify'
               loading={props.verifying}
               onClick={() => verify(props.watch('code'), mobile)}
            />
         </div>
      </div>
   ) : (
      renderSendCode
   )

   const renderSignup = (
      <form style={Styles.form}>
         <div style={Styles.form.header}>
            <Title color={Colors.secondary}>Finish up</Title>
         </div>
         <div style={Styles.form.control}>
            <Input
               name='inline-code'
               style={{ display: 'none' }}
               register={props.register}
               inputType='text'
               placeholder='verification code'
               type='text'
               minLength='6'
               maxLength='6'
               defaultValue={code}
            />
            <Input
               name='password'
               register={props.register}
               placeholder='password '
               inputType='password'
               type='text'
               minLength='8'
               maxLength='20'
            />
            <Input
               name='confirmPassword'
               register={props.register}
               placeholder='confirm password'
               inputType='password'
               type='text'
               minLength='8'
               maxLength='20'
            />
            {props.signupError && (
               <Alert type='ERROR_MESSAGE'>{props.signupError?.message}</Alert>
            )}
            <Button
               name='Signup'
               loading={props.signing}
               onClick={(e) => signup(e, mobile, props.watch('password'), code)}
            />
         </div>
      </form>
   )

   return isVerified ? renderSignup : renderVerify
}

export default Signup
