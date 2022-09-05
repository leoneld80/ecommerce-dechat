import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import ItemList from '../ItemList/ItemList'
import AlertMsg from "../AlertMsg/AlertMsg";
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom';

function ItemListContainer(props) {
  const {id} = useParams()
  console.log(id) 

  return (
    <div>
      <AlertMsg/>
        <Container  className='mt-5'>
        <ItemList/>
        </Container>
    </div>
  )
}

export default ItemListContainer