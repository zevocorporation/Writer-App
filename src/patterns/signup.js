import React from 'react';
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
          padding: '32px',
          borderRadius: '8px',
          boxShadow: '1px 1px 60px rgba(0, 0, 0, 0.16)',
          ...props.style,
        }
    }

    const rendersignupform=(
        <form style={styles.form}>

                <Title color={Colors.secondary}>Signup</Title>
                <Input type='number' placeholder='mobile' value={props.value}/>
                {/* <Button name="send OTP" /> */}
                <Input placeholder='verification code' type='text' value={props.Input} />
                <Input placeholder='Password ' type='text' value={props.Input} />
                <Input placeholder='Confirm password' type='text' value={props.Input} />
                <Button name='Signup' />
                <Text style={{ textAlign: 'center' }} type='link'>
        Already have an account? Sign In
      </Text>
            
        </form>
    )
    return rendersignupform
}
export default Form;