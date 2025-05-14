import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import { useContext, useState } from 'react';
import { UserContext } from './context/userContext.jsx';
import AddSupplier from './pages/AddSupplier.jsx'; 
import EditSupplier from './pages/EditSupplier.jsx';
import DeleteSupplier from './pages/DeleteSupplier.jsx';  
import ListSupplier from './pages/ListSupplier.jsx';
import './styles/styles.css';

function App() {
  const { user, logout } = useContext(UserContext);
  const [selectedSupplier, setSelectedSupplier] = useState(null); // Para guardar el proveedor seleccionado
  const navigate = useNavigate();

  const handleSelectSupplier = (supplier) => {
    setSelectedSupplier(supplier);
    navigate('/modificar'); // Redirigir a la página de modificación o eliminación
  };

  return (
    <div className="container">
      <h1>Gestión de Proveedores Mineros</h1>

      <nav className="main-menu">
        {/* Submenú de Autenticación */}
        <div className="submenu">
          <h3>Autenticación</h3>
          <ul>
            <li><Link to="/register">Registrarse</Link></li>
            <li><Link to="/login">Iniciar sesión</Link></li>
            <li><Link to="/profile">Perfil</Link></li>
            {user && (
              <li>
                <button onClick={logout} className="menu-link-button">Cerrar sesión</button>
              </li>
            )}
          </ul>
        </div>

        {/* Submenú de Gestión solo si está logueado */}
        {user && (
          <div className="submenu">
            <h3>Gestión</h3>
            <ul>
              <li><Link to="/ingresar">Ingresar</Link></li>
              <li><Link to="/listar">Listar</Link></li>
            </ul>
          </div>
        )}
      </nav>

      <Routes>
        {/* Rutas públicas */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Rutas privadas */}
        <Route path="/profile" element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        } />
        <Route path="/ingresar" element={
          <PrivateRoute>
            <AddSupplier />  {/* Aquí estamos usando el formulario que creamos antes */}
          </PrivateRoute>
        } />
        <Route path="/listar" element={
          <PrivateRoute>
            <div className="submenu">
              <ListSupplier onSelectSupplier={handleSelectSupplier} />
            </div>
          </PrivateRoute>
        } />
        <Route path="/modificar/:supplierId" element={
          <PrivateRoute>
            <EditSupplier />
          </PrivateRoute>
        } />
        <Route path="/eliminar/:supplierId" element={
          <PrivateRoute>
            <DeleteSupplier />
          </PrivateRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;
