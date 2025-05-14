const EditSupplier = () => {
  const { supplierId } = useParams(); // Obtenemos el ID del proveedor de la URL
  const [supplier, setSupplier] = useState(null);
  const [name, setName] = useState('');
  const [CUIT, setCUIT] = useState('');
  const [category, setCategory] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSupplier = async () => {
      try {
        const response = await API.get(`/data/${supplierId}`);
        if (response.status === 200) {
          const supplierData = response.data;
          setSupplier(supplierData);
          setName(supplierData.name);
          setCUIT(supplierData.CUIT);
          setCategory(supplierData.category);
          setAddress(supplierData.address);
          setPhone(supplierData.phone);
          setEmail(supplierData.email);
        } else {
          console.error('Error en la respuesta de la API', response.status);
          alert('No se pudo cargar el proveedor');
        }
      } catch (error) {
        console.error('Error fetching supplier:', error);
        alert('No se pudo cargar el proveedor');
      }
    };

    fetchSupplier();
  }, [supplierId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.put(`/data/${supplierId}`, {
        name,
        CUIT,
        category,
        address,
        phone,
        email,
      });
      navigate('/listar');
    } catch (error) {
      console.error('Error updating supplier:', error);
      alert('No se pudo actualizar el proveedor');
    }
  };

  if (!supplier) {
    return <div>Cargando proveedor...</div>;
  }

  return (
    <div>
      <h2>Modificar Proveedor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>CUIT:</label>
          <input type="text" value={CUIT} onChange={(e) => setCUIT(e.target.value)} />
        </div>
        <div>
          <label>Categoría:</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div>
          <label>Dirección:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div>
          <label>Teléfono:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <label>Correo electrónico:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
};

export default EditSupplier;
