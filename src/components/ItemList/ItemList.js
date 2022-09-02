import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import data from "../../data/data";
import { Row, Spinner } from "react-bootstrap";
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
    <div className="ItemList col-lg">
      { products.length === 0 && 
      <div className="mb-4" style={{textAlign:"center", margin:"auto"}}>
      <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span></Spinner>
      </div>
      }
      
      <Row>
     
    
        {products.slice(0,5).map((product) => (
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
