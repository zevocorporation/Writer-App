import React from 'react'
import Colors from '../styles/colors'
import Input from '../components/input'
import Button from '../components/button'
import Text from '../components/text'
import Title from '../components/title'
import Link from '../components/link'

function Form(props) {
  const styles = {
    form: {
      backgroundColor: Colors.accent.secondary,
      display: 'flex',
      flexDirection: 'column',
      padding: '32px',
      borderRadius: '8px',
      boxShadow: '1px 1px 60px rgba(0, 0, 0, 0.16)',
      ...props.style,
    },
    linkContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }
  const renderLoginForm = (
    <form style={styles.form}>
      <Title color={Colors.secondary}>Login</Title>
      <Input type='number' placeholder='mobile' />
      <Input inputType='password' type='password' placeholder='password' />
      <Button name='Login' />
      <div style={styles.linkContainer}>
        <Text style={{ textAlign: 'center', fontSize: '14px' }}>
          Forgot password?
        </Text>
        <Link to='/reset-password' type='link'>
          Reset now
        </Link>
      </div>
      <div style={styles.linkContainer}>
        <Text style={{ textAlign: 'center', fontSize: '14px' }}>
          Don't have an account?
        </Text>
        <Link to='signup' type='link'>
          Create one
        </Link>
      </div>
    </form>
  )

  const renderResetPasswordForm = (
    <form style={styles.form}>
      <Title color={Colors.secondary}>Reset Password</Title>
      <Input
        type='inline-button'
        inputType='number'
        placeholder='mobile'
        value={props.value}
        buttonName='Send Code'
      />
      <Input
        inputType='number'
        placeholder='verification code'
        type='text'
        value={props.Input}
      />
      <Input
        placeholder='new password '
        type='text'
        inputType='password'
        value={props.Input}
      />
      <Input
        placeholder='confirm password'
        type='text'
        inputType='password'
        value={props.Input}
      />
      <Button name='Reset password' />
      <div style={styles.linkContainer}>
        <Text style={{ textAlign: 'center', fontSize: '14px' }}>
          Remember password?
        </Text>
        <Link to='/login' type='link'>
          Login now
        </Link>
      </div>
      <div style={styles.linkContainer}>
        <Text style={{ textAlign: 'center', fontSize: '14px' }}>
          Don't have an account?
        </Text>
        <Link to='/signup' type='link'>
          Create one
        </Link>
      </div>
    </form>
  )

  const renderSignupForm = (
    <form style={styles.form}>
      <Title color={Colors.secondary}>Signup</Title>
      <Input
        type='inline-button'
        inputType='number'
        placeholder='mobile'
        value={props.value}
        buttonName='Send code'
      />
      <Input
        inputType='number'
        placeholder='verification code'
        type='text'
        value={props.Input}
      />
      <Input
        placeholder='password '
        inputType='password'
        type='text'
        value={props.Input}
      />
      <Input
        placeholder='confirm password'
        inputType='password'
        type='text'
        value={props.Input}
      />
      <Button name='Signup' />
      <div style={styles.linkContainer}>
        <Text style={{ textAlign: 'center', fontSize: '14px' }}>
          Already have an account?
        </Text>
        <Link to='/login' type='link'>
          Login
        </Link>
      </div>
    </form>
  )

  return (
    (props.type === 'login' && renderLoginForm) ||
    (props.type === 'signup' && renderSignupForm) ||
    (props.type === 'reset-password' && renderResetPasswordForm)
  )
}

export default Form
