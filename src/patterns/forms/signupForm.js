import React, { useState, useContext } from 'react'
import { Colors } from '../../styles/styles'
import {
     Input,
     Link,
     Text,
     Title,
     Button,
} from '../../components/components'
import { UserContext } from '../../store/contexts/contexts'

function SignupForm(props) {
     const [mobile, setMobile] = useState('')
     const [
          verificationCode,
          setVerificationCode,
     ] = useState('')
     const [password, setPassword] = useState('')
     const [confirmPassword, setConfirmPassword] = useState(
          ''
     )
     const { dispatch } = useContext(UserContext)

     const styles = {
          form: {
               backgroundColor: Colors.accent.secondary,
               display: 'flex',
               flexDirection: 'column',
               padding: '32px',
               borderRadius: '8px',
               boxShadow:
                    '1px 1px 60px rgba(0, 0, 0, 0.16)',
               ...props.style,
          },
          linkContainer: {
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
          },
     }
     const signupHandler = () => {
          dispatch({
               type: 'SIGNUP',
               payload: {
                    mobile: mobile,
                    password: password,
               },
          })
     }
     const renderSignupForm = (
          <form style={styles.form}>
               <Title color={Colors.secondary}>
                    Signup
               </Title>
               <Input
                    type='inline-button'
                    inputType='numtelber'
                    placeholder='mobile'
                    value={mobile}
                    buttonName='Send code'
                    maxLength='10'
                    required={true}
                    onChange={(e) =>
                         setMobile(e.target.value)
                    }
               />
               <Input
                    inputType='text'
                    placeholder='verification code'
                    type='text'
                    value={verificationCode}
                    maxLength='6'
                    required={true}
                    onChange={(e) =>
                         setVerificationCode(e.target.value)
                    }
               />
               <Input
                    placeholder='password '
                    inputType='password'
                    type='text'
                    value={password}
                    maxLength='20'
                    required={true}
                    onChange={(e) =>
                         setPassword(e.target.value)
                    }
               />
               <Input
                    placeholder='confirm password'
                    inputType='password'
                    type='text'
                    value={confirmPassword}
                    maxLength='20'
                    required={true}
                    onChange={(e) =>
                         setConfirmPassword(e.target.value)
                    }
               />
               <Button
                    name='Signup'
                    onClick={() => signupHandler()}
               />
               <div style={styles.linkContainer}>
                    <Text
                         style={{
                              textAlign: 'center',
                              fontSize: '14px',
                         }}
                    >
                         Already have an account?
                    </Text>
                    <Link to='/login' type='link'>
                         Login
                    </Link>
               </div>
          </form>
     )

     return renderSignupForm
}

export default SignupForm
