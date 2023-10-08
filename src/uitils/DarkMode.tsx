import React from 'react'
import { DarkModeContext } from '../contexts/DarkModeContext'
import '../styles/header.scss'

const DarkMode = () => {
     const { darkmode, ToggleSwitch } = React.useContext(DarkModeContext)!;
  return (
     <div className='mode'>
     <div className={`switch-container ${darkmode ? 'activeSwitchContainer' : 'deactiveSwitchContainer'}`}>
          <span id='switchline'
          className={darkmode ? 'active' : ''}
          onClick={ToggleSwitch}
          ></span>
     </div>
     </div>
  )
}

export default DarkMode