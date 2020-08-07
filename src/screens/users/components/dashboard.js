import React from 'react'
import Abstracts from '../../abstracts/abstracts'
import { Route, Switch } from 'react-router-dom'

function Dashboard(props) {
   const styles = {
      dashboard: {
         display: 'flex',
         maxWidth: '88vw',
         marginLeft: '14.4vw',
         flexDirection: 'column',
         overflowY: 'scroll',
         maxHeight: '88vh',
         alignItems: 'center',
      },
   }

   return (
      <div style={styles.dashboard}>
         <Switch>
            <Route path='/' component={Abstracts} />
         </Switch>
      </div>
   )
}

export default Dashboard
