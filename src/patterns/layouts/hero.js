import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Colors } from '../../styles/styles'
import {
     Text,
     Title,
     Button,
} from '../../components/components'
import {
     LoginForm,
     SignupForm,
     ResetPasswordForm,
} from '../../patterns/forms/forms'

import { DeviceContext } from '../../App'

function Hero(props) {
     const device = useContext(DeviceContext)
     const history = useHistory()
     const styles = {
          hero: {
               display: 'flex',
               backgroundColor: Colors.primary,
               flexDirection:
                    (device === 'mobile' && 'column') ||
                    (device === 'desktop' && 'row'),
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
          form: {
               position:
                    device === ('desktop' || 'tablet') &&
                    'absolute',
               marginTop:
                    device === ('desktop' || 'tablet')
                         ? '40px'
                         : '-30px',
          },
     }

     return (
          <div style={styles.hero}>
               <div style={styles.container.left}>
                    <Text color={Colors.accent.secondary}>
                         your virtual
                    </Text>
                    <Title
                         type='titleLarge'
                         color={Colors.accent.secondary}
                    >
                         research assistant
                    </Title>
                    <Text
                         type='textLight'
                         color={Colors.accent.secondary}
                    >
                         Writer assists you through every
                         stage of your research writing
                         process
                    </Text>
                    <Button
                         style={{
                              marginTop: '30px',
                              width:
                                   device === 'mobile'
                                        ? '100%'
                                        : '280px',
                         }}
                         color={Colors.tertiary}
                         name='Signup Now'
                         onClick={() =>
                              history.push('/signup')
                         }
                    />
               </div>
               <div style={styles.container.right}>
                    {props.formType === 'login' && (
                         <LoginForm style={styles.form} />
                    )}
                    {props.formType === 'signup' && (
                         <SignupForm style={styles.form} />
                    )}
                    {props.formType ===
                         'reset-password' && (
                         <ResetPasswordForm
                              style={styles.form}
                         />
                    )}
               </div>
          </div>
     )
}

export default Hero
