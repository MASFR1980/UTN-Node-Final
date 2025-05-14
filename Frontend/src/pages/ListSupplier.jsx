import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../api/apiInstance';

const ListSupplier = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const response = await API.get('/data');
        console.log('Suppliers fetched:', response.data);
        setSuppliers(response.data);
      } catch (error) {
        console.error('Error fetching suppliers:', error);
        setError('Error al cargar los proveedores');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSuppliers();
  }, []);

  const handleEdit = (supplierId) => {
    if (supplierId) {
      navigate(`/modificar/${supplierId}`);
    } else {
      console.error('supplierId is undefined');
    }
  };

  const handleDelete = (supplierId) => {
    if (supplierId) {
      navigate(`/eliminar/${supplierId}`);
    } else {
      console.error('supplierId is undefined');
    }
  };

  if (isLoading) {
    return <div>Cargando proveedores...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Listado de Proveedores</h2>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>CUIT</th>
            <th>Rubro</th>
            <th>Direccion</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map(supplier => (
            <tr key={supplier.id}>
              <td>{supplier.name}</td>
              <td>{supplier.CUIT}</td>
              <td>{supplier.category}</td>
              <td>{supplier.address}</td>
              <td>{supplier.phone}</td>
              <td>{supplier.email}</td>
              <td>
                <button className="button is-info" onClick={() => handleEdit(supplier._id)}>Modificar</button>
                <button className="button is-danger" onClick={() => handleDelete(supplier._id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListSupplier;
