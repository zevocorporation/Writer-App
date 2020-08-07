import React from 'react'

import { Hero, Statistics } from '.'

function LandingPage(props) {
   const styles = {
      container: {
         display: 'flex',
         flexDirection: 'column',
         maxWidth: '100%',
      },
   }
   return (
      <div style={styles.container}>
         <Hero form={props.form} />
         <Statistics />
      </div>
   )
}

export default LandingPage
