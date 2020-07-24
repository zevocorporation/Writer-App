import React, {
     useState,
     useEffect,
     createContext,
     useReducer,
} from 'react'
import {
     BrowserRouter as Router,
     Route,
     Switch,
} from 'react-router-dom'

import {
     Navbar,
     Sidebar,
} from './patterns/navigations/navigations'

import { LandingPage, Dashboard } from './pages/pages'

import NavlinksData from './data/navlinks'

import { DetectDevice } from './helpers/helpers'
import { UserContext } from './store/contexts/contexts'
import { UserReducer } from './store/reducers/reducers'

const DeviceContext = createContext({
     device: 'desktop',
})

function App() {
     const [device, setDevice] = useState(DetectDevice())
     const [state, dispatch] = useReducer(UserReducer, {})
     const [isLoggedIn, setIsLoggedIn] = useState(false)

     async function updateUser() {
          try {
               if (state.isLoggedIn) {
                    localStorage.setItem(
                         'User',
                         JSON.stringify({
                              id: 1,
                              isLoggedIn: state.isLoggedIn,
                         })
                    )
                    setIsLoggedIn(state.isLoggedIn)
               } else if (state.isLoggedIn === false) {
                    localStorage.setItem(
                         'User',
                         JSON.stringify({
                              id: 1,
                              isLoggedIn: state.isLoggedIn,
                         })
                    )
                    setIsLoggedIn(state.isLoggedIn)
               }
          } catch (err) {
               console.log(err)
          }
     }
     async function updateLocalUser() {
          try {
               const localUser = await JSON.parse(
                    localStorage.getItem('User')
               )
               if (localUser) {
                    setIsLoggedIn(localUser.isLoggedIn)
               } else {
                    localStorage.setItem(
                         'User',
                         JSON.stringify({
                              id: 0,
                              isLoggedIn: false,
                         })
                    )
               }
          } catch (err) {
               console.log(err)
          }
     }

     useEffect(() => {
          function handle() {
               setDevice(DetectDevice())
          }
          window.addEventListener('resize', handle)
          updateLocalUser()
          updateUser()
     })

     const renderDashboard = (
          <React.Fragment>
               <Sidebar />
               <Switch>
                    <Route
                         path='/dashboard'
                         component={Dashboard}
                    />
               </Switch>
          </React.Fragment>
     )
     const renderLandingPage = (
          <Switch>
               <Route exact path='/'>
                    <LandingPage formType='login' />
               </Route>
               <Route path='/login'>
                    <LandingPage formType='login' />
               </Route>
               <Route path='/signup'>
                    <LandingPage formType='signup' />
               </Route>
               <Route path='/reset-password'>
                    <LandingPage formType='reset-password' />
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
                                   isLoggedIn === true
                                        ? NavlinksData.loggedIn
                                        : NavlinksData.loggedOut
                              }
                         />
                         {isLoggedIn === true
                              ? renderDashboard
                              : renderLandingPage}
                    </Router>
               </UserContext.Provider>
          </DeviceContext.Provider>
     )
}

export { DeviceContext }
export default App
