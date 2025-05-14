import { useContext } from "react";
import { UserContext } from "../context/userContext";
import '../styles/styles.css'; // asegurate de tenerlo importado
import { FaUserCircle } from "react-icons/fa";

function Profile() {
    const { user } = useContext(UserContext);

    return (
        <div className="form">
            <h2>Perfil</h2>

            {user ? (
                <>
                    {/* Ícono de usuario */}
                    <FaUserCircle style={{ fontSize: '4rem', color: '#007bff', marginBottom: '1rem' }} />
                    {/* O imagen de perfil (puede cambiar por usuario) */}
                    {/* <img src={`https://i.pravatar.cc/150?u=${user.username}`} alt="avatar" className="profile-avatar" /> */}

                    <p style={{ fontSize: '1.2rem' }}>
                        😜 Usuario logueado: <strong>{user.username}</strong>
                    </p>
                </>
            ) : (
                <p>No hay usuario cargado</p>
            )}
        </div>
    );
}

export default Profile;
