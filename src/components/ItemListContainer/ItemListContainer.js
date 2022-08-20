import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import "./ItemListContainer.css"

function ItemListContainer({greeting}) {
  return (
    <div>
        <Container>
        <h2>{greeting}</h2>
        </Container>
    </div>
  )
}

export default ItemListContainer