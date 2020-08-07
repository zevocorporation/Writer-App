import gql from 'graphql-tag'

const LOG_IN = gql`
   mutation login($mobile: String!, $password: String!) {
      login(loginInput: { mobile: $mobile, password: $password }) {
         _id
         token
         tokenExpiration
      }
   }
`

const SEND_SIGNUP_CODE = gql`
   mutation sendCode($mobile: String!) {
      sendCode(sendCodeInput: { mobile: $mobile, type: SIGN_UP })
   }
`
const SEND_RESET_CODE = gql`
   mutation sendCode($mobile: String!) {
      sendCode(sendCodeInput: { mobile: $mobile, type: RESET_PASSWORD })
   }
`
const VERIFY = gql`
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
      }
   }
`

const RESET = gql`
   mutation resetPassword(
      $code: String!
      $password: String!
      $mobile: String!
   ) {
      resetPassword(
         resetPasswordInput: {
            code: $code
            mobile: $mobile
            newPassword: $password
         }
      ) {
         _id
      }
   }
`
export { LOG_IN, SEND_SIGNUP_CODE, SEND_RESET_CODE, VERIFY, SIGN_UP, RESET }
