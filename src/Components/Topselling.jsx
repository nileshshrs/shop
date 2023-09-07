import React from 'react'
import { Container } from 'react-bootstrap'
import Tabview from './Tabview'

const Topselling = () => {
  return (
    <Container>
        <h1 className='text-center h1' style={{fontWeight:"bold"}}>TOP SELLING OFFERS</h1>
        <Tabview/>
    </Container>
  )
}

export default Topselling