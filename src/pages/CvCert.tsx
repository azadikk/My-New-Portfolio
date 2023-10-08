import React from 'react'
import '../styles/cvcertificates.scss'
import { TopTitle } from '../uitils/TopTitle'
import { Link } from 'react-router-dom'
import Loading from '../uitils/Loading'
import { DarkModeContext } from '../contexts/DarkModeContext'
import '../responsivestyles/cvcertificates.scss'

const CvCert = () => {
  const { darkmode } = React.useContext(DarkModeContext)!;
  
  return (
    <div className={`cv-cert-container ${darkmode ? 'activeCvCertContainerDarkMode' : ""}`}>
      <Loading>CV & CERTIFICATES</Loading>
       <TopTitle>
          <h1>Please select 😊</h1>
       </TopTitle>
       <div className='main-content-cv-cert'>
          <Link to='/cv-certificates/cv' className='cv'>
           <span>Go to <strong>resume</strong></span>
           <img src='../resuma.jpg' />
          </Link>

          <Link to='/cv-certificates/certificates' className='cert'>
           <span>Go to <strong>certificates</strong></span>
           <img src='../jedacademy.png' />
          </Link>
       </div>
    </div>
  )
}

export default CvCert