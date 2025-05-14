import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API } from '../api/apiInstance';

const DeleteSupplier = () => {
  const { supplierId } = useParams(); // Obtenemos el ID del proveedor de la URL
  const [supplier, setSupplier] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSupplier = async () => {
      try {
        const response = await API.get(`/data/${supplierId}`);
        setSupplier(response.data);
      } catch (error) {
        console.error('Error fetching supplier:', error);
        alert('No se pudo cargar el proveedor');
      }
    };

    fetchSupplier();
  }, [supplierId]);

  const handleDelete = async () => {
    try {
      await API.delete(`/data/${supplierId}`);
      alert('Proveedor eliminado exitosamente');
      navigate('/listar'); // Redirigimos al listado después de eliminar
    } catch (error) {
      console.error('Error deleting supplier:', error);
      alert('Hubo un error al eliminar el proveedor');
    }
  };

  if (!supplier) {
    return <div>Cargando proveedor...</div>;
  }

  return (
    <div>
      <h2>Eliminar Proveedor</h2>
      <p>¿Estás seguro de que quieres eliminar el proveedor {supplier.name}?</p>
      <button className="button is-danger" onClick={handleDelete}>Eliminar</button>
      <button className="button is-light" onClick={() => navigate('/listar')}>Cancelar</button>
    </div>
  );
};

export default DeleteSupplier;
