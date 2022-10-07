import React, { useState } from "react";

const Checkout = () => {

const [values, setValues] = useState({
  nombre:"",
  email:"",
  direccion:""

})  
const handleSubmit = (e) => {
  e.preventDefault()
}
const handleInputChange = (e) => {
  setValues({
    ...values,
    [e.target.name]: e.target.value
  })
}

  return (
    <div className="Container my-5">
      <h1>Checkout</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="nombre"
          type={"text"}
          className="my-3 form-control"
          placeholder="Nombre y Apellido"
        />
        <input
          name="email"
          type={"email"}
          className="my-3 form-control"
          placeholder="Correo electronico"
        />
        <input
          name="direccion"
          type={"text"}
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
