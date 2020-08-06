import React from 'react'
import Abstracts from '../../abstracts/abstracts'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function Dashboard(props) {
   const styles = {
      dashboard: {
         display: 'flex',
         maxWidth: '88vw',
         marginLeft: '14.4vw',
         flexDirection: 'column',
         overflowY: 'scroll',
         maxHeight: '88vh',
         backgroundColor: 'pink',
         alignItems: 'center',
      },
   }
   return (
      <div style={styles.dashboard}>
         <Router>
            <Switch>
               <Route path='/' component={Abstracts} />
            </Switch>
         </Router>
      </div>
   )
}

export default Dashboard
