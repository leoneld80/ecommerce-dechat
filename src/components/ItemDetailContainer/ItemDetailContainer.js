import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
// import data from "../../data/data";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import "../Loader/Loader"
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { product_id } = useParams();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const docRef = doc(db, "items", product_id );
    getDoc(docRef)
      .then((res) => {
        setProduct({id: res.id,...res.data()})
      })
      .finally(() => {
        setLoading(false)
    })
 
  }, [product_id]);

  // const productFilter = product.filter(product => product.id === Number(1) )
  return (
    <div>
      <Container>
        { loading ? <Loader/> : (
          <ItemDetail
         item={product}
          />
        )}
      </Container>
    </div>
  );
};

export default ItemDetailContainer;
