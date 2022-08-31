import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import ItemList from '../ItemList/ItemList'
import "./ItemListContainer.css"

function ItemListContainer(props) {
  return (
    <div>
        <Container  className='mt-5'>
        <ItemList/>
        </Container>
    </div>
  )
}

export default ItemListContainer