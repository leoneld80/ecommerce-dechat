import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import ItemList from '../ItemList/ItemList'
import AlertMsg from "../AlertMsg/AlertMsg";
import "./ItemListContainer.css"


function ItemListContainer(props) {
 

  return (
    <div>
      <AlertMsg/>
        <Container  className='mt-5' style={{marginAlign:"center"}}>
        <ItemList/>
        </Container>
    </div>
  )
}

export default ItemListContainer