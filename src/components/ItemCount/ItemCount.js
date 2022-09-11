import React from "react";
import { Container, Button, Row } from "react-bootstrap";
import { BsFillCartFill } from "react-icons/bs";
import "./ItemCount.css";

function ItemCount({ stock, counter, setCounter, onAdd }) {
 

  const handleSumar = () => {
    setCounter(counter + 1);
  };

  const handleRestar = () => {
    setCounter(counter - 1);
  };


  return (
    <div>
      <Container>
        <Row className="mb-3">
          <span>
            <Button
              variant="outline-primary"
              onClick={handleRestar}
              disabled={counter <= 1}
            >
              -
            </Button>
            <span style={{ margin: "0.5em" }}>{counter}</span>
            <Button
              variant="outline-primary"
              onClick={handleSumar}
              disabled={counter === stock}
            >
              +
            </Button>
          </span>
        </Row>

        <div className="d-grid gap-2 mb-2">
          <Button
            variant="success"
            size="lg"
            onClick={onAdd}
          >
            Agregar al <BsFillCartFill />
          </Button>
        </div>
      </Container>
    </div>
  );
}



export default ItemCount;
