import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'

import { Client } from '../../utils'
import { UserContext } from '../../store/contexts'

import { Login, Signup } from '../../patterns/forms/index'
import {
   LOG_IN,
   SEND_SIGNUP_CODE,
   SEND_RESET_CODE,
   VERIFY,
   SIGN_UP,
   RESET,
} from './gql/mutations'

function Authentication(props) {
   const { dispatch } = useContext(UserContext)
   const { watch, register } = useForm()
   const history = useHistory()

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
      sendSignupCode,
      { loading: sendingSignupCode, error: sendSignupCodeError },
   ] = useMutation(SEND_SIGNUP_CODE, {
      errorPolicy: 'all',
   })

   const [
      sendResetCode,
      { loading: sendingResetCode, error: sendResetCodeError },
   ] = useMutation(SEND_RESET_CODE, {
      errorPolicy: 'all',
   })

   const [verify, { loading: verifying, error: verifyError }] = useMutation(
      VERIFY,
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

   const [reset, { loading: resetting, error: resetError }] = useMutation(
      RESET,
      {
         errorPolicy: 'all',
      }
   )

   const renderSignupForm = (
      <Signup
         register={register}
         watch={watch}
         error={
            loginError ||
            signupError ||
            resetError ||
            verifyError ||
            sendSignupCodeError ||
            sendResetCodeError
         }
         loading={
            logging ||
            signing ||
            resetting ||
            verifying ||
            sendingSignupCode ||
            sendingResetCode
         }
         login={login}
         sendSignupCode={sendSignupCode}
         sendResetCode={sendResetCode}
         verify={verify}
         signup={signup}
         reset={reset}
         type={props.type === 'SIGN_UP' ? 'SIGN_UP' : 'RESET'}
      />
   )

   const renderLoginForm = (
      <Login
         register={register}
         watch={watch}
         loading={logging}
         error={loginError}
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
