import React, { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { CartContext } from "../../context/CartContext/CartContext";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);
  console.log(cart);

  return (
    <div className="container my-5">
      <h2>Carrito</h2>
      <hr />
      <Table responsive style={{textAlign:"center"}}>
        <thead>
          <tr>
            <th>id</th>
            <th>Titulo</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((item) => (
            <tr key="{item.id}">
              <td>{item.id}</td>
              <td>
                {item.title}
                <div>
                  <img src={item.imagen} width="50%" alt="imagen del producto"></img>
                </div>
              </td>
              <td>{item.cantidad}</td>
              <td>${item.price}</td>
              <div className="cartButtons">
                {/* <Link to= {}>
                  <BsTrash />
                </Link> */}
                {/* Habilitar icono que ejecute el borrado del item */}
              </div>
            </tr>
          ))}
        </tbody>
      </Table>
      {cart.length > 0 ? (
        <Button variant="warning" onClick={() => console.log("Danger")}>
          Vaciar Carrito
        </Button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
