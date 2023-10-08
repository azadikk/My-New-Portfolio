import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../src/styles/global.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ModalContextProvider } from './contexts/ModalContext'
import Projects from './pages/Projects'
import Header from './components/Header'
import Skills from './pages/Skills'
import CvCert from './pages/CvCert'
import Cv from './pages/Cv'
import Certificates from './pages/Certificates'
import { DarkmodeProvider } from './contexts/DarkModeContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
  <DarkmodeProvider>
    <ModalContextProvider>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/me' element={<App />} />
        <Route path='/projects' element={<React.Fragment><Header /><Projects /></React.Fragment>} />
        <Route path='/skills' element={<React.Fragment><Header /><Skills /></React.Fragment>} />
        <Route path='/cv-certificates' element={<React.Fragment><Header /><CvCert /></React.Fragment>} />
        <Route path='/cv-certificates/cv' element={<React.Fragment><Header /><Cv /></React.Fragment>} />
        <Route path='/cv-certificates/certificates' element={<React.Fragment><Header /><Certificates /></React.Fragment>} />
      </Routes>
    </ModalContextProvider>
  </DarkmodeProvider>
  </BrowserRouter>
)
