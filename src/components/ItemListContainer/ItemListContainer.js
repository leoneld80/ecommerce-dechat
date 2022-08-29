import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import ItemList from '../ItemList/ItemList'
import "./ItemListContainer.css"

function ItemListContainer(props) {
  return (
    <div>
        <Container fluid className='mt-3'>
        <ItemList/>
        </Container>
    </div>
  )
}

export default ItemListContainer