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

function LoginForm(props) {
     const [mobile, setMobile] = useState('')
     const [password, setPassword] = useState('')

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
     const loginHandler = () => {
          dispatch({
               type: 'LOG_IN',
               payload: {
                    mobile: mobile,
                    password: password,
               },
          })
     }
     const renderLoginForm = (
          <div style={styles.form}>
               <Title color={Colors.secondary}>Login</Title>
               <Input
                    type='number'
                    buttonName='Send Code'
                    value={mobile}
                    onChange={(e) =>
                         setMobile(e.target.value)
                    }
                    placeholder='mobile'
                    inputType='tel'
                    maxLength='10'
                    required={true}
               />
               <Input
                    inputType='password'
                    type='password'
                    placeholder='password'
                    value={password}
                    onChange={(e) =>
                         setPassword(e.target.value)
                    }
                    maxLength='20'
                    required={true}
               />
               <Button
                    name='Login'
                    type='submit'
                    onClick={() => loginHandler()}
               />
               <div style={styles.linkContainer}>
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
               <div style={styles.linkContainer}>
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

     return renderLoginForm
}

export default LoginForm
