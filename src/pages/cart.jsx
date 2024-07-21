import React from 'react'
import Helment from '../components/Helmet/Helment';
import { Container } from 'react-bootstrap';

const cart = () => {
  return (
    <Helment title='Cart'>
      <Container>
        <div>cart</div>
      </Container>
    </Helment>
  )
}

export default cart;