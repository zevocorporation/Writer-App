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

function ResetPasswordForm(props) {
     const [mobile, setMobile] = useState('')
     const [
          verificationCode,
          setVerificationCode,
     ] = useState('')
     const [newPassword, setNewPassword] = useState('')
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
     const resetPasswordHandler = () => {
          dispatch({
               type: 'RESET_PASSWORD',
               payload: {
                    mobile: mobile,
                    newPassword: newPassword,
               },
          })
     }
     const renderResetPasswordForm = (
          <form style={styles.form}>
               <Title color={Colors.secondary}>
                    Reset Password
               </Title>
               <Input
                    type='inline-button'
                    inputType='tel'
                    placeholder='mobile'
                    buttonName='Send Code'
                    maxLength='10'
                    required={true}
                    value={mobile}
                    onChange={(e) =>
                         setMobile(e.target.value)
                    }
               />
               <Input
                    inputType='text'
                    placeholder='verification code'
                    type='text'
                    maxLength='6'
                    required={true}
                    value={verificationCode}
                    onChange={(e) =>
                         setVerificationCode(e.target.value)
                    }
               />
               <Input
                    placeholder='new password '
                    type='text'
                    inputType='password'
                    maxLength='20'
                    required={true}
                    value={newPassword}
                    onChange={(e) =>
                         setNewPassword(e.target.value)
                    }
               />
               <Input
                    placeholder='confirm password'
                    type='text'
                    inputType='password'
                    maxLength='20'
                    required={true}
                    value={confirmPassword}
                    onChange={(e) =>
                         setConfirmPassword(e.target.value)
                    }
               />
               <Button
                    name='Reset password'
                    onClick={() => resetPasswordHandler()}
               />
               <div style={styles.linkContainer}>
                    <Text
                         style={{
                              textAlign: 'center',
                              fontSize: '14px',
                         }}
                    >
                         Remember password?
                    </Text>
                    <Link to='/login' type='link'>
                         Login now
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
                    <Link to='/signup' type='link'>
                         Create one
                    </Link>
               </div>
          </form>
     )

     return renderResetPasswordForm
}

export default ResetPasswordForm
