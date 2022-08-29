import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import data from "../../data/data";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import "./ItemList.css";

const ItemList = () => {
  const [products, setProducts] = useState([]);

  const getData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  };

  useEffect(() => {

    getData()
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("fin del proceso");
      });
  }, []);

  return (
    <div className="ItemList">
      <Row>
      { products.length === 0 &&  <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span></Spinner>}
     
    
        {products.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            title={product.title}
            category={product.category}
            image={product.image}
            price={product.price}
            stock={product.stock}
            rate={product.rate}
          />
        ))}
      </Row>
    </div>
  );
};

export default ItemList;