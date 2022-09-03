import React from "react";
import { useState } from "react";
import { Container, Button, Row } from "react-bootstrap";
import { BsFillCartFill } from "react-icons/bs";
import "./ItemCount.css";

function ItemCount({ stock, initial }) {
  const [stockDinamico, setStockDinamico] = useState(initial);
  // const [addToCart, setAddToCart] = useState(false);

  // useEffect(() => {
  //   // console.log(stockDinamico)
  //   stock < stockDinamico ? setAddToCart(true) : setAddToCart(false);
  // }, [stockDinamico]);

  const sumarItem = () => {
    setStockDinamico(stockDinamico + 1);
  };

  const restarItem = () => {
    setStockDinamico(stockDinamico - 1);
  };

  const onAdd = () => {
    console.log(stockDinamico);
  };
  return (
    <div>
      <Container>
        <Row className="mb-3">
      <span>

            <Button
              variant="outline-primary"
              onClick={restarItem}
              disabled={stockDinamico <= 1}
              >
              -
            </Button>
            <span style={{margin:"2em"}}>

              {stockDinamico}
            </span>
            <Button
              variant="outline-primary"
              onClick={sumarItem}
              disabled={stockDinamico === stock}
            >
              +
            </Button>
          </span>
        </Row>

        <div className="d-grid gap-2">
          <Button
            variant="success"
            size="lg"
            onClick={onAdd}
            // disabled={addToCart}
          >
            Agregar al <BsFillCartFill />
          </Button>
        </div>
      </Container>
    </div>
  );
}

ItemCount.defaultProps = {
  initial : 1
}

export default ItemCount;
