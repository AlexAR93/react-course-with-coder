import React from 'react'
import Header from './components/navbar'
import { Container } from '@mui/material'
const App = () => {
  return (
    <Container>
        <div className='body'>
          <Header />
        </div>
    </Container>
  )
}

export default App