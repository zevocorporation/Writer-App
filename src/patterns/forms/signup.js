import React, { useState } from 'react'

import { Colors } from '../../styles/base'
import Styles from '../../styles/styles'
import { Validator } from '../../utils'

import { Input, Title, Button, Alert, Link, Text } from '../../components/index'

function Signup(props) {
   const [isSent, setIsSent] = useState(false)
   const [isVerified, setIsVerified] = useState(false)
   const [code, setCode] = useState()
   const [mobile, setMobile] = useState()
   const [warning, setWarning] = useState()

   async function sendCode(mobile) {
      const validateMobile = await Validator.mobile(mobile)

      if (validateMobile.message) {
         setWarning({ mobile: validateMobile.message })
      }
      if (validateMobile?.isValid) {
         if (props.type === 'SIGN_UP') {
            const res = await props.sendSignupCode({
               variables: { mobile: mobile },
            })
            if (res.data?.sendCode) {
               setMobile(mobile)
               setIsSent(true)
            }
         }
         if (props.type === 'RESET') {
            const res = await props.sendResetCode({
               variables: { mobile: mobile },
            })
            if (res.data?.sendCode) {
               setMobile(mobile)
               setIsSent(true)
            }
         }
      }
   }

   async function verify(code, mobile) {
      const validateCode = await Validator.verificationCode(code)

      if (validateCode.message) {
         setWarning({ code: validateCode.message })
      }
      if (validateCode?.isValid) {
         const res = await props.verify({
            variables: { code: code, mobile: mobile },
         })
         if (res.data?.verifyCode) {
            setCode(code)
            setMobile(mobile)
            setIsVerified(!isVerified)
         }
      }
   }

   async function signup(e, mobile, code, password, confirmPassword) {
      e.preventDefault()

      const validatePassword = await Validator.password(props.watch(password))
      const validateConfirmPassword = await Validator.confirmPassword(
         password,
         confirmPassword
      )
      if (validateConfirmPassword.message) {
         setWarning({ confirmPassword: validateConfirmPassword.message })
      }
      if (validatePassword.message) {
         setWarning({ password: validatePassword.message })
      }
      if (validatePassword?.isValid && validateConfirmPassword?.isValid) {
         if (props.type === 'SIGN_UP') {
            const res = await props.signup({
               variables: { mobile: mobile, password: password, code: code },
            })
            if (res.data?.signUp) {
               props.login({
                  variables: { mobile: mobile, password: password },
               })
            }
         }
         if (props.type === 'RESET') {
            const res = await props.reset({
               variables: { mobile: mobile, newPassword: password, code: code },
            })
            if (res.data?.resetPassword) {
               props.login({
                  variables: { mobile: mobile, password: password },
               })
            }
         }
      }
   }
   const renderSignupFooter = (
      <div style={Styles.form.link}>
         <Text
            style={{
               textAlign: 'center',
               fontSize: '14px',
            }}
         >
            Already have an account?
         </Text>
         <Link to='/' type='link'>
            Login
         </Link>
      </div>
   )
   const renderResetFooter = (
      <div style={Styles.form.link}>
         <Text
            style={{
               textAlign: 'center',
               fontSize: '14px',
            }}
         >
            Remember the password?
         </Text>
         <Link to='/' type='link'>
            Login
         </Link>
      </div>
   )
   const renderFooter = (
      <div style={Styles.form.footer}>
         {props.type === 'SIGN_UP' && renderSignupFooter}
         {props.type === 'RESET' && renderResetFooter}
      </div>
   )

   const renderSendCode = (
      <div style={Styles.form}>
         <div style={Styles.form.header}>
            <Title color={Colors.secondary}>
               {props.type === 'SIGN_UP' && 'Signup'}
               {props.type === 'RESET' && 'Reset password'}
            </Title>
         </div>
         <div style={Styles.form.control}>
            <Input
               name='mobile'
               register={props.register}
               type='inline-button'
               inputType='tel'
               inputStyle={{ backgroundColor: Colors.primaryLight }}
               placeholder='mobile'
               buttonName={isSent ? 'Resend' : 'send'}
               maxLength='10'
               loading={props.loading}
               onChange={() => setWarning(null)}
               icon={props.watch('mobile')?.trim().length === 10 && 'SUCCESS'}
               btnOnClick={() => sendCode(props.watch('mobile'))}
            />
            {warning?.mobile && (
               <Alert type='WARN_MESSAGE'>{warning.mobile}</Alert>
            )}
            {props.error && (
               <Alert type='ERROR_MESSAGE'>{props.error?.message}</Alert>
            )}
         </div>
         {renderFooter}
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
               inputStyle={{ backgroundColor: Colors.primaryLight }}
               minLength='6'
               maxLength='6'
               onChange={() => setWarning(null)}
               icon={props.watch('code')?.trim().length === 4 && 'SUCCESS'}
            />
            {warning?.code && <Alert type='WARN_MESSAGE'>{warning.code}</Alert>}
            {props.error && (
               <Alert type='ERROR_MESSAGE'>{props.error?.message}</Alert>
            )}
            <Button
               name='Verify'
               loading={props.loading}
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
               inputStyle={{ backgroundColor: Colors.primaryLight }}
               minLength='6'
               maxLength='6'
               defaultValue={code}
            />
            <Input
               name='password'
               register={props.register}
               placeholder={
                  props.type === 'SIGN_UP' ? 'password ' : 'new password'
               }
               inputType='password'
               type='text'
               inputStyle={{ backgroundColor: Colors.primaryLight }}
               minLength='8'
               maxLength='20'
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
            <Input
               name='confirmPassword'
               register={props.register}
               placeholder='confirm password'
               inputType='password'
               type='text'
               minLength='8'
               maxLength='20'
               inputStyle={{ backgroundColor: Colors.primaryLight }}
               onChange={() => setWarning(null)}
               icon={
                  props.watch('password')?.trim().length >= 8 &&
                  props.watch('password')?.trim().length <= 20 &&
                  props.watch('confirmPassword') === props.watch('password') &&
                  'SUCCESS'
               }
            />
            {warning?.confirmPassword && (
               <Alert type='WARN_MESSAGE'>{warning.confirmPassword}</Alert>
            )}
            {props.error && (
               <Alert type='ERROR_MESSAGE'>{props.error?.message}</Alert>
            )}
            <Button
               name='Signup'
               loading={props.loading}
               onClick={(e) =>
                  signup(
                     e,
                     mobile,
                     code,
                     props.watch('password'),
                     props.watch('confirmPassword')
                  )
               }
            />
         </div>
      </form>
   )

   return isVerified ? renderSignup : renderVerify
}

export default Signup