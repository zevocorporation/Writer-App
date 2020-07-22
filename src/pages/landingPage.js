import React from 'react'

import Hero from '../components/hero'
import Statistics from '../components/statistics'

function LandingPage(props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%' }}>
      <Hero type="login"/>
      <Statistics />
    </div>
  )
}

export default LandingPage
