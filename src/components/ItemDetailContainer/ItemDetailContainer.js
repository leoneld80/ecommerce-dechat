import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import data from "../../data/data";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { product_id } = useParams();

  useEffect(() => {
    const getData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(data.find((product) => product.id === Number(product_id)));
        }, 2000);
      });
    };

    getData()
      .then((res) => {
        setProduct(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [product_id]);

  // const productFilter = product.filter(product => product.id === Number(1) )
  console.log(product);
  return (
    <div>
      <Container>
        {product.length === 0 ? (
          <div className="mb-4" style={{ textAlign: "center", margin: "auto" }}>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <ItemDetail
         item={product}
          />
        )}
      </Container>
    </div>
  );
};

export default ItemDetailContainer;
