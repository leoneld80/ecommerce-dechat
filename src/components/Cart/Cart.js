import React, { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { CartContext } from "../../context/CartContext/CartContext";
import { BsTrash } from "react-icons/bs";

const Cart = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);
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
                  <img src={item.imagen} width="20%" alt="imagen del producto"></img>
                </div>
              </td>
              <td>{item.cantidad}</td>
              <td>${item.price}</td>
              <div className="cartButtons">
                
                  <BsTrash onClick={()=> removeItem(item.id)}/>
              </div>
            </tr>
          ))}
        </tbody>
      </Table>
      {cart.length > 0 ? (
        <Button variant="warning" onClick={() => clearCart()}>
          Vaciar Carrito
        </Button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
