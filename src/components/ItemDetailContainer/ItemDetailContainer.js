import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import data from "../../data/data";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
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
            setProduct(res);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            console.log("fin del proceso");
          });
      }, []);

      const productFilter = product.find(product => product.id === Number(1))
      console.log(productFilter);
  return (
    <div>
        
          <ItemDetail
            id={productFilter.id}
            title={productFilter.title}
            category={productFilter.category}
            image={productFilter.image}
            price={productFilter.price}
            stock={productFilter.stock}
            rate={productFilter.rate}
          />
        
    </div>
    )
}

export default ItemDetailContainer