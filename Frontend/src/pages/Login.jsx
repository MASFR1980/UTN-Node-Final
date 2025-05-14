import { API } from "../api/apiInstance"
import { useNavigate } from "react-router-dom"
import { useContext, useState} from "react"
import { UserContext } from "../context/userContext"


const Login = () => {
    const [data, setData] = useState({username: "", password: ""})
    const [message, setMessage] = useState(null)
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await API.post("/auth/login", data);
            console.log(res.data)
            localStorage.setItem("token", res.data.token)
            setUser({username: data.username})
            navigate("/profile")

        } catch (err) {
            const error = err.response?.data?.error
            setMessage(Array.isArray(error) ? error.map(e => e.message).join(" | ") : error)
        }
    }
    return (




            <form onSubmit={handleSubmit} className="form">
            <h2>Iniciar sesión</h2>

            <div className="form-group">
                <label htmlFor="username">Usuario</label>
                <input
                id="username"
                type="text"
                placeholder="Ingresá tu usuario"
                value={data.username}
                onChange={(e) => setData({ ...data, username: e.target.value })}
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                id="password"
                type="password"
                placeholder="Ingresá tu contraseña"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                />
            </div>

            <button type="submit">Entrar</button>

            {message && <p className="error">{message}</p>}
            </form>
    )
}
export default Login