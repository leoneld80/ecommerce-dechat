import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import BannerHome from '../BannerHome/BannerHome'
import ItemList from '../ItemList/ItemList'
import AlertMsg from "../AlertMsg/AlertMsg";
import "./ItemListContainer.css"

function ItemListContainer(props) {
  return (
    <div>
      <BannerHome/>
      <AlertMsg/>
        <Container  className='mt-5'>
        <ItemList/>
        </Container>
    </div>
  )
}

export default ItemListContainer