import React, { useState, useEffect, createContext } from 'react'
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
      <Navbar />
      <LandingPage />
    </DeviceContext.Provider>
  )
}
export { DeviceContext }
export default App
