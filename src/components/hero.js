import React from 'react'

import Form from '../patterns/form'
import Colors from '../styles/colors'

import Title from './title'
import Text from './text'
import Button from './button'

function Hero(props) {
  const styles = {
    hero: {
      display: 'flex',
      backgroundColor: Colors.primary,
      flexDirection: 'row',
      width: '100%',
    },
    container: {
      left: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: '16px',
        justifyContent: 'center',
        maxWidth: '40%',
        minHeight: '55vh',
      },
      right: {
        display: 'flex',
        width: '100%',
        padding: '16px',
        justifyContent: 'center',
      },
    },
  }
  return (
    <div style={styles.hero}>
      <div style={styles.container.left}>
        <Text color={Colors.accent.secondary}>your virtual</Text>
        <Title type='titleLarge' color={Colors.accent.secondary}>
          research assistant
        </Title>
        <Text type='textLight' color={Colors.accent.secondary}>
          Writer assists you through every stage of your
          <br />
          research writing process
        </Text>
        <Button
          style={{ width: '120px', marginTop: '60px' }}
          color={Colors.tertiary}
          name='Signup Now'
        />
      </div>
      <div style={styles.container.right}>
        <Form
          style={{ position: 'absolute', marginTop: '80px' }}
          type='login'
        />
      </div>
    </div>
  )
}

export default Hero
