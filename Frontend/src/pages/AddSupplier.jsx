import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  
import { API } from '../api/apiInstance';

const AddSupplier = () => {
  const [name, setName] = useState('');
  const [CUIT, setCUIT] = useState('');
  const [category, setCategory] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!name || !CUIT || !category || !address || !phone || !email) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    try {
      const response = await API.post('/data', {
        name,
        CUIT,
        category,
        address,
        phone,
        email
      });

      
      navigate('/');  
    } catch (err) {
      setError('Hubo un error al agregar el proveedor. Intente nuevamente.');
    }
  };

  return (
    <div className="container">
      <h1>Ingresar Proveedor</h1>
      <form onSubmit={handleSubmit}>
        {error && <div className="notification is-danger">{error}</div>}
        
        <div className="field">
          <label className="label">Nombre</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nombre del proveedor"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">CUIT</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={CUIT}
              onChange={(e) => setCUIT(e.target.value)}
              placeholder="CUIT del proveedor"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Categoría</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Categoría del proveedor"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Dirección</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Dirección del proveedor"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Teléfono</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Teléfono del proveedor"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Correo electrónico</label>
          <div className="control">
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo electrónico del proveedor"
            />
          </div>
        </div>

        <div className="control">
          <button className="button is-primary" type="submit">Guardar Proveedor</button>
        </div>
      </form>
    </div>
  );
};

export default AddSupplier;

