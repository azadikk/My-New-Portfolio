import React from 'react'
import Loading from '../uitils/Loading'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../contexts/DarkModeContext'
import '../responsivestyles/cert.scss'

type certBoxType = {
     id: number,
     title: string,
     image: string,
}

const Certificates = () => {

     const certBox:certBoxType[] = [
          {
               id: 1,
               title: 'Jed Academy Practice Course Certificate',
               image: '../jedacademy.png',
          },
          {
               id: 2,
               title: 'Future Learn Academy Course Certificate',
               image: '../futurelearnacademy.png',
          },
     ]

    const { darkmode } = React.useContext(DarkModeContext)!;

  return (
    <div className={`certificates-container ${darkmode ? 'cert-dark-mode' : ""}`}>
     <Loading>Certificates</Loading>
     <Link to='/cv-certificates'><BiArrowBack id="getBack"/></Link>
      {certBox.map((certs) => (
           <div key={certs.id} className='cert-box'>
               <img src={certs.image} alt={`certsimg${certs.id}`} />
               <span>{certs.title}</span>
           </div>
      ))}
    </div>
  )
}

export default Certificates