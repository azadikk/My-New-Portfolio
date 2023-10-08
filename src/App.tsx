import React from 'react'
import Header from './components/Header'
import Container from './components/Container'
import Loading from './uitils/Loading'

const App = () => {
  return (
    <div>
      <Loading>Azad Mirheydarzade</Loading>
     <Header />
     <Container />
    </div>
  )
}

export default App