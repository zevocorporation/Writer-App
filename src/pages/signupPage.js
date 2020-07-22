import React from 'react'

import Hero from '../components/hero'
import Statistics from '../components/statistics'
import Form from '../patterns/form'

function SignupPage(props) {
  return (
    <div>
      <Hero type='signup' />
      <Statistics />
    </div>
  )
}

export default SignupPage
