import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'

import { useMutation } from '@apollo/react-hooks'

import gql from 'graphql-tag'

import { Client } from '../../utils'
import { UserContext } from '../../store/contexts'

import { Login, Signup } from '../../patterns/forms/index'

function Authentication(props) {
   const { dispatch } = useContext(UserContext)
   const { watch, register } = useForm()

   const SEND_CODE_SIGNUP = gql`
      mutation sendCode($mobile: String!) {
         sendCode(sendCodeInput: { mobile: $mobile, type: SIGN_UP })
      }
   `

   const SEND_CODE_RESET = gql`
      mutation sendCode($mobile: String!) {
         sendCode(sendCodeInput: { mobile: $mobile, type: RESET_PASSWORD })
      }
   `

   const VERIFY_CODE = gql`
      mutation verifyCode($code: String!, $mobile: String!) {
         verifyCode(verifyCodeInput: { code: $code, mobile: $mobile })
      }
   `

   const SIGN_UP = gql`
      mutation signUp($mobile: String!, $password: String!, $code: String!) {
         signUp(
            signUpInput: { mobile: $mobile, password: $password, code: $code }
         ) {
            _id
            mobile
            password
         }
      }
   `

   const LOG_IN = gql`
      mutation login($mobile: String!, $password: String!) {
         login(loginInput: { mobile: $mobile, password: $password }) {
            _id
            token
            tokenExpiration
         }
      }
   `

   const [login, { loading: logging, error: loginError }] = useMutation(
      LOG_IN,
      {
         onCompleted({ login }) {
            localStorage.setItem('token', JSON.stringify(login))
            Client.writeData({ data: { isLoggedIn: true } })
            dispatch({
               type: 'LOG_IN',
               payload: login,
            })
         },
         errorPolicy: 'all',
      }
   )

   const [
      sendCodeSignup,
      { loading: signupCodeSending, error: signupSendCodeError },
   ] = useMutation(SEND_CODE_SIGNUP, {
      errorPolicy: 'all',
   })

   const [
      sendCodeReset,
      { loading: resetCodeSending, error: resetSendCodeError },
   ] = useMutation(SEND_CODE_RESET, {
      errorPolicy: 'all',
   })

   const [verify, { loading: verifying, error: verifyError }] = useMutation(
      VERIFY_CODE,
      {
         errorPolicy: 'all',
      }
   )

   const [signup, { loading: signing, error: signupError }] = useMutation(
      SIGN_UP,
      {
         errorPolicy: 'all',
      }
   )

   const renderSignupForm = (
      <Signup
         register={register}
         watch={watch}
         resetCodeSending={resetCodeSending}
         sendCodeReset={sendCodeReset}
         signupCodeSending={signupCodeSending}
         error={signupSendCodeError || resetSendCodeError}
         sendCodeSignup={sendCodeSignup}
         verifying={verifying}
         verifyError={verifyError}
         verify={verify}
         signing={signing}
         signupError={signupError}
         signup={signup}
         logging={logging}
         loginError={loginError}
         login={login}
         type={props.type === 'SIGN_UP' ? 'SIGN_UP' : 'RESET'}
      />
   )

   const renderLoginForm = (
      <Login
         register={register}
         watch={watch}
         logging={logging}
         loginError={loginError}
         login={login}
      />
   )

   return (
      ((props.type === 'SIGN_UP' || props.type === 'RESET') &&
         renderSignupForm) ||
      (props.type === 'LOG_IN' && renderLoginForm)
   )
}

export default Authentication
