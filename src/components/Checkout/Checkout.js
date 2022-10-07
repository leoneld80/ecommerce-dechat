import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/CartContext";



const Checkout = () => {

const {cart, cartTotal} = useCartContext() 

const [values, setValues] = useState({
  nombre:"",
  email:"",
  direccion:""

})  
const handleSubmit = (e) => {
  e.preventDefault()
  const orden = {
   comprador: values,
   items: cart,
   total:cartTotal()
  } 
  console.log(orden);
}
const handleInputChange = (e) => {
  setValues({
    ...values,
    [e.target.name]: e.target.value
  })
}

if (cart.length === 0) {
  return <Navigate to="/"/>
}

  return (
    <div className="Container my-5">
      <h1>Checkout</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="nombre"
          onChange={handleInputChange}
          value={values.nombre}
          type={"text"}
          className="my-3 form-control"
          placeholder="Nombre y Apellido"
        />
        <input
          name="email"
          type={"email"}
          value={values.email}
          onChange={handleInputChange}
          className="my-3 form-control"
          placeholder="Correo electronico"
        />
        <input
          name="direccion"
          type={"text"}
          value={values.direccion}
          onChange={handleInputChange}
          className="my-3 form-control"
          placeholder="Dirección"
        />
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
