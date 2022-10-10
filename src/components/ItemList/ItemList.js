import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
// import data from "../../data/data";
import { Row } from "react-bootstrap";
import "./ItemList.css";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import Loader from "../Loader/Loader";

const ItemList = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const { category_id } = useParams();

  // const getData = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(data);
  //     }, 2000);
  //   });
  // };

  useEffect(() => {
    setLoading(true)
    const productsRef = collection(db, "items");
    const queryCategory = category_id
      ? query(productsRef, where("category_id", "==", category_id))
      : productsRef;

    getDocs(queryCategory).then((res) => {
      const productsDB = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(productsDB)
    })
      .finally(() => {
        setLoading(false)
    })
  
  }, [category_id]);

  return (
    <div className="ItemList col-lg" style={{ alignItems: "center" }}>
   

        {loading ? <Loader/> :
      <Row style={{ justifyContent: "center" }}>
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
      }
    </div>
  );
};

export default ItemList;
