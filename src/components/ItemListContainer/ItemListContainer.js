import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemListContainer.css"

function ItemListContainer({greeting}) {
  return (
    <div>
        <Container className='mt-3'>
        <h2>{greeting}</h2>
        <ItemCount stock = {5} initial={1}></ItemCount>
        </Container>
    </div>
  )
}

export default ItemListContainer