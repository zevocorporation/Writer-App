import React from 'react'
import Colors from '../styles/colors'

import Input from '../components/input'
import Button from '../components/button'
import Text from '../components/text'
import Title from '../components/title'

function Form(props) {
  const styles = {
    form: {
      backgroundColor: Colors.accent.secondary,
      display: 'flex',
      flexDirection: 'column',
      padding: '16px',
      borderRadius: '5px',
      boxShadow: '1px 1px 60px rgba(0, 0, 0, 0.16)',
      ...props.style,
    },
  }
  const renderLoginForm = (
    <form style={styles.form}>
      <Title color={Colors.secondary}>Login</Title>
      <Input type='number' placeholder='mobile' />
      <Input type='password' placeholder='password' />
      <Button name='Login' />
      <Text style={{ textAlign: 'center' }} type='link'>
        Forgot password? Reset now
      </Text>
      <Text style={{ textAlign: 'center' }} type='link'>
        Don't have an account? Create one
      </Text>
    </form>
  )

  return renderLoginForm
}

export default Form
