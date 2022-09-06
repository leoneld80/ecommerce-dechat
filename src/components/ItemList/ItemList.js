import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import data from "../../data/data";
import { Row, Spinner } from "react-bootstrap";
import "./ItemList.css";
import { useParams } from "react-router-dom";

const ItemList = (props) => {
  const [products, setProducts] = useState([]);

  const { category_id } = useParams();

  const getData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  };

  useEffect(() => {
    getData().then((res) => {
      if (!category_id) {
        setProducts(res);
      } else {
        setProducts( res.filter((prod) => prod.category_id === category_id))
      }
    })
    .catch((error) => {
      console.log(error);
    }).finally(() => {
      console.log("fin del proceso");
    });
  }, [category_id]);

  return (
    <div className="ItemList col-lg" style={{alignItems:"center"}}>
      {products.length === 0 && (
        <div className="mb-4" style={{ textAlign: "center", margin: "auto" }}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}

      <Row>
        {products.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            title={product.title}
            category_id={product.category_id}
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
