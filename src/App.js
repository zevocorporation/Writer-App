import React, { useState, useEffect, useReducer } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Navbar, Sidebar } from './patterns/navigations'

import { Landing, Dashboard } from './screens/users/components/index'

import NavlinksData from './data/navlinks'

import { DetectDevice } from './utils'
import { UserContext, DeviceContext } from './store/contexts/index'
import { UserReducer } from './store/reducers/index'

function App() {
   const [device, setDevice] = useState(DetectDevice())
   const [state, dispatch] = useReducer(UserReducer, {})

   useEffect(() => {
      function handle() {
         setDevice(DetectDevice())
      }
      window.addEventListener('resize', handle)
      const login = JSON.parse(localStorage.getItem('token'))
      if (login?._id && login?.token) {
         dispatch({
            type: 'LOG_IN',
            payload: login,
         })
      }
   }, [])

   const renderDashboard = (
      <React.Fragment>
         <Sidebar />
         <Switch>
            <Route path='/' component={Dashboard} />
         </Switch>
      </React.Fragment>
   )
   const renderLandingPage = (
      <Switch>
         <Route exact path='/'>
            <Landing form='LOG_IN' />
         </Route>
         <Route path='/signup'>
            <Landing form='SIGN_UP' />
         </Route>
         <Route path='/reset-password'>
            <Landing form='RESET' />
         </Route>
      </Switch>
   )
   return (
      <DeviceContext.Provider value={device}>
         <UserContext.Provider
            value={{
               state: state,
               dispatch: dispatch,
            }}
         >
            <Router>
               <Navbar
                  navlinks={
                     state?.isLoggedIn === true
                        ? NavlinksData.loggedIn
                        : NavlinksData.loggedOut
                  }
               />
               {state?.isLoggedIn === true
                  ? renderDashboard
                  : renderLandingPage}
            </Router>
         </UserContext.Provider>
      </DeviceContext.Provider>
   )
}

export { DeviceContext }
export default App
