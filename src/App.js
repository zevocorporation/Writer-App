import React, { useState, useEffect, createContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './patterns/navbar'
import LandingPage from './pages/landingPage'

import DetectDevice from './helpers/detectDevice'

const DeviceContext = createContext({ device: 'desktop' })

function App() {
  const [device, setDevice] = useState(DetectDevice())
  useEffect(() => {
    function handle() {
      setDevice(DetectDevice())
    }
    window.addEventListener('resize', handle)
  })

  return (
    <DeviceContext.Provider value={device}>
      <Router>
        <Navbar />
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
      </Router>
    </DeviceContext.Provider>
  )
}
export { DeviceContext }
export default App
