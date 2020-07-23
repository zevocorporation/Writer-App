import React from 'react'

import {
     Hero,
     Statistics,
} from '../patterns/layouts/layouts'

function LandingPage(props) {
     return (
          <div
               style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '100%',
               }}
          >
               <Hero formType={props.formType} />
               <Statistics />
          </div>
     )
}

export default LandingPage
