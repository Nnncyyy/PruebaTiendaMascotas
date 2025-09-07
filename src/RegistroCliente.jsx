import React, { useId, useState } from 'react';
import './RegistroCliente.css'
import NavBar from './NavBar';
import { Link } from "react-router-dom";

function RegistroCliente() {

  const Id= useId();
  const [formData, setFormData] = useState({
    nombre: '',
    apellidoP: '',
    apellidoM: '',
    email: '',
    password: '',
    confirmPassword: '',
    telefono: '',
    calle: '',
    numeroIn: '',
    numeroEx: '',
    colonia: '',
    estado: '',
    codigoPostal: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene la recarga de la página
    console.log('Datos enviados:', formData);
    // Aquí podrías enviar los datos a una API o realizar otra acción
  };

  return (
  <>
    <button className="navbar-btn">Regresar</button>
   <NavBar /> 

    <form onSubmit={handleSubmit}>
      <p id={Id}>Registro de Cliente</p>
      <div >
        <label htmlFor="nombre">Nombre:</label>
        <input required type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange}/>
      </div>
      <div >
        <label htmlFor="apellidoP">Primer Apellido:</label>
        <input required type="text" id="apellidoP" name="apellidoP" value={formData.apellidoP} onChange={handleChange}/>
      </div>
      <div >
        <label htmlFor="apellidoM">Segundo Apellido:</label>
        <input required type="text" id="apellidoM" name="apellidoM" value={formData.apellidoM} onChange={handleChange}/>
      </div>
      <div >
        <label htmlFor="email">Correo electrónico:</label>
        <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
      </div>

      <div>
        <label htmlFor="password">Contraseña:</label>
        <input required type="password" id="password" name="password" value={formData.password} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirmar contraseña:</label>
        <input required type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="telefono">telefono:</label>
        <input required type="number" id="telefono" name="telefono" value={formData.telefonoge} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="calle">Calle:</label>
        <input required type="text" id="calle" name="calle" value={formData.callenge} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="numeroIn">Número interior:</label>
        <input required type="text" id="numeroIn" name="numeroIn" value={formData.numeroIn} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="numeroEx">Número exterior:</label>
        <input required type="text" id="numeroEx" name="numeroEx" value={formData.numeroEx} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="colonia">Colonia:</label>
        <input required type="text" id="colonia" name="colonia" value={formData.colonia} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="estado">Estado:</label>
        <input required type="text" id="estado" name="estado" value={formData.estado} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="codigoPostal">Código Postal:</label>
        <input required type="text" id="codigoPostal" name="codigoPostal" value={formData.codigoPostal} onChange={handleChange}/>
      </div>

      <button type="submit">Enviar</button>
      <div>
        <Link to="/inicio-sesion">¿Ya tienes una cuenta? Inicia sesión!</Link>
      </div>
    </form>

  </> 
  )
}


export default RegistroCliente