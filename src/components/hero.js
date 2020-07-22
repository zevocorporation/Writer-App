import React, { useContext } from 'react'

import Form from '../patterns/form'
import Colors from '../styles/colors'

import Title from './title'
import Text from './text'
import Button from './button'

import { DeviceContext } from '../App'

function Hero(props) {
  const device = useContext(DeviceContext)
  const styles = {
    hero: {
      display: 'flex',
      backgroundColor: Colors.primary,
      flexDirection:
        (device === 'mobile' && 'column') || (device === 'desktop' && 'row'),
      maxWidth: '100%',
    },

    container: {
      left: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        padding: '2% 5%',
        justifyContent: 'center',
        minHeight: '55vh',
      },
      right: {
        display: 'flex',
        width: '90%',
        padding: '2% 5%',
        justifyContent: 'center',
      },
      backgroundColor: 'green',
      width: '100%',
      maxWidth: '100%',
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
          Writer assists you through every stage of your research writing
          process
        </Text>
        <Button
          style={{
            marginTop: '30px',
            width: device === 'mobile' ? '100%' : '280px',
          }}
          color={Colors.tertiary}
          name='Signup Now'
        />
      </div>
      <div style={styles.container.right}>
        <Form
          style={{
            position: device === ('desktop' || 'tablet') && 'absolute',
            marginTop: device === ('desktop' || 'tablet') ? '60px' : '-30px',
          }}
          type='login'
        />
      </div>
    </div>
  )
}

export default Hero
